const fs = require('fs');

let code = fs.readFileSync('constants.ts', 'utf8');

const tdz = `
// Standardized Espresso Bean Options
const ESPRESSO_BEAN_OPTIONS = [
  {
    id: "bean_costa_rica",
    name: "Costa Rica",
    price: 5,
    description: "",
  },
  {
    id: "bean_brazil_chocolate",
    name: "Brazil Chocolate",
    price: 1,
    description: "",
  },
  {
    id: "bean_honduras",
    name: "Honduras",
    price: 0,
    description: "",
  },
  {
    id: "bean_colombia_decaf",
    name: "Colombia Sweet Dreams (Decaf)",
    price: 0,
    description: "",
  },
  {
    id: "bean_yemen",
    name: "Yemen - Sharki Haraz",
    price: 10,
    description: "",
  },
];
`;

if (!code.includes('const ESPRESSO_BEAN_OPTIONS = [')) {
   code = code.replace('const BASE_MENU: MenuCategory[] = [', tdz + '\nconst BASE_MENU: MenuCategory[] = [');
}

fs.writeFileSync('constants.ts', code);
console.log('Restored');
