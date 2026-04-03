import fs from 'fs';
import path from 'path';

const constantsPath = path.join(process.cwd(), 'constants.ts');
let content = fs.readFileSync(constantsPath, 'utf8');

// Remove the wrongly added item
const wronglyAddedRegex = /,\s*\{\s*id:\s*"fil_colombia_gesha_key_lime"[\s\S]*?status:\s*"Available",\s*\}/;
content = content.replace(wronglyAddedRegex, '');

// Add it to Khalifa
const khalifaMenuRegex = /(const createKhalifaMenu = \(\): MenuCategory\[\] => \{[\s\S]*?id:\s*"fil_colombia_s_4"[\s\S]*?status:\s*"Available",\s*\})/;
const newFilterCoffee = `,
        {
          id: "fil_colombia_gesha_key_lime",
          name: "Colombia Gesha - Key lime pie",
          origin: "COLOMBIA",
          tastingNotes: "orange blossom, lemongrass, condensed milk",
          price: "65",
          image: "https://iili.io/qLf9mXt.jpg",
          ingredients: "Pour-over brewing method",
          calories: 5,
          branch: "Khalifa City",
          status: "Available"
        }`;

content = content.replace(khalifaMenuRegex, `$1${newFilterCoffee}`);

fs.writeFileSync(constantsPath, content, 'utf8');
console.log('Fix script executed successfully.');
