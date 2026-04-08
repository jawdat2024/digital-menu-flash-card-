import React, { useState, useEffect } from 'react';
import { Search, ArrowLeft, MoreHorizontal, Filter, FileText, Plus, X, Save, Trash2, Ban, CheckCircle, MapPin } from 'lucide-react';
import CurrencySymbol from './CurrencySymbol';
import { BRANCH_MENUS, BRANCH_DATA } from '../constants';
import AdminGate from './AdminGate';

// --- Types ---
interface AdminItem {
  id: string | number;
  name: string;
  sku: string;
  category: string;
  price: number;
  active: boolean;
  isSoldOut: boolean;
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

  // --- Inventory State ---
  const [items, setItems] = useState<AdminItem[]>([]);
  const [searchQuery, setSearchQuery] = useState('');
  
  // --- UI State ---
  const [activeMenuId, setActiveMenuId] = useState<string | number | null>(null);
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [isEditPriceModalOpen, setIsEditPriceModalOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState<AdminItem | null>(null);

  // --- New Item Form State ---
  const [newItem, setNewItem] = useState<Partial<AdminItem>>({
    name: '',
    category: 'Signature drink',
    price: 0,
    image: '',
    active: true,
    isSoldOut: false,
    publishStatus: 'draft'
  });
  
  // --- Edit Price State ---
  const [editPriceValue, setEditPriceValue] = useState<string>('');

  // --- Initialization & Switching Logic ---
  useEffect(() => {
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
        active: !item.isSoldOut,
        isSoldOut: !!item.isSoldOut,
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
    if (stored) {
      const parsedStored: AdminItem[] = JSON.parse(stored);
      const mergedItems = initialItems.map(item => {
        const storedItem = parsedStored.find(si => si.id === item.id);
        return storedItem ? { ...item, active: storedItem.active, isSoldOut: storedItem.isSoldOut, price: storedItem.price, publishStatus: storedItem.publishStatus || 'published' } : item;
      });
      const customItems = parsedStored.filter(si => !initialItems.some(ii => ii.id === si.id));
      setItems([...mergedItems, ...customItems]);
    } else {
      setItems(initialItems);
      localStorage.setItem(storageKey, JSON.stringify(initialItems));
    }
  }, [selectedBranchId]);

  // --- Persistence Helper ---
  const saveToStorage = (updatedItems: AdminItem[]) => {
    setItems(updatedItems);
    if (selectedBranchId) {
      const storageKey = `cartel_inventory_${selectedBranchId}`;
      localStorage.setItem(storageKey, JSON.stringify(updatedItems));
    }
  };

  // --- Inventory Logic ---
  const toggleStatus = (id: string | number) => {
    const updated = items.map(item => 
      item.id === id ? { ...item, active: !item.active } : item
    );
    saveToStorage(updated);
  };

  const toggleSoldOut = (id: string | number) => {
    const updated = items.map(item => 
      item.id === id ? { ...item, isSoldOut: !item.isSoldOut } : item
    );
    saveToStorage(updated);
    setActiveMenuId(null);
  };

  const handleDelete = (id: string | number) => {
    if (window.confirm("Are you sure you want to delete this item?")) {
      const updated = items.filter(item => item.id !== id);
      saveToStorage(updated);
    }
    setActiveMenuId(null);
  };

  const openPriceEdit = (item: AdminItem) => {
    setSelectedItem(item);
    setEditPriceValue(item.price.toString());
    setIsEditPriceModalOpen(true);
    setActiveMenuId(null);
  };

  const savePrice = () => {
    if (!selectedItem) return;
    const newPrice = parseFloat(editPriceValue);
    
    // Price Validation Rule
    if (isNaN(newPrice) || newPrice <= 0) {
      alert("Price must be a positive number greater than 0.");
      return;
    }

    const updated = items.map(item => 
      item.id === selectedItem.id ? { ...item, price: newPrice } : item
    );
    saveToStorage(updated);
    setIsEditPriceModalOpen(false);
    setSelectedItem(null);
  };

  const handleAddItem = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newItem.name) return;

    const priceNum = Number(newItem.price);
    if (isNaN(priceNum) || priceNum <= 0) {
      alert("Price must be a positive number greater than 0.");
      return;
    }

