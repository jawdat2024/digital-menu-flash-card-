import React, { useState, useEffect } from 'react';
import { Search, ShoppingBag, MapPin, Instagram, Phone, Globe, X, Sun, Moon } from 'lucide-react';
import { Branch, MenuCategory } from '../types';

interface NavbarProps {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  cartCount: number;
  onOpenTray: () => void;
  activeBranch: Branch | null;
  onSwitchLocation: () => void;
  activeMenuCategories: MenuCategory[];
}

const Navbar: React.FC<NavbarProps> = ({ 
  searchQuery, 
  setSearchQuery, 
  cartCount, 
  onOpenTray, 
  activeBranch,
  onSwitchLocation,
  activeMenuCategories
}) => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isInstaModalOpen, setIsInstaModalOpen] = useState(false);
  const [isPhoneDropdownOpen, setIsPhoneDropdownOpen] = useState(false);
  const [activeCategoryId, setActiveCategoryId] = useState('filter-taps');
  const [isDarkMode, setIsDarkMode] = useState(true);

  // Phone numbers for locations (placeholders)
  const LOCATION_PHONES: Record<string, string> = {
    'Al Bateen': '+971500000001',
    'Al Qana': '+971500000002',
    'Khalifa City': '+971500000003',
    'Mirdif': '+971500000004',
    'Marina': '+971500000005',
  };

  useEffect(() => {
    // Check localStorage or system preference
    const savedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    if (savedTheme === 'dark' || (!savedTheme && prefersDark)) {
      setIsDarkMode(true);
      document.body.classList.add('dark-theme');
    } else {
      setIsDarkMode(false);
      document.body.classList.remove('dark-theme');
    }
  }, []);

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
    // Ensure 'filter-taps' is default if present, otherwise first category
    if (activeMenuCategories.length > 0) {
      const hasFilterTaps = activeMenuCategories.some(cat => cat.id === 'filter-taps');
      if (hasFilterTaps) {
        setActiveCategoryId('filter-taps');
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
          <div className="flex items-center justify-between h-20">
            
            {/* Left: Navigation Icons */}
            <div className="w-1/3 flex items-center gap-4 sm:gap-6 relative z-20">
               {activeBranch && (
                <>
                   {/* Social & Contact Icons */}
                   <div className="flex items-center gap-3 sm:gap-4 border-r border-[var(--border-color)] pr-3 sm:pr-4 mr-1 sm:mr-2">
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
                   <div className="flex items-center gap-2 sm:gap-3">
                     <button 
                      onClick={() => setIsSearchOpen(!isSearchOpen)}
                      className="text-[var(--text-primary)] hover:text-[var(--text-secondary)] transition-colors p-1"
                    >
                      <Search size={18} strokeWidth={1.5} />
                    </button>

                    {!isSearchOpen && (
                      <button
                        onClick={onSwitchLocation}
                        className="flex items-center gap-2 text-[var(--text-primary)] hover:text-[var(--text-secondary)] transition-colors group p-1"
                      >
                        <MapPin size={18} strokeWidth={1.5} />
                        <span className="hidden sm:inline text-[10px] font-sans uppercase tracking-widest border-b border-transparent group-hover:border-[var(--border-color)] transition-all whitespace-nowrap">
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
                      className="bg-transparent border-b border-[var(--border-color)] text-[var(--text-primary)] text-sm focus:outline-none placeholder-[var(--text-secondary)] w-full max-w-[80px] sm:max-w-[160px] transition-all font-sans"
                      autoFocus
                      onBlur={() => !searchQuery && setIsSearchOpen(false)}
                    />
                  )}
                </>
               )}
            </div>

            {/* Center: Brand Logo (Minimal) */}
            <div className="w-1/3 flex flex-col items-center justify-center cursor-pointer group relative z-10" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
               <div className="flex items-center gap-2">
                 <span className="text-xl sm:text-2xl font-didone text-[var(--text-primary)] tracking-[0.2em] group-hover:tracking-[0.25em] transition-all duration-500 whitespace-nowrap">
                   CARTEL
                 </span>
               </div>
            </div>

            {/* Right: Cart & Theme Toggle */}
            <div className="w-1/3 flex justify-end items-center relative z-20 gap-4">
               {/* Theme Toggle */}
               <button
                 onClick={toggleTheme}
                 className="text-[var(--text-primary)] hover:text-[var(--accent-color)] transition-colors p-1 rounded-full hover:bg-[var(--hover-bg)]"
                 aria-label="Toggle Dark Mode"
               >
                 {isDarkMode ? <Sun size={18} strokeWidth={1.5} /> : <Moon size={18} strokeWidth={1.5} />}
               </button>

               {activeBranch && (
                 <button 
                   onClick={onOpenTray}
                   className="relative text-[var(--text-primary)] hover:text-[var(--text-secondary)] transition-colors p-2"
                 >
                   <ShoppingBag size={20} strokeWidth={1.5} />
                   {cartCount > 0 && (
                     <span className="absolute -top-1 -right-1 h-4 w-4 bg-[var(--text-primary)] text-[var(--bg-primary)] text-[9px] font-bold flex items-center justify-center rounded-full shadow-md">
                       {cartCount}
                     </span>
                   )}
                 </button>
               )}
            </div>
          </div>
        </div>

        {/* Categories Bar - Sticky Extension */}
        {!isSearchOpen && activeBranch && (
          <div className="border-t border-[var(--border-color)] bg-[var(--bg-primary)] transition-colors duration-500">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex overflow-x-auto no-scrollbar py-3 space-x-8 md:justify-center">
                {activeMenuCategories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => scrollToSection(category.id)}
                    className={`text-[10px] font-bold uppercase tracking-[0.2em] whitespace-nowrap transition-colors relative group py-2 font-sans ${
                      activeCategoryId === category.id ? 'text-[var(--text-primary)]' : 'text-[var(--text-secondary)] hover:text-[var(--text-primary)]'
                    }`}
                  >
                    {category.title}
                    {/* Active Underline */}
                    {activeCategoryId === category.id && (
                      <span className="absolute bottom-0 left-0 w-full h-[2px] bg-[var(--text-primary)] transition-all duration-300 translate-y-1"></span>
                    )}
                    {/* Hover Underline (thinner) */}
                    {activeCategoryId !== category.id && (
                      <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-[var(--text-primary)] transition-all duration-300 group-hover:w-full translate-y-1"></span>
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
              <h3 className="text-2xl font-didone text-[var(--text-primary)] tracking-widest mb-1">CARTEL</h3>
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