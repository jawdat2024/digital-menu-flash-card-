import { BRANCH_MENUS } from './constants';

const branches = ['mirdif', 'dubai', 'alqana', 'khalifa', 'albateen', 'marina'];

const result = branches.map(branchName => {
  const menu = BRANCH_MENUS[branchName];
  if (!menu) return { branchName, items: [] };
  
  const items: any[] = [];
  
  menu.forEach(category => {
    if (category.title === 'FILTERED' || category.title === 'COLD BREW' || category.title === 'SIGNATURE DRINKS + TEA') {
      if (category.subCategories) {
        category.subCategories.forEach(sub => {
          if (sub.title === 'Filter Coffee' || sub.title === 'Cold Brew' || sub.title === 'Cold Drip') {
            sub.items.forEach(item => {
              if (item.tastingNotes) {
                items.push({
                  itemName: item.name,
                  price: item.price,
                  tastingNotes: item.tastingNotes
                });
              }
            });
          }
        });
      } else {
        if (category.title === 'Filter Coffee' || category.title === 'Cold Brew' || category.title === 'Cold Drip') {
          category.items.forEach(item => {
            if (item.tastingNotes) {
              items.push({
                itemName: item.name,
                price: item.price,
                tastingNotes: item.tastingNotes
              });
            }
          });
        }
      }
    }
  });

  // Also extract espresso beans
  const espressoBar = menu.find(c => c.id === 'espresso');
  if (espressoBar && (espressoBar as any).beanSelection) {
    (espressoBar as any).beanSelection.forEach((item: any) => {
      if (item.notes) {
        items.push({
          itemName: item.name,
          price: item.price.toString(),
          tastingNotes: item.notes
        });
      }
    });
  }
  
  return {
    branchName,
    items
  };
});

console.log(JSON.stringify(result, null, 2));
