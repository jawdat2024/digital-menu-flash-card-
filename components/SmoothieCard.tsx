import React from 'react';
import { MenuItem } from '../types';
import CurrencySymbol from './CurrencySymbol';

interface SmoothieCardProps {
  item: MenuItem;
  index?: number;
}

const SmoothieCard: React.FC<SmoothieCardProps> = ({ item, index = 0 }) => {
  const animationDelay = `${index * 50}ms`;

  return (
    <div 
      className={`group relative w-full h-[450px] flex flex-col bg-black rounded-[30px] overflow-hidden transition-all duration-500 ease-luxury border border-white/10
      ${(item.isSoldOut || item.status === 'Sold Out' || item.status === 'Coming Soon')
          ? 'grayscale opacity-60 pointer-events-none' 
          : 'hover:border-white/30 hover:-translate-y-1'
      }`}
      style={{
        animation: `fadeUpIn 0.8s cubic-bezier(0.25, 1, 0.5, 1) forwards`,
        opacity: 0,
        animationDelay
      }}
    >
      {/* NEW Badge */}
      {item.badge && !item.isSoldOut && (
        <div className="absolute top-4 left-4 z-20 bg-white text-black px-3 py-1 rounded-sm shadow-md">
          <span className="text-[9px] font-bold uppercase tracking-[0.2em] leading-none">{item.badge}</span>
        </div>
      )}

      {/* Top Half: High-quality product photo */}
      <div className="h-[55%] w-full relative overflow-hidden bg-neutral-900">
        {item.image && (
          <img 
            src={item.image} 
            alt={item.name}
            className="w-full h-full object-cover object-center transition-transform duration-[1.5s] ease-luxury group-hover:scale-105"
            loading="lazy"
          />
        )}
        
        {/* Subtle gradient overlay behind the product */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-90" />
      </div>

      {/* Bottom Half: Solid black rounded card */}
      <div className="flex-1 flex flex-col p-6 relative -mt-6 bg-black rounded-t-[30px] z-10">
        <div className="flex-1">
          <h3 className="font-didone text-2xl font-bold text-white uppercase tracking-wide leading-tight mb-2">
            {item.name}
          </h3>
          <p className="text-xs text-neutral-400 font-sans leading-relaxed line-clamp-3">
            {item.ingredients}
          </p>
        </div>

        {/* Price */}
        <div className="flex items-end justify-between mt-4">
          <div className="flex items-center gap-1 text-2xl font-bold tracking-tight text-white">
            <CurrencySymbol className="w-5 h-5" strokeWidth={2.5} />
            <span>{item.price}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SmoothieCard;
