import fs from 'fs';
import path from 'path';

const constantsPath = path.join(process.cwd(), 'constants.ts');
let content = fs.readFileSync(constantsPath, 'utf8');

// Update Mirdif
content = content.replace(
  /\{\s*id:\s*"bean_latino",\s*name:\s*"Latino Blend",\s*notes:\s*"Milk Chocolate, Hazelnut, Toffee",\s*price:\s*0,\s*isNew:\s*false,\s*\}/,
  `{
      id: "bean_latino",
      name: "Latino Blend",
      notes: "Milk Chocolate, Hazelnut, Toffee",
      price: 1,
      isNew: false,
    }`
);

// Update Marina
content = content.replace(
  /\{\s*id:\s*"bean_latino_blend",\s*name:\s*"Latino Blend \(The Crowd Pleaser\)",\s*notes:\s*"Chocolate Biscuit, Condensed Milk, Chestnut",\s*price:\s*1,\s*isNew:\s*true,\s*\}/,
  `{
      id: "bean_latino_blend",
      name: "Latino Blend",
      notes: "Milk Chocolate, Hazelnut, Toffee",
      price: 1,
      isNew: true,
    }`
);

fs.writeFileSync(constantsPath, content, 'utf8');
console.log('Updated Latino Blend');
