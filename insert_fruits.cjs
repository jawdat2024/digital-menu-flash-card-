const fs = require('fs');

let code = fs.readFileSync('constants.ts', 'utf8');

const fruitsCategoryStr = `
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

code = code.replace(/export const RAW_BRANCH_MENUS/, fruitsCategoryStr + '\nexport const RAW_BRANCH_MENUS');

// Actually let's just make the changes inside `sortFilteredCoffeeByPrice` or just before `export const BRANCH_MENUS`.

const injectionScript = `
const baseFruitsAndGrinds = {
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
};

const marinaFruitsAndGrinds = {
    id: "fruits-and-grinds",
    title: "FRUIT & GRINDS",
    items: [
      ...baseFruitsAndGrinds.items,
      {
        id: "fg_banana_dates",
        name: "Banana, Dates & Yogurt",
        price: "38",
        image: "https://iili.io/q2j9Vwu.png",
        ingredients: "Earl Grey Chia, fresh banana, sweet dates, creamy yogurt.",
      },
      {
        id: "fg_matcha_chia",
        name: "Matcha Chia Pudding",
        price: "38",
        image: "https://iili.io/q2hpnov.png",
        ingredients: "Premium Matcha-infused chia pudding, coconut milk, seasonal toppings.",
      }
    ]
};

Object.keys(RAW_BRANCH_MENUS).forEach(branch => {
   const menu = RAW_BRANCH_MENUS[branch];
   const catToInsert = branch === 'marina' ? marinaFruitsAndGrinds : baseFruitsAndGrinds;
   
   // Usually we want it before baked goods. Or desserts.
   const insertIdx = menu.findIndex(c => c.id === 'baked-goods' || c.id === 'desserts' || c.id === 'from-our-bakery');
   if (insertIdx !== -1) {
       menu.splice(insertIdx, 0, catToInsert);
   } else {
       menu.push(catToInsert);
   }
});
`;

code = code.replace(/export const BRANCH_MENUS = sortFilteredCoffeeByPrice\(RAW_BRANCH_MENUS\);/, injectionScript + '\nexport const BRANCH_MENUS = sortFilteredCoffeeByPrice(RAW_BRANCH_MENUS);');

fs.writeFileSync('constants.ts', code);
console.log('injected');