    const id = `new_${Date.now()}`;
    const itemToAdd: AdminItem = {
      id,
      name: newItem.name || 'Untitled',
      sku: `SKU-${Math.floor(Math.random() * 10000)}`,
      category: newItem.category || 'Uncategorized',
      price: priceNum,
      active: true,
      isSoldOut: false,
      image: newItem.image || 'https://via.placeholder.com/150',
      publishStatus: newItem.publishStatus || 'draft'
    };

    saveToStorage([itemToAdd, ...items]);
    setIsAddModalOpen(false);
    setNewItem({ name: '', category: selectedCategory || 'Signature drink', price: 0, image: '', publishStatus: 'draft' });
  };

  // --- Derived State ---
  const distinctCategories = Array.from(new Set(items.map(i => i.category)));
  
  const filteredItems = items.filter(item => {
    const matchesSearch = item.name.toLowerCase().includes(searchQuery.toLowerCase()) || item.sku.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory ? item.category === selectedCategory : true;
    return matchesSearch && matchesCategory;
  });

  // --- RENDER ---
  return (
    <AdminGate>
      <div className="bg-[#0a0a0a] min-h-screen text-white font-sans selection:bg-white selection:text-black">
        
        {/* Header */}
        <header className="flex justify-between items-center p-8 border-b border-[#222]">
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
            <h1 className="text-2xl font-bold tracking-tighter">CARTEL <span className="font-light text-gray-500">| Control Panel</span></h1>
          </div>
          <button onClick={onBack} className="text-xs text-red-500 hover:underline">Logout</button>
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
                        <tr 
                          key={item.id} 
                          className={`transition-colors group ${item.isSoldOut ? 'bg-red-900/10 opacity-75' : 'hover:bg-neutral-800/30'}`}
                        >
                          <td className="p-4">
                            <div className="flex items-center gap-4">
                              <div className="w-10 h-10 rounded-lg bg-neutral-800 overflow-hidden relative">
                                <img src={item.image} alt={item.name} className={`w-full h-full object-cover object-center transition-opacity grayscale ${item.isSoldOut ? 'grayscale' : 'group-hover:grayscale-0'}`} />
                                {item.isSoldOut && (
                                   <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                                      <Ban size={16} className="text-white" />
                                   </div>
                                )}
                              </div>
                              <div>
                                  <span className={`text-sm font-medium ${item.isSoldOut ? 'text-neutral-400 line-through' : 'text-white'}`}>{item.name}</span>
                                  {item.isSoldOut && <span className="block text-[9px] text-red-400 uppercase tracking-wider font-bold">Sold Out</span>}
                              </div>
                            </div>
                          </td>
                          <td className="p-4 hidden sm:table-cell">
                            <span className={`px-2 py-1 rounded-md text-[10px] font-bold uppercase tracking-wider ${
                              item.publishStatus === 'draft' ? 'bg-yellow-900/30 text-yellow-500 border border-yellow-900/50' : 
                              item.publishStatus === 'archived' ? 'bg-neutral-800 text-neutral-400 border border-neutral-700' :
                              'bg-green-900/30 text-green-500 border border-green-900/50'
                            }`}>
                              {item.publishStatus}
                            </span>
                          </td>
                          <td className="p-4 text-sm font-didone text-white">
                            <div className="flex items-center gap-1">
                              <CurrencySymbol className="w-3 h-3" />
                              <span>{item.price.toFixed(2)}</span>
                            </div>
                          </td>
                          <td className="p-4">
                             <button 
                               onClick={() => toggleStatus(item.id)}
                               className={`relative inline-flex h-5 w-9 items-center rounded-full transition-colors focus:outline-none ${item.active ? 'bg-[#c5a059]' : 'bg-neutral-700'}`}
                             >
                               <span className={`inline-block h-3 w-3 transform rounded-full bg-black transition-transform ${item.active ? 'translate-x-5' : 'translate-x-1'}`} />
                             </button>
                          </td>
                          <td className="p-4 text-right relative">
                            <button 
                              onClick={() => setActiveMenuId(activeMenuId === item.id ? null : item.id)}
                              className="text-neutral-500 hover:text-white transition-colors p-2"
                            >
                              <MoreHorizontal size={16} />
                            </button>

                            {/* Dropdown Action Menu */}
                            {activeMenuId === item.id && (
                              <div className="absolute right-8 top-8 w-48 bg-black border border-neutral-700 rounded-xl shadow-2xl z-50 flex flex-col py-1 animate-in fade-in zoom-in-95 duration-200">
                                 <button 
                                    onClick={() => openPriceEdit(item)}
                                    className="px-4 py-3 text-left text-xs text-neutral-300 hover:bg-neutral-900 hover:text-white transition-colors border-b border-neutral-800"
                                  >
                                     Edit Price
                                 </button>
                                 <button 
                                    onClick={() => toggleSoldOut(item.id)}
                                    className="px-4 py-3 text-left text-xs text-neutral-300 hover:bg-neutral-900 hover:text-white transition-colors border-b border-neutral-800 flex items-center justify-between"
                                  >
                                     {item.isSoldOut ? 'Mark In Stock' : 'Mark Sold Out'}
                                     {item.isSoldOut ? <CheckCircle size={12} /> : <Ban size={12} />}
                                 </button>
                                 <button 
                                    onClick={() => {
                                      const updated = items.map(i => i.id === item.id ? { ...i, publishStatus: i.publishStatus === 'published' ? 'draft' : 'published' as any } : i);
                                      saveToStorage(updated);
                                      setActiveMenuId(null);
                                    }}
                                    className="px-4 py-3 text-left text-xs text-neutral-300 hover:bg-neutral-900 hover:text-white transition-colors border-b border-neutral-800 flex items-center justify-between"
                                  >
                                     {item.publishStatus === 'published' ? 'Move to Draft' : 'Publish'}
                                 </button>
                                 <button 
                                    onClick={() => handleDelete(item.id)}
                                    className="px-4 py-3 text-left text-xs text-red-400 hover:bg-red-900/20 transition-colors flex items-center gap-2"
                                  >
                                     <Trash2 size={12} /> Delete Item
                                 </button>
                              </div>
                            )}
                          </td>
                        </tr>
                      ))}
                      {filteredItems.length === 0 && (
                        <tr>
                          <td colSpan={5} className="p-8 text-center text-neutral-500 text-sm">
                            No items found in this category.
                          </td>
                        </tr>
                      )}
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
                          <label className="text-[10px] uppercase tracking-widest text-neutral-500 mb-2 block">Status</label>
                          <select 
                            className="w-full bg-neutral-900 border border-neutral-800 rounded-lg p-3 text-white text-sm focus:border-[#c5a059] outline-none"
                            value={newItem.publishStatus}
                            onChange={e => setNewItem({...newItem, publishStatus: e.target.value as any})}
                          >
                              <option value="draft">Draft</option>
                              <option value="published">Published</option>
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

        {/* --- Edit Price Modal --- */}
        {isEditPriceModalOpen && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
             <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" onClick={() => setIsEditPriceModalOpen(false)} />
             <div className="relative bg-black border border-neutral-800 rounded-2xl w-full max-w-sm p-8 shadow-2xl animate-in zoom-in-95">
                <div className="flex justify-between items-center mb-6">
                   <h2 className="text-xl font-bold text-white uppercase tracking-wider">Update Price</h2>
                   <button onClick={() => setIsEditPriceModalOpen(false)}><X size={20} className="text-neutral-500 hover:text-white" /></button>
                </div>
                <div className="space-y-4">
                   <div>
                      <label className="text-[10px] uppercase tracking-widest text-neutral-500 mb-2 block">New Price</label>
                      <input 
                        type="number"
                        required
                        min="0.01"
                        step="0.01"
                        className="w-full bg-neutral-900 border border-neutral-800 rounded-lg p-3 text-white text-sm focus:border-[#c5a059] outline-none"
                        value={editPriceValue}
                        onChange={e => setEditPriceValue(e.target.value)}
                        autoFocus
                      />
                   </div>
                   <button 
                      onClick={savePrice}
                      className="w-full bg-[#c5a059] text-black font-bold uppercase tracking-[0.2em] py-4 rounded-lg hover:bg-white mt-4 flex items-center justify-center gap-2 transition-colors"
                   >
                      <Save size={16} /> Save Changes
                   </button>
                </div>
             </div>
          </div>
        )}

      </div>
    </AdminGate>
  );
};

export default AdminDashboard;