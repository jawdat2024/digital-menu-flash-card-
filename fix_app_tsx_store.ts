import fs from 'fs';

let appContent = fs.readFileSync('App.tsx', 'utf8');

// 1. Add useMenuStore import
appContent = appContent.replace(
`import { BRANCH_DATA, BRANCH_MENUS } from './constants';
import { MenuItem, Branch, MenuCategory } from './types';
import { X, CheckCircle } from 'lucide-react';`,
`import { BRANCH_DATA, BRANCH_MENUS } from './constants';
import { MenuItem, Branch, MenuCategory } from './types';
import { X, CheckCircle } from 'lucide-react';
import { useMenuStore, MenuItemEntity } from './store/menuStore';`);

// 2. Add store subscription
appContent = appContent.replace(
`  const [activeBranch, setActiveBranch] = useState<Branch | null>(null);
  const [localOverrides, setLocalOverrides] = useState<Record<string, any>>({});`,
`  const [activeBranch, setActiveBranch] = useState<Branch | null>(null);
  const storeEntities = useMenuStore(state => state.entities);
  const initializeStore = useMenuStore(state => state.initialize);`);

// 3. Update useEffect for initialization and sync
appContent = appContent.replace(/  useEffect\(\(\) => \{\n    if \(!activeBranch\) \{\n      setLocalOverrides\(\{\}\);\n      return;\n    \}\n[\s\S]*?  \}, \[isAdminMode, activeBranch\]\);/,
`  useEffect(() => {
    if (!activeBranch) return;

    // We no longer rely on manual syncing. Initialize the Zustand store which handles local overrides 
    // and listens to the BroadcastChannel under the hood for < 10ms cross-tab sync.
    const storageKey = \`cartel_inventory_\${activeBranch.id}\`;
    const menuSource = BRANCH_MENUS[activeBranch.id] || BRANCH_MENUS['khalifa'];
    
    const initialItems: MenuItemEntity[] = [];
    menuSource.forEach(cat => {
      cat.items.forEach(item => initialItems.push({
        ...item,
        sku: \`SKU-\${item.id.toUpperCase()}\`,
        category: cat.title,
        isVisible: item.isVisible !== false,
        status: item.status ? item.status.toString().toLowerCase().replace(' ', '_') as any : (['sold_out', 'out_of_stock'].includes(item.status as any) ? 'sold_out' : 'available'),
        publishStatus: 'published'
      }));
      if (cat.subCategories) {
        cat.subCategories.forEach(sub => {
          sub.items.forEach(item => initialItems.push({
            ...item,
            sku: \`SKU-\${item.id.toUpperCase()}\`,
            category: sub.title,
            isVisible: item.isVisible !== false,
            status: item.status ? item.status.toString().toLowerCase().replace(' ', '_') as any : (['sold_out', 'out_of_stock'].includes(item.status as any) ? 'sold_out' : 'available'),
            publishStatus: 'published'
          }));
        });
      }
    });

    const stored = localStorage.getItem(storageKey);
    let finalItems = initialItems;
    if (stored) {
      const parsedStored: MenuItemEntity[] = JSON.parse(stored);
      finalItems = initialItems.map(item => {
        const storedItem = parsedStored.find(si => si.id === item.id);
        return storedItem ? { ...item, ...storedItem } : item;
      });
      const customItems = parsedStored.filter(si => !initialItems.some(ii => ii.id === si.id));
      finalItems = [...finalItems, ...customItems];
    }
    
    initializeStore(activeBranch.id, finalItems);

    const handleMenuUpdated = () => {
       setToastMessage('All changes synced');
       setIsToastVisible(true);
       setTimeout(() => {
         setIsToastVisible(false);
         setTimeout(() => setToastMessage(''), 300);
       }, 3000);
    };

    window.addEventListener('menu-updated', handleMenuUpdated);
    return () => window.removeEventListener('menu-updated', handleMenuUpdated);
  }, [activeBranch, initializeStore]);`);

// 4. Update the items mapping inside processCategory to use storeEntities directly
appContent = appContent.replace(/      const processedItems = cat\.items\.map\(item => \{\n        const override = localOverrides\[item\.id\];\n        return \{\n          \.\.\.item,\n          isVisible: override && override\.isVisible !== undefined \? override\.isVisible : item\.isVisible,\n          status: override && override\.status !== undefined \? override\.status : item\.status,\n          price: override && override\.price !== undefined \? override\.price : item\.price,\n        \};\n      \}\);/,
`      const processedItems = cat.items.map(item => {
        const entity = storeEntities[item.id];
        return {
          ...item,
          isVisible: entity && entity.isVisible !== undefined ? entity.isVisible : item.isVisible,
          status: entity && entity.status !== undefined ? entity.status : item.status,
          price: entity && entity.price !== undefined ? entity.price.toString() : item.price,
        };
      });`);

// Update dependency array for useMemo
appContent = appContent.replace(
`  }, [searchQuery, localOverrides, currentBranchMenu]);`,
`  }, [searchQuery, storeEntities, currentBranchMenu]);`);

fs.writeFileSync('App.tsx', appContent);
