import React, { useState, useMemo, useEffect, useLayoutEffect } from 'react';
import Navbar from './components/Navbar';
import FlipCard from './components/FlipCard';
import SmoothieCard from './components/SmoothieCard';
import FeedbackForm from './components/FeedbackForm';
import AdminDashboard from './components/AdminDashboard';
import BranchSelection from './components/BranchSelection';
import Footer from './components/Footer';
import { BRANCH_DATA, BRANCH_MENUS } from './constants';
import { MenuItem, Branch, MenuCategory } from './types';
import { X, CheckCircle } from 'lucide-react';
import { useMenuStore, MenuItemEntity } from './store/menuStore';

const App: React.FC = () => {
  const [isAdminMode, setIsAdminMode] = useState(false);

  // --- Real-Time Sync Listener ---
  useLayoutEffect(() => {
    const syncChannel = new BroadcastChannel('cartel_global_sync');
    syncChannel.onmessage = (event) => {
      console.log("Broadcast received:", event.data);
      if (event.data && event.data.type === 'SYNC_STATE') {
         const currentBranch = useMenuStore.getState().branchId;
         // Ensure the broadcast is for the active branch currently being viewed
         if (currentBranch && event.data.branchId === currentBranch) {
            useMenuStore.getState().setItems(event.data);
         }
      }
    };
    return () => {
      syncChannel.close();
    };
  }, []);
  const [isLegalModalOpen, setIsLegalModalOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  
  // Default to null to show Branch Selection
  const [activeBranch, setActiveBranch] = useState<Branch | null>(null);
  const storeEntities = useMenuStore(state => state.entities);
  const initializeStore = useMenuStore(state => state.initialize);
  
  // --- Global Toast State ---
  const [toastMessage, setToastMessage] = useState('');
  const [isToastVisible, setIsToastVisible] = useState(false);

  useEffect(() => {
    // Legacy support for URL param if needed
    const params = new URLSearchParams(window.location.search);
    const locationId = params.get('location');
    
    if (locationId) {
      const branch = BRANCH_DATA.find(b => b.id === locationId);
      if (branch) {
        setActiveBranch(branch);
      }
    }
  }, []);

  useEffect(() => {
    if (activeBranch) {
      window.scrollTo(0, 0);
    }
  }, [activeBranch]);

  const currentBranchMenu: MenuCategory[] = useMemo(() => {
    if (!activeBranch) return [];
    return BRANCH_MENUS[activeBranch.id] || BRANCH_MENUS['khalifa']; 
  }, [activeBranch]);

  useEffect(() => {
    if (!activeBranch) return;

    // We no longer rely on manual syncing. Initialize the Zustand store which handles local overrides 
    // and listens to the BroadcastChannel under the hood for < 10ms cross-tab sync.
    const storageKey = `cartel_inventory_${activeBranch.id}`;
    const menuSource = BRANCH_MENUS[activeBranch.id] || BRANCH_MENUS['khalifa'];
    
    const initialItemsMap = new Map<string, MenuItemEntity>();

    const addItemToMap = (item: any, catTitle: string) => {
      const existing = initialItemsMap.get(item.id);
      if (existing) {
        if (!existing.categories) existing.categories = [existing.category];
        if (!existing.categories.includes(catTitle)) existing.categories.push(catTitle);
      } else {
        initialItemsMap.set(item.id, {
          ...item,
          sku: `SKU-${item.id.toUpperCase()}`,
          category: catTitle,
          categories: [catTitle],
          price: parseFloat(item.price?.toString().replace(/[^0-9.]/g, '') || '0') || 0,
          isVisible: item.isVisible !== false,
          status: item.status ? item.status.toString().toLowerCase().replace(' ', '_') as any : (['sold_out', 'out_of_stock'].includes(item.status as any) ? 'sold_out' : 'available'),
          publishStatus: 'published'
        });
      }
    };

    menuSource.forEach(cat => {
      cat.items.forEach(item => addItemToMap(item, cat.title));
      if (cat.subCategories) {
        cat.subCategories.forEach(sub => {
          sub.items.forEach(item => addItemToMap(item, sub.title));
        });
      }
    });

    const initialItems = Array.from(initialItemsMap.values());

    const stored = localStorage.getItem(storageKey);
    let finalItems = initialItems;
    if (stored) {
      let parsedStored: MenuItemEntity[] = JSON.parse(stored);
      
      // Cleanup for branch specific removed items that might be stuck as custom items
      if (activeBranch.id === 'alqana') {
          const removedAlQanaIds = ['fil_ethiopia', 'fil_colombia_sweet_decaf', 'fil_blackberry', 'fil_colombia_gesha', 'fil_cuban_cigar', 'fil_costa_rica'];
          parsedStored = parsedStored.filter(si => !removedAlQanaIds.includes(si.id));
      }

      finalItems = initialItems.map(item => {
        const storedItem = parsedStored.find(si => si.id === item.id);
        return storedItem ? { ...item, ...storedItem } : item;
      });
      const customItems = parsedStored.filter(si => !initialItems.some(ii => ii.id === si.id));
      finalItems = [...finalItems, ...customItems];
    }
    
    initializeStore(activeBranch.id, finalItems);

    const handleMenuUpdated = () => {
       setToastMessage('All changes synced');
       setIsToastVisible(true);
       setTimeout(() => {
         setIsToastVisible(false);
         setTimeout(() => setToastMessage(''), 300);
       }, 3000);
    };

    window.addEventListener('menu-updated', handleMenuUpdated);
    return () => window.removeEventListener('menu-updated', handleMenuUpdated);
  }, [activeBranch, initializeStore]);

  const filteredCategories = useMemo(() => {
    // 1. Gather all base IDs to identify custom added items
    const baseIds = new Set<string>();
    const gatherIds = (cat: MenuCategory) => {
       cat.items.forEach(i => baseIds.add(i.id));
       cat.subCategories?.forEach(gatherIds);
    };
    currentBranchMenu.forEach(gatherIds);

    // 2. Identify custom items from the store
    const customItems = Object.values(storeEntities).filter(item => !baseIds.has(item.id) && item.isVisible !== false);

    const processCategory = (cat: MenuCategory): MenuCategory => {
      let processedItems = cat.items.map(item => {
        const entity = storeEntities[item.id];
        return {
          ...item,
          isVisible: entity && entity.isVisible !== undefined ? entity.isVisible : item.isVisible,
          status: entity && entity.status !== undefined ? entity.status : item.status,
          price: entity && entity.price !== undefined ? entity.price.toString() : item.price,
        };
      }).filter(item => item.isVisible !== false);
      
      // Inject custom items into their matching category
      const matchingCustoms = customItems.filter(ci => ci.category.toLowerCase() === cat.title.toLowerCase());
      if (matchingCustoms.length > 0) {
         processedItems = [...processedItems, ...matchingCustoms as any];
      }

      const processedSubCategories = cat.subCategories?.map(processCategory);
      
      return {
        ...cat,
        items: processedItems,
        subCategories: processedSubCategories
      };
    };

    let mergedCategories = currentBranchMenu.map(processCategory);

    // Handle custom items that don't match ANY existing category
    const unmappedCustoms = customItems.filter(ci => {
       let found = false;
       const checkCat = (cat: MenuCategory) => {
          if (cat.title.toLowerCase() === ci.category.toLowerCase()) found = true;
          cat.subCategories?.forEach(checkCat);
       };
       mergedCategories.forEach(checkCat);
       return !found;
    });

    if (unmappedCustoms.length > 0) {
       mergedCategories.push({
          id: 'new-additions',
          title: 'New Additions',
          items: unmappedCustoms as any
       });
    }

    if (!searchQuery.trim()) return mergedCategories;

    const query = searchQuery.toLowerCase();
    
    const filterCategory = (cat: MenuCategory): MenuCategory | null => {
      const filteredItems = cat.items.filter(item => 
        item.name.toLowerCase().includes(query) || 
        item.ingredients.toLowerCase().includes(query)
      );
      
      const filteredSubCategories = cat.subCategories
        ?.map(filterCategory)
        .filter((c): c is MenuCategory => c !== null) || [];
        
      if (filteredItems.length === 0 && filteredSubCategories.length === 0) {
        return null;
      }
      
      return {
        ...cat,
        items: filteredItems,
        subCategories: filteredSubCategories
      };
    };

    return mergedCategories
      .map(filterCategory)
      .filter((c): c is MenuCategory => c !== null);
  }, [searchQuery, storeEntities, currentBranchMenu]);

  const resetLocation = () => {
     setActiveBranch(null);
  };

  if (isAdminMode) {
    return <AdminDashboard onBack={() => setIsAdminMode(false)} initialBranchId={activeBranch?.id} />;
  }

  // Show Branch Selection if no branch is active
  if (!activeBranch) {
    return <BranchSelection onSelectBranch={setActiveBranch} />;
  }

  return (
    <div className={`min-h-screen font-sans selection:bg-[var(--text-primary)] selection:text-[var(--bg-primary)] overflow-x-hidden relative text-[var(--text-primary)] bg-[var(--bg-primary)] transition-colors duration-500`}>
      
      {/* Background: Pure Black (Noise removed as per request for Solid Hex #000000) */}
      
      {/* 2. MAIN APP CONTENT */}
      {activeBranch && (
        <div className="animate-in fade-in slide-in-from-bottom-2 duration-700 relative z-10">
           <Navbar 
            searchQuery={searchQuery}
            setSearchQuery={setSearchQuery}
            activeBranch={activeBranch}
            onSwitchLocation={resetLocation}
            activeMenuCategories={currentBranchMenu} 
          />

          {/* Main Content Area with padding for fixed header */}
          <div id="menu-start" className={`relative pb-20 pt-32`}>
             
            <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              
              {searchQuery && (
                <div className="text-center mb-16 space-y-2">
                  <p className="text-[var(--text-secondary)] uppercase tracking-widest text-xs">Searching for</p>
                  <h2 className="text-3xl menu-heading text-[var(--text-primary)]">"{searchQuery}"</h2>
                </div>
              )}

              {/* Categories */}
              <div className="space-y-32">
                {filteredCategories.length === 0 ? (
                  <div className="text-center py-20">
                    <p className="text-[var(--text-secondary)] text-lg font-light">No items found.</p>
                    <button onClick={() => setSearchQuery('')} className="mt-4 text-[var(--text-primary)] underline underline-offset-4 hover:text-[var(--text-secondary)]">View Menu</button>
                  </div>
                ) : (
                  filteredCategories.map((category) => (
                    <section key={category.id} id={category.id} className="scroll-mt-48">
                      <div className="flex flex-col items-center mb-12">
                        <h2 
                          className="text-3xl md:text-4xl menu-heading text-[var(--text-primary)] tracking-widest border-b border-[var(--border-color)] pb-4 px-8"
                          style={category.headerStyle as React.CSSProperties}
                        >
                          {category.title}
                        </h2>
                        
                        {category.beanSelection ? (
                          <div className="bean-offering-section">
                            <h3 className="bean-offering-title">Espresso Offering</h3>
                            <div className="bean-offering-row">
                              {category.beanSelection.map((bean, index) => (
                                <div 
                                  key={bean.id}
                                  className={`bean-card-sm ${
                                    (bean.status === 'sold_out' || bean.status === 'coming_soon') ? 'grayscale opacity-60 pointer-events-none' : ''
                                  }`}
                                >
                                  <div className="bean-card-title flex items-center justify-center gap-1">
                                    {bean.name}
                                    {bean.price > 0 && (
                                      <span className="inline-flex items-center justify-center bg-neutral-800 text-white text-[10px] font-bold px-1.5 py-0.5 rounded-full ml-1">
                                        +{bean.price} AED
                                      </span>
                                    )}
                                  </div>
                                  <div className="bean-card-notes">
                                    {bean.notes}
                                  </div>
                                </div>
                              ))}
                            </div>
                          </div>
                        ) : (
                          category.description && (
                            <div className="mt-6 max-w-2xl text-center text-[var(--text-secondary)] text-sm leading-relaxed whitespace-pre-wrap font-light tracking-wide">
                              {category.description}
                            </div>
                          )
                        )}
                      </div>
                    
                      {category.items.length > 0 && (
                        <div className="grid mobile-grid-2 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
                          {category.items.map((item, index) => {
                            if (category.id === 'healthy-bar' && activeBranch.id === 'mirdif') {
                              return (
                                <SmoothieCard 
                                  key={item.id} 
                                  item={item} 
                                  index={index}
                                />
                              );
                            }
                            return (
                              <FlipCard 
                                key={item.id} 
                                item={item} 
                                index={index}
                              />
                            );
                          })}
                        </div>
                      )}

                      {category.subCategories && category.subCategories.map(sub => (
                         <div key={sub.id} className="mb-12">
                           <h3 className="text-2xl menu-heading text-[var(--text-primary)] mb-8 text-center border-b border-[var(--border-color)] pb-2 inline-block px-8 opacity-80">
                             {sub.title}
                           </h3>
                           <div className="grid mobile-grid-2 md:grid-cols-2 lg:grid-cols-3 gap-8">
                             {sub.items.map((item, index) => {
                               if (sub.id === 'healthy-bar' && activeBranch.id === 'mirdif') {
                                 return (
                                   <SmoothieCard 
                                     key={item.id} 
                                     item={item} 
                                     index={index}
                                   />
                                 );
                               }
                               return (
                                 <FlipCard 
                                   key={item.id} 
                                   item={item} 
                                   index={index}
                                 />
                               );
                             })}
                           </div>
                         </div>
                      ))}
                    </section>
                  ))
                )}
              </div>
            </main>
          </div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-40">
            <FeedbackForm />
          </div>

          <Footer onAdminAccess={() => setIsAdminMode(true)} />
        </div>
      )}

      {/* Shared Modals */}
      {isLegalModalOpen && (
        <div className="fixed inset-0 z-[80] flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-black/80 backdrop-blur-md" onClick={() => setIsLegalModalOpen(false)}></div>
          <div className="relative bg-[var(--bg-primary)] border border-[var(--border-color)] w-full max-w-lg p-8 rounded-luxury shadow-2xl animate-in fade-in zoom-in-95">
            <button onClick={() => setIsLegalModalOpen(false)} className="absolute top-5 right-5 text-[var(--text-secondary)] hover:text-[var(--text-primary)]"><X size={24} /></button>
            <h2 className="text-2xl font-didone font-bold uppercase tracking-wider mb-8 text-[var(--text-primary)] text-center">Terms & Privacy</h2>
            <div className="space-y-6 text-xs text-[var(--text-secondary)] font-light leading-relaxed text-justify">
              <p>Your continued use of this platform constitutes an affirmation that you have read and agreed to be bound by these Terms.</p>
              <div className="pt-6 border-t border-[var(--border-color)] mt-6 text-center">
                <p className="uppercase tracking-widest text-[9px] text-[var(--text-secondary)] font-medium">Cartel Coffee Roasters © 2026</p>
              </div>
            </div>
          </div>
        </div>
      )}

    </div>
  );
};

export default App;