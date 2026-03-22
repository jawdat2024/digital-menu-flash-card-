import fs from 'fs';

let content = fs.readFileSync('constants.ts', 'utf-8');

const updates = [
  { match: /name:\s*'Ethiopia Guji - Rojicha',\s*tastingNotes:\s*'.*?'/g, replace: "name: 'Ethiopia Guji-Rogicha',\n          tastingNotes: 'Apricot, Pear, Honey'" },
  { match: /name:\s*'COSTA RICA',\s*tastingNotes:\s*'.*?'/g, replace: "name: 'Costa Rica - Canet Chopin',\n          tastingNotes: 'Cacao, Fig Compote, Honey, Cherry'" },
  { match: /name:\s*'Kenya Kirimara',\s*tastingNotes:\s*'.*?'/g, replace: "name: 'Kenya Kirimara',\n          tastingNotes: 'Wild Cherry, Brown Sugar, Raisins'" },
  { match: /name:\s*'Colombia Mish Mish',\s*tastingNotes:\s*'.*?'/g, replace: "name: 'Colombia Mish Mish',\n          tastingNotes: 'Apricot Jam, Raspberry, Lychee'" },
  { match: /name:\s*'Colombia Blackberry',\s*tastingNotes:\s*'.*?'/g, replace: "name: 'Colombia Blackberry',\n          tastingNotes: 'Blackberry Soda, Cacao Nibs, Karkade'" },
  { match: /name:\s*'Colombia Sweet Dreams Decaf',\s*tastingNotes:\s*'.*?'/g, replace: "name: 'Colombia Sweet Dreams Decaf',\n          tastingNotes: 'Passion fruit cheesecake, Milk chocolate, Molasses'" },
  { match: /name:\s*'Gesha-Key Lime Pie',\s*tastingNotes:\s*'.*?'/g, replace: "name: 'Gesha Key Lime Pie',\n          tastingNotes: 'Orange Blossom, Lemongrass, Condensed Milk'" },
  { match: /name:\s*'Panama – Cordillera Gesha',\s*tastingNotes:\s*'.*?'/g, replace: "name: 'Panamá Cordillera Gesha',\n          tastingNotes: 'Cantaloupe, Honey, Berries, Lemongrass'" },
  { match: /name:\s*'Colombia - Bourbon Sidra',\s*tastingNotes:\s*'.*?'/g, replace: "name: 'Colombia - Bourbon Sidra',\n          tastingNotes: 'Red grapes, Watermelon, Hard Candy, Raspberry'" },
  { match: /name:\s*'Colombia Planadas',\s*tastingNotes:\s*'.*?'/g, replace: "name: 'Cuban Cigar',\n          tastingNotes: 'Deep Earthy Undertones, Caramel Popcorn, Fresh Tobacco'" },
  { match: /name:\s*'Ethiopia Cold Brew',\s*origin:\s*'Ethiopia',\s*tastingNotes:\s*'.*?'/g, replace: "name: 'Ethiopia Cold Brew',\n        origin: 'Ethiopia',\n        tastingNotes: 'Apricot, Pear, Honey'" },
  { match: /name:\s*'Colombia Cold Brew',\s*origin:\s*'Colombia',\s*tastingNotes:\s*'.*?'/g, replace: "name: 'Colombia Cold Brew',\n        origin: 'Colombia',\n        tastingNotes: 'Apricot Jam, Raspberry, Lychee'" },
  { match: /name:\s*'Kenya Cold Brew',\s*origin:\s*'Kenya',\s*tastingNotes:\s*'.*?'/g, replace: "name: 'Kenya Cold Brew',\n        origin: 'Kenya',\n        tastingNotes: 'Wild Cherry, Brown Sugar, Raisins'" }
];

updates.forEach(u => {
  content = content.replace(u.match, u.replace);
});

fs.writeFileSync('constants.ts', content);
console.log('Updated constants.ts');
