import { MENU_DATA } from "./constants";
let swCount = 0;
let bsCount = 0;
MENU_DATA.forEach(cat => {
  if (cat.title?.toUpperCase().includes('SANDWICHES') || cat.id === 'sandwiches') {
     if (cat.items) {
         console.log(`Sandwiches count: ${cat.items.length}`);
         swCount = cat.items.length;
         cat.items.forEach(i => console.log(`  - ${i.name} (${i.price})`));
     }
  }
  if (cat.title === 'BEST SELLER' || cat.id === 'highly-recommend') {
     if (cat.items) {
         console.log(`BEST SELLER count: ${cat.items.length}`);
         bsCount = cat.items.length;
         cat.items.forEach(i => console.log(`  - ${i.name} (${i.price})`));
     }
  }
});
