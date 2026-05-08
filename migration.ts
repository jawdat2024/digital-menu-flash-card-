import { useMenuStore, MenuItemEntity } from './store/menuStore';
import { BRANCH_MENUS } from './constants';

export const migrateDataToStore = (branchId: string) => {
  console.log(`Starting data migration for branch: ${branchId}`);
  const menuSource = BRANCH_MENUS[branchId];
  if (!menuSource) {
     console.error("Migration failed: Branch not found.");
     return;
  }

  const initialItemsMap = new Map<string, MenuItemEntity>();

  const addItemToMap = (item: any, catTitle: string) => {
    const existing = initialItemsMap.get(item.id);
    if (existing) {
      if (!existing.categories) existing.categories = [existing.category];
      if (!existing.categories.includes(catTitle)) existing.categories.push(catTitle);
    } else {
      initialItemsMap.set(item.id, {
        ...item,
        sku: `SKU-${item.id.toUpperCase()}`,
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

  const normalizedItems = Array.from(initialItemsMap.values());

  // Inject into local storage ensuring Dashboard uses it as the source of truth
  localStorage.setItem(`cartel_inventory_${branchId}`, JSON.stringify(normalizedItems));
  console.log("Migration complete. LocalStorage populated.");

  // Also hydrate the store directly just in case this is called mid-session
  useMenuStore.getState().initialize(branchId, normalizedItems);
};
