import React, { useState, useEffect } from 'react';
import BranchSelection from './BranchSelection';
import Navbar from './Navbar';
import MenuItemCard from './MenuItemCard';
import Footer from './Footer';
import AdminGate from './AdminGate';
import AdminDashboard from './AdminDashboard';
import OfferingBeans from './OfferingBeans';
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

    useEffect(() => {
        if (selectedBranch?.id === 'marina') {
            // Force component cache clearing for Marina as requested to ensure instant DOM refresh
            localStorage.removeItem(`cartel_inventory_marina`);
        }
    }, [selectedBranch?.id]);

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
    const seenItemIds = new Set<string>();
    const seenItemNames = new Set<string>();
    const filteredCategories = branchCategories.map(cat => {
        let items = cat.items.filter(item => {
            const normalizedName = item.name.toLowerCase().trim();
            if (seenItemIds.has(item.id) || seenItemNames.has(normalizedName)) return false;
            const isVisible = item.isVisible !== false && (item as any).status !== 'archived' && (item as any).publishStatus !== 'draft';
            const matchesQuery = item.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                (item.ingredients && item.ingredients.toLowerCase().includes(searchQuery.toLowerCase()));
            if (isVisible && matchesQuery) {
                seenItemIds.add(item.id);
                seenItemNames.add(normalizedName);
                return true;
            }
            return false;
        });

        if (
            cat.id.toLowerCase().includes('filter') || 
            cat.title.toLowerCase().includes('filter') ||
            cat.id.toLowerCase().includes('espresso') || 
            cat.title.toLowerCase().includes('espresso')
        ) {
            items.sort((a, b) => Number(a.price) - Number(b.price));
        }

        let subCategories = cat.subCategories ? cat.subCategories.map(subCat => {
            let subItems = subCat.items.filter(item => {
                const normalizedName = item.name.toLowerCase().trim();
                if (seenItemIds.has(item.id) || seenItemNames.has(normalizedName)) return false;
                const isVisible = item.isVisible !== false && (item as any).status !== 'archived' && (item as any).publishStatus !== 'draft';
                const matchesQuery = item.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                    (item.ingredients && item.ingredients.toLowerCase().includes(searchQuery.toLowerCase()));
                if (isVisible && matchesQuery) {
                    seenItemIds.add(item.id);
                    seenItemNames.add(normalizedName);
                    return true;
                }
                return false;
            });

            if (
                cat.id.toLowerCase().includes('filter') || 
                cat.title.toLowerCase().includes('filter') || 
                subCat.id.toLowerCase().includes('filter') || 
                subCat.title.toLowerCase().includes('filter') ||
                cat.id.toLowerCase().includes('espresso') || 
                cat.title.toLowerCase().includes('espresso') || 
                subCat.id.toLowerCase().includes('espresso') || 
                subCat.title.toLowerCase().includes('espresso')
            ) {
                subItems.sort((a, b) => Number(a.price) - Number(b.price));
            }

            return {
                ...subCat,
                items: subItems
            };
        }).filter(subCat => subCat.items.length > 0) : [];

        return {
            ...cat,
            items,
            subCategories
        };
    }).filter(cat => cat.items.length > 0 || (cat.subCategories && cat.subCategories.length > 0));

    return (
        <div className="min-h-screen bg-[var(--bg-primary)] text-[var(--text-primary)] font-sans relative pb-20 transition-colors duration-500">
            <Navbar 
                searchQuery={searchQuery}
                setSearchQuery={setSearchQuery}
                activeBranch={selectedBranch}
                onSwitchLocation={() => setSelectedBranch(null)}
                activeMenuCategories={filteredCategories}
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
                                
                                {cat.title === "ESPRESSO BASED" && <OfferingBeans activeBranch={selectedBranch} />}

                                <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-3 sm:gap-6">
                                    {cat.items.map(item => (
                                        <MenuItemCard key={item.id} item={item} />
                                    ))}
                                </div>
                                {cat.subCategories && cat.subCategories.length > 0 && (
                                    <div className="flex flex-col gap-12 mt-12 w-full">
                                        {cat.subCategories.map(subCat => (
                                            <div key={subCat.id} className="flex flex-col">
                                                <div className="flex flex-col items-center mb-6 px-4">
                                                    <h3 className="text-lg md:text-xl font-didone tracking-widest text-[var(--text-primary)] uppercase text-center mb-2">
                                                        {subCat.title}
                                                    </h3>
                                                    <div className="w-8 h-px bg-[var(--text-primary)] opacity-40"></div>
                                                </div>
                                                <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-3 sm:gap-6">
                                                    {subCat.items.map(item => (
                                                        <MenuItemCard key={item.id} item={item} />
                                                    ))}
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                )}
                                {selectedBranch?.id === 'marina' && cat.id === 'filter' && (
                                    <div className="mt-16">
                                        <div className="flex flex-col items-center mb-8 px-4">
                                            <h3 className="text-lg md:text-xl font-didone tracking-widest text-[var(--text-primary)] uppercase text-center mb-2">
                                                New Additions
                                            </h3>
                                            <div className="w-8 h-px bg-[var(--text-primary)] opacity-40"></div>
                                        </div>
                                        <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-3 sm:gap-6">
                                            {[
                                                { name: "Colombia Mish Mish", price: 57, image: "https://iili.io/qLf9mXt.jpg", notes: ["Apricot Jam", "Raspberry", "Lychee"] },
                                                { name: "Colombia Sidra", price: 46, image: "https://iili.io/qLf9mXt.jpg", notes: ["Red Grapes", "Watermelon", "Hard Candy", "Raspberry"] },
                                                { name: "Colombia Gesha Key Lime Pie", price: 65, image: "https://iili.io/qLf9mXt.jpg", notes: ["Orange Blossom", "Lemon Grass", "Condensed Milk"] },
                                                { name: "Colombia Strawberry", price: 57, image: "https://iili.io/qLf9mXt.jpg", notes: ["Strawberry Jam", "Honey", "Milk Chocolates"] },
                                                { name: "Kenya Kiramara", price: 46, image: "https://iili.io/qLf9mXt.jpg", notes: ["Brown Sugar", "Wild Cherry", "Raisins"] },
                                                { name: "Ethiopia Rogicha", price: 36, image: "https://iili.io/qLf9mXt.jpg", notes: ["Apricot", "Pear", "Honey"] },
                                                { name: "Sweet Dreams Decaf", price: 38, image: "https://iili.io/qLf9mXt.jpg", notes: ["Passion Fruit", "Cheesecake", "Milk Chocolate"] }
                                            ].map((item, idx) => (
                                                <div key={idx} className="flex flex-col h-full bg-white rounded-[32px] overflow-hidden relative group transition-all duration-500 ease-out transform p-2 hover:shadow-2xl hover:-translate-y-1 cursor-pointer">
                                                    <div className="h-[140px] sm:h-[200px] md:h-[280px] w-full bg-white relative overflow-hidden flex items-center justify-center rounded-t-[24px]">
                                                        <img 
                                                            src={item.image} 
                                                            alt={item.name} 
                                                            className="w-full h-full object-cover object-center transition-transform duration-1000 ease-out"
                                                            style={{ transform: 'scale(1.2)' }}
                                                            loading="lazy"
                                                        />
                                                    </div>
                                                    <div className="bg-black flex-1 flex flex-col p-3 sm:p-5 md:p-8 relative z-10 rounded-[24px] mt-1 sm:mt-2">
                                                        <div className="flex flex-col items-center justify-center text-center w-full flex-1">
                                                            <h3 className="font-didone text-[13px] sm:text-lg md:text-2xl font-bold tracking-wide text-white mb-2 sm:mb-5 line-clamp-2">{item.name}</h3>
                                                            <div className="w-full h-px bg-neutral-800 mb-2 sm:mb-5 hidden sm:block"></div>
                                                            <div className="flex items-center justify-center gap-1 text-[11px] sm:text-sm md:text-lg font-light tracking-widest text-neutral-300 mb-2 sm:mb-4">
                                                                <span>{item.price} AED</span>
                                                            </div>
                                                            <div className="flex flex-wrap justify-center gap-2 mt-2">
                                                                {item.notes.map((note, nIdx) => (
                                                                    <span key={nIdx} className="text-[9px] sm:text-[10px] text-white/70 border border-white/20 px-2 sm:px-3 py-1 rounded-full uppercase tracking-wider font-sans">
                                                                        {note}
                                                                    </span>
                                                                ))}
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                )}
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
