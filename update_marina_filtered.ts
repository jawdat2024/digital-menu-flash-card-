import fs from 'fs';
import path from 'path';

const constantsPath = path.join(process.cwd(), 'constants.ts');
let content = fs.readFileSync(constantsPath, 'utf8');

const targetStr = `marina: applyGoldenRuleLayout(createMarinaMenu()),`;

const replacementStr = `marina: (() => {
    const menu = applyGoldenRuleLayout(createMarinaMenu());
    const specialtyIdx = menu.findIndex(c => c.id === 'specialty-coffee');
    if (specialtyIdx !== -1) {
      const specialty = menu[specialtyIdx];
      
      if (specialty.subCategories) {
        const filteredHot = specialty.subCategories.find(sc => sc.id === 'filtered-hot');
        if (filteredHot) {
          // 1. Update "Filtered (Hot)" Category
          filteredHot.items = filteredHot.items.filter(item => 
            !item.name.toLowerCase().includes('cuban cigar') &&
            !item.name.toLowerCase().includes('cigar') &&
            !item.name.toLowerCase().includes('blackberry')
          );
          
          const kenya = filteredHot.items.find(item => item.name.toLowerCase().includes('kenya kirimara') || item.name.toLowerCase().includes('kenya kiramara'));
          if (kenya) {
            kenya.name = "Kenya Kiramara {TAP FILTER}";
          } else {
            filteredHot.items.push({
              id: "fil_kenya_kiramara_tap",
              name: "Kenya Kiramara {TAP FILTER}",
              tastingNotes: "Brown sugar, wild cherry, raisins",
              price: "46",
              image: "https://iili.io/qLf9mXt.jpg",
              ingredients: "Pour-over brewing method",
              calories: 5,
              status: "Available",
            });
          }
        }
        
        // 2. Create New Category: "TAPS FILTERED"
        const tapsFilteredCategory = {
          id: "taps-filtered",
          title: "TAPS FILTERED",
          items: [
            {
              id: "tap_ethiopia_rojicha",
              name: "ETHIOPIA ROJICHA",
              tastingNotes: "Apricot, pear, honey",
              price: "36",
              image: "https://iili.io/qLf9mXt.jpg",
              ingredients: "{TAPS FILTERED}",
              calories: 5,
              status: "Available",
            },
            {
              id: "tap_kenya_kiramara",
              name: "Kenya Kiramara",
              tastingNotes: "Brown sugar, wild cherry, raisins",
              price: "46",
              image: "https://iili.io/qLf9mXt.jpg",
              ingredients: "Available for Manual Pouring",
              calories: 5,
              status: "Available",
            },
            {
              id: "tap_colombia_strawberry",
              name: "Colombia Strawberry",
              tastingNotes: "Strawberry Jam, Honey, Milk Chocolates",
              price: "57",
              image: "https://iili.io/qLf9mXt.jpg",
              ingredients: "Available for Manual Pouring",
              calories: 5,
              status: "Available",
            }
          ]
        };
        
        // 3. Update "MANUALLY POURING" Category
        const manuallyPouringCategory = {
          id: "manually-pouring",
          title: "MANUALLY POURING",
          items: [
            {
              id: "man_colombia_sidra",
              name: "COLOMBIA SIDRA",
              tastingNotes: "Red Grapes, Watermelon, Hard Candy, Raspberry",
              price: "65",
              image: "https://iili.io/qLf9mXt.jpg",
              ingredients: "Manual Pouring",
              calories: 5,
              status: "Available",
            },
            {
              id: "man_colombia_strawberry",
              name: "COLOMBIA STRAWBERRY",
              tastingNotes: "Strawberry Jam, Honey, Milk Chocolates",
              price: "57",
              image: "https://iili.io/qLf9mXt.jpg",
              ingredients: "Manual Pouring",
              calories: 5,
              status: "Available",
            },
            {
              id: "man_mish_mish",
              name: "MISH MISH",
              tastingNotes: "Apricot Jam, Raspberry, Lychee",
              price: "57",
              image: "https://iili.io/qLf9mXt.jpg",
              ingredients: "Manual Pouring",
              calories: 5,
              status: "Available",
            },
            {
              id: "man_costa_rica",
              name: "COSTA RICA",
              tastingNotes: "Cacao, Fig Compote, Honey, Cherry",
              price: "57",
              image: "https://iili.io/qLf9mXt.jpg",
              ingredients: "Manual Pouring",
              calories: 5,
              status: "Available",
            },
            {
              id: "man_kenya_kiramara",
              name: "KENYA KIRAMARA",
              tastingNotes: "Brown Sugar, Wild Cherry, Raisins",
              price: "46",
              image: "https://iili.io/qLf9mXt.jpg",
              ingredients: "Manual Pouring",
              calories: 5,
              status: "Available",
            },
            {
              id: "man_panama_gesha",
              name: "PANAMA GESHA",
              tastingNotes: "Cantaloupe, Honey, Berries, Lemongrass",
              price: "65",
              image: "https://iili.io/qLf9mXt.jpg",
              ingredients: "Manual Pouring",
              calories: 5,
              status: "Available",
            },
            {
              id: "man_sweet_dream_decaf",
              name: "SWEET DREAM DECAF",
              tastingNotes: "Dried Apricot, Molasses, Pecan Nuts",
              price: "36",
              image: "https://iili.io/qLf9mXt.jpg",
              ingredients: "Manual Pouring",
              calories: 5,
              status: "Available",
            }
          ]
        };
        
        const hotIdx = specialty.subCategories.findIndex(sc => sc.id === 'filtered-hot');
        if (hotIdx !== -1) {
          specialty.subCategories.splice(hotIdx + 1, 0, tapsFilteredCategory, manuallyPouringCategory);
        } else {
          specialty.subCategories.push(tapsFilteredCategory, manuallyPouringCategory);
        }
      }
    }
    return menu;
  })(),`;

if (content.includes(targetStr)) {
  content = content.replace(targetStr, replacementStr);
  fs.writeFileSync(constantsPath, content, 'utf8');
  console.log('Successfully updated Marina menu structure.');
} else {
  console.log('Target string not found in constants.ts');
}
