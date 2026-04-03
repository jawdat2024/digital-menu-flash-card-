import fs from 'fs';
import path from 'path';

const constantsPath = path.join(process.cwd(), 'constants.ts');
let content = fs.readFileSync(constantsPath, 'utf8');

// --- 1. Branch-Specific Deletions (Scope: "khalifa" branch ONLY) ---

// Remove Yemen Sharqi from khalifaBeans
content = content.replace(
  /\{\s*id:\s*'bean_yemen_sharqi'[\s\S]*?isNew:\s*false\s*\},/g,
  ''
);

// Remove MUHALABIYA from khalifaMenu desserts
content = content.replace(
  /findItem\('desserts',\s*'MUHALABIYA'\)!,\s*/g,
  ''
);

// Remove Choco Fudge Cookie from khalifaMenu desserts
content = content.replace(
  /\{\s*\.\.\.findItem\('desserts',\s*'d_fudge_cookie'\)!,\s*name:\s*'Choco Fudge Cookie',\s*image:\s*'https:\/\/iili\.io\/qqMhuXp\.png'\s*\},\s*/g,
  ''
);

// Remove Nduja Chili Scrambled Tornado Eggs from khalifaMenu eggs-more
content = content.replace(
  /\{\s*id:\s*'egg_nduja',\s*name:\s*'Nduja Chili Scrambled Tornado Eggs'[\s\S]*?calories:\s*450\s*\},\s*/g,
  ''
);

// --- 2. Branch-Specific Bean Mutations (Scope: "khalifa" branch ONLY) ---

// Brazil Amazonic -> Nicaragua, price: 0
content = content.replace(
  /id:\s*'bean_brazil_amazonic',\s*name:\s*'Brazil Amazonic Soul',\s*notes:\s*'Dark chocolate, Roasted hazelnut, Caramel',\s*price:\s*1,/g,
  `id: 'bean_brazil_amazonic',
      name: 'Nicaragua',
      notes: 'Dark chocolate, Roasted hazelnut, Caramel',
      price: 0,`
);

// Coconutella -> Colombia - Strawberry, price: 5, is_active: true
content = content.replace(
  /\{\s*id:\s*'bean_coconutella'[\s\S]*?isNew:\s*false\s*\},\s*\{\s*id:\s*'bean_colombia_strawberry'[\s\S]*?status:\s*'Coming Soon'\s*\},\s*/g,
  `{
      id: 'bean_colombia_strawberry',
      name: 'Colombia - Strawberry',
      notes: 'Strawberry Jam, Honey, Milk Chocolates',
      price: 5,
      isNew: true,
      status: 'Available'
    },
    `
);

// --- 3. Branch-Specific Insertion (Scope: "khalifa" branch ONLY) ---
const newFilterCoffee = `
        { 
          id: 'fil_colombia_gesha_key_lime', 
          name: 'Colombia Gesha - Key lime pie',
          origin: 'COLOMBIA',
          tastingNotes: 'orange blossom, lemongrass, condensed milk', 
          price: '65', 
          image: 'https://iili.io/qLf9mXt.jpg', 
          ingredients: 'Pour-over brewing method', 
          calories: 5,
          branch: 'Khalifa City',
          status: 'Available'
        }`;

content = content.replace(
  /(\{\s*id:\s*'fil_colombia_s_4'[\s\S]*?status:\s*'Available'\s*\})/,
  `$1,${newFilterCoffee}`
);

// --- 4. Global Price Update (Scope: ALL branches / Global Catalog) ---
content = content.replace(
  /(name:\s*'Ethiopia Guji[^']*'[\s\S]*?price:\s*)'38'/g,
  `$1'36'`
);

fs.writeFileSync(constantsPath, content, 'utf8');
console.log('Migration script executed successfully.');
