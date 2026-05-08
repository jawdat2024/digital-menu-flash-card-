import { create } from 'zustand';
import debounce from 'lodash.debounce';

export interface SyncStatus {
  state: 'idle' | 'saving' | 'saved' | 'error';
  message?: string;
}

export interface MenuItemEntity {
  id: string;
  name: string;
  sku: string;
  category: string;
  categories?: string[];
  price: number;
  isVisible: boolean;
  status: 'available' | 'sold_out' | 'out_of_stock' | 'coming_soon' | 'few_stocks_left' | 'new';
  image: string;
  publishStatus: 'draft' | 'published' | 'archived';
  [key: string]: any;
}

interface MenuState {
  // Normalized State
  entities: Record<string, MenuItemEntity>;
  ids: string[];
  
  // Meta State
  branchId: string | null;
  syncStatus: SyncStatus;
  
  // Actions
  initialize: (branchId: string, items: MenuItemEntity[]) => void;
  updateItem: (id: string, updates: Partial<MenuItemEntity>) => void;
  addItem: (item: MenuItemEntity) => void;
  deleteItem: (id: string) => void;
  
  // Real-time & Sync
  receiveBroadcast: (entities: Record<string, MenuItemEntity>, ids: string[]) => void;
  setItems: (data: any) => void;
  setSyncStatus: (status: SyncStatus) => void;
}

// Broadcast Channel for sub-10ms cross-tab real-time sync
export const syncChannel = new BroadcastChannel('cartel_global_sync');

// Debounced Auto-Save to emulate Database Persistence
const persistToStorage = debounce((branchId: string, entities: Record<string, MenuItemEntity>, ids: string[], setSyncStatus: (status: SyncStatus) => void) => {
  try {
    setSyncStatus({ state: 'saving' });
    const itemsArray = ids.map(id => entities[id]);
    localStorage.setItem(`cartel_inventory_${branchId}`, JSON.stringify(itemsArray));
    
    // Dispatch identical event for any legacy listeners
    window.dispatchEvent(new Event('menu-updated'));
    
    setSyncStatus({ state: 'saved' });
    setTimeout(() => {
      setSyncStatus({ state: 'idle' });
    }, 2000);
  } catch (error) {
    setSyncStatus({ state: 'error', message: 'Sync failed - Retry' });
  }
}, 400);

// Zustand Store
export const useMenuStore = create<MenuState>((set, get) => {
// Listener removed from here to be placed inside App.tsx per instructions

  return {
    entities: {},
    ids: [],
    branchId: null,
    syncStatus: { state: 'idle' },

    initialize: (branchId, items) => {
      const entities: Record<string, MenuItemEntity> = {};
      const ids: string[] = [];
      
      items.forEach(item => {
        entities[item.id] = item;
        if (!ids.includes(item.id)) ids.push(item.id);
      });

      set({ branchId, entities, ids, syncStatus: { state: 'idle' } });
    },

    updateItem: (id, updates) => {
      set((state) => {
        const currentItem = state.entities[id];
        if (!currentItem) return state;

        const updatedItem = { ...currentItem, ...updates };

        // Schema Validator
        if (updatedItem.price !== undefined && isNaN(updatedItem.price)) {
          console.warn("Schema Validation Failed: Price must be a valid number");
          return state; // Reject update
        }
        if (updatedItem.image && !updatedItem.image.startsWith('http')) {
           console.warn("Schema Validation Failed: Broken or invalid Image URL");
           return state; // Reject update
        }

        const newEntities = { ...state.entities, [id]: updatedItem };

        // 1. Broadcast instantly to all other clients (<10ms latency)
        syncChannel.postMessage({ type: 'SYNC_STATE', branchId: state.branchId, entities: newEntities, ids: state.ids });

        // 2. Debounce Auto-Save to "DB"
        if (state.branchId) {
          persistToStorage(state.branchId, newEntities, state.ids, get().setSyncStatus);
        }

        return { entities: newEntities };
      });
    },

    addItem: (item) => {
      set((state) => {
        const newEntities = { [item.id]: item, ...state.entities };
        const newIds = [item.id, ...state.ids];
        
        syncChannel.postMessage({ type: 'SYNC_STATE', branchId: state.branchId, entities: newEntities, ids: newIds });
        if (state.branchId) persistToStorage(state.branchId, newEntities, newIds, get().setSyncStatus);
        
        return { entities: newEntities, ids: newIds };
      });
    },

    deleteItem: (id) => {
      set((state) => {
        const { [id]: _, ...newEntities } = state.entities;
        const newIds = state.ids.filter(i => i !== id);
        
        syncChannel.postMessage({ type: 'SYNC_STATE', branchId: state.branchId, entities: newEntities, ids: newIds });
        if (state.branchId) persistToStorage(state.branchId, newEntities, newIds, get().setSyncStatus);
        
        return { entities: newEntities, ids: newIds };
      });
    },

    receiveBroadcast: (entities, ids) => set({ entities, ids }),
    setItems: (data) => set({ entities: data.entities, ids: data.ids }),
    setSyncStatus: (syncStatus) => set({ syncStatus }),
  };
});
