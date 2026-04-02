import fs from 'fs';

const content = fs.readFileSync('constants.ts', 'utf-8');

// We want to extract all items that belong in "Healthy Bowls" and "Eggs & More".
// Healthy Bowls: fruit-based, yogurt-based, grain, or seed-based bowls (e.g., Açaí, Muesli, Oats, Chia, or Fruit bowls)
// Eggs & More: savory breakfast items where eggs are the main ingredient (e.g., Scrambled, Omelets, Benedicts, Baked Eggs)

// Let's write a script that parses the constants.ts file, modifies the RAW_BRANCH_MENUS, and writes it back.
// Since it's a large TS file, we can use regex or AST. Regex is easier if we are careful.

// Actually, we can just look at the items and their names/ingredients to decide.
// Let's print out all items in the file.

const itemRegex = /{\s*id:\s*'([^']+)',\s*name:\s*'([^']+)',\s*price:\s*'([^']+)',\s*image:\s*'([^']+)',\s*ingredients:\s*'([^']*)'/g;
let match;
const items = new Map();
while ((match = itemRegex.exec(content)) !== null) {
  items.set(match[1], { id: match[1], name: match[2], ingredients: match[5] });
}

console.log(Array.from(items.values()));
