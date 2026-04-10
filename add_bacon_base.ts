import fs from 'fs';

let content = fs.readFileSync('constants.ts', 'utf-8');

const target = `      {
        id: "fob_choc",
        name: "Chocolate Croissant",`;

const replacement = `      {
        id: "fob_bacon_glaze",
        name: "Bacon Glaze",
        ingredients: "Flaky croissant dough rolled with Angus beef bacon inside, baked until golden, then glazed with burnt butter and organic maple syrup.",
        price: "22",
        image: "https://iili.io/B1idjQn.jpg",
        status: "Available" as const,
      },
      {
        id: "fob_choc",
        name: "Chocolate Croissant",`;

if (content.includes(target)) {
  content = content.replace(target, replacement);
  fs.writeFileSync('constants.ts', content);
  console.log('Successfully added Bacon Glaze to BASE_MENU');
} else {
  console.log('Target not found');
}
