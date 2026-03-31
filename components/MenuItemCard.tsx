
import React from 'react';
import { MenuItem } from '../types';
import { Flame } from 'lucide-react';
import CurrencySymbol from './CurrencySymbol';

interface MenuItemCardProps {
  item: MenuItem;
}

const MenuItemCard: React.FC<MenuItemCardProps> = ({ item }) => {
  return (
    <div className="flex flex-col h-full bg-white rounded-[32px] overflow-hidden relative group hover:shadow-2xl transition-all duration-500 ease-out transform hover:-translate-y-1 p-2">
        {/* Badge */}
        {item.badge && (
            <div className="absolute top-6 right-6 z-20 bg-black/90 backdrop-blur-sm text-white border border-white/10 shadow-xl text-[9px] font-bold uppercase tracking-[0.2em] px-3 py-1.5 rounded-full">
                 {item.badge}
            </div>
        )}

        {/* Top Half: Image Area */}
        <div className="h-[280px] w-full bg-white relative overflow-hidden flex items-center justify-center rounded-t-[24px]">
             {item.image ? (
               <img 
                 src={item.image} 
                 alt={item.name} 
                 className="w-full h-full object-cover object-center transition-transform duration-1000 ease-out group-hover:scale-105"
                 loading="lazy"
               />
             ) : (
               <div className="w-full h-full flex items-center justify-center bg-neutral-50">
                  <span className="font-didone text-3xl text-neutral-200 font-bold tracking-widest">CARTEL</span>
               </div>
             )}
             
             {/* Overlays */}
             {(item.isSoldOut || item.status === 'Sold Out') && (
                 <div className="absolute inset-0 bg-white/60 backdrop-blur-[2px] flex items-center justify-center z-10">
                     <span className="text-black uppercase tracking-[0.3em] font-bold border border-black/30 px-6 py-3 text-xs bg-white/50 rounded-full">Sold Out</span>
                 </div>
             )}

             {item.status === 'Coming Soon' && (
                 <div className="absolute inset-0 bg-white/60 backdrop-blur-[2px] flex items-center justify-center z-10">
                     <span className="text-black uppercase tracking-[0.3em] font-bold border border-black/30 px-6 py-3 text-xs bg-white/50 rounded-full">Coming Soon</span>
                 </div>
             )}
        </div>

        {/* Bottom Half: Black Container */}
        <div className="bg-black flex-1 flex flex-col p-6 md:p-8 relative z-10 rounded-[24px] mt-2">
            <div className="flex flex-col items-center justify-center text-center w-full flex-1">
                <h3 className="font-didone text-2xl md:text-3xl font-bold tracking-wide text-white mb-5">{item.name}</h3>
                
                <div className="w-full h-px bg-neutral-800 mb-5"></div>
                
                {item.price && (
                    <div className="flex items-center gap-1 text-lg font-light tracking-widest text-neutral-300 mb-4">
                        <CurrencySymbol className="w-4 h-4" />
                        <span>{item.price}</span>
                    </div>
                )}
                
                {item.ingredients && (
                    <p className="text-xs text-neutral-400 font-sans leading-relaxed line-clamp-3 mb-6 max-w-[95%]">
                        {item.ingredients}
                    </p>
                )}
            </div>
            
            <div className="mt-auto pt-2 flex items-center justify-center gap-2 text-neutral-400">
                <Flame size={14} className="text-neutral-500" />
                <span className="text-[10px] font-medium uppercase tracking-widest">
                    EST. {item.calories || 0}
                </span>
            </div>
        </div>
    </div>
  );
};

export default MenuItemCard;
