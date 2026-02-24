import React from 'react';

const RamadanDecor: React.FC = () => {
  return (
    <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
      {/* 1. Midnight Majlis Gradient: Deep Teal to Charcoal */}
      <div className="absolute inset-0 bg-gradient-to-b from-cartel-teal via-[#082226] to-cartel-charcoal" />
      
      {/* 2. Mashrabiya Pattern Overlay - Animated */}
      <div className="absolute inset-0 mashrabiya-pattern opacity-30 animate-pattern-move" />

      {/* 3. Ambient Glows */}
      <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-cartel-teal/40 rounded-full blur-[120px]" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-cartel-gold/5 rounded-full blur-[100px]" />

      {/* 4. Subtle Particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(15)].map((_, i) => (
           <div 
             key={i}
             className="absolute animate-twinkle bg-cartel-gold-light rounded-full"
             style={{
               top: `${Math.random() * 100}%`,
               left: `${Math.random() * 100}%`,
               width: `${Math.random() * 2 + 1}px`,
               height: `${Math.random() * 2 + 1}px`,
               animationDelay: `${Math.random() * 5}s`,
               opacity: Math.random() * 0.5
             }}
           />
        ))}
      </div>
    </div>
  );
};

export default RamadanDecor;