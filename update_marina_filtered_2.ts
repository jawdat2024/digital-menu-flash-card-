import fs from 'fs';

let content = fs.readFileSync('constants.ts', 'utf-8');

const replacement = `          const newFilteredItems = [
            {
              id: "fil_ethiopia_rojicha",
              name: "Ethiopia Rojicha",
              tastingNotes: "Apricot, Pear, Honey.",
              price: "36",
              image: "https://iili.io/qKka1vj.png",
              ingredients: "Pour-over brewing method",
              calories: 5,
              status: "Available" as const,
            },
            {
              id: "fil_kenya_kirimara",
              name: "Kenya Kirimara",
              tastingNotes: "Brown Sugar, Wild Cherry, Raisins.",
              price: "46",
              image: "https://iili.io/BuylWL7.png",
              ingredients: "Pour-over brewing method",
              calories: 5,
              status: "Available" as const,
            },
            {
              id: "fil_colombia_strawberry",
              name: "Colombia Strawberry",
              tastingNotes: "Strawberry Jam, Honey, Milk Chocolates.",
              price: "41",
              image: "https://iili.io/qKkcmJa.png",
              ingredients: "Pour-over brewing method",
              calories: 5,
              status: "Available" as const,
            },
            {
              id: "fil_colombia_sidra",
              name: "Colombia Sidra",
              tastingNotes: "Red Grapes, Watermelon, Hard Candy, Raspberry.",
              price: "57",
              image: "https://iili.io/qLf9mXt.jpg",
              ingredients: "Pour-over brewing method",
              calories: 5,
              status: "Available" as const,
            },
            {
              id: "fil_mish_mish",
              name: "Mish Mish",
              tastingNotes: "Apricot Jam, Raspberry, Lychee.",
              price: "57",
              image: "https://iili.io/qLf9mXt.jpg",
              ingredients: "Pour-over brewing method",
              calories: 5,
              status: "Available" as const,
            },
            {
              id: "fil_costa_rica",
              name: "Costa Rica",
              tastingNotes: "Cacao, Fig Compote, Honey, Cherry.",
              price: "57",
              image: "https://iili.io/qLf9mXt.jpg",
              ingredients: "Pour-over brewing method",
              calories: 5,
              status: "Available" as const,
            },
            {
              id: "fil_panama_gesha",
              name: "Panama Gesha",
              tastingNotes: "Cantaloupe, Honey, Berries, Lemongrass.",
              price: "65",
              image: "https://iili.io/qLf9mXt.jpg",
              ingredients: "Pour-over brewing method",
              calories: 5,
              status: "Available" as const,
            },
            {
              id: "fil_sweet_dream_decaf",
              name: "Sweet Dream Decaf",
              tastingNotes: "Dried Apricot, Molasses, Pecan Nuts.",
              price: "36",
              image: "https://iili.io/qLf9mXt.jpg",
              ingredients: "Pour-over brewing method",
              calories: 5,
              status: "Available" as const,
            }
          ];

          newFilteredItems.forEach(newItem => {
            const baseName = newItem.name.replace('{TAP FILTER}', '').trim().toLowerCase();
            const existingIdx = filteredHot.items.findIndex(item => item.name.toLowerCase().includes(baseName));
            if (existingIdx !== -1) {
              filteredHot.items[existingIdx] = { ...filteredHot.items[existingIdx], ...newItem };
            } else {
              filteredHot.items.push(newItem);
            }
          });
        }
        
        // 2. Create New Category: "TAPS FILTERED"
        const tapsFilteredCategory = {
          id: "taps-filtered",
          title: "TAPS FILTERED",
          items: [
            {
              id: "tap_ethiopia_rojicha",
              name: "ETHIOPIA ROJICHA",
              tastingNotes: "Apricot, Pear, Honey.",
              price: "36",
              image: "https://iili.io/qKka1vj.png",
              ingredients: "{TAPS FILTERED}",
              calories: 5,
              status: "Available" as const,
            },
            {
              id: "tap_kenya_kirimara",
              name: "KENYA KIRIMARA",
              tastingNotes: "Brown Sugar, Wild Cherry, Raisins.",
              price: "46",
              image: "https://iili.io/BuylWL7.png",
              ingredients: "{TAPS FILTERED}",
              calories: 5,
              status: "Available" as const,
            },
            {
              id: "tap_colombia_strawberry",
              name: "COLOMBIA STRAWBERRY",
              tastingNotes: "Strawberry Jam, Honey, Milk Chocolates.",
              price: "41",
              image: "https://iili.io/qKkcmJa.png",
              ingredients: "{TAPS FILTERED}",
              calories: 5,
              status: "Available" as const,
            }
          ]
        };
        
        // 3. Update "MANUALLY POURING" Category
        const manuallyPouringCategory = {
          id: "manually-pouring",
          title: "MANUALLY POURING",
          items: [
            {
              id: "man_ethiopia_rojicha",
              name: "ETHIOPIA ROJICHA",
              tastingNotes: "Apricot, Pear, Honey.",
              price: "36",
              image: "https://iili.io/qKka1vj.png",
              ingredients: "Manual Pouring",
              calories: 5,
              status: "Available" as const,
            },
            {
              id: "man_kenya_kirimara",
              name: "KENYA KIRIMARA",
              tastingNotes: "Brown Sugar, Wild Cherry, Raisins.",
              price: "46",
              image: "https://iili.io/BuylWL7.png",
              ingredients: "Manual Pouring",
              calories: 5,
              status: "Available" as const,
            },
            {
              id: "man_colombia_strawberry",
              name: "COLOMBIA STRAWBERRY",
              tastingNotes: "Strawberry Jam, Honey, Milk Chocolates.",
              price: "41",
              image: "https://iili.io/qKkcmJa.png",
              ingredients: "Manual Pouring",
              calories: 5,
              status: "Available" as const,
            },
            {
              id: "man_colombia_sidra",
              name: "COLOMBIA SIDRA",
              tastingNotes: "Red Grapes, Watermelon, Hard Candy, Raspberry.",
              price: "57",
              image: "https://iili.io/qLf9mXt.jpg",
              ingredients: "Manual Pouring",
              calories: 5,
              status: "Available" as const,
            },
            {
              id: "man_mish_mish",
              name: "MISH MISH",
              tastingNotes: "Apricot Jam, Raspberry, Lychee.",
              price: "57",
              image: "https://iili.io/qLf9mXt.jpg",
              ingredients: "Manual Pouring",
              calories: 5,
              status: "Available" as const,
            },
            {
              id: "man_costa_rica",
              name: "COSTA RICA",
              tastingNotes: "Cacao, Fig Compote, Honey, Cherry.",
              price: "57",
              image: "https://iili.io/qLf9mXt.jpg",
              ingredients: "Manual Pouring",
              calories: 5,
              status: "Available" as const,
            },
            {
              id: "man_panama_gesha",
              name: "PANAMA GESHA",
              tastingNotes: "Cantaloupe, Honey, Berries, Lemongrass.",
              price: "65",
              image: "https://iili.io/qLf9mXt.jpg",
              ingredients: "Manual Pouring",
              calories: 5,
              status: "Available" as const,
            },
            {
              id: "man_sweet_dream_decaf",
              name: "SWEET DREAM DECAF",
              tastingNotes: "Dried Apricot, Molasses, Pecan Nuts.",
              price: "36",
              image: "https://iili.io/qLf9mXt.jpg",
              ingredients: "Manual Pouring",
              calories: 5,
              status: "Available" as const,
            }
          ]
        };`;

const startIndex = content.indexOf('          const newFilteredItems = [');
const endIndex = content.indexOf('        const hotIdx = specialty.subCategories.findIndex(sc => sc.id === \'filtered-hot\');');

if (startIndex !== -1 && endIndex !== -1) {
  content = content.substring(0, startIndex) + replacement + '\n        ' + content.substring(endIndex);
  fs.writeFileSync('constants.ts', content);
  console.log('Successfully updated constants.ts');
} else {
  console.log('Could not find the target block in constants.ts');
}
