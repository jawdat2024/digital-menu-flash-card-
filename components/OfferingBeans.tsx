import React from 'react';
import { BRANCH_ESPRESSO_BEANS } from '../constants';
import { Branch } from '../types';

interface OfferingBeansProps {
  activeBranch?: Branch | null;
}

const OfferingBeans: React.FC<OfferingBeansProps> = ({ activeBranch }) => {
  // Determine which beans to show based on the active branch
  const branchId = activeBranch?.id || 'dubai';
  // Fallback to dubai if branch not found in BRANCH_ESPRESSO_BEANS
  const rawOfferingBeansData = BRANCH_ESPRESSO_BEANS[branchId] || BRANCH_ESPRESSO_BEANS['dubai'] || [];
  
  const offeringBeansData = [...rawOfferingBeansData].sort((a, b) => {
    const priceA = parseFloat(a.price) || 0;
    const priceB = parseFloat(b.price) || 0;
    return priceA - priceB;
  });

  if (!offeringBeansData || offeringBeansData.length === 0) return null;

  return (
    <div className="w-full mb-12">
      <div className="-mx-4 px-4 sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8 overflow-hidden">
        <div className="flex overflow-x-auto snap-x snap-mandatory [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] gap-4 pb-4 md:grid md:grid-cols-4 md:gap-6 md:pb-0">
          {offeringBeansData.map((bean, idx) => (
            <div 
              key={idx} 
              className="flex-none w-[75vw] sm:w-[45vw] md:w-auto md:flex-1 flex flex-col border border-neutral-200 dark:border-neutral-800/50 rounded-2xl p-5 bg-[var(--bg-primary)] snap-center transition-all duration-300 hover:border-neutral-300 dark:hover:border-neutral-700"
            >
            <div className="flex justify-between items-start mb-3 gap-2">
              <h3 className="text-xs sm:text-sm font-sans tracking-[0.1em] font-medium text-[var(--text-primary)] uppercase leading-tight">
                {bean.name}
              </h3>
              <div className="flex items-center gap-2">
                {bean.isUnique && (
                  <span className="text-[9px] font-bold text-white bg-amber-500 px-1.5 py-0.5 rounded-sm uppercase tracking-wider">
                    UNIQUE
                  </span>
                )}
                <span className="text-[10px] sm:text-xs font-mono tracking-wider whitespace-nowrap text-[var(--text-secondary)] bg-neutral-100 dark:bg-neutral-900 px-2 py-1 rounded-sm">
                  {bean.price}
                </span>
              </div>
            </div>
            <p className="text-[10px] sm:text-xs text-[var(--text-secondary)] leading-relaxed font-sans">
              {bean.notes}
            </p>
          </div>
        ))}
        </div>
      </div>
    </div>
  );
};

export default OfferingBeans;
