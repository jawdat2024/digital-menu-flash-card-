import fs from 'fs';

let text = fs.readFileSync('constants.ts', 'utf8');

// Replace 1:
text = text.replace(
  /name: "Tornado Chilli Egg",\s+price: "52",\s+image: "https:\/\/iili\.io\/qqGClvR\.jpg",/g,
  `name: "Tornado Chilli Egg",
          price: "54",
          image: "https://iili.io/qqGClvR.jpg",`
);

// Replace 2:
text = text.replace(
  /name: "Tornado Chilli Egg",\s+price: "TBD",\s+image: "",/g,
  `name: "Tornado Chilli Egg",
          price: "54",
          image: "https://iili.io/qqGClvR.jpg",`
);

// Replace 3:
text = text.replace(
  /name: "Tornado Chilli Egg",\s+price: "52",\s+image: "https:\/\/iili\.io\/fvpnDhB\.jpg",/g,
  `name: "Tornado Chilli Egg",
          price: "54",
          image: "https://iili.io/qqGClvR.jpg",`
);

fs.writeFileSync('constants.ts', text);
console.log('Done');
