import React from 'react';
import { Mail } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="relative z-10 bg-neutral-900/50 border-t border-white/10 mt-32 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-center gap-12">
          
          {/* Brand Section */}
          <div className="space-y-6 text-center">
            <h2 className="text-4xl font-didone text-white tracking-widest">CARTEL</h2>
            <p className="text-neutral-500 text-xs uppercase tracking-[0.2em] leading-relaxed max-w-md mx-auto">
              Specialty Coffee Roasters • Abu Dhabi • Dubai
              <br />
              Crafting moments of luxury in every cup.
            </p>
          </div>

        </div>

        <div className="mt-16 pt-8 border-t border-white/5 text-center">
          <p className="text-[10px] text-neutral-600 uppercase tracking-widest">
            © 2024 Cartel Coffee Roasters. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
