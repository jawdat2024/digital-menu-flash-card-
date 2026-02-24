import React from 'react';

interface CurrencySymbolProps {
  className?: string;
  strokeWidth?: number;
}

const CurrencySymbol: React.FC<CurrencySymbolProps> = ({ className = "w-6 h-6", strokeWidth = 2.5 }) => (
  <svg 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth={strokeWidth} 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    className={className}
    aria-label="UAE Dirham"
  >
    {/* Stylized D shape */}
    <path d="M7 4h5a8 8 0 0 1 8 8 8 8 0 0 1 -8 8H7V4z" />
    {/* Horizontal crossing lines */}
    <path d="M5 10h6" />
    <path d="M5 14h6" />
  </svg>
);

export default CurrencySymbol;