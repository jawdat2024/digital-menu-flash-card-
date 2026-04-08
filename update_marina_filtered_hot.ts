import fs from 'fs';
import path from 'path';

const constantsPath = path.join(process.cwd(), 'constants.ts');
let content = fs.readFileSync(constantsPath, 'utf8');

const targetStr = `          const kenya = filteredHot.items.find(item => item.name.toLowerCase().includes('kenya kirimara') || item.name.toLowerCase().includes('kenya kiramara'));
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
          }`;

const replacementStr = `          const newFilteredItems = [
            {
              id: "fil_colombia_sidra",
              name: "Colombia Sidra",
              tastingNotes: "Vibrant red grapes and juicy watermelon with nostalgic hard candy and raspberry finish.",
              price: "57",
              image: "https://iili.io/qLf9mXt.jpg",
              ingredients: "Pour-over brewing method",
              calories: 5,
              status: "Available",
            },
            {
              id: "fil_colombia_strawberry",
              name: "Colombia Strawberry",
              tastingNotes: "A luscious blend of sweet strawberry jam, golden honey, and smooth milk chocolate.",
              price: "41",
              image: "https://iili.io/qLf9mXt.jpg",
              ingredients: "Pour-over brewing method",
              calories: 5,
              status: "Available",
            },
            {
              id: "fil_mish_mish",
              name: "Mish Mish",
              tastingNotes: "Delicate notes of apricot jam and bright raspberry, rounded out by exotic lychee.",
              price: "57",
              image: "https://iili.io/qLf9mXt.jpg",
              ingredients: "Pour-over brewing method",
              calories: 5,
              status: "Available",
            },
            {
              id: "fil_costa_rica",
              name: "Costa Rica",
              tastingNotes: "Deep, comforting layers of cacao and fig compote with a honey-cherry sweetness.",
              price: "57",
              image: "https://iili.io/qLf9mXt.jpg",
              ingredients: "Pour-over brewing method",
              calories: 5,
              status: "Available",
            },
            {
              id: "fil_kenya_kiramara",
              name: "Kenya Kiramara {TAP FILTER}",
              tastingNotes: "Rich brown sugar and sun-dried raisins balanced by the tartness of wild cherry.",
              price: "46",
              image: "https://iili.io/qLf9mXt.jpg",
              ingredients: "Pour-over brewing method",
              calories: 5,
              status: "Available",
            },
            {
              id: "fil_panama_gesha",
              name: "Panama Gesha",
              tastingNotes: "An elegant, floral profile of cantaloupe and honey with whispers of lemongrass and berries.",
              price: "65",
              image: "https://iili.io/qLf9mXt.jpg",
              ingredients: "Pour-over brewing method",
              calories: 5,
              status: "Available",
            },
            {
              id: "fil_sweet_dream_decaf",
              name: "Sweet Dream Decaf",
              tastingNotes: "A cozy, full-bodied cup featuring dried apricot, dark molasses, and toasted pecan nuts.",
              price: "36",
              image: "https://iili.io/qLf9mXt.jpg",
              ingredients: "Pour-over brewing method",
              calories: 5,
              status: "Available",
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
          });`;

if (content.includes(targetStr)) {
  content = content.replace(targetStr, replacementStr);
  fs.writeFileSync(constantsPath, content, 'utf8');
  console.log('Successfully updated Marina FILTERED (Hot) items.');
} else {
  console.log('Target string not found in constants.ts');
}
