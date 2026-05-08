import React, { useState, useEffect } from 'react';
import { Ban, MoreHorizontal, Check } from 'lucide-react';
import CurrencySymbol from './CurrencySymbol';
import { useMenuStore, MenuItemEntity } from '../store/menuStore';

export const AdminProductRow = React.memo(({ productId }: { productId: string }) => {
  const item = useMenuStore(state => state.entities[productId]);
  const updateItem = useMenuStore(state => state.updateItem);
  const [activeMenuId, setActiveMenuId] = useState<string | null>(null);
  const [editingPrice, setEditingPrice] = useState<boolean>(false);
  const [priceInput, setPriceInput] = useState<string>('');

  if (!item) return null;

  const handleToggleVisibility = () => {
    updateItem(item.id, { isVisible: !item.isVisible });
  };

  const handleStatusChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    updateItem(item.id, { status: e.target.value as MenuItemEntity['status'] });
    setActiveMenuId(null);
  };

  const handlePriceSave = () => {
    const newPrice = parseFloat(priceInput);
    if (!isNaN(newPrice) && newPrice > 0) {
      updateItem(item.id, { price: newPrice });
    }
    setEditingPrice(false);
  };

  const isUnavailable = ['sold_out', 'out_of_stock'].includes(item.status);

  return (
    <tr className={`transition-colors group ${isUnavailable ? 'bg-red-900/10 opacity-75' : 'hover:bg-neutral-800/30'} ${!item.isVisible ? 'opacity-50 grayscale' : ''}`}>
      <td className="p-4">
        <div className="flex items-center gap-4">
          <div className="w-10 h-10 rounded-lg bg-neutral-800 overflow-hidden relative shrink-0">
            <img 
              src={item.image} 
              alt={item.name} 
              className={`w-full h-full object-cover object-center transition-opacity grayscale ${isUnavailable ? 'grayscale' : 'group-hover:grayscale-0'}`} 
            />
            {isUnavailable && (
               <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                  <Ban size={16} className="text-white" />
               </div>
            )}
          </div>
          <div>
              <span className={`text-sm font-medium ${isUnavailable ? 'text-neutral-400 line-through' : 'text-white'}`}>{item.name}</span>
              <span className="block text-[9px] text-neutral-400 uppercase tracking-wider font-bold">{item.status.replace('_', ' ')}</span>
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
        <div className="flex items-center gap-1 group/price">
          <CurrencySymbol className="w-3 h-3" />
          {editingPrice ? (
            <div className="flex items-center gap-2">
              <input 
                type="number" 
                value={priceInput}
                onChange={(e) => setPriceInput(e.target.value)}
                className="bg-black border border-neutral-700 rounded px-2 py-1 w-20 text-xs focus:outline-none focus:border-[#c5a059]"
                autoFocus
                onKeyDown={(e) => e.key === 'Enter' && handlePriceSave()}
                onBlur={handlePriceSave}
              />
            </div>
          ) : (
            <span 
              className="cursor-pointer border-b border-transparent hover:border-neutral-500"
              onClick={() => {
                setPriceInput(item.price.toString());
                setEditingPrice(true);
              }}
            >
              {item.price.toFixed(2)}
            </span>
          )}
        </div>
      </td>
      <td className="p-4">
         <button 
           onClick={handleToggleVisibility}
           className={`relative inline-flex h-5 w-9 items-center rounded-full transition-colors focus:outline-none ${item.isVisible ? 'bg-[#c5a059]' : 'bg-neutral-700'}`}
         >
           <span className={`inline-block h-3 w-3 transform rounded-full bg-black transition-transform ${item.isVisible ? 'translate-x-5' : 'translate-x-1'}`} />
         </button>
      </td>
      <td className="p-4 text-right relative">
        <button 
          onClick={() => setActiveMenuId(activeMenuId === item.id ? null : item.id)}
          className="text-neutral-500 hover:text-white transition-colors p-2"
        >
          <MoreHorizontal size={16} />
        </button>

        {activeMenuId === item.id && (
          <>
            {/* Backdrop to close dropdown */}
            <div className="fixed inset-0 z-40" onClick={() => setActiveMenuId(null)}></div>
            <div className="absolute right-8 top-8 w-48 bg-black border border-neutral-700 rounded-xl shadow-2xl z-50 flex flex-col py-1 animate-fade-in-up">
               <div className="px-4 py-2 border-b border-neutral-800 relative z-50">
                   <label className="text-[10px] uppercase text-neutral-500 mb-1 block">Status</label>
                   <select 
                     className="w-full bg-neutral-900 border border-neutral-700 rounded p-1.5 text-xs text-white outline-none"
                     value={item.status}
                     onChange={handleStatusChange}
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
                  onClick={() => {
                    if (window.confirm("Are you sure you want to delete this item?")) {
                      useMenuStore.getState().deleteItem(item.id);
                    }
                    setActiveMenuId(null);
                  }}
                  className="px-4 py-3 text-left text-xs text-red-500 hover:bg-neutral-900 transition-colors"
                >
                   Delete Item
               </button>
            </div>
          </>
        )}
      </td>
    </tr>
  );
});

AdminProductRow.displayName = 'AdminProductRow';
