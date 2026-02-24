
import React from 'react';
import { MenuItem } from '../types';
import { Plus, Flame } from 'lucide-react';
import CurrencySymbol from './CurrencySymbol';

interface MenuItemCardProps {
  item: MenuItem;
  onAdd: (item: MenuItem) => void;
}

const MenuItemCard: React.FC<MenuItemCardProps> = ({ item, onAdd }) => {
  return (
    <div className="flex flex-col h-full bg-cartel-white text-black rounded-luxury overflow-hidden relative group hover:shadow-2xl transition-all duration-500 ease-luxury transform hover:-translate-y-1">
        {/* Badge */}
        {item.badge && (
            <div className="absolute top-4 right-4 z-20 bg-white/95 backdrop-blur-sm text-black border border-black/5 shadow-xl text-[9px] font-bold uppercase tracking-[0.2em] px-3 py-1.5 rounded-full">
                 {item.badge}
            </div>
        )}

        {/* Image Area */}
        <div className="h-[280px] w-full bg-neutral-100 relative overflow-hidden">
             {item.image ? (
               <img 
                 src={item.image} 
                 alt={item.name} 
                 className="w-full h-full object-cover transition-transform duration-1000 ease-luxury group-hover:scale-105"
                 loading="lazy"
               />
             ) : (
               <div className="w-full h-full flex items-center justify-center bg-neutral-200">
                  <span className="font-didone text-4xl text-neutral-300 font-bold tracking-widest opacity-50">CARTEL</span>
               </div>
             )}
             
             {/* Sold Out Overlay */}
             {item.isSoldOut && (
                 <div className="absolute inset-0 bg-black/60 backdrop-blur-[2px] flex items-center justify-center z-10">
                     <span className="text-white uppercase tracking-[0.3em] font-bold border border-white/30 px-6 py-3 text-xs bg-black/50">Sold Out</span>
                 </div>
             )}
             
             {/* Gradient Overlay for Text Contrast at bottom of image if needed, minimal here */}
             <div className="absolute inset-0 bg-gradient-to-t from-black/5 to-transparent pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
        </div>

        {/* Content Area */}
        <div className="flex-1 flex flex-col p-6 relative">
            {/* Header */}
            <div className="mb-4">
                <h3 className="font-didone text-2xl font-bold uppercase tracking-wide leading-tight mb-3">{item.name}</h3>
                <div className="w-8 h-px bg-black/10"></div>
            </div>
            
            {/* Description */}
            <p className="text-xs text-neutral-500 font-sans leading-relaxed line-clamp-3 mb-8 flex-1">
                {item.ingredients}
            </p>

            {/* Price & Action */}
            <div className="flex items-end justify-between mb-5">
                 <div className="flex flex-col">
                    {item.pricePrefix && <span className="text-[9px] uppercase tracking-widest text-neutral-400 mb-0.5">{item.pricePrefix}</span>}
                    <div className="flex items-center gap-1 text-2xl font-bold tracking-tight">
                        <CurrencySymbol className="w-5 h-5" strokeWidth={2.5} />
                        <span>{item.price}</span>
                    </div>
                 </div>
                 
                 <button 
                    onClick={() => !item.isSoldOut && onAdd(item)}
                    disabled={item.isSoldOut}
                    className="h-12 w-12 rounded-full bg-black text-white flex items-center justify-center hover:bg-neutral-800 transition-colors shadow-lg hover:scale-105 active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed group/btn"
                    aria-label="Add to order"
                >
                    <Plus size={20} className="group-hover/btn:rotate-90 transition-transform duration-300" />
                </button>
            </div>

            {/* Calorie Footer Strip */}
            {item.calories && (
                <div className="pt-3 mt-auto border-t border-neutral-100 flex items-center gap-2 text-neutral-400 select-none animate-in fade-in duration-500">
                    <Flame size={12} className="text-neutral-300" />
                    <span className="text-[10px] font-medium uppercase tracking-widest text-neutral-500/80">Est. {item.calories} kcal</span>
                </div>
            )}
        </div>
    </div>
  );
};

export default MenuItemCard;
