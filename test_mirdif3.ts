import { BRANCH_MENUS } from './constants';
const mirdif = BRANCH_MENUS.mirdif;
let hasUndefinedId = false;
mirdif.forEach(cat => {
  cat.items?.forEach(item => {
    if (!item.id) { console.log(`item in ${cat.id} has no id:`, item); hasUndefinedId = true; }
  });
  cat.subCategories?.forEach(sub => {
    sub.items?.forEach(item => {
      if (!item.id) { console.log(`item in ${sub.id} has no id:`, item); hasUndefinedId = true; }
    });
  });
});
console.log('Has undefined id:', hasUndefinedId);
