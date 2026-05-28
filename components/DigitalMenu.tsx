import React, { useState, useEffect } from 'react';
import BranchSelection from './BranchSelection';
import Navbar from './Navbar';
import MenuItemCard from './MenuItemCard';
import Footer from './Footer';
import AdminGate from './AdminGate';
import AdminDashboard from './AdminDashboard';
import { Branch, MenuCategory } from '../types';
import { BRANCH_MENUS } from '../constants';

const DigitalMenu: React.FC = () => {
    const [selectedBranch, setSelectedBranch] = useState<Branch | null>(null);
    const [searchQuery, setSearchQuery] = useState('');
    const [isAdminOpen, setIsAdminOpen] = useState(false);
    
    // Add logic to refresh the menu if the admin makes changes
    const [lastSync, setLastSync] = useState(Date.now());
    
    useEffect(() => {
        const handleSync = () => setLastSync(Date.now());
        window.addEventListener('menu-updated', handleSync);
        return () => window.removeEventListener('menu-updated', handleSync);
    }, []);

    if (isAdminOpen) {
        return (
            <AdminGate>
                <AdminDashboard onBack={() => setIsAdminOpen(false)} />
            </AdminGate>
        );
    }

    if (!selectedBranch) {
        return <BranchSelection onSelectBranch={setSelectedBranch} />;
    }

    // Attempt to load potentially synced items
    let branchCategories: MenuCategory[] = [];
    const sourceCategories = BRANCH_MENUS[selectedBranch.id] || [];
    
    try {
        const storageKey = `cartel_inventory_${selectedBranch.id}`;
        const stored = localStorage.getItem(storageKey);
        
        if (stored) {
            const parsedStored = JSON.parse(stored);
            
            // Map over the original categories and merge data
            branchCategories = sourceCategories.map(cat => ({
                ...cat,
                items: cat.items.map(item => {
                    const matchedStore = parsedStored.find((si: any) => si.id === item.id);
                    if (matchedStore) {
                        return {
                            ...item,
                            isVisible: matchedStore.isVisible !== false,
                            price: matchedStore.price?.toString() || item.price,
                            status: matchedStore.status || item.status
                        };
                    }
                    return item;
                })
            }));
        } else {
            branchCategories = sourceCategories;
        }
    } catch(e) {
        branchCategories = sourceCategories;
    }
    
    // Filter out categories without visible items or those that don't match query
    const filteredCategories = branchCategories.map(cat => ({
        ...cat,
        items: cat.items.filter(item => {
            const isVisible = item.isVisible !== false && (item as any).status !== 'archived' && (item as any).publishStatus !== 'draft';
            const matchesQuery = item.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                (item.ingredients && item.ingredients.toLowerCase().includes(searchQuery.toLowerCase()));
            return isVisible && matchesQuery;
        })
    })).filter(cat => cat.items.length > 0);

    return (
        <div className="min-h-screen bg-[var(--bg-primary)] text-[var(--text-primary)] font-sans relative pb-20 transition-colors duration-500">
            <Navbar 
                searchQuery={searchQuery}
                setSearchQuery={setSearchQuery}
                activeBranch={selectedBranch}
                onSwitchLocation={() => setSelectedBranch(null)}
                activeMenuCategories={branchCategories}
            />
            
            <div className="pt-8 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {filteredCategories.length === 0 ? (
                    <div className="text-center py-20">
                        <p className="text-neutral-500 text-sm uppercase tracking-widest">No items found</p>
                    </div>
                ) : (
                    <div className="flex flex-col gap-16">
                        {filteredCategories.map((cat) => (
                            <div key={cat.id} id={cat.id} className="scroll-mt-40">
                                <div className="flex flex-col items-center mb-8 px-4">
                                    <h2 className="text-xl md:text-2xl font-didone tracking-widest text-[var(--text-primary)] uppercase text-center mb-2">
                                        {cat.title}
                                    </h2>
                                    <div className="w-12 h-px bg-[var(--text-primary)] opacity-40"></div>
                                </div>
                                
                                <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-3 sm:gap-6">
                                    {cat.items.map(item => (
                                        <MenuItemCard key={item.id} item={item} />
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>
            
            <Footer onAdminAccess={() => setIsAdminOpen(true)} />
        </div>
    );
};

export default DigitalMenu;
