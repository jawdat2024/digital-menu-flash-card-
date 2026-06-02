import fs from 'fs';

let content = fs.readFileSync('constants.ts', 'utf-8');

const marinaBeansStr = `  'marina': [
  {
    "name": "Costa Rica",
    "notes": "Cacao, Fig Compote, Honey, Cherry",
    "price": "+5 AED"
  },
  {
    "name": "Colombia witch",
    "notes": "Dried Figs, Jaggery, Orange Zest, Sugarcane Juice",
    "price": "+0 AED"
  },
  {
    "name": "sweet dream decaf",
    "notes": "Passion Fruit, Cheesecake, Milk Chocolate",
    "price": "+0 AED"
  },
  {
    "name": "Brazil Chocolate",
    "notes": "Chocolate Biscuit, Condensed Milk, Chestnut",
    "price": "+1 AED"
  }
],
  'alqana': [`;

content = content.replace("  'alqana': [", marinaBeansStr);

fs.writeFileSync('constants.ts', content, 'utf-8');
console.log("Added marina");
