import { BRANCH_MENUS } from './constants';

for (const [branchName, menu] of Object.entries(BRANCH_MENUS)) {
  for (const category of menu) {
    const seenNames = new Set();
    const duplicateNames = new Set();
    for (const item of category.items) {
      if (!item) continue;
      if (seenNames.has(item.name)) {
        duplicateNames.add(item.name);
      } else {
        seenNames.add(item.name);
      }
    }
    if (duplicateNames.size > 0) {
      console.log(`Branch: ${branchName}, Category: ${category.title}, Duplicate Names: ${Array.from(duplicateNames).join(', ')}`);
    }
    
    // Check subCategories separately
    if (category.subCategories) {
      for (const subCat of category.subCategories) {
        const subSeenNames = new Set();
        const subDuplicateNames = new Set();
        for (const item of subCat.items) {
          if (!item) continue;
          if (subSeenNames.has(item.name)) {
            subDuplicateNames.add(item.name);
          } else {
            subSeenNames.add(item.name);
          }
        }
        if (subDuplicateNames.size > 0) {
          console.log(`Branch: ${branchName}, SubCategory: ${subCat.title} (in ${category.title}), Duplicate Names: ${Array.from(subDuplicateNames).join(', ')}`);
        }
      }
    }
  }
}
