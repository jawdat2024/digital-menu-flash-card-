import fs from 'fs';

let content = fs.readFileSync('components/AdminDashboard.tsx', 'utf8');

// 1. Add useMenuStore import
content = content.replace(
`import { Search, ArrowLeft, MoreHorizontal, Filter, FileText, Plus, X, Save, Trash2, Ban, CheckCircle, MapPin, RefreshCw } from 'lucide-react';
import CurrencySymbol from './CurrencySymbol';
import { BRANCH_MENUS, BRANCH_DATA } from '../constants';
import AdminGate from './AdminGate';`,
`import { Search, ArrowLeft, MoreHorizontal, Filter, FileText, Plus, X, Save, Trash2, Ban, CheckCircle, MapPin, RefreshCw } from 'lucide-react';
import CurrencySymbol from './CurrencySymbol';
import { BRANCH_MENUS, BRANCH_DATA } from '../constants';
import AdminGate from './AdminGate';
import { useMenuStore, MenuItemEntity } from '../store/menuStore';
import { AdminProductRow } from './AdminProductRow';`);

// 2. Remove AdminItem type if it conflicts, but let's just leave it and replace usage.
// 3. Replace state definitions
content = content.replace(
`  // --- Inventory State ---
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
    isVisible: true,
    status: 'available',
    publishStatus: 'draft'
  });
  
  // --- Edit Price State ---
  const [editPriceValue, setEditPriceValue] = useState<string>('');

  // --- Header Sync State ---
  const [hasUnsavedChanges, setHasUnsavedChanges] = useState(false);
  const [isSaved, setIsSaved] = useState(false);
  const [toastMessage, setToastMessage] = useState('');`,
`  // --- Store State ---
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
  });`);

// 4. Update loadInventory
content = content.replace(
`    const stored = localStorage.getItem(storageKey);
    if (stored) {
      const parsedStored: AdminItem[] = JSON.parse(stored);
      const mergedItems = initialItems.map(item => {
        const storedItem = parsedStored.find(si => si.id === item.id);
        return storedItem ? { ...item, 
          isVisible: storedItem.isVisible !== undefined ? storedItem.isVisible : (storedItem as any).active !== false,
          status: storedItem.status || ((storedItem as any).isSoldOut ? 'sold_out' : 'available'), 
          price: storedItem.price, 
          publishStatus: storedItem.publishStatus || 'published' 
        } : item;
      });
      const customItems = parsedStored.filter(si => !initialItems.some(ii => ii.id === si.id));
      setItems([...mergedItems, ...customItems]);
    } else {
      setItems(initialItems);
      localStorage.setItem(storageKey, JSON.stringify(initialItems));
    }
    setHasUnsavedChanges(false);`,
`    const stored = localStorage.getItem(storageKey);
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
    initializeStore(selectedBranchId, finalItems);`);

// 5. Remove manual sync methods as Zustand handles it
content = content.replace(/  \/\/ --- Persistence Helper ---\n([\s\S]*?)  \/\/ --- Derived State ---/,
`  const handleAddItem = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newItem.name) return;

    const priceNum = Number(newItem.price);
    if (isNaN(priceNum) || priceNum <= 0) {
      alert("Price must be a positive number greater than 0.");
      return;
    }

    const id = \`new_\${Date.now()}\`;
    const itemToAdd: MenuItemEntity = {
      id,
      name: newItem.name || 'Untitled',
      sku: \`SKU-\${Math.floor(Math.random() * 10000)}\`,
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

  // --- Derived State ---`);

// 6. Update Render buttons
content = content.replace(
`                 <button 
                    onClick={syncChanges}
                    disabled={!hasUnsavedChanges}
                    className={\`flex items-center justify-center px-5 py-2.5 rounded-full text-xs font-bold uppercase tracking-widest transition-all \${hasUnsavedChanges ? 'bg-white text-black hover:bg-neutral-200' : 'bg-neutral-800 text-neutral-500 cursor-not-allowed'}\`}
                 >
                    {isSaved ? <span className="flex items-center gap-2"><CheckCircle size={14} /> Saved</span> : 'Save Changes'}
                 </button>`,
`                 <button 
                    disabled={true}
                    className={\`flex items-center justify-center px-5 py-2.5 rounded-full text-xs font-bold uppercase tracking-widest transition-all min-w-[140px] \${
                       syncStatus.state === 'saving' ? 'bg-[#c5a059] text-black' : 
                       syncStatus.state === 'error' ? 'bg-red-500 text-white' : 
                       syncStatus.state === 'saved' ? 'bg-green-600 text-white' :
                       'bg-neutral-800 text-neutral-500 cursor-not-allowed'
                    }\`}
                 >
                    {syncStatus.state === 'saving' && <span className="flex items-center gap-2 animate-pulse"><div className="w-2 h-2 rounded-full bg-black"></div> Saving</span>}
                    {syncStatus.state === 'saved' && <span className="flex items-center gap-2"><CheckCircle size={14} /> Saved</span>}
                    {syncStatus.state === 'error' && <span className="flex items-center gap-1"><X size={14} /> Failed - Retry</span>}
                    {syncStatus.state === 'idle' && 'Saved'}
                 </button>`);

