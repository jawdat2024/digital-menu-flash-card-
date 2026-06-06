const fs = require('fs');
let code = fs.readFileSync('constants.ts', 'utf8');

code = code.replace(/'healthy-bowls'/g, "'fruits-and-grinds'");

const baseFruitsInjection = `
  {
    id: "fruits-and-grinds",
    title: "FRUIT & GRINDS",
    items: [
      {
        id: "fg_overnight_oat",
        name: "Overnight Oat",
        price: "42",
        image: "https://iili.io/fvyqMn1.jpg",
        ingredients: "Oats are soaked in oat milk with mixed-berry compote, peanut butter, and cashews.",
      },
      {
        id: "fg_apple_cinnamon",
        name: "Apple Cinnamon",
        price: "42",
        image: "https://iili.io/qttz2I4.jpg",
        ingredients: "Cinnamon yogurt, granola, apple crumble, soft caramel, berry compote, honeycomb, raspberries, blueberries, blackberries, apple crisp, mixed nuts, and organic honey drizzle.",
      },
      {
        id: "fg_exotic_sunrise",
        name: "Exotic Sunrise",
        price: "42",
        image: "https://iili.io/qtt1Pz7.jpg",
        ingredients: "Coconut yogurt, homemade granola, passion fruit, mango slices, exotic gel, and lime zest.",
      },
      {
        id: "fg_chia_bowl",
        name: "Chia Bowl",
        price: "42",
        image: "https://iili.io/qttcGUl.jpg",
        ingredients: "Coconut chia pudding, Greek yogurt, strawberries, blackberries, raspberries, blueberries, mixed-berry compote, sesame toil, whipped chocolate, and shaved dark chocolate with an organic honey drizzle.",
      },
      {
        id: "fg_pure_acai",
        name: "Pure Açaí Bowl",
        price: "48",
        image: "https://iili.io/fvyuItf.jpg",
        ingredients: "Açaí berry, peanut butter, mango, kiwi, dragon fruit, banana, strawberries, blueberries, passion fruit.",
      }
    ]
  },
`;

const baseMenuStart = code.indexOf('export const BASE_MENU: MenuCategory[]');
const baseMenuEnd = code.indexOf('];', baseMenuStart);
if (baseMenuEnd !== -1 && !code.substring(baseMenuStart, baseMenuEnd).includes('id: "fruits-and-grinds"')) {
    code = code.substring(0, baseMenuEnd) + baseFruitsInjection + code.substring(baseMenuEnd);
}

code = code.replace(/includes\('matcha chia pudding'\)/g, "includes('matcha chia')");
code = code.replace(/includes\('apple cinnamon muesli'\)/g, "includes('apple cinnamon')");
code = code.replace(/includes\('acai smoothie'\)/g, "includes('açaí bowl')");

fs.writeFileSync('constants.ts', code);
console.log('Fixed BASE_MENU and best seller logic');
