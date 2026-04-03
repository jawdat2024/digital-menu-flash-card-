import fs from 'fs';
import path from 'path';

const constantsPath = path.join(process.cwd(), 'constants.ts');
let content = fs.readFileSync(constantsPath, 'utf8');

// Remove isDecaf: true from Latino Blend in Mirdif
content = content.replace(
  /id:\s*"bean_decaf",\s*name:\s*"Latino Blend",\s*notes:\s*"Milk Chocolate, Hazelnut, Toffee",\s*price:\s*0,\s*isNew:\s*false,\s*isDecaf:\s*true,/g,
  `id: "bean_latino",
      name: "Latino Blend",
      notes: "Milk Chocolate, Hazelnut, Toffee",
      price: 0,
      isNew: false,`
);

fs.writeFileSync(constantsPath, content, 'utf8');
console.log('Fixed Latino Blend isDecaf flag.');
