import React from 'react';
import { X, Trash2, ArrowRight } from 'lucide-react';
import { MenuItem } from '../types';
import CurrencySymbol from './CurrencySymbol';

interface OrderTrayProps {
  isOpen: boolean;
  onClose: () => void;
  items: MenuItem[];
  onRemove: (index: number) => void;
}

const OrderTray: React.FC<OrderTrayProps> = ({ isOpen, onClose, items, onRemove }) => {
  const getPrice = (priceStr: string) => {
    const match = priceStr.match(/[\d\.]+/);
    return match ? parseFloat(match[0]) : 0;
  };

  const total = items.reduce((sum, item) => sum + getPrice(item.price), 0);

  return (
    <>
      {/* Backdrop */}
      <div 
        className={`fixed inset-0 bg-black/80 backdrop-blur-sm z-[60] transition-opacity duration-500 ${
          isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        onClick={onClose}
      />

      {/* Slide-out Panel */}
      <div 
        className={`fixed top-0 right-0 h-full w-full max-w-md bg-black border-l border-white/20 z-[70] shadow-2xl transform transition-transform duration-500 ease-luxury flex flex-col ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-white/20 bg-black">
          <h2 className="text-xl font-didone font-bold text-white tracking-wider uppercase">
            Your Tray
          </h2>
          <button onClick={onClose} className="text-neutral-400 hover:text-white transition-colors">
            <X size={24} />
          </button>
        </div>

        {/* Items List */}
        <div className="flex-1 overflow-y-auto p-6 space-y-4">
          {items.length === 0 ? (
            <div className="h-full flex flex-col items-center justify-center text-neutral-500 space-y-4">
              <span className="text-4xl font-didone opacity-30">00</span>
              <p className="text-xs uppercase tracking-widest text-neutral-600">Tray is empty</p>
            </div>
          ) : (
            items.map((item, index) => (
              <div key={`${item.id}-${index}`} className="flex gap-4 items-start group animate-in slide-in-from-right-4 fade-in duration-300 p-3 rounded-xl bg-neutral-900/50 border border-white/10">
                <div className="w-16 h-16 bg-neutral-900 rounded-lg overflow-hidden flex-shrink-0 border border-white/5">
                  <img src={item.image} alt={item.name} className="w-full h-full object-cover grayscale" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex justify-between items-start">
                    <h4 className="text-white font-sans font-bold truncate pr-2 text-sm">{item.name}</h4>
                    <div className="flex items-center gap-1 text-sm text-white font-bold">
                      <CurrencySymbol className="w-3 h-3" strokeWidth={3} />
                      <span>{item.price}</span>
                    </div>
                  </div>
                  <p className="text-[10px] text-neutral-400 line-clamp-1 mt-1 font-sans">{item.ingredients}</p>
                  <button 
                    onClick={() => onRemove(index)}
                    className="mt-2 text-[10px] uppercase tracking-wider text-neutral-500 hover:text-white flex items-center gap-1 transition-colors"
                  >
                    <Trash2 size={12} /> Remove
                  </button>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Footer / Total */}
        <div className="p-8 border-t border-white/20 bg-black">
          <div className="flex justify-between items-end mb-6">
            <span className="text-xs uppercase tracking-widest text-neutral-400">Total Estimated</span>
            <div className="flex items-center gap-2 text-white">
               <CurrencySymbol className="w-6 h-6 mb-1" strokeWidth={3} />
               <span className="text-3xl font-bold font-didone">{total.toFixed(2)}</span>
            </div>
          </div>
          <button 
            disabled={items.length === 0}
            className="w-full py-4 bg-white text-black font-bold uppercase tracking-[0.2em] text-xs rounded-full hover:shadow-lg hover:bg-neutral-200 disabled:opacity-50 disabled:cursor-not-allowed transition-all flex items-center justify-center gap-2 group shadow-sm"
          >
            Review Order
            <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    </>
  );
};

export default OrderTray;