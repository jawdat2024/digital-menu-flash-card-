import fs from 'fs';
import path from 'path';

const constantsPath = path.join(process.cwd(), 'constants.ts');
let content = fs.readFileSync(constantsPath, 'utf8');

// 1. Branch-Specific Update [Target: Dubai Mirdif]
// Old: "Sweet Dreams Decaf" -> New: "Latino Blend" | Surcharge: 0 AED (Standard)
// Old: "The 469 Blend" -> New: "Brazil Chocolate" | Surcharge: +1 AED

// Mirdif beans are defined in `const mirdifBeans = [ ... ]`
// Let's replace them specifically.
content = content.replace(
  /id:\s*"bean_469",\s*name:\s*"The 469 Bland",\s*notes:\s*"White Chocolate, Apricot Jam, Jaggery",\s*price:\s*0,/g,
  `id: "bean_469",
      name: "Brazil Chocolate",
      notes: "Chocolate biscuit, condensed milk, chestnut",
      price: 1,`
);

content = content.replace(
  /id:\s*"bean_decaf",\s*name:\s*"Sweet Dreams Decaf",\s*notes:\s*"Passion fruit cheesecake, Milk chocolate, Molasses",\s*price:\s*0,/g,
  `id: "bean_decaf",
      name: "Latino Blend",
      notes: "Milk Chocolate, Hazelnut, Toffee",
      price: 0,`
);

// 2. Global Attribute Update [Target: All Branches]
// Latino Blend: Milk Chocolate, Hazelnut, Toffee.
// Brazil Chocolate: Chocolate biscuit, condensed milk, chestnut.
// Colombia Strawberry: Strawberry Jam, Honey, Milk Chocolates.

// Update all occurrences of Latino Blend notes (if any exist)
content = content.replace(
  /(name:\s*"Latino Blend",\s*notes:\s*")[^"]+(")/g,
  `$1Milk Chocolate, Hazelnut, Toffee$2`
);

// Update all occurrences of Brazil Chocolate notes
content = content.replace(
  /(name:\s*"Brazil Chocolate",\s*notes:\s*")[^"]+(")/g,
  `$1Chocolate biscuit, condensed milk, chestnut$2`
);

// Update all occurrences of Colombia Strawberry notes
content = content.replace(
  /(name:\s*"Colombia(?: -)? Strawberry",\s*notes:\s*")[^"]+(")/g,
  `$1Strawberry Jam, Honey, Milk Chocolates$2`
);

// 3. Category Override [Target: "Filtered" Category]
// We need to replace the items array for every category with id: "filter-coffee"
const newFilterItems = `[
        {
          id: "fil_cuban_cigar",
          name: "Cuban Cigar {tap filter}",
          tastingNotes: "Caramel popcorn, fresh tobacco",
          price: "41",
          image: "https://iili.io/qLf9mXt.jpg",
          ingredients: "Pour-over brewing method",
          calories: 5,
          status: "Available",
        },
        {
          id: "fil_mish_mish",
          name: "Mish Mish",
          tastingNotes: "Apricot jam, raspberry, lychee",
          price: "57",
          image: "https://iili.io/qLf9mXt.jpg",
          ingredients: "Pour-over brewing method",
          calories: 5,
          status: "Available",
        },
        {
          id: "fil_kenya_kirimara",
          name: "Kenya KIRIMARA",
          tastingNotes: "Brown sugar, wild cherry, raisins",
          price: "46",
          image: "https://iili.io/qLf9mXt.jpg",
          ingredients: "Pour-over brewing method",
          calories: 5,
          status: "Available",
        },
        {
          id: "fil_blackberry",
          name: "Blackberry {tap filter}",
          tastingNotes: "Blackberry soda, cacao nibs, karkade",
          price: "57",
          image: "https://iili.io/qLf9mXt.jpg",
          ingredients: "Pour-over brewing method",
          calories: 5,
          status: "Available",
        },
        {
          id: "fil_ethiopia",
          name: "Ethiopia",
          tastingNotes: "Apricot, pear, honey",
          price: "36",
          image: "https://iili.io/qLf9mXt.jpg",
          ingredients: "Pour-over brewing method",
          calories: 5,
          status: "Available",
        },
        {
          id: "fil_colombia_sweet_decaf",
          name: "Colombia Sweet Decaf",
          tastingNotes: "Passion fruit cheesecake, milk chocolate, molasses",
          price: "36",
          image: "https://iili.io/qLf9mXt.jpg",
          ingredients: "Pour-over brewing method",
          calories: 5,
          status: "Available",
        },
        {
          id: "fil_colombia_gesha",
          name: "Colombia Gesha",
          tastingNotes: "Orange blossom, lemon grass, condensed milk",
          price: "65",
          image: "https://iili.io/qLf9mXt.jpg",
          ingredients: "Pour-over brewing method",
          calories: 5,
          status: "Available",
        },
        {
          id: "fil_costa_rica",
          name: "Costa Rica",
          tastingNotes: "Cacao, fig compote, honey, cherry",
          price: "57",
          image: "https://iili.io/qLf9mXt.jpg",
          ingredients: "Pour-over brewing method",
          calories: 5,
          status: "Available",
        }
      ]`;

// We will use a regex to find all `id: "filter-coffee"` blocks and replace their `items: [...]` array.
// Since the arrays can be multiline, we'll use a careful regex.
const filterCoffeeRegex = /(id:\s*"filter-coffee",\s*title:\s*"Filter Coffee",\s*items:\s*)\[[\s\S]*?\](,|\s*\})/g;
content = content.replace(filterCoffeeRegex, `$1${newFilterItems}$2`);

fs.writeFileSync(constantsPath, content, 'utf8');
console.log('Update script executed successfully.');
