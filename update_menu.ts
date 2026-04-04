import fs from 'fs';
import path from 'path';

const constantsPath = path.join(process.cwd(), 'constants.ts');
let content = fs.readFileSync(constantsPath, 'utf8');

// 1. New Product Addition (Dessert Category)
// Add to BASE_MENU desserts
const newDessert = `      {
        id: "d_deconstructed_cheesecake",
        name: "Deconstructed Cheesecake",
        ingredients: "A light and creamy eggless vanilla cheesecake served deconstructed, layered with crunchy almond crumble with mixed berries.",
        price: "39.20",
        image: "https://iili.io/q2hets4.png",
        calories: 0,
      },
`;

// Find BASE_MENU desserts array
const baseDessertsRegex = /(id:\s*"desserts",\s*title:\s*"Dessert",\s*items:\s*\[)/;
content = content.replace(baseDessertsRegex, `$1\n${newDessert}`);

// Add to Al Bateen desserts
const alBateenDessertsRegex = /(const createAlBateenMenu = \(\): MenuCategory\[\] => \{[\s\S]*?id:\s*"desserts",\s*title:\s*"Desserts",\s*items:\s*\[)/;
content = content.replace(alBateenDessertsRegex, `$1\n        findItem("desserts", "d_deconstructed_cheesecake")!,`);

// Add to Al Qana desserts
const alQanaDessertsRegex = /(const createAlQanaMenu = \(\): MenuCategory\[\] => \{[\s\S]*?id:\s*"desserts",\s*title:\s*"Desserts",\s*items:\s*\[)/;
content = content.replace(alQanaDessertsRegex, `$1\n        findItem("desserts", "d_deconstructed_cheesecake")!,`);

// 2. Product Removal (Al Bateen Only)
// Target Item: Cigar {tap filter}
// In Al Bateen Filter Coffee
const alBateenCigarRegex = /(const createAlBateenMenu = \(\): MenuCategory\[\] => \{[\s\S]*?id:\s*"filter-coffee",\s*title:\s*"Filter Coffee",\s*items:\s*\[[\s\S]*?)\{\s*id:\s*"fil_cuban_cigar",[\s\S]*?status:\s*"Available",\s*\},\s*/;
content = content.replace(alBateenCigarRegex, `$1`);

// 3. Product Modification (Filtered Category)
// Branch: Al Bateen
// Original Name: Colombia Gesha.
// New Name: Colombia Gesha Key Lime Pie
// Category Path: Filtered -> Cold Drip & Filter Brewing
// Wait, in Al Bateen, the filter coffee items are:
// fil_mish_mish, fil_kenya_kirimara, fil_blackberry, fil_ethiopia, fil_colombia_sweet_decaf, fil_colombia_gesha, fil_costa_rica
// Let's update fil_colombia_gesha in Al Bateen specifically.
const alBateenGeshaRegex = /(const createAlBateenMenu = \(\): MenuCategory\[\] => \{[\s\S]*?id:\s*"fil_colombia_gesha",\s*name:\s*")Colombia Gesha(")/;
content = content.replace(alBateenGeshaRegex, `$1Colombia Gesha Key Lime Pie$2`);

fs.writeFileSync(constantsPath, content, 'utf8');
console.log('Update script executed successfully.');
