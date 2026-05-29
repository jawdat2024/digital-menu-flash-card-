import { BRANCH_MENUS } from './constants.ts';

for (const [branchId, categories] of Object.entries(BRANCH_MENUS)) {
  const seenItems = new Set();
  const duplicates = [];

  for (const cat of categories) {
    for (const item of cat.items || []) {
      if (seenItems.has(item.id)) {
        duplicates.push({ branchId, cat: cat.title, id: item.id, name: item.name });
      }
      seenItems.add(item.id);
    }
    if (cat.subCategories) {
      for (const sub of cat.subCategories) {
        for (const item of sub.items || []) {
          if (seenItems.has(item.id)) {
            duplicates.push({ branchId, cat: `${cat.title} -> ${sub.title}`, id: item.id, name: item.name });
          }
          seenItems.add(item.id);
        }
      }
    }
  }

  if (duplicates.length > 0) {
    console.log(`Branch: ${branchId} has ${duplicates.length} duplicates across different categories`);
    console.log(duplicates.slice(0, 5));
  }
}
