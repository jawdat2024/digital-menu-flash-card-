
import React, { useState } from 'react';
import { MapPin } from 'lucide-react';
import { BRANCH_DATA } from '../constants';
import { Branch } from '../types';

interface LocationsMapProps {
  onBranchSelect: (branch: Branch) => void;
  isCompact?: boolean;
}

const PIN_POSITIONS: Record<string, { top: string; left: string }> = {
  'marina': { top: '70%', left: '25%' },
  'albateen': { top: '42%', left: '30%' },
  'alqana': { top: '55%', left: '50%' },
  'khalifa': { top: '75%', left: '70%' },
  'mirdif': { top: '25%', left: '75%' },
};

const LocationsMap: React.FC<LocationsMapProps> = ({ onBranchSelect, isCompact = false }) => {
  const [activePopup, setActivePopup] = useState<string | null>(null);

  return (
    <section className={`relative w-full bg-[#050505] overflow-hidden ${isCompact ? 'h-[500px]' : 'h-screen'} font-sans select-none`}>
      
      {/* --- BACKGROUND --- */}
      <div className="absolute inset-0 bg-[#050505]" />
      
      {/* Minimal Grid Overlay */}
      <div className="absolute inset-0 opacity-10" 
           style={{ backgroundImage: 'linear-gradient(rgba(255, 255, 255, 0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.05) 1px, transparent 1px)', backgroundSize: '50px 50px' }}>
      </div>

      {/* --- UI OVERLAYS --- */}
      
      {/* Top Logo Area */}
      <div className="absolute top-20 left-1/2 -translate-x-1/2 z-30 text-center w-full max-w-2xl pointer-events-none">
        <h1 className="text-4xl md:text-6xl font-didone font-bold tracking-[0.2em] text-white">
          CARTEL
        </h1>
        <p className="text-[10px] text-neutral-500 uppercase tracking-[0.4em] mt-2">Select Your Location</p>
      </div>

      {/* --- INTERACTIVE PINS --- */}
      <div className="absolute inset-0 z-20">
        {BRANCH_DATA.map((branch) => {
          const pos = PIN_POSITIONS[branch.id] || { top: '50%', left: '50%' };
          
          return (
            <div
              key={branch.id}
              className="absolute"
              style={{ top: pos.top, left: pos.left, transform: 'translate(-50%, -50%)' }}
            >
              {/* Main Interaction Button */}
              <button
                onClick={() => {
                    setActivePopup(branch.id);
                    onBranchSelect(branch);
                }}
                className="group outline-none focus:outline-none relative flex flex-col items-center justify-center"
              >
                
                {/* Pin Graphic */}
                <div className="relative w-12 h-12 flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
                   <div className="absolute inset-0 bg-cartel-gold/10 rounded-full animate-ping opacity-0 group-hover:opacity-100 duration-1000" />
                   
                   <div className="w-4 h-4 bg-cartel-gold rounded-full border-2 border-[#050505] shadow-[0_0_15px_rgba(212,175,55,0.6)] group-hover:bg-white transition-colors"></div>
                </div>

                {/* Floating Label */}
                <div className="mt-1 opacity-80 group-hover:opacity-100 transition-all duration-300">
                    <span className="text-[9px] font-bold uppercase tracking-widest text-neutral-300 whitespace-nowrap bg-black/60 px-3 py-1.5 rounded backdrop-blur-sm border border-white/5">
                      {branch.name.replace('CARTEL ', '')}
                    </span>
                </div>

              </button>
            </div>
          );
        })}
      </div>

    </section>
  );
};

export default LocationsMap;
