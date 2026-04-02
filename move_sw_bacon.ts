import fs from 'fs';

let content = fs.readFileSync('constants.ts', 'utf-8');

const swBaconRegex = /\s*\{\s*id:\s*'sw_bacon'[^}]+\},?/g;

// We need to carefully remove sw_bacon from sandwiches and add it to eggs-more.
// Since it's repeated, we can just remove it globally and then add it to every eggs-more items array.

const swBaconMatch = content.match(/\{\s*id:\s*'sw_bacon'[^}]+\},?/);
if (!swBaconMatch) {
  console.log("sw_bacon not found");
  process.exit(1);
}
const swBaconStr = swBaconMatch[0].trim().endsWith(',') ? swBaconMatch[0].trim() : swBaconMatch[0].trim() + ',';

// Remove all instances of sw_bacon
content = content.replace(swBaconRegex, '');

// Add sw_bacon to eggs-more
// Find `id: 'eggs-more'` and its `items: [` array, then insert sw_bacon
const eggsMoreRegex = /(id:\s*'eggs-more'[\s\S]*?items:\s*\[)/g;
content = content.replace(eggsMoreRegex, `$1\n        ${swBaconStr}`);

fs.writeFileSync('constants.ts', content, 'utf-8');
console.log("Moved sw_bacon to eggs-more");
