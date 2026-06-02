import fs from 'fs';

let content = fs.readFileSync('constants.ts', 'utf-8');

// We want to add isNew: true to the objects having name "Overnight Oats", "Exotic Sunrise", "Apple Cinnamon Muesli"

// Add a regex to find these names and add `isNew: true`
const namesToTarget = ['Overnight Oats', 'Exotic Sunrise', 'Apple Cinnamon Muesli'];

for (const name of namesToTarget) {
    // Regex that finds name: "..." and adds isNew: true right after it, if it's not already there.
    const regex = new RegExp(`(name:\\s*["']${name}["'],)`, "g");
    content = content.replace(regex, "$1\\n        isNew: true,");
}

fs.writeFileSync('constants.ts', content);
console.log("Updated isNew");
