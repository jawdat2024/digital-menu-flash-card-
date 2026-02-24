import React, { useState } from 'react';
import { MenuItem } from '../types';
import { Plus, SlidersHorizontal, Flame, Sparkles } from 'lucide-react';
import CurrencySymbol from './CurrencySymbol';

interface FlipCardProps {
  item: MenuItem;
  onAdd: (item: MenuItem) => void;
  index?: number;
}

const FlipCard: React.FC<FlipCardProps> = ({ item, onAdd, index = 0 }) => {
  const [triggerSparkle, setTriggerSparkle] = useState(false);
  const hasVariants = (item.variants && item.variants.length > 0) || (item.customizations && item.customizations.length > 0);
  const animationDelay = `${index * 50}ms`;

  const handleIconTap = (e: React.MouseEvent) => {
    e.stopPropagation();
    setTriggerSparkle(true);
    setTimeout(() => setTriggerSparkle(false), 1000);
  };

  const handleAddClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (!item.isSoldOut) {
        onAdd(item);
    }
  };

  return (
    <>
      <style>
        {`
          @keyframes fadeUpIn {
            0% { opacity: 0; transform: translateY(20px); }
            100% { opacity: 1; transform: translateY(0); }
          }
        `}
      </style>
      <div 
        className={`group relative w-full h-[450px] flex flex-col bg-black rounded-[30px] overflow-hidden transition-all duration-500 ease-luxury border border-white/20
        ${item.isSoldOut 
            ? 'grayscale opacity-60 pointer-events-none' 
            : 'hover:border-white hover:-translate-y-1'
        }`}
        style={{
          animation: `fadeUpIn 0.8s cubic-bezier(0.25, 1, 0.5, 1) forwards`,
          opacity: 0,
          animationDelay
        }}
      >
          {/* Badge */}
          {item.badge && !item.isSoldOut && (
             <div className="absolute top-4 left-4 z-20 bg-white text-black px-3 py-1 rounded-sm shadow-md">
               <span className="text-[9px] font-bold uppercase tracking-[0.2em] leading-none">{item.badge}</span>
             </div>
          )}

          {/* Cartel Icon Interaction */}
          <button 
            onClick={handleIconTap}
            className="absolute top-4 right-4 z-30 w-8 h-8 rounded-full bg-black/60 backdrop-blur-md border border-white/30 flex items-center justify-center hover:bg-white hover:text-black transition-colors duration-300 group/icon cursor-pointer text-white shadow-sm"
          >
             {triggerSparkle ? <Sparkles size={14} className="animate-spin" /> : <span className="font-didone font-bold text-[10px]">C</span>}
          </button>
          
          {/* Image Container */}
          <div className="h-[55%] w-full relative overflow-hidden bg-black">
              {item.image ? (
                 <img 
                   src={item.image} 
                   alt={item.name}
                   className={`w-full h-full object-cover transition-transform duration-[1.5s] ease-luxury grayscale-[20%] group-hover:grayscale-0 ${!item.isSoldOut && 'group-hover:scale-105'}`}
                   loading="lazy"
                 />
              ) : (
                  <div className="w-full h-full flex items-center justify-center bg-neutral-900">
                      <span className="font-didone text-3xl text-neutral-800 font-bold tracking-widest">CARTEL</span>
                  </div>
              )}
              {/* Subtle Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-90" />
          </div>

          {/* Content */}
          <div className="flex-1 flex flex-col p-6 relative -mt-8 bg-black rounded-t-2xl border-t border-white/10">
              <div className="flex justify-between items-start mb-2">
                 <h3 className="text-lg font-didone font-bold text-white tracking-wide leading-tight pr-2">
                   {item.name}
                 </h3>
                 <div className="flex items-center gap-1 pt-1 shrink-0 text-white">
                    <CurrencySymbol className="w-3.5 h-3.5" strokeWidth={2.5} />
                    <span className="text-lg font-bold leading-none font-sans">{item.price}</span>
                 </div>
              </div>

              {/* Conditional Rendering: Filter Coffee vs Standard */}
              {item.origin ? (
                <div className="flex-1 flex flex-col gap-3">
                   {/* Tags - Absolute positioned to overlap header slightly or inline */}
                   {item.tags && item.tags.length > 0 && (
                      <div className="flex gap-2 mb-1">
                        {item.tags.map(tag => (
                          <span key={tag} className="bg-[#FFD700] text-black text-[8px] font-bold uppercase tracking-widest px-2 py-0.5 rounded-sm">
                            {tag}
                          </span>
                        ))}
                      </div>
                   )}

                   {/* Origin & Farm */}
                   <div className="text-[10px] uppercase tracking-widest text-[#FFD700] font-bold">
                      {item.origin} {item.farm && <span className="text-neutral-500">• {item.farm}</span>}
                   </div>

                   {/* Tasting Notes */}
                   {item.tastingNotes && (
                     <p className="text-sm text-white font-didone italic leading-relaxed">
                       "{item.tastingNotes}"
                     </p>
                   )}

                   {/* Tech Specs */}
                   <div className="flex flex-wrap gap-3 text-[9px] uppercase tracking-wider text-neutral-500 border-t border-white/10 pt-3 mt-auto mb-2">
                      {item.process && <span>Process: <span className="text-neutral-300">{item.process}</span></span>}
                      {item.elevation && <span className="border-l border-white/20 pl-3">Elev: <span className="text-neutral-300">{item.elevation}</span></span>}
                   </div>

                   {/* Brewing Method */}
                   <p className="text-[9px] text-neutral-600 font-sans uppercase tracking-wider mb-4">
                      {item.ingredients}
                   </p>
                </div>
              ) : (
                /* Standard Description */
                <p className="text-xs text-neutral-400 font-sans font-medium leading-relaxed line-clamp-3 mb-6">
                    {item.ingredients}
                </p>
              )}

              {/* Footer Actions */}
              <div className="mt-auto pt-4 border-t border-white/10 flex items-center justify-between min-h-[50px]">
                  <div className="flex items-center gap-2">
                     {item.calories && (
                       <div className="flex items-center gap-1.5 text-neutral-500">
                          <Flame size={12} />
                          <span className="text-[10px] font-medium uppercase tracking-widest font-sans">Est. {item.calories}</span>
                       </div>
                     )}
                  </div>
                  
                  {!item.isSoldOut && (
                    <button 
                        onClick={handleAddClick}
                        className={`
                        h-9 px-5 rounded-full flex items-center justify-center transition-all duration-300 
                        bg-white text-black hover:bg-neutral-300 hover:scale-105 active:scale-95 cursor-pointer border border-transparent
                        `}
                    >
                        {hasVariants ? <SlidersHorizontal size={14} /> : <Plus size={16} />}
                        <span className="ml-2 text-[10px] font-bold uppercase tracking-widest">{hasVariants ? 'Options' : 'Add'}</span>
                    </button>
                  )}
              </div>
          </div>
      </div>
    </>
  );
};

export default FlipCard;