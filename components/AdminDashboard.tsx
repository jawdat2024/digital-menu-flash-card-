import React, { useState, useEffect } from 'react';
import { Search, ArrowLeft, MoreHorizontal, Filter, FileText, Plus, X, Save, Trash2, Ban, CheckCircle, MapPin, RefreshCw } from 'lucide-react';
import CurrencySymbol from './CurrencySymbol';
import { BRANCH_MENUS, BRANCH_DATA } from '../constants';
import AdminGate from './AdminGate';
import { useMenuStore, MenuItemEntity } from '../store/menuStore';
import { AdminProductRow } from './AdminProductRow';

// --- Types ---
interface AdminItem {
  id: string | number;
  name: string;
  sku: string;
  category: string;
  price: number;
  isVisible: boolean;
  status: 'available' | 'sold_out' | 'out_of_stock' | 'coming_soon' | 'few_stocks_left' | 'new';
  image: string;
  publishStatus: 'draft' | 'published' | 'archived';
}

interface AdminDashboardProps {
  onBack: () => void;
  initialBranchId?: string;
}

const AdminDashboard: React.FC<AdminDashboardProps> = ({ onBack, initialBranchId }) => {
  // --- Multi-Branch State ---
  const [selectedBranchId, setSelectedBranchId] = useState<string | null>(initialBranchId || null);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  // --- Store State ---
  const storeEntities = useMenuStore(state => state.entities);
  const storeIds = useMenuStore(state => state.ids);
  const initializeStore = useMenuStore(state => state.initialize);
  const addItemStore = useMenuStore(state => state.addItem);
  const syncStatus = useMenuStore(state => state.syncStatus);
  const items: MenuItemEntity[] = storeIds.map(id => storeEntities[id]);

  const [searchQuery, setSearchQuery] = useState('');
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);

  const [newItem, setNewItem] = useState<Partial<MenuItemEntity>>({
    name: '',
    category: 'Signature drink',
    price: 0,
    image: '',
    isVisible: true,
    status: 'available',
    publishStatus: 'draft'
  });

  // --- Initialization & Switching Logic ---
  const loadInventory = () => {
    if (!selectedBranchId) return;

    const storageKey = `cartel_inventory_${selectedBranchId}`;
    
    const initialItems: AdminItem[] = [];
    const menuSource = BRANCH_MENUS[selectedBranchId] || BRANCH_MENUS['khalifa'];

    const processItem = (item: any, catTitle: string) => {
      const priceNum = parseFloat(item.price.replace(/[^0-9.]/g, '')) || 0;
      initialItems.push({
        id: item.id,
        name: item.name,
        sku: `SKU-${item.id.toUpperCase()}`,
        category: catTitle,
        price: priceNum,
        isVisible: item.isVisible !== false,
        status: item.status ? item.status.toString().toLowerCase().replace(' ', '_') : (['sold_out', 'out_of_stock'].includes(item.status) ? 'sold_out' : 'available'),
        image: item.image,
        publishStatus: 'published'
      });
    };

    menuSource.forEach(cat => {
      cat.items.forEach(item => processItem(item, cat.title));
      if (cat.subCategories) {
        cat.subCategories.forEach(sub => {
          sub.items.forEach(item => processItem(item, sub.title));
        });
      }
    });

    const stored = localStorage.getItem(storageKey);
    let finalItems: MenuItemEntity[] = [];
    if (stored) {
      const parsedStored: MenuItemEntity[] = JSON.parse(stored);
      const mergedItems = initialItems.map(item => {
        const storedItem = parsedStored.find(si => si.id === item.id);
        return storedItem ? { ...item, 
          isVisible: storedItem.isVisible !== undefined ? storedItem.isVisible : (storedItem as any).active !== false,
          status: storedItem.status || ((storedItem as any).isSoldOut ? 'sold_out' : 'available'), 
          price: storedItem.price, 
          publishStatus: storedItem.publishStatus || 'published' 
        } : (item as MenuItemEntity);
      });
      const customItems = parsedStored.filter(si => !initialItems.some(ii => ii.id === si.id));
      finalItems = [...mergedItems, ...customItems] as MenuItemEntity[];
    } else {
      finalItems = initialItems as MenuItemEntity[];
      localStorage.setItem(storageKey, JSON.stringify(finalItems));
    }
    initializeStore(selectedBranchId, finalItems);
  };

  useEffect(() => {
    loadInventory();
  }, [selectedBranchId]);

  const handleAddItem = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newItem.name) return;

    const priceNum = Number(newItem.price);
    if (isNaN(priceNum) || priceNum <= 0) {
      alert("Price must be a positive number greater than 0.");
      return;
    }

    const id = `new_${Date.now()}`;
    const itemToAdd: MenuItemEntity = {
      id,
      name: newItem.name || 'Untitled',
      sku: `SKU-${Math.floor(Math.random() * 10000)}`,
      category: newItem.category || 'Uncategorized',
      price: priceNum,
      isVisible: newItem.isVisible !== false,
      status: newItem.status || 'available',
      image: newItem.image || 'https://via.placeholder.com/150',
      publishStatus: newItem.publishStatus || 'draft'
    };

    addItemStore(itemToAdd);
    setIsAddModalOpen(false);
    setNewItem({ name: '', category: selectedCategory || 'Signature drink', price: 0, image: '', isVisible: true, status: 'available', publishStatus: 'draft' });
  };

  // --- Derived State ---
  const distinctCategories = Array.from(new Set(items.flatMap(i => i.categories || [i.category])));
  
  const filteredItems = items.filter(item => {
    const matchesSearch = item.name.toLowerCase().includes(searchQuery.toLowerCase()) || item.sku.toLowerCase().includes(searchQuery.toLowerCase());
    const itemCats = item.categories || [item.category];
    const matchesCategory = selectedCategory ? itemCats.includes(selectedCategory) : true;
    return matchesSearch && matchesCategory;
  });

  // --- RENDER ---
  return (
    <AdminGate>
      <div className="bg-[#0a0a0a] min-h-screen text-white font-sans selection:bg-white selection:text-black">
        
        {/* Header (Sticky) */}
        <header className="sticky top-0 z-40 bg-[#0a0a0a]/90 backdrop-blur-md flex justify-between items-center p-6 px-8 border-b border-[#222]">
          <div className="flex items-center gap-4">
            <button 
              onClick={() => {
                if (selectedCategory) setSelectedCategory(null);
                else if (selectedBranchId) setSelectedBranchId(null);
                else onBack();
              }}
              className="p-2 hover:bg-neutral-900 rounded-full transition-colors text-neutral-400 hover:text-white"
            >
              <ArrowLeft size={20} />
            </button>
            <h1 className="text-2xl font-bold tracking-tighter">CARTEL <span className="font-light text-gray-500 hidden sm:inline">| Control Panel</span></h1>
          </div>
          <div className="flex items-center gap-3">
             {selectedBranchId && (
               <>
                 <button 
                    onClick={() => {
                        loadInventory();
                        const btn = document.getElementById('admin-sync-btn');
                        if (btn) {
                             btn.classList.add('animate-spin');
                             setTimeout(() => btn.classList.remove('animate-spin'), 500);
                        }
                    }}
                    id="admin-sync-btn"
                    className="flex items-center justify-center p-2.5 rounded-full border border-neutral-700 hover:bg-neutral-800 text-neutral-300 transition-colors"
                    title="Sync / Refresh from Source"
                 >
                    <RefreshCw size={16} />
                 </button>
                 <button 
                    disabled={true}
                    className={`flex items-center justify-center px-5 py-2.5 rounded-full text-xs font-bold uppercase tracking-widest transition-all min-w-[140px] ${
                       syncStatus.state === 'saving' ? 'bg-[#c5a059] text-black' : 
                       syncStatus.state === 'error' ? 'bg-red-500 text-white' : 
                       syncStatus.state === 'saved' ? 'bg-green-600 text-white' :
                       'bg-neutral-800 text-neutral-500 cursor-not-allowed'
                    }`}
                 >
                    {syncStatus.state === 'saving' && <span className="flex items-center gap-2 animate-pulse"><div className="w-2 h-2 rounded-full bg-black"></div> Saving</span>}
                    {syncStatus.state === 'saved' && <span className="flex items-center gap-2"><CheckCircle size={14} /> Saved</span>}
                    {syncStatus.state === 'error' && <span className="flex items-center gap-1"><X size={14} /> Failed - Retry</span>}
                    {syncStatus.state === 'idle' && 'Saved'}
                 </button>
                 <div className="w-px h-6 bg-neutral-800 mx-2"></div>
               </>
             )}
             <button onClick={onBack} className="text-xs text-red-500 hover:underline hidden sm:block">Logout</button>
          </div>
        </header>

        <div className="p-8 max-w-7xl mx-auto">
          {/* STEP 1: SELECT BRANCH */}
          {!selectedBranchId && (
            <section className="mb-10 animate-fade-in">
              <p className="text-gray-500 uppercase text-xs tracking-widest mb-4">Step 1: Select Branch</p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {BRANCH_DATA.map(branch => (
                  <button 
                    key={branch.id}
                    onClick={() => setSelectedBranchId(branch.id)}
                    className={`p-6 rounded-xl border transition-all border-[#222] bg-transparent opacity-70 hover:opacity-100 hover:border-[#c5a059]`}
                  >
                    {branch.name}
                  </button>
                ))}
              </div>
            </section>
          )}

          {/* STEP 2: SELECT CATEGORY */}
          {selectedBranchId && !selectedCategory && (
            <section className="animate-fade-in">
              <p className="text-gray-500 uppercase text-xs tracking-widest mb-4">Step 2: Select Category</p>
              <div className="flex flex-wrap gap-3">
                {distinctCategories.map(cat => (
                  <button 
                    key={cat}
                    onClick={() => setSelectedCategory(cat)}
                    className={`px-6 py-3 rounded-full border text-sm transition-all border-[#333] hover:border-[#c5a059] hover:text-[#c5a059]`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </section>
          )}

          {/* STEP 3: INVENTORY MANAGEMENT */}
          {selectedBranchId && selectedCategory && (
            <section className="animate-fade-in pb-32">
              <div className="flex flex-col md:flex-row justify-between items-center mb-8 gap-4">
                <div className="flex items-center gap-4">
                  <h2 className="text-xl font-bold text-[#c5a059]">{selectedCategory}</h2>
                  <span className="text-xs text-gray-500 px-2 py-1 bg-[#1a1a1a] rounded-md">{BRANCH_DATA.find(b => b.id === selectedBranchId)?.name}</span>
                </div>
                
                <div className="flex gap-2 w-full md:w-auto">
                  <div className="relative w-full md:w-64">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-neutral-500" size={16} />
                    <input 
                      type="text" 
                      placeholder="Search items..." 
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="w-full bg-neutral-900/50 border border-neutral-800 rounded-xl py-2 pl-10 pr-4 text-sm text-white focus:outline-none focus:border-[#c5a059] transition-colors"
                    />
                  </div>
                  <button 
                    onClick={() => setIsAddModalOpen(true)}
                    className="px-4 py-2 bg-[#c5a059] text-black font-bold uppercase tracking-wider text-xs rounded-xl hover:bg-white transition-colors flex items-center justify-center gap-2 whitespace-nowrap"
                  >
                    <Plus size={16} /> Add Item
                  </button>
                </div>
              </div>

              {/* Inventory List */}
              <div className="bg-neutral-900/30 border border-neutral-800 rounded-xl overflow-visible backdrop-blur-sm">
                <div className="overflow-x-auto">
                  <table className="w-full text-left border-collapse">
                    <thead>
                      <tr className="border-b border-neutral-800 bg-neutral-900/50 text-[10px] uppercase tracking-widest text-neutral-500">
                        <th className="p-4 font-medium">Product</th>
                        <th className="p-4 font-medium hidden sm:table-cell">Status</th>
                        <th className="p-4 font-medium">Price</th>
                        <th className="p-4 font-medium">Visibility</th>
                        <th className="p-4 font-medium text-right">Actions</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-neutral-800">
                      {filteredItems.map((item) => (
                        <AdminProductRow key={item.id} productId={item.id} />
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </section>
          )}
        </div>

        {/* --- Add Item Modal --- */}
        {isAddModalOpen && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
             <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" onClick={() => setIsAddModalOpen(false)} />
             <div className="relative bg-black border border-neutral-800 rounded-2xl w-full max-w-lg p-8 shadow-2xl animate-in zoom-in-95">
                <div className="flex justify-between items-center mb-6">
                   <h2 className="text-xl font-bold text-white uppercase tracking-wider">New Product</h2>
                   <button onClick={() => setIsAddModalOpen(false)}><X size={20} className="text-neutral-500 hover:text-white" /></button>
                </div>
                <form onSubmit={handleAddItem} className="space-y-4">
                   <div>
                      <label className="text-[10px] uppercase tracking-widest text-neutral-500 mb-2 block">Item Name</label>
                      <input 
                        required
                        className="w-full bg-neutral-900 border border-neutral-800 rounded-lg p-3 text-white text-sm focus:border-[#c5a059] outline-none"
                        value={newItem.name}
                        onChange={e => setNewItem({...newItem, name: e.target.value})}
                      />
                   </div>
                   <div className="grid grid-cols-2 gap-4">
                      <div>
                          <label className="text-[10px] uppercase tracking-widest text-neutral-500 mb-2 block">Price</label>
                          <input 
                            type="number"
                            required
                            min="0.01"
                            step="0.01"
                            className="w-full bg-neutral-900 border border-neutral-800 rounded-lg p-3 text-white text-sm focus:border-[#c5a059] outline-none"
                            value={newItem.price}
                            onChange={e => setNewItem({...newItem, price: parseFloat(e.target.value)})}
                          />
                      </div>
                      <div>
                          <label className="text-[10px] uppercase tracking-widest text-neutral-500 mb-2 block">Publish</label>
                          <select 
                            className="w-full bg-neutral-900 border border-neutral-800 rounded-lg p-3 text-white text-sm focus:border-[#c5a059] outline-none"
                            value={newItem.publishStatus}
                            onChange={e => setNewItem({...newItem, publishStatus: e.target.value as any})}
                          >
                              <option value="draft">Draft</option>
                              <option value="published">Published</option>
                          </select>
                      </div>
                      <div className="col-span-2">
                          <label className="text-[10px] uppercase tracking-widest text-neutral-500 mb-2 block">Status</label>
                          <select 
                            className="w-full bg-neutral-900 border border-neutral-800 rounded-lg p-3 text-white text-sm focus:border-[#c5a059] outline-none"
                            value={newItem.status}
                            onChange={e => setNewItem({...newItem, status: e.target.value as any})}
                          >
                              <option value="available">Available</option>
                              <option value="sold_out">Sold Out</option>
                              <option value="out_of_stock">Out of Stock</option>
                              <option value="coming_soon">Coming Soon</option>
                              <option value="few_stocks_left">Few Stocks Left</option>
                              <option value="new">New</option>
                          </select>
                      </div>
                   </div>
                   <div>
                      <label className="text-[10px] uppercase tracking-widest text-neutral-500 mb-2 block">Image URL</label>
                      <input 
                        className="w-full bg-neutral-900 border border-neutral-800 rounded-lg p-3 text-white text-sm focus:border-[#c5a059] outline-none"
                        value={newItem.image}
                        onChange={e => setNewItem({...newItem, image: e.target.value})}
                        placeholder="https://..."
                      />
                   </div>
                   <button className="w-full bg-[#c5a059] text-black font-bold uppercase tracking-[0.2em] py-4 rounded-lg hover:bg-white mt-4 transition-colors">
                      Add to Inventory
                   </button>
                </form>
             </div>
          </div>
        )}



      </div>
    </AdminGate>
  );
};

export default AdminDashboard;