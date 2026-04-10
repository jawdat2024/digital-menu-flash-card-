import fs from 'fs';

let content = fs.readFileSync('constants.ts', 'utf-8');

const target = `    if (cat.id === "desserts") {
      return {
        ...cat,
        items: cat.items.map((item) =>
          item.id === "d_crepe_rolls" ? { ...item, status: "Available" } : item,
        ),
      };
    }`;

const replacement = `    if (cat.id === "desserts") {
      return {
        ...cat,
        items: cat.items.map((item) =>
          item.id === "d_crepe_rolls" ? { ...item, status: "Available" } : item,
        ),
      };
    }
    if (cat.id === "from-our-bakery") {
      return {
        ...cat,
        items: [
          ...cat.items,
          {
            id: "fob_bacon_glaze",
            name: "Bacon Glaze",
            ingredients: "Flaky croissant dough rolled with Angus beef bacon inside, baked until golden, then glazed with burnt butter and organic maple syrup.",
            price: "22",
            image: "https://iili.io/B1idjQn.jpg",
            status: "Available" as const,
          }
        ]
      };
    }`;

if (content.includes(target)) {
  content = content.replace(target, replacement);
  fs.writeFileSync('constants.ts', content);
  console.log('Successfully added Bacon Glaze to Marina menu');
} else {
  console.log('Target not found');
}
