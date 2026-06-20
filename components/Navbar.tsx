import React, { useState, useEffect } from 'react';
import { Search, MapPin, Instagram, Phone, Globe, X, Sun, Moon, RefreshCw } from 'lucide-react';
import { Branch, MenuCategory } from '../types';
import FeedbackModal from './FeedbackModal';
import { useLanguage } from './LanguageContext';

interface NavbarProps {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  activeBranch: Branch | null;
  onSwitchLocation: () => void;
  activeMenuCategories: MenuCategory[];
}

const Navbar: React.FC<NavbarProps> = ({ 
  searchQuery, 
  setSearchQuery, 
  activeBranch,
  onSwitchLocation,
  activeMenuCategories
}) => {
  const { language, t } = useLanguage();
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isFeedbackOpen, setIsFeedbackOpen] = useState(false);
  const [isInstaModalOpen, setIsInstaModalOpen] = useState(false);
  const [logoFailed, setLogoFailed] = useState(false);
  const [activeCategoryId, setActiveCategoryId] = useState('filter-taps');
  const [isDarkMode, setIsDarkMode] = useState(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('theme');
      if (saved) return saved === 'dark';
      return window.matchMedia('(prefers-color-scheme: dark)').matches;
    }
    return true;
  });

  // Phone numbers for locations
  const LOCATION_PHONES: Record<string, string> = {
    'albateen': '026435015',
    'marina': '025828627',
    'khalifa': '0508802828',
    'mirdif': '0503009922',
    'alqana': '0503009955',
  };

  useEffect(() => {
    if (isDarkMode) {
      document.body.classList.add('dark-theme');
    } else {
      document.body.classList.remove('dark-theme');
    }
  }, [isDarkMode]);

  const triggerSync = () => {
    const btn = document.getElementById('global-sync-btn');
    if (btn) {
      btn.classList.add('animate-spin');
      setTimeout(() => btn.classList.remove('animate-spin'), 500);
    }
    // Refresh the localStorage via dispatch event
    setTimeout(() => {
       window.dispatchEvent(new Event('menu-updated'));
    }, 100);
  };

  const toggleTheme = () => {
    if (isDarkMode) {
      document.body.classList.remove('dark-theme');
      localStorage.setItem('theme', 'light');
      setIsDarkMode(false);
    } else {
      document.body.classList.add('dark-theme');
      localStorage.setItem('theme', 'dark');
      setIsDarkMode(true);
    }
  };

  React.useEffect(() => {
    // Ensure 'highly-recommend' (BEST SELLER) is default if present, otherwise first category
    if (activeMenuCategories.length > 0) {
      const hasBestSeller = activeMenuCategories.some(cat => cat.id === 'highly-recommend');
      if (hasBestSeller) {
        setActiveCategoryId('highly-recommend');
      } else {
        setActiveCategoryId(activeMenuCategories[0].id);
      }
    }
  }, [activeMenuCategories]);

  const scrollToSection = (id: string) => {
    setActiveCategoryId(id);
    const element = document.getElementById(id);
    if (element) {
      const offset = 180; // Adjust for fixed header height
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <>
      <nav className="sticky top-0 w-full z-50 bg-[var(--bg-primary)]/80 backdrop-blur-xl border-b border-[var(--border-color)] shadow-sm transition-all duration-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-24 gap-2 sm:gap-4">
            
            {/* Left: Navigation Icons */}
            <div className="flex-1 flex items-center gap-2 sm:gap-4 min-w-0">
               {activeBranch && (
                <>
                   {/* Social & Contact Icons - Hidden on mobile to prevent overlap */}
                   <div className="hidden md:flex items-center gap-3 border-r border-[var(--border-color)] pr-3">
                      <button 
                        onClick={() => setIsInstaModalOpen(true)}
                        className="text-[var(--text-primary)] hover:text-[var(--accent-color)] transition-colors p-1"
                      >
                        <Instagram size={18} strokeWidth={1.5} />
                      </button>

                      <a 
                        href="https://cartel.coffee/" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-[var(--text-primary)] hover:text-[var(--accent-color)] transition-colors p-1"
                      >
                        <Globe size={18} strokeWidth={1.5} />
                      </a>
                   </div>

                   {/* Search & Location */}
                   <div className="flex items-center gap-1 sm:gap-3 shrink-0">
                     <button 
                      onClick={() => setIsSearchOpen(!isSearchOpen)}
                      className="text-[var(--text-primary)] hover:text-[var(--text-secondary)] transition-colors p-1"
                    >
                      <Search size={18} strokeWidth={1.5} />
                    </button>

                    {!isSearchOpen && (
                      <>
                        <button
                          onClick={onSwitchLocation}
                          className="flex items-center gap-1 sm:gap-2 text-[var(--text-primary)] hover:text-[var(--text-secondary)] transition-colors group p-1 animate-fade-in"
                        >
                          <MapPin size={18} strokeWidth={1.5} />
                          <span className={`${language === 'ar' ? 'font-sans text-[11px] font-semibold' : 'font-sans text-[10px]'} hidden lg:inline uppercase tracking-widest border-b border-transparent group-hover:border-[var(--border-color)] transition-all whitespace-nowrap`}>
                            {t(activeBranch.name.replace('CARTEL ', ''))}
                          </span>
                        </button>
                        
                        {LOCATION_PHONES[activeBranch.id] && (
                          <a 
                            href={`tel:${LOCATION_PHONES[activeBranch.id]}`}
                            className="text-[var(--text-primary)] hover:text-[var(--accent-color)] transition-colors p-1 flex items-center"
                          >
                            <Phone size={18} strokeWidth={1.5} />
                          </a>
                        )}
                      </>
                    )}
                   </div>
                  
                  {isSearchOpen && (
                    <input
                      type="text"
                      placeholder={t("Search...")}
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className={`bg-transparent border-b border-[var(--border-color)] text-[var(--text-primary)] text-sm focus:outline-none placeholder-[var(--text-secondary)] w-full max-w-[80px] sm:max-w-[140px] transition-all ${language === 'ar' ? 'font-sans' : 'font-sans'}`}
                      autoFocus
                      onBlur={() => !searchQuery && setIsSearchOpen(false)}
                    />
                  )}
                </>
               )}
            </div>

            {/* Center: Brand Logo */}
            <div className="flex-none flex flex-col items-center justify-center cursor-pointer group px-4 py-2" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
               <div className="flex items-center justify-center">
                 <div className="flex items-center gap-2 select-none transition-transform duration-500 group-hover:scale-[1.03]">
                   <span className="text-[26px] sm:text-[32px] md:text-[36px] font-semibold text-[var(--text-primary)] tracking-normal leading-none" style={{ fontFamily: "'Bodoni Moda', serif" }}>
                     CARTEL
                   </span>
                   <div className="flex flex-col justify-center leading-none">
                     <span className="text-[8px] sm:text-[10px] md:text-[11px] font-extrabold tracking-[0.14em] text-[var(--text-primary)] leading-[1.0]" style={{ fontFamily: "'Poppins', sans-serif" }}>
                       COFFEE
                     </span>
                     <span className="text-[8px] sm:text-[10px] md:text-[11px] font-extrabold tracking-[0.08em] text-[var(--text-primary)] leading-[1.0]" style={{ fontFamily: "'Poppins', sans-serif" }}>
                       ROASTERS
                     </span>
                   </div>
                 </div>
               </div>
            </div>

            {/* Right: Theme Toggle */}
            <div className="flex-1 flex justify-end items-center gap-2 sm:gap-4">
               {/* Hotline Feedback Button */}
               <button
                 onClick={() => setIsFeedbackOpen(true)}
                 className={`hidden sm:inline text-[10px] uppercase tracking-[0.2em] px-2 py-1 border-b border-transparent hover:border-[var(--text-primary)] text-[var(--text-primary)] transition-all whitespace-nowrap ${
                   language === 'ar' ? 'font-sans text-[11px] font-medium tracking-normal' : 'font-sans'
                 }`}
               >
                 {t('HOT LINE FEEDBACK')}
               </button>

               {/* Theme Toggle */}
               <button
                 onClick={toggleTheme}
                 className="text-[var(--text-primary)] hover:text-[var(--accent-color)] transition-colors p-1 rounded-full hover:bg-[var(--hover-bg)]"
                 aria-label="Toggle Dark Mode"
               >
                 {isDarkMode ? <Sun size={18} strokeWidth={1.5} /> : <Moon size={18} strokeWidth={1.5} />}
               </button>
            </div>
          </div>
        </div>

        {/* Categories Bar - Sticky Extension */}
        {!isSearchOpen && activeBranch && (
          <div className="border-t border-[var(--border-color)] transition-colors duration-500 shadow-sm relative z-0">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex overflow-x-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] py-4 gap-8 justify-start md:justify-center w-full px-2">
                {activeMenuCategories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => scrollToSection(category.id)}
                    className={`text-[10px] uppercase whitespace-nowrap transition-all duration-300 relative group flex flex-col items-center justify-center ${
                      language === 'ar' ? 'font-sans text-[11px] font-semibold tracking-normal' : 'font-sans font-bold tracking-[0.2em]'
                    } ${
                      activeCategoryId === category.id ? 'text-[var(--text-primary)]' : 'text-[var(--text-secondary)] hover:text-[var(--text-primary)]'
                    }`}
                  >
                    {t(category.title)}
                    
                    {/* Active Underline */}
                    {activeCategoryId === category.id && (
                      <span className="absolute -bottom-2 left-0 w-full h-[1px] bg-[var(--text-primary)] transition-all duration-300"></span>
                    )}
                    {/* Hover Underline (thinner) */}
                    {activeCategoryId !== category.id && (
                      <span className="absolute -bottom-2 left-0 w-0 h-[1px] bg-[var(--text-primary)] transition-all duration-300 group-hover:w-full"></span>
                    )}
                  </button>
                ))}
              </div>
            </div>
          </div>
        )}
      </nav>

      {/* Instagram Modal */}
      {isInstaModalOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          <div 
            className="absolute inset-0 bg-black/90 backdrop-blur-sm transition-opacity"
            onClick={() => setIsInstaModalOpen(false)}
          ></div>
          <div className="relative bg-[var(--bg-primary)] border border-[var(--border-color)] p-8 rounded-sm shadow-2xl max-w-sm w-full text-center animate-in zoom-in-95 duration-300">
            <button 
              onClick={() => setIsInstaModalOpen(false)}
              className="absolute top-4 right-4 text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors"
            >
              <X size={20} />
            </button>
            
            <div className="mb-6">
              <h3 className="text-2xl menu-heading text-[var(--text-primary)] tracking-widest mb-1">CARTEL</h3>
              <p className="text-[10px] uppercase tracking-[0.3em] text-[var(--accent-color)]">@cartelcoffeeroasters</p>
            </div>

            <div className="bg-white p-4 rounded-sm inline-block mb-6">
              {/* QR Code Placeholder - In a real app, use a static asset or QR library */}
              <img 
                src={`https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=https://instagram.com/cartelcoffeeroasters&color=000000&bgcolor=FFFFFF`} 
                alt="Instagram QR Code" 
                className="w-48 h-48"
              />
            </div>

            <p className={`text-xs text-[var(--text-secondary)] ${language === 'ar' ? 'font-sans font-medium' : 'font-light'}`}>
              {t('Scan to follow our journey.')}
            </p>
          </div>
        </div>
      )}

      {/* Mobile Floating Action Button (FAB) for Feedback */}
      <button
        onClick={() => setIsFeedbackOpen(true)}
        className="sm:hidden fixed bottom-6 right-6 z-50 bg-[var(--text-primary)] text-[var(--bg-primary)] rounded-full shadow-2xl p-4 flex items-center justify-center hover:scale-105 active:scale-95 transition-transform"
        aria-label="Hot Line Feedback"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>
      </button>

      {/* Feedback Modal */}
      <FeedbackModal 
        isOpen={isFeedbackOpen}
        onClose={() => setIsFeedbackOpen(false)}
      />
    </>
  );
};

export default Navbar;