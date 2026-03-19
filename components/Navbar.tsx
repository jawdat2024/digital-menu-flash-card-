import React, { useState, useEffect } from 'react';
import { Search, MapPin, Instagram, Phone, Globe, X, Sun, Moon } from 'lucide-react';
import { Branch, MenuCategory } from '../types';

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
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isInstaModalOpen, setIsInstaModalOpen] = useState(false);
  const [isPhoneDropdownOpen, setIsPhoneDropdownOpen] = useState(false);
  const [activeCategoryId, setActiveCategoryId] = useState('filter-taps');
  const [isDarkMode, setIsDarkMode] = useState(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('theme');
      if (saved) return saved === 'dark';
      return window.matchMedia('(prefers-color-scheme: dark)').matches;
    }
    return true;
  });

  // Phone numbers for locations (placeholders)
  const LOCATION_PHONES: Record<string, string> = {
    'Al Bateen': '+971500000001',
    'Al Qana': '+971500000002',
    'Khalifa City': '+971500000003',
    'Mirdif': '+971500000004',
    'Marina': '+971500000005',
  };

  useEffect(() => {
    if (isDarkMode) {
      document.body.classList.add('dark-theme');
    } else {
      document.body.classList.remove('dark-theme');
    }
  }, [isDarkMode]);

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
      <nav className="fixed top-0 left-0 w-full z-50 bg-[var(--bg-primary)] border-b border-[var(--border-color)] shadow-lg transition-colors duration-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20 gap-2 sm:gap-4">
            
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
                      
                      <div className="relative">
                        <button 
                          onClick={() => setIsPhoneDropdownOpen(!isPhoneDropdownOpen)}
                          className={`text-[var(--text-primary)] hover:text-[var(--accent-color)] transition-colors p-1 ${isPhoneDropdownOpen ? 'text-[var(--accent-color)]' : ''}`}
                        >
                          <Phone size={18} strokeWidth={1.5} />
                        </button>
                        
                        {/* Phone Dropdown */}
                        {isPhoneDropdownOpen && (
                          <div className="absolute top-full left-0 mt-4 w-48 bg-[var(--bg-primary)] border border-[var(--border-color)] rounded-sm shadow-xl py-2 animate-in fade-in zoom-in-95 duration-200">
                            {Object.entries(LOCATION_PHONES).map(([name, phone]) => (
                              <a 
                                key={name}
                                href={`tel:${phone}`}
                                className="block px-4 py-2 text-xs text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[var(--hover-bg)] transition-colors uppercase tracking-wider"
                              >
                                {name}
                              </a>
                            ))}
                          </div>
                        )}
                      </div>

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
                      <button
                        onClick={onSwitchLocation}
                        className="flex items-center gap-1 sm:gap-2 text-[var(--text-primary)] hover:text-[var(--text-secondary)] transition-colors group p-1"
                      >
                        <MapPin size={18} strokeWidth={1.5} />
                        <span className="hidden lg:inline text-[10px] font-sans uppercase tracking-widest border-b border-transparent group-hover:border-[var(--border-color)] transition-all whitespace-nowrap">
                          {activeBranch.name.replace('CARTEL ', '')}
                        </span>
                      </button>
                    )}
                   </div>
                  
                  {isSearchOpen && (
                    <input
                      type="text"
                      placeholder="Search..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="bg-transparent border-b border-[var(--border-color)] text-[var(--text-primary)] text-sm focus:outline-none placeholder-[var(--text-secondary)] w-full max-w-[60px] sm:max-w-[120px] transition-all font-sans"
                      autoFocus
                      onBlur={() => !searchQuery && setIsSearchOpen(false)}
                    />
                  )}
                </>
               )}
            </div>

            {/* Center: Brand Logo */}
            <div className="flex-none flex flex-col items-center justify-center cursor-pointer group px-2" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
               <div className="flex items-center gap-2">
                 <span className="text-lg sm:text-2xl menu-heading text-[var(--text-primary)] tracking-[0.15em] sm:tracking-[0.2em] group-hover:tracking-[0.25em] transition-all duration-500 whitespace-nowrap">
                   CARTEL
                 </span>
               </div>
            </div>

            {/* Right: Theme Toggle */}
            <div className="flex-1 flex justify-end items-center gap-2 sm:gap-4">
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
          <div className="border-t border-white/10 bg-black transition-colors duration-500">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex overflow-x-auto no-scrollbar py-3 gap-6 justify-between md:justify-evenly w-full">
                {activeMenuCategories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => scrollToSection(category.id)}
                    className={`text-[10px] font-bold uppercase tracking-[0.2em] whitespace-nowrap transition-colors relative group py-2 font-sans ${
                      activeCategoryId === category.id ? 'text-white' : 'text-white/70 hover:text-white'
                    }`}
                  >
                    {category.title}
                    {/* Active Underline */}
                    {activeCategoryId === category.id && (
                      <span className="absolute bottom-0 left-0 w-full h-[1px] bg-white transition-all duration-300 translate-y-1"></span>
                    )}
                    {/* Hover Underline (thinner) */}
                    {activeCategoryId !== category.id && (
                      <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-white transition-all duration-300 group-hover:w-full translate-y-1"></span>
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

            <p className="text-xs text-[var(--text-secondary)] font-light">
              Scan to follow our journey.
            </p>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;