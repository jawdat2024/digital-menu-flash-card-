
import React, { useState } from 'react';
import { MenuItem } from '../types';
import { Flame } from 'lucide-react';
import CurrencySymbol from './CurrencySymbol';

interface MenuItemCardProps {
  item: MenuItem;
}

const MenuItemCard: React.FC<MenuItemCardProps> = ({ item }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
    setTimeout(() => setIsAnimating(true), 10);
  };

  const closeModal = (e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    setIsAnimating(false);
    setTimeout(() => setIsModalOpen(false), 400);
  };

  if (item.isVisible === false) {
    return null;
  }

  const normalizedStatus = item.status?.toString().toLowerCase().replace(' ', '_');
  const isUnavailable = item.isSoldOut || normalizedStatus === 'sold_out' || normalizedStatus === 'out_of_stock';
  const isComingSoon = normalizedStatus === 'coming_soon';
  const isNew = normalizedStatus === 'new';

  return (
    <div 
      onClick={isUnavailable || isComingSoon ? undefined : openModal}
      className={`flex flex-col h-full bg-white rounded-[32px] overflow-hidden relative group transition-all duration-500 ease-out transform p-2 ${isUnavailable || isComingSoon ? 'cursor-not-allowed opacity-90' : 'hover:shadow-2xl hover:-translate-y-1 cursor-pointer'}`}>
        
        {['57', '65', '66'].includes(item.price?.toString() || '') && (
            <div className="absolute top-3 left-3 sm:top-6 sm:left-6 z-20 bg-black text-white shadow-xl text-[7px] sm:text-[9px] font-bold uppercase tracking-[0.2em] px-2 py-1 sm:px-3 sm:py-1.5 rounded-full border border-white/20">
                 THE UNIQUE
            </div>
        )}

        {isNew && (
            <div className="absolute top-3 right-3 sm:top-6 sm:right-6 z-20 bg-black text-white shadow-xl text-[7px] sm:text-[9px] font-bold uppercase tracking-[0.2em] px-2 py-1 sm:px-3 sm:py-1.5 rounded-full">
                 NEW
            </div>
        )}

        {/* Top Half: Image Area */}
        <div className="h-[140px] sm:h-[200px] md:h-[280px] w-full bg-white relative overflow-hidden flex items-center justify-center rounded-t-[24px]">
             {item.image ? (
               <img 
                 src={item.image} 
                 alt={item.name} 
                 className={`w-full h-full object-cover object-center transition-transform duration-1000 ease-out ${isUnavailable ? 'grayscale opacity-50' : ''}`}
                 style={{ transform: 'scale(1.2)' }}
                 loading="lazy"
               />
             ) : (
               <div className="w-full h-full flex items-center justify-center bg-neutral-50">
                  <span className="font-didone text-3xl text-neutral-200 font-bold tracking-widest">CARTEL</span>
               </div>
             )}
             
             {/* Overlays */}
             {isUnavailable && (
                 <div className="absolute inset-0 bg-white/40 backdrop-blur-[2px] flex items-center justify-center z-10">
                     <span className="text-black uppercase tracking-[0.3em] font-bold border border-black/30 px-3 py-1.5 sm:px-6 sm:py-3 text-[8px] sm:text-xs bg-white/70 rounded-full">
                       {normalizedStatus === 'out_of_stock' ? 'Unavailable' : 'Sold Out'}
                     </span>
                 </div>
             )}

             {isComingSoon && (
                 <div className="absolute inset-0 bg-white/40 backdrop-blur-[2px] flex items-center justify-center z-10">
                     <span className="text-black uppercase tracking-[0.3em] font-bold border border-black/30 px-3 py-1.5 sm:px-6 sm:py-3 text-[8px] sm:text-xs bg-white/70 rounded-full">Available Soon</span>
                 </div>
             )}
        </div>

        {/* Bottom Half: Black Container */}
        <div className="bg-black flex-1 flex flex-col p-3 sm:p-5 md:p-8 relative z-10 rounded-[24px] mt-1 sm:mt-2">
            <div className="flex flex-col items-center justify-center text-center w-full flex-1">
                <h3 className="font-didone text-[13px] sm:text-lg md:text-2xl font-bold tracking-wide text-white mb-2 sm:mb-5 line-clamp-2">{item.name}</h3>
                
                <div className="w-full h-px bg-neutral-800 mb-2 sm:mb-5 hidden sm:block"></div>
                
                {isComingSoon ? (
                    <div className="flex items-center justify-center text-[9px] sm:text-xs font-light tracking-widest text-neutral-400 mb-2 sm:mb-4 uppercase">
                        Available Soon
                    </div>
                ) : item.price ? (
                    <div className="flex items-center justify-center gap-1 text-[11px] sm:text-sm md:text-lg font-light tracking-widest text-neutral-300 mb-2 sm:mb-4">
                        <CurrencySymbol className="w-3 h-3 sm:w-4 sm:h-4" />
                        <span>{item.price}</span>
                    </div>
                ) : null}
                
                {item.ingredients && (
                    <p className="text-[9px] sm:text-xs text-neutral-400 font-sans leading-relaxed line-clamp-2 sm:line-clamp-3 mb-1 sm:mb-2 max-w-[95%]">
                        {item.ingredients}
                    </p>
                )}
                
                {(item.tastingNotes || item.notes) && (
                    <p className="text-[8px] sm:text-[10px] text-neutral-500 font-serif italic leading-relaxed line-clamp-1 sm:line-clamp-2 mb-2 sm:mb-6 max-w-[95%] tracking-wide">
                        Notes: {item.tastingNotes || item.notes}
                    </p>
                )}
            </div>
            
            <div className="mt-auto pt-2 flex items-center justify-center gap-1 sm:gap-2 text-neutral-400">
                <Flame size={12} className="text-neutral-500 sm:w-[14px]" />
                <span className="text-[8px] sm:text-[10px] font-medium uppercase tracking-widest">
                    EST. {item.calories || 0}
                </span>
            </div>
        </div>

      {/* Modal Overlay */}
      {isModalOpen && (
        <div 
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6"
          onClick={closeModal}
          style={{
            backgroundColor: 'rgba(0, 0, 0, 0.7)',
            opacity: isAnimating ? 1 : 0,
            transition: 'opacity 0.4s ease-in-out'
          }}
        >
          <div 
            className="bg-white border border-neutral-200 rounded-2xl p-6 w-full max-w-md md:max-w-lg relative shadow-2xl"
            onClick={(e) => e.stopPropagation()}
            style={{
              opacity: isAnimating ? 1 : 0,
              transform: isAnimating ? 'translateY(0)' : 'translateY(20px)',
              transition: 'opacity 0.4s ease-in-out, transform 0.4s ease-in-out'
            }}
          >
            <button 
              onClick={closeModal}
              className="absolute top-4 right-4 text-neutral-400 hover:text-black transition-colors"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
            </button>
            <h3 className="text-xl font-bold text-black mb-4 pr-6 font-didone uppercase tracking-wide">
              {item.name}
            </h3>
            <div className="text-sm text-neutral-600 font-sans leading-relaxed max-h-[60vh] overflow-y-auto pr-2">
              {item.ingredients}
            </div>
          </div>
        </div>
      )}
    </div>
  );};

export default MenuItemCard;
