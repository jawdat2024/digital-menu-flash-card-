import React, { useState } from 'react';
import { MenuItem } from '../types';
import { SlidersHorizontal, Flame, Sparkles } from 'lucide-react';
import CurrencySymbol from './CurrencySymbol';

interface FlipCardProps {
  item: MenuItem;
  index?: number;
}

const FlipCard: React.FC<FlipCardProps> = ({ item, index = 0 }) => {
  const [triggerSparkle, setTriggerSparkle] = useState(false);
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
  const hasVariants = (item.variants && item.variants.length > 0) || (item.customizations && item.customizations.length > 0);
  const animationDelay = `${index * 50}ms`;
  const isFilterTap = item.id.startsWith('tap_');
  const isColdBrew = item.id.includes('_cb') || item.id.startsWith('cb_') || item.id.includes('cd_') || item.name.includes('❄️');

  const handleIconTap = (e: React.MouseEvent) => {
    e.stopPropagation();
    setTriggerSparkle(true);
    setTimeout(() => setTriggerSparkle(false), 1000);
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
        onClick={openModal}
        className={`group relative w-full h-[450px] flex flex-col bg-[var(--card-bg)] rounded-[30px] overflow-hidden transition-all duration-500 ease-luxury border border-[var(--border-color)] cursor-pointer
        ${(item.isSoldOut || item.status === 'sold_out' || item.status === 'coming_soon')
            ? 'grayscale opacity-60 pointer-events-none' 
            : 'hover:border-[var(--text-primary)] hover:-translate-y-1'
        }`}
        style={{
          animation: `fadeUpIn 0.8s cubic-bezier(0.25, 1, 0.5, 1) forwards`,
          opacity: 0,
          animationDelay
        }}
      >
          {/* Badge */}
          {item.badge && !item.isSoldOut && (
             <div className="absolute top-4 left-4 z-20 bg-[var(--text-primary)] text-[var(--bg-primary)] px-3 py-1 rounded-sm shadow-md">
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
          <div className="h-[55%] w-full relative overflow-hidden bg-[var(--bg-secondary)]">
              {item.image ? (
                  <img 
                   src={item.image} 
                   alt={item.name}
                   className={`w-full h-full ${isFilterTap || isColdBrew ? 'object-contain p-4' : 'object-cover'} object-center transition-transform duration-[1.5s] ease-luxury grayscale-[20%] group-hover:grayscale-0`}
                   style={{ transform: 'scale(1.2)' }}
                   loading="lazy"
                 />
              ) : (
                  <div className="w-full h-full flex items-center justify-center bg-neutral-900">
                      <span className="font-didone text-3xl text-neutral-800 font-bold tracking-widest">CARTEL</span>
                  </div>
              )}
              
              {/* Status Overlays */}
              {(item.isSoldOut || item.status === 'sold_out') && (
                 <div className="absolute inset-0 bg-black/60 backdrop-blur-[2px] flex items-center justify-center z-10">
                     <span className="text-white uppercase tracking-[0.3em] font-bold border border-white/30 px-6 py-3 text-xs bg-black/50">Sold Out</span>
                 </div>
              )}
              {item.status === 'coming_soon' && (
                 <div className="absolute inset-0 bg-black/60 backdrop-blur-[2px] flex items-center justify-center z-10">
                     <span className="text-white uppercase tracking-[0.3em] font-bold border border-white/30 px-6 py-3 text-xs bg-black/50">Coming Soon</span>
                 </div>
              )}

              {/* Subtle Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[var(--card-bg)] via-transparent to-transparent opacity-90" />
          </div>

          {/* Content */}
          <div className={`flex-1 flex flex-col p-6 relative -mt-8 bg-[var(--card-bg)] rounded-t-2xl border-t ${isColdBrew ? 'border-blue-500/30' : 'border-[var(--border-color)]'}`}>
              <div className="flex justify-between items-start mb-2">
                 <h3 className={`text-lg font-bold text-[var(--text-primary)] tracking-wide leading-tight pr-2 flex items-center gap-2 font-didone`}>
                   {item.name}
                 </h3>
                 <div className="flex items-center gap-1 pt-1 shrink-0 text-[var(--text-primary)]">
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
                          <span key={tag} className="bg-[var(--accent-color)] text-[var(--bg-primary)] text-[8px] font-bold uppercase tracking-widest px-2 py-0.5 rounded-sm">
                            {tag}
                          </span>
                        ))}
                      </div>
                   )}

                   {/* Origin & Farm */}
                   <div className="text-[10px] uppercase tracking-widest text-[var(--accent-color)] font-bold">
                      {item.origin} {item.farm && <span className="text-[var(--text-secondary)]">• {item.farm}</span>}
                   </div>

                   {/* Tasting Notes */}
                   {item.tastingNotes && (
                     <p className="text-sm text-[var(--text-primary)] font-sans italic leading-relaxed">
                       "{item.tastingNotes}"
                     </p>
                   )}

                   {/* Tech Specs */}
                   <div className="flex flex-wrap gap-3 text-[9px] uppercase tracking-wider text-[var(--text-secondary)] border-t border-[var(--border-color)] pt-3 mt-auto mb-2">
                      {item.process && <span>Process: <span className="text-[var(--text-primary)] opacity-80">{item.process}</span></span>}
                      {item.elevation && <span className="border-l border-[var(--border-color)] pl-3">Elev: <span className="text-[var(--text-primary)] opacity-80">{item.elevation}</span></span>}
                   </div>

                   {/* Brewing Method */}
                   <p className="text-[9px] text-[var(--text-secondary)] font-sans uppercase tracking-wider mb-4">
                      {item.ingredients}
                   </p>
                </div>
              ) : (
                /* Standard Description */
                <p className="text-xs text-[var(--text-secondary)] font-sans font-medium leading-relaxed line-clamp-3 mb-6">
                    {item.ingredients}
                </p>
              )}

              {/* Footer Actions */}
              <div className="mt-auto pt-4 border-t border-[var(--border-color)] flex items-center justify-between min-h-[50px]">
                  <div className="flex items-center gap-2">
                     {item.calories && (
                       <div className="flex items-center gap-1.5 text-[var(--text-secondary)]">
                          <Flame size={12} />
                          <span className="text-[10px] font-medium uppercase tracking-widest font-sans">EST. CAL {item.calories}</span>
                       </div>
                     )}
                  </div>
              </div>
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
            className="bg-[var(--card-bg)] border border-[var(--border-color)] rounded-2xl p-6 w-full max-w-md md:max-w-lg relative shadow-2xl"
            onClick={(e) => e.stopPropagation()}
            style={{
              opacity: isAnimating ? 1 : 0,
              transform: isAnimating ? 'translateY(0)' : 'translateY(20px)',
              transition: 'opacity 0.4s ease-in-out, transform 0.4s ease-in-out'
            }}
          >
            <button 
              onClick={closeModal}
              className="absolute top-4 right-4 text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
            </button>
            <h3 className={`text-xl font-bold text-[var(--text-primary)] mb-4 pr-6 font-didone`}>
              {item.name}
            </h3>
            <div className="text-sm text-[var(--text-secondary)] font-sans leading-relaxed max-h-[60vh] overflow-y-auto pr-2">
              {item.origin ? (
                <div className="flex flex-col gap-3">
                   {item.tags && item.tags.length > 0 && (
                      <div className="flex gap-2 mb-1">
                        {item.tags.map(tag => (
                          <span key={tag} className="bg-[var(--accent-color)] text-[var(--bg-primary)] text-[8px] font-bold uppercase tracking-widest px-2 py-0.5 rounded-sm">
                            {tag}
                          </span>
                        ))}
                      </div>
                   )}
                   <div className="text-[10px] uppercase tracking-widest text-[var(--accent-color)] font-bold">
                      {item.origin} {item.farm && <span className="text-[var(--text-secondary)]">• {item.farm}</span>}
                   </div>
                   {item.tastingNotes && (
                     <p className="text-sm text-[var(--text-primary)] font-sans italic leading-relaxed">
                       "{item.tastingNotes}"
                     </p>
                   )}
                   <div className="flex flex-wrap gap-3 text-[9px] uppercase tracking-wider text-[var(--text-secondary)] border-t border-[var(--border-color)] pt-3 mt-auto mb-2">
                      {item.process && <span>Process: <span className="text-[var(--text-primary)] opacity-80">{item.process}</span></span>}
                      {item.elevation && <span className="border-l border-[var(--border-color)] pl-3">Elev: <span className="text-[var(--text-primary)] opacity-80">{item.elevation}</span></span>}
                   </div>
                   <p className="text-[9px] text-[var(--text-secondary)] font-sans uppercase tracking-wider mb-4">
                      {item.ingredients}
                   </p>
                </div>
              ) : (
                item.ingredients
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );};

export default FlipCard;