// 7. Update table mapping 
content = content.replace(
`                    <tbody className="divide-y divide-neutral-800">
                      {filteredItems.map((item) => (
                        <tr 
                          key={item.id} 
                          className={\`transition-colors group \${['sold_out', 'out_of_stock'].includes(item.status) ? 'bg-red-900/10 opacity-75' : 'hover:bg-neutral-800/30'} \${!item.isVisible ? 'opacity-50 grayscale' : ''}\`}
                        >
                          <td className="p-4">
                            <div className="flex items-center gap-4">
                              <div className="w-10 h-10 rounded-lg bg-neutral-800 overflow-hidden relative">
                                <img src={item.image} alt={item.name} className={\`w-full h-full object-cover object-center transition-opacity grayscale \${['sold_out', 'out_of_stock'].includes(item.status) ? 'grayscale' : 'group-hover:grayscale-0'}\`} />
                                {['sold_out', 'out_of_stock'].includes(item.status) && (
                                   <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                                      <Ban size={16} className="text-white" />
                                   </div>
                                )}
                              </div>
                              <div>
                                  <span className={\`text-sm font-medium \${['sold_out', 'out_of_stock'].includes(item.status) ? 'text-neutral-400 line-through' : 'text-white'}\`}>{item.name}</span>
                                  <span className="block text-[9px] text-neutral-400 uppercase tracking-wider font-bold">{item.status.replace('_', ' ')}</span>
                              </div>
                            </div>
                          </td>
                          <td className="p-4 hidden sm:table-cell">
                            <span className={\`px-2 py-1 rounded-md text-[10px] font-bold uppercase tracking-wider \${
                              item.publishStatus === 'draft' ? 'bg-yellow-900/30 text-yellow-500 border border-yellow-900/50' : 
                              item.publishStatus === 'archived' ? 'bg-neutral-800 text-neutral-400 border border-neutral-700' :
                              'bg-green-900/30 text-green-500 border border-green-900/50'
                            }\`}>
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
                               onClick={() => toggleVisibility(item.id)}
                               className={\`relative inline-flex h-5 w-9 items-center rounded-full transition-colors focus:outline-none \${item.isVisible ? 'bg-[#c5a059]' : 'bg-neutral-700'}\`}
                             >
                               <span className={\`inline-block h-3 w-3 transform rounded-full bg-black transition-transform \${item.isVisible ? 'translate-x-5' : 'translate-x-1'}\`} />
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
                                 <div className="px-4 py-2 border-b border-neutral-800">
                                     <label className="text-[10px] uppercase text-neutral-500 mb-1 block">Status</label>
                                     <select 
                                       className="w-full bg-neutral-900 border border-neutral-700 rounded p-1.5 text-xs text-white"
                                       value={item.status}
                                       onChange={(e) => updateStatus(item.id, e.target.value as AdminItem['status'])}
                                     >
                                        <option value="available">Available</option>
                                        <option value="sold_out">Sold Out</option>
                                        <option value="out_of_stock">Out of Stock</option>
                                        <option value="coming_soon">Coming Soon</option>
                                        <option value="few_stocks_left">Few Stocks Left</option>
                                        <option value="new">New</option>
                                     </select>
                                 </div>
                                 <button 
                                    onClick={() => handleDelete(item.id)}
                                    className="px-4 py-3 text-left text-xs text-red-500 hover:bg-neutral-900 transition-colors"
                                  >
                                     Delete Item
                                 </button>
                              </div>
                            )}
                          </td>
                        </tr>
                      ))}
                    </tbody>`,
`                    <tbody className="divide-y divide-neutral-800">
                      {filteredItems.map((item) => (
                        <AdminProductRow key={item.id} productId={item.id} />
                      ))}
                    </tbody>`);

// 8. Remove the old EditPrice modal code and toast
content = content.replace(/        \{\/\* Toast Notification \*\/\}[\s\S]*?        \{\/\* Header \(Sticky\) \*\/\}/, '        {/* Header (Sticky) */}');
content = content.replace(/        \{\/\* Edit Price Modal \*\/\}[\s\S]*?        \{\/\* Add Item Modal \*\/\}/, '        {/* Add Item Modal */}');

fs.writeFileSync('components/AdminDashboard.tsx', content);
