import React, { useState, useEffect } from 'react';
import { Search, ArrowLeft, MoreHorizontal, Filter, FileText, Lock, Plus, X, Save, Trash2, Ban, CheckCircle, MapPin } from 'lucide-react';
import CurrencySymbol from './CurrencySymbol';
import { BRANCH_MENUS, BRANCH_DATA } from '../constants';

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
}

interface AdminDashboardProps {
  onBack: () => void;
  initialBranchId?: string;
}

// --- Constants ---
const ADMIN_PASS = "JAWDAT2026";

const AdminDashboard: React.FC<AdminDashboardProps> = ({ onBack, initialBranchId }) => {
  // --- Auth State ---
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [passwordInput, setPasswordInput] = useState("");
  const [authError, setAuthError] = useState(false);

  // --- Multi-Branch State ---
  // Initialize with passed branch ID or default to khalifa
  const [selectedBranchId, setSelectedBranchId] = useState<string>(initialBranchId || 'khalifa');

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
    category: 'Signature Drinks',
    price: 0,
    image: '',
    active: true,
    isSoldOut: false
  });
  
  // --- Edit Price State ---
  const [editPriceValue, setEditPriceValue] = useState<string>('');

  // --- Initialization & Switching Logic ---
  useEffect(() => {
    // Dynamic Storage Key based on selected branch
    const storageKey = `cartel_inventory_${selectedBranchId}`;
    
    // 1. Check LocalStorage for specific branch
    const stored = localStorage.getItem(storageKey);
    if (stored) {
      setItems(JSON.parse(stored));
    } else {
      // 2. Fallback: Load from constants based on selected Branch
      const initialItems: AdminItem[] = [];
      const menuSource = BRANCH_MENUS[selectedBranchId] || BRANCH_MENUS['khalifa'];

      menuSource.forEach(cat => {
        cat.items.forEach(item => {
          const priceNum = parseFloat(item.price.replace(/[^0-9.]/g, '')) || 0;
          initialItems.push({
            id: item.id,
            name: item.name,
            sku: `SKU-${item.id.toUpperCase()}`,
            category: cat.title,
            price: priceNum,
            active: !item.isSoldOut, // Logic mapping
            isSoldOut: !!item.isSoldOut,
            image: item.image
          });
        });
      });
      setItems(initialItems);
      localStorage.setItem(storageKey, JSON.stringify(initialItems));
    }
  }, [selectedBranchId]);

  // --- Persistence Helper ---
  const saveToStorage = (updatedItems: AdminItem[]) => {
    setItems(updatedItems);
    const storageKey = `cartel_inventory_${selectedBranchId}`;
    localStorage.setItem(storageKey, JSON.stringify(updatedItems));
  };

  // --- Auth Handlers ---
  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (passwordInput === ADMIN_PASS) {
      setIsAuthenticated(true);
      setAuthError(false);
    } else {
      setAuthError(true);
      setPasswordInput("");
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
    const updated = items.map(item => 
      item.id === selectedItem.id ? { ...item, price: parseFloat(editPriceValue) || 0 } : item
    );
    saveToStorage(updated);
    setIsEditPriceModalOpen(false);
    setSelectedItem(null);
  };

  const handleAddItem = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newItem.name) return;

    const id = `new_${Date.now()}`;
    const itemToAdd: AdminItem = {
      id,
      name: newItem.name || 'Untitled',
      sku: `SKU-${Math.floor(Math.random() * 10000)}`,
      category: newItem.category || 'Uncategorized',
      price: Number(newItem.price) || 0,
      active: true,
      isSoldOut: false,
      image: newItem.image || 'https://via.placeholder.com/150'
    };

    saveToStorage([itemToAdd, ...items]);
    setIsAddModalOpen(false);
    setNewItem({ name: '', category: 'Signature Drinks', price: 0, image: '' });
  };

  const handleEndOfDay = async () => {
    const GOOGLE_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbw_2vLqLWsjTUeUfCuEgvLCiiAMgTLAkYfoGrO-bHoKvLwEQWb45S2ejjLhH7UrwR_M/exec";
    const reportData = {
      type: "KITCHEN", 
      branch: selectedBranchId,
      time: new Date().toLocaleTimeString(),
      lateCount: 150, 
      normalCount: 400,
      latePercentage: "27%"
    };
    try {
      await fetch(GOOGLE_SCRIPT_URL, {
        method: "POST",
        mode: "no-cors",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(reportData)
      });
      alert(`Report Sent Successfully for ${selectedBranchId.toUpperCase()}`);
    } catch (error) {
      console.error("Error sending report:", error);
    }
  };

  // --- Derived State ---
  const filteredItems = items.filter(item => 
    item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    item.sku.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const distinctCategories = Array.from(new Set(items.map(i => i.category)));

  // --- RENDER: Login Gate ---
  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center p-4 relative overflow-hidden">
        {/* Ambient background */}
        <div className="absolute inset-0 bg-black">
           <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-neutral-800/20 rounded-full blur-[100px]" />
           <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-white/5 rounded-full blur-[100px]" />
        </div>

        <div className="w-full max-w-md bg-black border border-white/20 rounded-luxury shadow-2xl p-8 md:p-12 relative z-10 animate-in fade-in zoom-in-95 duration-500">
           <div className="text-center mb-10">
              <h1 className="text-4xl font-didone font-bold text-white tracking-widest uppercase mb-2">Cartel</h1>
              <p className="text-[10px] text-neutral-500 uppercase tracking-[0.3em]">Management Access</p>
           </div>

           <form onSubmit={handleLogin} className="space-y-6">
              <div className="relative">
                 <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-neutral-500" size={16} />
                 <input 
                    type="password" 
                    placeholder="Enter Access Code" 
                    value={passwordInput}
                    onChange={(e) => setPasswordInput(e.target.value)}
                    className="w-full bg-neutral-900 border border-neutral-800 rounded-xl py-4 pl-12 pr-4 text-white placeholder-neutral-600 focus:outline-none focus:border-white transition-all text-center tracking-widest"
                    autoFocus
                 />
              </div>
              
              {authError && (
                <p className="text-red-500 text-[10px] uppercase tracking-widest text-center animate-pulse">
                   Access Denied: Invalid Credentials
                </p>
              )}

              <button 
                type="submit"
                className="w-full py-4 bg-white text-black font-bold uppercase tracking-[0.2em] text-xs rounded-lg hover:bg-neutral-300 transition-all shadow-lg hover:shadow-white/10"
              >
                Authenticate
              </button>
           </form>

           <div className="mt-8 text-center">
              <button onClick={onBack} className="text-neutral-500 hover:text-white text-[10px] uppercase tracking-widest transition-colors flex items-center justify-center gap-2 mx-auto">
                 <ArrowLeft size={12} /> Return to Menu
              </button>
           </div>
        </div>
      </div>
    );
  }

  // --- RENDER: Dashboard ---
  return (
    <div className="min-h-screen bg-black text-white font-sans selection:bg-white selection:text-black">
      {/* Top Navigation */}
      <div className="bg-black/90 backdrop-blur-md border-b border-white/10 px-6 py-4 flex flex-col md:flex-row justify-between items-center sticky top-0 z-40 gap-4">
        <div className="flex items-center gap-4 w-full md:w-auto">
          <button 
            onClick={onBack}
            className="p-2 hover:bg-neutral-900 rounded-full transition-colors text-neutral-400 hover:text-white"
          >
            <ArrowLeft size={20} />
          </button>
          <div>
            <h1 className="text-xl font-didone font-bold tracking-wider uppercase">Cartel Dashboard</h1>
            <p className="text-[10px] text-neutral-500 tracking-widest uppercase">Inventory Management</p>
          </div>
        </div>
        
        {/* Branch Switcher */}
        <div className="flex items-center gap-4">
           <div className="flex items-center gap-2 bg-neutral-900 rounded-lg p-1 border border-neutral-800">
             <MapPin size={14} className="ml-2 text-neutral-400" />
             <select 
               value={selectedBranchId}
               onChange={(e) => setSelectedBranchId(e.target.value)}
               className="bg-transparent text-xs font-bold uppercase tracking-wider text-white focus:outline-none p-2 rounded cursor-pointer"
             >
               {BRANCH_DATA.map(branch => (
                 <option key={branch.id} value={branch.id} className="bg-black">
                    {branch.name.replace('CARTEL ', '')}
                 </option>
               ))}
             </select>
           </div>
           
           <div className="hidden md:flex items-center gap-2 px-3 py-1 bg-white/5 border border-white/10 rounded-full">
              <span className="text-[10px] text-neutral-400 uppercase tracking-wider">Live</span>
              <div className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse"></div>
           </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 pb-32">
        
        {/* Controls Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-8 gap-4">
          <div className="relative w-full md:w-96">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-neutral-500" size={18} />
            <input 
              type="text" 
              placeholder="Search by name or SKU..." 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-neutral-900/50 border border-neutral-800 rounded-xl py-3 pl-10 pr-4 text-sm text-white focus:outline-none focus:border-white transition-colors placeholder-neutral-600"
            />
          </div>

          <div className="flex gap-2 w-full md:w-auto">
            <button className="p-3 bg-neutral-900 border border-neutral-800 rounded-xl text-neutral-400 hover:text-white hover:border-white transition-all">
              <Filter size={18} />
            </button>
            <button 
              onClick={handleEndOfDay}
              className="hidden md:flex px-6 py-3 bg-neutral-900 text-white font-bold uppercase tracking-wider text-xs rounded-xl hover:bg-neutral-800 transition-colors items-center gap-2 border border-neutral-800 hover:border-white"
            >
              <FileText size={16} />
              Report
            </button>
            <button 
              onClick={() => setIsAddModalOpen(true)}
              className="flex-1 md:flex-none px-6 py-3 bg-white text-black font-bold uppercase tracking-wider text-xs rounded-xl hover:bg-neutral-300 transition-colors flex items-center justify-center gap-2"
            >
              <Plus size={16} />
              Add Item
            </button>
          </div>
        </div>

        {/* Inventory List */}
        <div className="bg-neutral-900/30 border border-neutral-800 rounded-xl overflow-visible backdrop-blur-sm min-h-[500px]">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-neutral-800 bg-neutral-900/50 text-[10px] uppercase tracking-widest text-neutral-500">
                  <th className="p-4 font-medium">Product</th>
                  <th className="p-4 font-medium hidden sm:table-cell">SKU</th>
                  <th className="p-4 font-medium hidden md:table-cell">Category</th>
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
                          <img src={item.image} alt={item.name} className={`w-full h-full object-cover transition-opacity grayscale ${item.isSoldOut ? 'grayscale' : 'group-hover:grayscale-0'}`} />
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
                    <td className="p-4 text-xs text-neutral-400 font-mono hidden sm:table-cell">{item.sku}</td>
                    <td className="p-4 hidden md:table-cell">
                      <span className="px-2 py-1 rounded-md bg-neutral-800 border border-neutral-700 text-[10px] font-bold uppercase tracking-wider text-neutral-300">
                        {item.category}
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
                         className={`relative inline-flex h-5 w-9 items-center rounded-full transition-colors focus:outline-none ${item.active ? 'bg-white' : 'bg-neutral-700'}`}
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
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* --- Add Item Modal --- */}
      {isAddModalOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
           <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" onClick={() => setIsAddModalOpen(false)} />
           <div className="relative bg-black border border-neutral-800 rounded-luxury w-full max-w-lg p-8 shadow-2xl animate-in zoom-in-95">
              <div className="flex justify-between items-center mb-6">
                 <h2 className="text-xl font-didone font-bold text-white uppercase tracking-wider">New Product</h2>
                 <button onClick={() => setIsAddModalOpen(false)}><X size={20} className="text-neutral-500 hover:text-white" /></button>
              </div>
              <form onSubmit={handleAddItem} className="space-y-4">
                 <div>
                    <label className="text-[10px] uppercase tracking-widest text-neutral-500 mb-2 block">Item Name</label>
                    <input 
                      required
                      className="w-full bg-neutral-900 border border-neutral-800 rounded-lg p-3 text-white text-sm focus:border-white outline-none"
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
                          className="w-full bg-neutral-900 border border-neutral-800 rounded-lg p-3 text-white text-sm focus:border-white outline-none"
                          value={newItem.price}
                          onChange={e => setNewItem({...newItem, price: parseFloat(e.target.value)})}
                        />
                    </div>
                    <div>
                        <label className="text-[10px] uppercase tracking-widest text-neutral-500 mb-2 block">Category</label>
                        <select 
                          className="w-full bg-neutral-900 border border-neutral-800 rounded-lg p-3 text-white text-sm focus:border-white outline-none"
                          value={newItem.category}
                          onChange={e => setNewItem({...newItem, category: e.target.value})}
                        >
                            {distinctCategories.map(cat => <option key={cat} value={cat}>{cat}</option>)}
                        </select>
                    </div>
                 </div>
                 <div>
                    <label className="text-[10px] uppercase tracking-widest text-neutral-500 mb-2 block">Image URL</label>
                    <input 
                      className="w-full bg-neutral-900 border border-neutral-800 rounded-lg p-3 text-white text-sm focus:border-white outline-none"
                      value={newItem.image}
                      onChange={e => setNewItem({...newItem, image: e.target.value})}
                      placeholder="https://..."
                    />
                 </div>
                 <button className="w-full bg-white text-black font-bold uppercase tracking-[0.2em] py-4 rounded-lg hover:bg-neutral-300 mt-4">
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
           <div className="relative bg-black border border-neutral-800 rounded-luxury w-full max-w-sm p-8 shadow-2xl animate-in zoom-in-95">
              <div className="flex justify-between items-center mb-6">
                 <h2 className="text-xl font-didone font-bold text-white uppercase tracking-wider">Update Price</h2>
                 <button onClick={() => setIsEditPriceModalOpen(false)}><X size={20} className="text-neutral-500 hover:text-white" /></button>
              </div>
              <div className="space-y-4">
                 <div>
                    <label className="text-[10px] uppercase tracking-widest text-neutral-500 mb-2 block">New Price</label>
                    <input 
                      type="number"
                      required
                      className="w-full bg-neutral-900 border border-neutral-800 rounded-lg p-3 text-white text-sm focus:border-white outline-none"
                      value={editPriceValue}
                      onChange={e => setEditPriceValue(e.target.value)}
                      autoFocus
                    />
                 </div>
                 <button 
                    onClick={savePrice}
                    className="w-full bg-white text-black font-bold uppercase tracking-[0.2em] py-4 rounded-lg hover:bg-neutral-300 mt-4 flex items-center justify-center gap-2"
                 >
                    <Save size={16} /> Save Changes
                 </button>
              </div>
           </div>
        </div>
      )}

    </div>
  );
};

export default AdminDashboard;