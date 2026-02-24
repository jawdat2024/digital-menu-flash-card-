import React from 'react';
import { Mail } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="relative z-10 bg-neutral-900/50 border-t border-white/10 mt-32 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          
          {/* Brand Section */}
          <div className="space-y-6 text-center md:text-left">
            <h2 className="text-4xl font-didone text-white tracking-widest">CARTEL</h2>
            <p className="text-neutral-500 text-xs uppercase tracking-[0.2em] leading-relaxed max-w-md mx-auto md:mx-0">
              Specialty Coffee Roasters • Abu Dhabi • Dubai
              <br />
              Crafting moments of luxury in every cup.
            </p>
          </div>

          {/* Commercial Opportunities Card */}
          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-r from-[#FFD700]/20 to-transparent blur-xl opacity-0 group-hover:opacity-20 transition-opacity duration-700"></div>
            <div className="relative bg-black border border-white/10 p-8 rounded-sm hover:border-[#FFD700]/30 transition-colors duration-500">
              <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
                
                {/* Avatar / Initials */}
                <div className="w-16 h-16 rounded-full bg-neutral-800 flex items-center justify-center border border-white/5">
                  <span className="font-didone text-2xl text-[#FFD700]">N</span>
                </div>

                <div className="flex-1 text-center md:text-left space-y-2">
                  <h3 className="text-lg font-didone text-white tracking-wide">Commercial Opportunities</h3>
                  <div className="space-y-0.5">
                    <p className="text-sm font-bold text-white">Nasser AlMaskri</p>
                    <p className="text-[10px] uppercase tracking-widest text-[#FFD700]">Chief Executive Officer</p>
                  </div>
                  
                  <div className="pt-4">
                    <a 
                      href="mailto:info@cartel.ae" 
                      className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-white border-b border-white/30 pb-1 hover:text-[#FFD700] hover:border-[#FFD700] transition-all"
                    >
                      <Mail size={14} />
                      <span>Email Us</span>
                    </a>
                  </div>
                </div>

              </div>
            </div>
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
