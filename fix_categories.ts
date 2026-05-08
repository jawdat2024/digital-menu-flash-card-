import fs from 'fs';

let content = fs.readFileSync('App.tsx', 'utf8');

const replacement = 
`  const filteredCategories = useMemo(() => {
    // 1. Gather all base IDs to identify custom added items
    const baseIds = new Set<string>();
    const gatherIds = (cat: MenuCategory) => {
       cat.items.forEach(i => baseIds.add(i.id));
       cat.subCategories?.forEach(gatherIds);
    };
    currentBranchMenu.forEach(gatherIds);

    // 2. Identify custom items from the store
    const customItems = Object.values(storeEntities).filter(item => !baseIds.has(item.id) && item.isVisible !== false);

    const processCategory = (cat: MenuCategory): MenuCategory => {
      let processedItems = cat.items.map(item => {
        const entity = storeEntities[item.id];
        return {
          ...item,
          isVisible: entity && entity.isVisible !== undefined ? entity.isVisible : item.isVisible,
          status: entity && entity.status !== undefined ? entity.status : item.status,
          price: entity && entity.price !== undefined ? entity.price.toString() : item.price,
        };
      }).filter(item => item.isVisible !== false);
      
      // Inject custom items into their matching category
      const matchingCustoms = customItems.filter(ci => ci.category.toLowerCase() === cat.title.toLowerCase());
      if (matchingCustoms.length > 0) {
         processedItems = [...processedItems, ...matchingCustoms as any];
      }

      const processedSubCategories = cat.subCategories?.map(processCategory);
      
      return {
        ...cat,
        items: processedItems,
        subCategories: processedSubCategories
      };
    };

    let mergedCategories = currentBranchMenu.map(processCategory);

    // Handle custom items that don't match ANY existing category
    const unmappedCustoms = customItems.filter(ci => {
       let found = false;
       const checkCat = (cat: MenuCategory) => {
          if (cat.title.toLowerCase() === ci.category.toLowerCase()) found = true;
          cat.subCategories?.forEach(checkCat);
       };
       mergedCategories.forEach(checkCat);
       return !found;
    });

    if (unmappedCustoms.length > 0) {
       mergedCategories.push({
          id: 'new-additions',
          title: 'New Additions',
          items: unmappedCustoms as any
       });
    }

    if (!searchQuery.trim()) return mergedCategories;`;

content = content.replace(
`  const filteredCategories = useMemo(() => {
    const processCategory = (cat: MenuCategory): MenuCategory => {
      const processedItems = cat.items.map(item => {
        const entity = storeEntities[item.id];
        return {
          ...item,
          isVisible: entity && entity.isVisible !== undefined ? entity.isVisible : item.isVisible,
          status: entity && entity.status !== undefined ? entity.status : item.status,
          price: entity && entity.price !== undefined ? entity.price.toString() : item.price,
        };
      }).filter(item => item.isVisible !== false);
      
      const processedSubCategories = cat.subCategories?.map(processCategory);
      
      return {
        ...cat,
        items: processedItems,
        subCategories: processedSubCategories
      };
    };

    const mergedCategories = currentBranchMenu.map(processCategory);

    if (!searchQuery.trim()) return mergedCategories;`,
replacement
);

fs.writeFileSync('App.tsx', content);
