import React, { useState, useMemo, useEffect } from 'react';
import Navbar from './components/Navbar';
import FlipCard from './components/FlipCard';
import AiBarista from './components/AiBarista';
import OrderTray from './components/OrderTray';
import FeedbackForm from './components/FeedbackForm';
import ProductModal from './components/ProductModal';
import AdminDashboard from './components/AdminDashboard';
import BranchSelection from './components/BranchSelection';
import Footer from './components/Footer';
import { BRANCH_DATA, BRANCH_MENUS } from './constants';
import { MenuItem, Branch, MenuCategory } from './types';
import { X } from 'lucide-react';

const App: React.FC = () => {
  const [isAdminMode, setIsAdminMode] = useState(false);
  const [isLegalModalOpen, setIsLegalModalOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [trayItems, setTrayItems] = useState<MenuItem[]>([]);
  const [isTrayOpen, setIsTrayOpen] = useState(false);
  
  // Default to null to show Branch Selection
  const [activeBranch, setActiveBranch] = useState<Branch | null>(null);
  const [selectedItemForCustomization, setSelectedItemForCustomization] = useState<MenuItem | null>(null);
  const [inventoryStatus, setInventoryStatus] = useState<Record<string, boolean>>({});

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

  const currentBranchMenu: MenuCategory[] = useMemo(() => {
    if (!activeBranch) return [];
    return BRANCH_MENUS[activeBranch.id] || BRANCH_MENUS['khalifa']; 
  }, [activeBranch]);

  useEffect(() => {
    if (!activeBranch) {
      setInventoryStatus({});
      return;
    }

    const syncInventory = () => {
      try {
        const storageKey = `cartel_inventory_${activeBranch.id}`;
        const storedInventory = localStorage.getItem(storageKey);
        
        if (storedInventory) {
          const parsed = JSON.parse(storedInventory);
          const statusMap: Record<string, boolean> = {};
          
          if (Array.isArray(parsed)) {
            parsed.forEach((item: any) => {
              if (item && item.id) {
                statusMap[item.id] = !!item.isSoldOut;
              }
            });
            setInventoryStatus(statusMap);
          }
        } else {
           setInventoryStatus({});
        }
      } catch (error) {
        console.error("Failed to sync inventory", error);
      }
    };

    syncInventory();

    const handleStorageChange = (e: StorageEvent) => {
      if (e.key === `cartel_inventory_${activeBranch.id}`) {
        syncInventory();
      }
    };

    window.addEventListener('storage', handleStorageChange);
    return () => window.removeEventListener('storage', handleStorageChange);
  }, [isAdminMode, activeBranch]);

  const filteredCategories = useMemo(() => {
    const processCategory = (cat: MenuCategory): MenuCategory => {
      const processedItems = cat.items.map(item => ({
        ...item,
        isSoldOut: inventoryStatus[item.id] !== undefined 
          ? inventoryStatus[item.id] 
          : item.isSoldOut
      }));
      
      const processedSubCategories = cat.subCategories?.map(processCategory);
      
      return {
        ...cat,
        items: processedItems,
        subCategories: processedSubCategories
      };
    };

    const mergedCategories = currentBranchMenu.map(processCategory);

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
  }, [searchQuery, inventoryStatus, currentBranchMenu]);

  const handleCardAdd = (item: MenuItem) => {
    if (item.isSoldOut) return;
    if ((item.variants && item.variants.length > 0) || (item.customizations && item.customizations.length > 0)) {
      setSelectedItemForCustomization(item);
    } else {
      addToTray(item);
    }
  };

  const addToTray = (item: MenuItem) => {
    setTrayItems(prev => [...prev, item]);
    setIsTrayOpen(true);
  };

  const removeFromTray = (index: number) => {
    setTrayItems(prev => prev.filter((_, i) => i !== index));
  };

  const resetLocation = () => {
     setActiveBranch(null);
     setTrayItems([]);
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
            cartCount={trayItems.length}
            onOpenTray={() => setIsTrayOpen(true)}
            activeBranch={activeBranch}
            onSwitchLocation={resetLocation}
            activeMenuCategories={currentBranchMenu} 
          />

          <OrderTray 
            isOpen={isTrayOpen}
            onClose={() => setIsTrayOpen(false)}
            items={trayItems}
            onRemove={removeFromTray}
          />

          {selectedItemForCustomization && (
            <ProductModal 
              isOpen={!!selectedItemForCustomization}
              item={selectedItemForCustomization}
              onClose={() => setSelectedItemForCustomization(null)}
              onAddToTray={addToTray}
            />
          )}

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
                        <h2 className="text-3xl md:text-4xl menu-heading text-[var(--text-primary)] tracking-widest border-b border-[var(--border-color)] pb-4 px-8">
                          {category.title}
                        </h2>
                        {category.description && (
                          <div className="mt-6 max-w-2xl text-center text-[var(--text-secondary)] text-sm leading-relaxed whitespace-pre-wrap font-light tracking-wide">
                            {category.description}
                          </div>
                        )}
                      </div>
                    
                      {category.items.length > 0 && (
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
                          {category.items.map((item, index) => (
                            <FlipCard 
                              key={item.id} 
                              item={item} 
                              onAdd={handleCardAdd}
                              index={index}
                            />
                          ))}
                        </div>
                      )}

                      {category.subCategories && category.subCategories.map(sub => (
                         <div key={sub.id} className="mb-12">
                           <h3 className="text-2xl menu-heading text-[var(--text-primary)] mb-8 text-center border-b border-[var(--border-color)] pb-2 inline-block px-8 opacity-80">
                             {sub.title}
                           </h3>
                           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                             {sub.items.map((item, index) => (
                               <FlipCard 
                                 key={item.id} 
                                 item={item} 
                                 onAdd={handleCardAdd}
                                 index={index}
                               />
                             ))}
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

          <Footer />

          <AiBarista />
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