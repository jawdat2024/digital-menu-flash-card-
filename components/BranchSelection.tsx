import React from 'react';
import { MapPin } from 'lucide-react';
import { Branch } from '../types';
import { BRANCH_DATA } from '../constants';

interface BranchSelectionProps {
  onSelectBranch: (branch: Branch) => void;
}

// Manual positioning to mimic a map layout
// These percentages are approximate to create a balanced "scattered" look
const BRANCH_POSITIONS: Record<string, { top: string; left: string }> = {
  'marina': { top: '35%', left: '20%' },   // Abu Dhabi - Marina (North West)
  'albateen': { top: '48%', left: '35%' }, // Abu Dhabi - Central
  'alqana': { top: '58%', left: '50%' },   // Abu Dhabi - South East
  'khalifa': { top: '85%', left: '75%' },  // Abu Dhabi - Mainland
  'mirdif': { top: '25%', left: '80%' },   // Dubai (North East)
};

const DISPLAY_NAMES: Record<string, string> = {
  'marina': 'MARINA',
  'albateen': 'AL BATEEN',
  'alqana': 'AL QANA',
  'khalifa': 'KHALIFA CITY',
  'mirdif': 'DUBAI MIRDIF',
};

const BranchSelection: React.FC<BranchSelectionProps> = ({ onSelectBranch }) => {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col relative overflow-hidden">
      
      {/* Background Texture - Subtle Noise */}
      <div className="fixed inset-0 pointer-events-none opacity-[0.05]"
           style={{
             backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
             zIndex: 0
           }}
      />

      {/* Header */}
      <div className="relative z-20 pt-16 pb-8 text-center space-y-3">
        <h1 className="text-4xl md:text-6xl font-didone tracking-tight text-white">
          CARTEL
        </h1>
        <p className="text-[10px] md:text-xs font-sans uppercase tracking-[0.3em] text-neutral-400">
          we know our notes
        </p>
      </div>

      {/* Map Area */}
      <div className="flex-1 relative w-full max-w-5xl mx-auto">
        {BRANCH_DATA.map((branch) => {
          const position = BRANCH_POSITIONS[branch.id] || { top: '50%', left: '50%' };
          const displayName = DISPLAY_NAMES[branch.id] || branch.name;

          return (
            <button
              key={branch.id}
              onClick={() => onSelectBranch(branch)}
              className="absolute group flex flex-col items-center transform -translate-x-1/2 -translate-y-1/2 transition-all duration-500 hover:scale-110 hover:z-50"
              style={{ top: position.top, left: position.left }}
            >
              {/* Glowing Pin Icon */}
              <div className="relative mb-3">
                {/* Glow Effect */}
                <div className="absolute inset-0 bg-white rounded-full blur-md opacity-20 group-hover:opacity-50 animate-pulse"></div>
                
                {/* Pin Shape */}
                <div className="relative z-10 text-white drop-shadow-[0_0_8px_rgba(255,255,255,0.6)]">
                   <MapPin 
                    size={32} 
                    fill="currentColor" 
                    fillOpacity={0.1}
                    strokeWidth={1.5}
                   />
                </div>

                {/* Concentric Ripples (CSS) */}
                <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-8 h-2 bg-white/20 rounded-full blur-sm"></div>
              </div>
              
              {/* Label */}
              <div className="
                bg-black/80 backdrop-blur-md 
                border border-white/20 
                px-4 py-1.5 
                rounded-[20px]
                shadow-[0_4px_20px_rgba(0,0,0,0.5)]
                group-hover:border-white/50 group-hover:shadow-[0_0_15px_rgba(255,255,255,0.2)]
                transition-all duration-300
              ">
                <span className="text-[10px] md:text-xs font-sans font-medium text-white tracking-widest whitespace-nowrap">
                  {displayName}
                </span>
              </div>
            </button>
          );
        })}
      </div>

      {/* Footer */}
      <div className="relative z-20 pb-8 text-center">
        <p className="text-[9px] text-neutral-700 uppercase tracking-widest">
          Est. 2024 • Abu Dhabi • Dubai
        </p>
      </div>
    </div>
  );
};

export default BranchSelection;
