import fs from 'fs';

// 1. Update store type and logic
let storeContent = fs.readFileSync('store/menuStore.ts', 'utf8');
storeContent = storeContent.replace(
  "category: string;",
  "category: string;\n  categories?: string[];"
);
storeContent = storeContent.replace(
`      items.forEach(item => {
        entities[item.id] = item;
        ids.push(item.id);
      });`,
`      items.forEach(item => {
        entities[item.id] = item;
        if (!ids.includes(item.id)) ids.push(item.id);
      });`
);
fs.writeFileSync('store/menuStore.ts', storeContent);


// 2. Update App.tsx mapping logic
let appContent = fs.readFileSync('App.tsx', 'utf8');

const replacementApp = 
`    const initialItemsMap = new Map<string, MenuItemEntity>();

    const addItemToMap = (item: any, catTitle: string) => {
      const existing = initialItemsMap.get(item.id);
      if (existing) {
        if (!existing.categories) existing.categories = [existing.category];
        if (!existing.categories.includes(catTitle)) existing.categories.push(catTitle);
      } else {
        initialItemsMap.set(item.id, {
          ...item,
          sku: \`SKU-\${item.id.toUpperCase()}\`,
          category: catTitle,
          categories: [catTitle],
          price: parseFloat(item.price?.toString().replace(/[^0-9.]/g, '') || '0') || 0,
          isVisible: item.isVisible !== false,
          status: item.status ? item.status.toString().toLowerCase().replace(' ', '_') as any : (['sold_out', 'out_of_stock'].includes(item.status as any) ? 'sold_out' : 'available'),
          publishStatus: 'published'
        });
      }
    };

    menuSource.forEach(cat => {
      cat.items.forEach(item => addItemToMap(item, cat.title));
      if (cat.subCategories) {
        cat.subCategories.forEach(sub => {
          sub.items.forEach(item => addItemToMap(item, sub.title));
        });
      }
    });

    const initialItems = Array.from(initialItemsMap.values());`;

appContent = appContent.replace(
`    const initialItems: MenuItemEntity[] = [];
    menuSource.forEach(cat => {
      cat.items.forEach(item => initialItems.push({
        ...item,
        sku: \`SKU-\${item.id.toUpperCase()}\`,
        category: cat.title,
        price: parseFloat(item.price.replace(/[^0-9.]/g, '')) || 0,
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
            price: parseFloat(item.price.replace(/[^0-9.]/g, '')) || 0,
            isVisible: item.isVisible !== false,
            status: item.status ? item.status.toString().toLowerCase().replace(' ', '_') as any : (['sold_out', 'out_of_stock'].includes(item.status as any) ? 'sold_out' : 'available'),
            publishStatus: 'published'
          }));
        });
      }
    });`,
replacementApp
);
fs.writeFileSync('App.tsx', appContent);


// 3. Update migration.ts mapping logic
let migrationContent = fs.readFileSync('migration.ts', 'utf8');

const replacementMig = 
`  const initialItemsMap = new Map<string, MenuItemEntity>();

  const addItemToMap = (item: any, catTitle: string) => {
    const existing = initialItemsMap.get(item.id);
    if (existing) {
      if (!existing.categories) existing.categories = [existing.category];
      if (!existing.categories.includes(catTitle)) existing.categories.push(catTitle);
    } else {
      initialItemsMap.set(item.id, {
        ...item,
        sku: \`SKU-\${item.id.toUpperCase()}\`,
        category: catTitle,
        categories: [catTitle],
        price: parseFloat(item.price?.toString().replace(/[^0-9.]/g, '') || '0') || 0,
        isVisible: item.isVisible !== false,
        status: item.status ? item.status.toString().toLowerCase().replace(' ', '_') as any : (['sold_out', 'out_of_stock'].includes(item.status as any) ? 'sold_out' : 'available'),
        publishStatus: 'published'
      });
    }
  };

  menuSource.forEach(cat => {
    cat.items.forEach(item => addItemToMap(item, cat.title));
    if (cat.subCategories) {
      cat.subCategories.forEach(sub => {
        sub.items.forEach(item => addItemToMap(item, sub.title));
      });
    }
  });

  const normalizedItems = Array.from(initialItemsMap.values());`;

migrationContent = migrationContent.replace(
`  const normalizedItems: MenuItemEntity[] = [];

  menuSource.forEach(cat => {
    cat.items.forEach(item => {
      const priceNum = parseFloat(item.price.replace(/[^0-9.]/g, '')) || 0;
      normalizedItems.push({
        ...item,
        sku: \`SKU-\${item.id.toUpperCase()}\`,
        category: cat.title,
        price: priceNum,
        isVisible: item.isVisible !== false,
        status: item.status ? item.status.toString().toLowerCase().replace(' ', '_') as any : (['sold_out', 'out_of_stock'].includes(item.status as any) ? 'sold_out' : 'available'),
        publishStatus: 'published'
      });
    });

    if (cat.subCategories) {
      cat.subCategories.forEach(sub => {
        sub.items.forEach(item => {
          const priceNum = parseFloat(item.price.replace(/[^0-9.]/g, '')) || 0;
          normalizedItems.push({
            ...item,
            sku: \`SKU-\${item.id.toUpperCase()}\`,
            category: sub.title,
            price: priceNum,
            isVisible: item.isVisible !== false,
            status: item.status ? item.status.toString().toLowerCase().replace(' ', '_') as any : (['sold_out', 'out_of_stock'].includes(item.status as any) ? 'sold_out' : 'available'),
            publishStatus: 'published'
          });
        });
      });
    }
  });`,
replacementMig
);
fs.writeFileSync('migration.ts', migrationContent);


// 4. Update AdminDashboard filtering logic
let adminContent = fs.readFileSync('components/AdminDashboard.tsx', 'utf8');

adminContent = adminContent.replace(
`  const distinctCategories = Array.from(new Set(items.map(i => i.category)));
  
  const filteredItems = items.filter(item => {
    const matchesSearch = item.name.toLowerCase().includes(searchQuery.toLowerCase()) || item.sku.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory ? item.category === selectedCategory : true;
    return matchesSearch && matchesCategory;
  });`,
`  const distinctCategories = Array.from(new Set(items.flatMap(i => i.categories || [i.category])));
  
  const filteredItems = items.filter(item => {
    const matchesSearch = item.name.toLowerCase().includes(searchQuery.toLowerCase()) || item.sku.toLowerCase().includes(searchQuery.toLowerCase());
    const itemCats = item.categories || [item.category];
    const matchesCategory = selectedCategory ? itemCats.includes(selectedCategory) : true;
    return matchesSearch && matchesCategory;
  });`
);
fs.writeFileSync('components/AdminDashboard.tsx', adminContent);
