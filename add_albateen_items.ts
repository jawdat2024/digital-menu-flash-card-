import fs from 'fs';

let content = fs.readFileSync('constants.ts', 'utf-8');

const targetStr = `    {
      id: "healthy-bowls",
      title: "FRUITS SEEDS & GRAINS.",
      items: [
        findItem("healthy-bowls", "bw1")!,
        findItem("healthy-bowls", "bw5")!,
        findItem("healthy-bowls", "bw2")!,
        findItem("healthy-bowls", "bw3")!,
        findItem("healthy-bowls", "bw4")!,
      ].filter(Boolean),
    },`;

const safeReplaceStr = `    {
      id: "healthy-bowls",
      title: "FRUITS SEEDS & GRAINS.",
      items: [
        findItem("healthy-bowls", "bw1")!,
        findItem("healthy-bowls", "bw5")!,
        findItem("healthy-bowls", "bw2")!,
        findItem("healthy-bowls", "bw3")!,
        findItem("healthy-bowls", "bw4")!,
        {
          id: "alb_exotic_sunrises",
          name: "Exotic Sunrises",
          ingredients: "Placeholder description",
          price: "0",
          image: "https://iili.io/qLf9mXt.jpg",
          isVisible: true,
          status: 'new'
        },
        {
          id: "alb_overnight_oats",
          name: "Overnight Oats",
          ingredients: "Placeholder description",
          price: "0",
          image: "https://iili.io/qLf9mXt.jpg",
          isVisible: true,
          status: 'new'
        },
        {
          id: "alb_apple_cinnamon_muesli",
          name: "Apple Cinnamon Muesli",
          ingredients: "Placeholder description",
          price: "0",
          image: "https://iili.io/qLf9mXt.jpg",
          isVisible: true,
          status: 'new'
        }
      ].filter(Boolean),
    },`;

const alBateenStart = content.indexOf('const createAlBateenMenu');
const alBateenEnd = content.indexOf('const create', alBateenStart+10);
const menuContent = content.substring(alBateenStart, alBateenEnd > 0 ? alBateenEnd : content.length);

if (menuContent.includes(targetStr)) {
  content = content.replace(targetStr, safeReplaceStr);
  fs.writeFileSync('constants.ts', content, 'utf-8');
  console.log("Successfully updated Al Bateen healthy-bowls category.");
} else {
  console.log("Target string not found in Al Bateen menu.");
  console.log(menuContent.substring(menuContent.indexOf('FRUITS SEEDS'), menuContent.indexOf('FRUITS SEEDS') + 500));
}
