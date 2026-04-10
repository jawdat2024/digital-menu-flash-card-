import * as fs from 'fs';

let content = fs.readFileSync('constants.ts', 'utf-8');

content = content.replace(
  /id:\s*"bean_colombia_strawberry",\s*name:\s*"[^"]+",\s*notes:\s*"[^"]+",\s*price:\s*\d+,/g,
  `id: "bean_colombia_strawberry",\n      name: "Colombia Peach",\n      notes: "Strawberry Jam, Honey, Milk Chocolates",\n      price: 5,`
);

fs.writeFileSync('constants.ts', content, 'utf-8');
