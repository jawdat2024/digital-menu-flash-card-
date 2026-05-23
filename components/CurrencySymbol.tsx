import React from 'react';

interface CurrencySymbolProps {
  className?: string;
  strokeWidth?: number;
}

const CurrencySymbol: React.FC<CurrencySymbolProps> = ({ className = "w-6 h-6", strokeWidth = 2.5 }) => (
  <span className="font-sans font-bold tracking-widest text-[0.8em]">AED</span>
);

export default CurrencySymbol;