import fs from 'fs';

let content = fs.readFileSync('components/AdminDashboard.tsx', 'utf8');

// 1. Add RefreshCw icon
content = content.replace("Trash2, Ban, CheckCircle, MapPin } from 'lucide-react';", "Trash2, Ban, CheckCircle, MapPin, RefreshCw } from 'lucide-react';");

// 2. Add new states
content = content.replace(
`  const [editPriceValue, setEditPriceValue] = useState<string>('');`,
`  const [editPriceValue, setEditPriceValue] = useState<string>('');

  // --- Header Sync State ---
  const [hasUnsavedChanges, setHasUnsavedChanges] = useState(false);
  const [isSaved, setIsSaved] = useState(false);
  const [toastMessage, setToastMessage] = useState('');`);

// 3. Extract loadInventory
content = content.replace(
`  // --- Initialization & Switching Logic ---
  useEffect(() => {
    if (!selectedBranchId) return;

    const storageKey = \`cartel_inventory_\${selectedBranchId}\`;`,
`  // --- Initialization & Switching Logic ---
  const loadInventory = () => {
    if (!selectedBranchId) return;

    const storageKey = \`cartel_inventory_\${selectedBranchId}\`;`);

content = content.replace(
`    } else {
      setItems(initialItems);
      localStorage.setItem(storageKey, JSON.stringify(initialItems));
    }
  }, [selectedBranchId]);`,
`    } else {
      setItems(initialItems);
      localStorage.setItem(storageKey, JSON.stringify(initialItems));
    }
    setHasUnsavedChanges(false);
  };

  useEffect(() => {
    loadInventory();
  }, [selectedBranchId]);`);

// 4. Update saveToStorage
content = content.replace(
`  // --- Persistence Helper ---
  const saveToStorage = (updatedItems: AdminItem[]) => {
    setItems(updatedItems);
    if (selectedBranchId) {
      const storageKey = \`cartel_inventory_\${selectedBranchId}\`;
      localStorage.setItem(storageKey, JSON.stringify(updatedItems));
    }
  };`,
`  // --- Persistence Helper ---
  const updateLocalState = (updatedItems: AdminItem[]) => {
    setItems(updatedItems);
    setHasUnsavedChanges(true);
  };

  const syncChanges = () => {
    if (selectedBranchId) {
      const storageKey = \`cartel_inventory_\${selectedBranchId}\`;
      localStorage.setItem(storageKey, JSON.stringify(items));
      window.dispatchEvent(new Event('menu-updated'));
      setHasUnsavedChanges(false);
      setIsSaved(true);
      setToastMessage('All changes synced');
      setTimeout(() => {
        setIsSaved(false);
        setTimeout(() => setToastMessage(''), 300);
      }, 3000);
    }
  };`);

// Replace saveToStorage calls with updateLocalState
content = content.replace(/saveToStorage\(/g, "updateLocalState(");

// 5. Add header buttons to the render
content = content.replace(
`        {/* Header */}
        <header className="flex justify-between items-center p-8 border-b border-[#222]">`,
`        {/* Toast Notification */}
        {toastMessage && (
          <div className={\`fixed top-4 left-1/2 transform -translate-x-1/2 z-50 bg-white text-black px-6 py-3 rounded-full text-sm font-bold shadow-2xl transition-all duration-300 \${isSaved ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'}\`}>
             <span className="flex items-center gap-2"><CheckCircle size={16} className="text-green-600" /> {toastMessage}</span>
          </div>
        )}

        {/* Header (Sticky) */}
        <header className="sticky top-0 z-40 bg-[#0a0a0a]/90 backdrop-blur-md flex justify-between items-center p-6 px-8 border-b border-[#222]">`);

content = content.replace(
`            <h1 className="text-2xl font-bold tracking-tighter">CARTEL <span className="font-light text-gray-500">| Control Panel</span></h1>
          </div>
          <button onClick={onBack} className="text-xs text-red-500 hover:underline">Logout</button>
        </header>`,
`            <h1 className="text-2xl font-bold tracking-tighter">CARTEL <span className="font-light text-gray-500 hidden sm:inline">| Control Panel</span></h1>
          </div>
          <div className="flex items-center gap-3">
             {selectedBranchId && (
               <>
                 <button 
                    onClick={loadInventory}
                    className="flex items-center justify-center p-2.5 rounded-full border border-neutral-700 hover:bg-neutral-800 text-neutral-300 transition-colors"
                    title="Sync / Refresh from Source"
                 >
                    <RefreshCw size={16} />
                 </button>
                 <button 
                    onClick={syncChanges}
                    disabled={!hasUnsavedChanges}
                    className={\`flex items-center justify-center px-5 py-2.5 rounded-full text-xs font-bold uppercase tracking-widest transition-all \${hasUnsavedChanges ? 'bg-white text-black hover:bg-neutral-200' : 'bg-neutral-800 text-neutral-500 cursor-not-allowed'}\`}
                 >
                    {isSaved ? <span className="flex items-center gap-2"><CheckCircle size={14} /> Saved</span> : 'Save Changes'}
                 </button>
                 <div className="w-px h-6 bg-neutral-800 mx-2"></div>
               </>
             )}
             <button onClick={onBack} className="text-xs text-red-500 hover:underline hidden sm:block">Logout</button>
          </div>
        </header>`);

fs.writeFileSync('components/AdminDashboard.tsx', content);
