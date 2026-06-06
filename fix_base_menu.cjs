const fs = require('fs');
let code = fs.readFileSync('constants.ts', 'utf8');

const fruitsInjectionStr = `
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

const badInjectStart = code.substring(0, code.indexOf('const BASE_MENU')).indexOf('{', code.indexOf('id: "fruits-and-grinds"'));
if (badInjectStart !== -1) {
  const badInjectEnd = code.indexOf('id: "fg_pure_acai"');
  if (badInjectEnd !== -1) {
     const realEnd = code.indexOf('}', code.indexOf('}', code.indexOf('}', badInjectEnd) + 1) + 1) + 1;
     const toRemoveStr = code.substring(badInjectStart, code.indexOf('},', realEnd) + 2);
     code = code.replace(toRemoveStr, '');
  }
}

const betterBaseMenuRegex = /const BASE_MENU: MenuCategory\[\] = \[\s*/g;
code = code.replace(betterBaseMenuRegex, 'const BASE_MENU: MenuCategory[] = [\n' + fruitsInjectionStr);

// To ensure Marina isn't overriding anything by index, wait! We're good.

fs.writeFileSync('constants.ts', code);
console.log('Fixed BASE_MENU injection.');
