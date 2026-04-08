import fs from 'fs';
import path from 'path';

const constantsPath = path.join(process.cwd(), 'constants.ts');
let content = fs.readFileSync(constantsPath, 'utf8');

const targetStr = `    if (coldBrewItems.length > 0) {
      newSubCategories.push({
        id: "cold-brew",
        title: "COLD BREW",
        items: coldBrewItems,
      });
    }`;

const replacementStr = `    // Always add the global cold brew items
    newSubCategories.push({
      id: "cold-brew",
      title: "COLD BREW",
      items: [
        {
          id: "cb_colombia_global",
          name: "Colombia",
          tastingNotes: "hazelnut, orange, molasses",
          price: "38",
          image: "https://iili.io/qKYaxff.png",
          ingredients: "Cold Brew",
          calories: 5,
          status: "Available",
        },
        {
          id: "cb_ethiopia_global",
          name: "Ethiopia",
          tastingNotes: "Apricot, Pear, Honey",
          price: "38",
          image: "https://iili.io/B3OHMFV.jpg",
          ingredients: "Cold Brew",
          calories: 5,
          status: "Available",
        },
        {
          id: "cb_kenya_global",
          name: "Kenya",
          tastingNotes: "Brown Sugar – Wild Cherry- Raisins",
          price: "38",
          image: "https://iili.io/B3Ns6UG.jpg",
          ingredients: "Cold Brew",
          calories: 5,
          status: "Available",
        }
      ],
    });`;

if (content.includes(targetStr)) {
  content = content.replace(targetStr, replacementStr);
  fs.writeFileSync(constantsPath, content, 'utf8');
  console.log('Successfully updated global cold brew in applyGoldenRuleLayout.');
} else {
  console.log('Target string not found in constants.ts');
}
