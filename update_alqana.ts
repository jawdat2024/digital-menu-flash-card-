import fs from 'fs';
import path from 'path';

const constantsPath = path.join(process.cwd(), 'constants.ts');
let content = fs.readFileSync(constantsPath, 'utf8');

// 1. Update Al Qana Beans
// 469 Blend -> Latino Blend (Additional +1 AED)
content = content.replace(
  /id:\s*"bean_469",\s*name:\s*"469 Blend",\s*notes:\s*"Apricot Jam, White Chocolate, Jaggery",\s*price:\s*0,/g,
  `id: "bean_469",
      name: "Latino Blend",
      notes: "Apricot Jam, White Chocolate, Jaggery",
      price: 1,`
);

// Brazil Amazonic Soul -> Brazil Chocolate (Additional +1 AED)
content = content.replace(
  /id:\s*"bean_brazil",\s*name:\s*"Brazil Amazonic Soul",\s*notes:\s*"Dark Chocolate, Roasted Hazelnut, Caramel",\s*price:\s*1,/g,
  `id: "bean_brazil",
      name: "Brazil Chocolate",
      notes: "Dark Chocolate, Roasted Hazelnut, Caramel",
      price: 1,`
);

// Yemen Sharqi Haraaz -> Colombia Strawberry (Additional +5 AED)
// Since Colombia Strawberry is already in the array as "Coming Soon", we will remove Yemen and update Colombia Strawberry.
content = content.replace(
  /\{\s*id:\s*"bean_yemen",\s*name:\s*"Yemen Sharqi Haraaz",\s*notes:\s*"Chestnut, Cola, Red Grape",\s*price:\s*10,\s*isNew:\s*false,\s*\},/g,
  ''
);
content = content.replace(
  /\{\s*id:\s*"bean_colombia_strawberry",\s*name:\s*"Colombia - Strawberry",\s*notes:\s*"Strawberry Jam, Honey, Milk Chocolates",\s*price:\s*5,\s*isNew:\s*true,\s*status:\s*"Coming Soon",\s*\}/g,
  `{
      id: "bean_colombia_strawberry",
      name: "Colombia Strawberry",
      notes: "Strawberry Jam, Honey, Milk Chocolates",
      price: 5,
      isNew: true,
      status: "Available",
    }`
);

// 2. Update Signature Drinks Descriptions in BASE_MENU
// Baby Shark
content = content.replace(
  /id:\s*"sig_baby_shark",\s*name:\s*"Baby Shark",\s*ingredients:\s*"A fun, colorful signature drink for kids and the young at heart",/g,
  `id: "sig_baby_shark",
        name: "Baby Shark",
        ingredients:
          "A premium strawberry powder and your choice of milk.",`
);

// Tanzanian Hot Chocolate
content = content.replace(
  /id:\s*"sig8",\s*name:\s*"Tanzanian Hot Chocolate",\s*ingredients:\s*"Single origin Tanzanian cacao, rich and velvety steamed milk\. MARSHMELLO, chocholate stick",/g,
  `id: "sig8",
        name: "Tanzanian Hot Chocolate",
        ingredients:
          "Single-origin Tanzanian cacao, rich and velvety steamed milk, served with a chocolate stick.",`
);

fs.writeFileSync(constantsPath, content, 'utf8');
console.log('Al Qana Menu Updates applied successfully.');
