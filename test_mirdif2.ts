import { BRANCH_MENUS } from './constants';
const mirdif = BRANCH_MENUS.mirdif;
let hasUndefined = false;
mirdif.forEach(cat => {
  if (!cat) { console.log('cat is undefined'); hasUndefined = true; }
  cat.items?.forEach(item => {
    if (!item) { console.log(`item in ${cat.id} is undefined`); hasUndefined = true; }
  });
  cat.subCategories?.forEach(sub => {
    if (!sub) { console.log(`sub in ${cat.id} is undefined`); hasUndefined = true; }
    sub.items?.forEach(item => {
      if (!item) { console.log(`item in ${sub.id} is undefined`); hasUndefined = true; }
    });
  });
});
console.log('Has undefined:', hasUndefined);
