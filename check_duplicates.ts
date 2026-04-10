import { BRANCH_MENUS } from './constants';

for (const [branchName, menu] of Object.entries(BRANCH_MENUS)) {
  for (const category of menu) {
    const seen = new Set();
    const duplicates = new Set();
    for (const item of category.items) {
      if (!item) continue;
      if (seen.has(item.id)) {
        duplicates.add(item.id);
      } else {
        seen.add(item.id);
      }
    }
    
    // Also check subCategories
    if (category.subCategories) {
      for (const subCat of category.subCategories) {
        for (const item of subCat.items) {
          if (!item) continue;
          if (seen.has(item.id)) {
            duplicates.add(item.id);
          } else {
            seen.add(item.id);
          }
        }
      }
    }

    if (duplicates.size > 0) {
      console.log(`Branch: ${branchName}, Category: ${category.title}, Duplicates: ${Array.from(duplicates).join(', ')}`);
    }
  }
}
