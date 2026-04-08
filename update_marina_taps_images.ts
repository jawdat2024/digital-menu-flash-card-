import fs from 'fs';
import path from 'path';

const constantsPath = path.join(process.cwd(), 'constants.ts');
let content = fs.readFileSync(constantsPath, 'utf8');

const targetStr = `        const tapsFilteredCategory = {
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
        };`;

const replacementStr = `        const tapsFilteredCategory = {
          id: "taps-filtered",
          title: "TAPS FILTERED",
          items: [
            {
              id: "tap_ethiopia_rojicha",
              name: "ETHIOPIA ROJICHA",
              tastingNotes: "Apricot, Pear, Honey",
              price: "36",
              image: "https://iili.io/qKka1vj.png",
              ingredients: "{TAPS FILTERED}",
              calories: 5,
              status: "Available",
            },
            {
              id: "tap_kenya_kiramara",
              name: "Kenya Kiramara",
              tastingNotes: "Brown Sugar – Wild Cherry- Raisins",
              price: "46",
              image: "https://iili.io/BuylWL7.png",
              ingredients: "Available for Manual Pouring",
              calories: 5,
              status: "Available",
            },
            {
              id: "tap_colombia_strawberry",
              name: "Colombia Strawberry",
              tastingNotes: "Strawberry Jam – Honey - Milk Chocolates",
              price: "57",
              image: "https://iili.io/qKkcmJa.png",
              ingredients: "Available for Manual Pouring",
              calories: 5,
              status: "Available",
            }
          ]
        };`;

if (content.includes(targetStr)) {
  content = content.replace(targetStr, replacementStr);
  fs.writeFileSync(constantsPath, content, 'utf8');
  console.log('Successfully updated Marina taps filtered items.');
} else {
  console.log('Target string not found in constants.ts');
}
