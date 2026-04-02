import fs from 'fs';

let content = fs.readFileSync('constants.ts', 'utf-8');

// 1. Rename "Healthy Bowls" to "FRUITS SEEDS & GRAINS."
content = content.replace(/title:\s*'Healthy Bowls'/g, "title: 'FRUITS SEEDS & GRAINS.'");

// 2. Rename "Eggs & More" to "EGG& MORE" and remove headerStyle
// We can use a regex to match the title and the following headerStyle block
content = content.replace(/title:\s*'Eggs & More',\s*headerStyle:\s*\{[\s\S]*?\},/g, "title: 'EGG& MORE',");

// Also replace any other instances of "Eggs & More" title if they don't have headerStyle
content = content.replace(/title:\s*'Eggs & More'/g, "title: 'EGG& MORE'");

// 3. Update "Matcha Cloud" image
// We need to find the Matcha Cloud item and update its image.
// It looks like: name: 'Matcha Cloud', price: '...', image: '...',
content = content.replace(/(name:\s*'Matcha Cloud'[\s\S]*?image:\s*')[^']+(')/g, "$1https://iili.io/BBR55tj.jpg$2");

fs.writeFileSync('constants.ts', content, 'utf-8');
console.log("Updated constants.ts");
