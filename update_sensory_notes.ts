import fs from 'fs';
import path from 'path';

const constantsPath = path.join(process.cwd(), 'constants.ts');
let content = fs.readFileSync(constantsPath, 'utf8');

const targetStr = `        const manuallyPouringCategory = {
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
        };`;

const replacementStr = `        const manuallyPouringCategory = {
          id: "manually-pouring",
          title: "MANUALLY POURING",
          items: [
            {
              id: "man_colombia_sidra",
              name: "COLOMBIA SIDRA",
              tastingNotes: "Vibrant red grapes and juicy watermelon with a nostalgic hard candy and raspberry finish.",
              price: "57",
              image: "https://iili.io/qLf9mXt.jpg",
              ingredients: "Manual Pouring",
              calories: 5,
              status: "Available",
            },
            {
              id: "man_colombia_strawberry",
              name: "COLOMBIA STRAWBERRY",
              tastingNotes: "A luscious blend of sweet strawberry jam, golden honey, and smooth milk chocolate.",
              price: "41",
              image: "https://iili.io/qLf9mXt.jpg",
              ingredients: "Manual Pouring",
              calories: 5,
              status: "Available",
            },
            {
              id: "man_mish_mish",
              name: "MISH MISH",
              tastingNotes: "Delicate notes of apricot jam and bright raspberry, rounded out by exotic lychee.",
              price: "57",
              image: "https://iili.io/qLf9mXt.jpg",
              ingredients: "Manual Pouring",
              calories: 5,
              status: "Available",
            },
            {
              id: "man_costa_rica",
              name: "COSTA RICA",
              tastingNotes: "Deep, comforting layers of cacao and fig compote with a honey-cherry sweetness.",
              price: "57",
              image: "https://iili.io/qLf9mXt.jpg",
              ingredients: "Manual Pouring",
              calories: 5,
              status: "Available",
            },
            {
              id: "man_kenya_kiramara",
              name: "KENYA KIRAMARA",
              tastingNotes: "Rich brown sugar and sun-dried raisins balanced by the tartness of wild cherry.",
              price: "46",
              image: "https://iili.io/qLf9mXt.jpg",
              ingredients: "Manual Pouring",
              calories: 5,
              status: "Available",
            },
            {
              id: "man_panama_gesha",
              name: "PANAMA GESHA",
              tastingNotes: "An elegant, floral profile of cantaloupe and honey with whispers of lemongrass and berries.",
              price: "65",
              image: "https://iili.io/qLf9mXt.jpg",
              ingredients: "Manual Pouring",
              calories: 5,
              status: "Available",
            },
            {
              id: "man_sweet_dream_decaf",
              name: "SWEET DREAM DECAF",
              tastingNotes: "A cozy, full-bodied cup featuring dried apricot, dark molasses, and toasted pecan nuts.",
              price: "36",
              image: "https://iili.io/qLf9mXt.jpg",
              ingredients: "Manual Pouring",
              calories: 5,
              status: "Available",
            }
          ]
        };`;

if (content.includes(targetStr)) {
  content = content.replace(targetStr, replacementStr);
  fs.writeFileSync(constantsPath, content, 'utf8');
  console.log('Successfully updated Manually Pouring sensory notes and prices.');
} else {
  console.log('Target string not found in constants.ts');
}
