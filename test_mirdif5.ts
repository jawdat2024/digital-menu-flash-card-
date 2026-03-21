import { BRANCH_MENUS } from './constants';
const mirdif = BRANCH_MENUS.mirdif;
let hasEmptyItem = false;
mirdif.forEach(cat => {
  cat.items?.forEach(item => {
    if (Object.keys(item).length <= 2) { 
      console.log(`item in ${cat.id} has few props:`, item); 
      hasEmptyItem = true; 
    }
  });
  cat.subCategories?.forEach(sub => {
    sub.items?.forEach(item => {
      if (Object.keys(item).length <= 2) { 
        console.log(`item in ${sub.id} has few props:`, item); 
        hasEmptyItem = true; 
      }
    });
  });
});
console.log('Has empty item:', hasEmptyItem);
