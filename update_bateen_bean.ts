import fs from 'fs';
import path from 'path';

const constantsPath = path.join(process.cwd(), 'constants.ts');
let content = fs.readFileSync(constantsPath, 'utf8');

const nicaraguaRegex = /\{\s*id:\s*"bean_nicaragua",\s*name:\s*"Nicaragua",\s*notes:\s*"Sugarcane, Candied Peanuts, Milk Chocolate",\s*price:\s*0,\s*isNew:\s*false,\s*\}/;

const latinoBlend = `{
      id: "bean_latino",
      name: "Latino Blend",
      notes: "Milk Chocolate, Hazelnut, Toffee",
      price: 1,
      isNew: false,
    }`;

if (nicaraguaRegex.test(content)) {
  content = content.replace(nicaraguaRegex, latinoBlend);
  fs.writeFileSync(constantsPath, content, 'utf8');
  console.log('Updated Nicaragua to Latino Blend in Al Bateen.');
} else {
  console.log('Could not find Nicaragua bean in constants.ts');
}
