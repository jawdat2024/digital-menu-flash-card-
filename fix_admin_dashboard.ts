import fs from 'fs';

let content = fs.readFileSync('components/AdminDashboard.tsx', 'utf8');

// Replace active/isSoldOut with new types
content = content.replace("active: boolean;\n  isSoldOut: boolean;", "isVisible: boolean;\n  status: 'available' | 'sold_out' | 'out_of_stock' | 'coming_soon' | 'few_stocks_left' | 'new';");

// Replace new item state
content = content.replace(
`    active: true,
    isSoldOut: false,`,
`    isVisible: true,
    status: 'available',`);

// In processItem
content = content.replace(
`        active: !item.isSoldOut,
        isSoldOut: !!item.isSoldOut,`,
`        isVisible: item.isVisible !== false,
        status: item.status ? item.status.toString().toLowerCase().replace(' ', '_') : (item.isSoldOut ? 'sold_out' : 'available'),`);

// In storage load
content = content.replace(
`        return storedItem ? { ...item, active: storedItem.active, isSoldOut: storedItem.isSoldOut, price: storedItem.price, publishStatus: storedItem.publishStatus || 'published' } : item;`,
`        return storedItem ? { ...item, 
          isVisible: storedItem.isVisible !== undefined ? storedItem.isVisible : (storedItem as any).active !== false,
          status: storedItem.status || ((storedItem as any).isSoldOut ? 'sold_out' : 'available'), 
          price: storedItem.price, 
          publishStatus: storedItem.publishStatus || 'published' 
        } : item;`);

// function toggleStatus
content = content.replace(
`  const toggleStatus = (id: string | number) => {
    const updated = items.map(item => 
      item.id === id ? { ...item, active: !item.active } : item
    );`,
`  const toggleVisibility = (id: string | number) => {
    const updated = items.map(item => 
      item.id === id ? { ...item, isVisible: !item.isVisible } : item
    );`);
    
// old toggleSoldOut replacement
content = content.replace(
`  const toggleSoldOut = (id: string | number) => {
    const updated = items.map(item => 
      item.id === id ? { ...item, isSoldOut: !item.isSoldOut } : item
    );
    saveToStorage(updated);
    setActiveMenuId(null);
  };`,
`  const updateStatus = (id: string | number, newStatus: AdminItem['status']) => {
    const updated = items.map(item => 
      item.id === id ? { ...item, status: newStatus } : item
    );
    saveToStorage(updated);
    setActiveMenuId(null);
  };`);

// handleAddItem
content = content.replace(
`      active: true,
      isSoldOut: false,`,
`      isVisible: newItem.isVisible !== false,
      status: newItem.status || 'available',`);

// Reset after add
content = content.replace(`{ name: '', category: selectedCategory || 'Signature drink', price: 0, image: '', publishStatus: 'draft' }`, `{ name: '', category: selectedCategory || 'Signature drink', price: 0, image: '', isVisible: true, status: 'available', publishStatus: 'draft' }`);

// render row background
content = content.replace(
`                          <tr 
                            key={item.id} 
                            className={\`transition-colors group \${item.isSoldOut ? 'bg-red-900/10 opacity-75' : 'hover:bg-neutral-800/30'}\`}
                          >`,
`                          <tr 
                            key={item.id} 
                            className={\`transition-colors group \${['sold_out', 'out_of_stock'].includes(item.status) ? 'bg-red-900/10 opacity-75' : 'hover:bg-neutral-800/30'} \${!item.isVisible ? 'opacity-50 grayscale' : ''}\`}
                          >`);
                          
// Item Image & Status mapping
content = content.replace(
`                                <div className="w-10 h-10 rounded-lg bg-neutral-800 overflow-hidden relative">
                                  <img src={item.image} alt={item.name} className={\`w-full h-full object-cover object-center transition-opacity grayscale \${item.isSoldOut ? 'grayscale' : 'group-hover:grayscale-0'}\`} />
                                  {item.isSoldOut && (
                                     <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                                        <Ban size={16} className="text-white" />
                                     </div>
                                  )}
                                </div>
                                <div>
                                    <span className={\`text-sm font-medium \${item.isSoldOut ? 'text-neutral-400 line-through' : 'text-white'}\`}>{item.name}</span>
                                    {item.isSoldOut && <span className="block text-[9px] text-red-400 uppercase tracking-wider font-bold">Sold Out</span>}
                                </div>`,
`                                <div className="w-10 h-10 rounded-lg bg-neutral-800 overflow-hidden relative">
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
                                </div>`);

// isVisible toggle button
content = content.replace(
`                               <button 
                                 onClick={() => toggleStatus(item.id)}
                                 className={\`relative inline-flex h-5 w-9 items-center rounded-full transition-colors focus:outline-none \${item.active ? 'bg-[#c5a059]' : 'bg-neutral-700'}\`}
                               >
                                 <span className={\`inline-block h-3 w-3 transform rounded-full bg-black transition-transform \${item.active ? 'translate-x-5' : 'translate-x-1'}\`} />
                               </button>`,
`                               <button 
                                 onClick={() => toggleVisibility(item.id)}
                                 className={\`relative inline-flex h-5 w-9 items-center rounded-full transition-colors focus:outline-none \${item.isVisible ? 'bg-[#c5a059]' : 'bg-neutral-700'}\`}
                               >
                                 <span className={\`inline-block h-3 w-3 transform rounded-full bg-black transition-transform \${item.isVisible ? 'translate-x-5' : 'translate-x-1'}\`} />
                               </button>`);

// Dropdown Action Menu
content = content.replace(
`                                 <button 
                                    onClick={() => toggleSoldOut(item.id)}
                                    className="px-4 py-3 text-left text-xs text-neutral-300 hover:bg-neutral-900 hover:text-white transition-colors border-b border-neutral-800 flex items-center justify-between"
                                  >
                                     {item.isSoldOut ? 'Mark In Stock' : 'Mark Sold Out'}
                                     {item.isSoldOut ? <CheckCircle size={12} /> : <Ban size={12} />}
                                 </button>`,
`                                 <div className="px-4 py-2 border-b border-neutral-800">
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
                                 </div>`);


// Fix Add item modal Status selection
content = content.replace(
`                      <div>
                          <label className="text-[10px] uppercase tracking-widest text-neutral-500 mb-2 block">Status</label>
                          <select 
                            className="w-full bg-neutral-900 border border-neutral-800 rounded-lg p-3 text-white text-sm focus:border-[#c5a059] outline-none"
                            value={newItem.publishStatus}
                            onChange={e => setNewItem({...newItem, publishStatus: e.target.value as any})}
                          >
                              <option value="draft">Draft</option>
                              <option value="published">Published</option>
                          </select>
                      </div>`,
`                      <div>
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
                      </div>`);
                      
fs.writeFileSync('components/AdminDashboard.tsx', content);
