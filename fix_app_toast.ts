import fs from 'fs';

let appContent = fs.readFileSync('App.tsx', 'utf8');

// Add global toast state
appContent = appContent.replace(
`  const [activeBranch, setActiveBranch] = useState<Branch | null>(null);
  const [localOverrides, setLocalOverrides] = useState<Record<string, any>>({});`,
`  const [activeBranch, setActiveBranch] = useState<Branch | null>(null);
  const [localOverrides, setLocalOverrides] = useState<Record<string, any>>({});
  
  // --- Global Toast State ---
  const [toastMessage, setToastMessage] = useState('');
  const [isToastVisible, setIsToastVisible] = useState(false);`);

appContent = appContent.replace(
`import { X } from 'lucide-react';`,
`import { X, CheckCircle } from 'lucide-react';`);
  
appContent = appContent.replace(
`    const syncInventory = () => {`,
`    const syncInventory = (event?: any) => {
      if (event && (event.type === 'menu-updated' || event.type === 'storage')) {
         setToastMessage('All changes synced');
         setIsToastVisible(true);
         setTimeout(() => {
           setIsToastVisible(false);
           setTimeout(() => setToastMessage(''), 300);
         }, 3000);
      }`);

appContent = appContent.replace(
`    const handleStorageChange = (e: StorageEvent) => {
      if (e.key === \`cartel_inventory_\${activeBranch.id}\`) {
        syncInventory();
      }
    };`,
`    const handleStorageChange = (e: StorageEvent) => {
      if (e.key === \`cartel_inventory_\${activeBranch.id}\` || e.type === 'storage') {
        syncInventory(e);
      }
    };`);
    
// Add the toast to the JSX
appContent = appContent.replace(
`      {/* Global Navbar */}
      <Navbar 
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        activeBranch={activeBranch}
        onSwitchLocation={resetLocation}
        activeMenuCategories={filteredCategories}
      />`,
`      {/* Global Success Toast */}
      {toastMessage && (
        <div className={\`fixed top-24 left-1/2 transform -translate-x-1/2 z-[100] bg-black/90 backdrop-blur-md border border-white/10 text-white px-6 py-3 rounded-full text-sm font-bold shadow-2xl transition-all duration-300 \${isToastVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'}\`}>
           <span className="flex items-center gap-2"><CheckCircle size={16} className="text-white" /> {toastMessage}</span>
        </div>
      )}

      {/* Global Navbar */}
      <Navbar 
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        activeBranch={activeBranch}
        onSwitchLocation={resetLocation}
        activeMenuCategories={filteredCategories}
      />`);

fs.writeFileSync('App.tsx', appContent);

let navbarContent = fs.readFileSync('components/Navbar.tsx', 'utf8');

navbarContent = navbarContent.replace(", Moon } from 'lucide-react';", ", Moon, RefreshCw } from 'lucide-react';");

// Add sync function and button to Navbar
navbarContent = navbarContent.replace(
`  const toggleTheme = () => {`,
`  const triggerSync = () => {
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

  const toggleTheme = () => {`);
  
navbarContent = navbarContent.replace(
`                      <a 
                        href="https://cartel.coffee/" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-[var(--text-primary)] hover:text-[var(--accent-color)] transition-colors p-1"
                      >
                        <Globe size={18} strokeWidth={1.5} />
                      </a>`,
`                      <a 
                        href="https://cartel.coffee/" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-[var(--text-primary)] hover:text-[var(--accent-color)] transition-colors p-1"
                      >
                        <Globe size={18} strokeWidth={1.5} />
                      </a>
                      <button 
                        id="global-sync-btn"
                        onClick={triggerSync}
                        className="text-[var(--text-primary)] hover:text-[var(--accent-color)] transition-colors p-1 ml-1 cursor-pointer"
                        title="Sync Menu"
                      >
                        <RefreshCw size={18} strokeWidth={1.5} />
                      </button>`);

fs.writeFileSync('components/Navbar.tsx', navbarContent);
