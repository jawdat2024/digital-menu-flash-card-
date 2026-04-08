import fs from 'fs';
import path from 'path';

const constantsPath = path.join(process.cwd(), 'constants.ts');
let content = fs.readFileSync(constantsPath, 'utf8');

const targetStr = `      if (specialty.subCategories) {
        specialty.subCategories = specialty.subCategories.filter(sc => sc.id !== 'filtered-hot');
      }
    }
    return menu;
  })(),`;

const replacementStr = `      if (specialty.subCategories) {
        specialty.subCategories = specialty.subCategories.filter(sc => sc.id !== 'filtered-hot' && sc.id !== 'cold-brew');
        
        const coldBrewCategory = {
          id: "cold-brew",
          title: "COLD BREW",
          items: [
            {
              id: "cb_colombia",
              name: "Colombia",
              tastingNotes: "hazelnut, orange, molasses",
              price: "38",
              image: "https://iili.io/qKYaxff.png",
              ingredients: "Cold Brew",
              calories: 5,
              status: "Available",
            },
            {
              id: "cb_ethiopia",
              name: "Ethiopia",
              tastingNotes: "Apricot, Pear, Honey",
              price: "38",
              image: "https://iili.io/B3OHMFV.jpg",
              ingredients: "Cold Brew",
              calories: 5,
              status: "Available",
            },
            {
              id: "cb_kenya",
              name: "Kenya",
              tastingNotes: "Brown Sugar – Wild Cherry- Raisins",
              price: "38",
              image: "https://iili.io/B3Ns6UG.jpg",
              ingredients: "Cold Brew",
              calories: 5,
              status: "Available",
            }
          ]
        };
        
        const manuallyPouringIdx = specialty.subCategories.findIndex(sc => sc.id === 'manually-pouring');
        if (manuallyPouringIdx !== -1) {
          specialty.subCategories.splice(manuallyPouringIdx + 1, 0, coldBrewCategory);
        } else {
          specialty.subCategories.push(coldBrewCategory);
        }
      }
    }
    return menu;
  })(),`;

if (content.includes(targetStr)) {
  content = content.replace(targetStr, replacementStr);
  fs.writeFileSync(constantsPath, content, 'utf8');
  console.log('Successfully added COLD BREW category to Marina branch.');
} else {
  console.log('Target string not found in constants.ts');
}
