import { BRANCH_MENUS } from './constants';
const mirdif = BRANCH_MENUS.mirdif;
let hasMissingProps = false;
mirdif.forEach(cat => {
  cat.items?.forEach(item => {
    if (!item.name || !item.price || !item.image) { 
      console.log(`item in ${cat.id} has missing props:`, item); 
      hasMissingProps = true; 
    }
  });
  cat.subCategories?.forEach(sub => {
    sub.items?.forEach(item => {
      if (!item.name || !item.price || !item.image) { 
        console.log(`item in ${sub.id} has missing props:`, item); 
        hasMissingProps = true; 
      }
    });
  });
});
console.log('Has missing props:', hasMissingProps);
