import fs from 'fs';

let content = fs.readFileSync('App.tsx', 'utf8');

// Replace state
content = content.replace(
`  const [inventoryStatus, setInventoryStatus] = useState<Record<string, boolean>>({});`,
`  const [localOverrides, setLocalOverrides] = useState<Record<string, any>>({});`);

// Replace effect dependencies and definition
content = content.replace(
`    if (!activeBranch) {
      setInventoryStatus({});
      return;
    }`,
`    if (!activeBranch) {
      setLocalOverrides({});
      return;
    }`);

content = content.replace(
`        if (storedInventory) {
          const parsed = JSON.parse(storedInventory);
          const statusMap: Record<string, boolean> = {};
          
          if (Array.isArray(parsed)) {
            parsed.forEach((item: any) => {
              if (item && item.id) {
                statusMap[item.id] = !!item.isSoldOut;
              }
            });
            setInventoryStatus(statusMap);
          }
        } else {
           setInventoryStatus({});
        }`,
`        if (storedInventory) {
          const parsed = JSON.parse(storedInventory);
          const overridesMap: Record<string, any> = {};
          
          if (Array.isArray(parsed)) {
            parsed.forEach((item: any) => {
              if (item && item.id) {
                overridesMap[item.id] = {
                  isVisible: item.isVisible,
                  status: item.status,
                  price: item.price ? item.price.toString() : undefined
                };
              }
            });
            setLocalOverrides(overridesMap);
          }
        } else {
           setLocalOverrides({});
        }`);

content = content.replace(
`    window.addEventListener('storage', handleStorageChange);
    return () => window.removeEventListener('storage', handleStorageChange);
  }, [isAdminMode, activeBranch]);`,
`    window.addEventListener('storage', handleStorageChange);
    window.addEventListener('menu-updated', syncInventory);
    return () => {
      window.removeEventListener('storage', handleStorageChange);
      window.removeEventListener('menu-updated', syncInventory);
    };
  }, [isAdminMode, activeBranch]);`);

// Replace processCategory
content = content.replace(
`      const processedItems = cat.items.map(item => ({
        ...item,
        isSoldOut: inventoryStatus[item.id] !== undefined 
          ? inventoryStatus[item.id] 
          : item.isSoldOut
      }));`,
`      const processedItems = cat.items.map(item => {
        const override = localOverrides[item.id];
        return {
          ...item,
          isVisible: override && override.isVisible !== undefined ? override.isVisible : item.isVisible,
          status: override && override.status !== undefined ? override.status : item.status,
          price: override && override.price !== undefined ? override.price : item.price,
        };
      });`);

// Update useMemo dependencies
content = content.replace(
`  }, [searchQuery, inventoryStatus, currentBranchMenu]);`,
`  }, [searchQuery, localOverrides, currentBranchMenu]);`);

fs.writeFileSync('App.tsx', content);
