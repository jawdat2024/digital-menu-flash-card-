import fs from 'fs';

let content = fs.readFileSync('constants.ts', 'utf-8');

const namesToTarget = ['Overnight Oats', 'Exotic Sunrise', 'Apple Cinnamon Muesli'];

for (const name of namesToTarget) {
    const regex = new RegExp(`(name:\\s*["']${name}["'],\\s*)isNew:\\s*true,\\s*`, "g");
    content = content.replace(regex, "$1status: 'new',\n        ");
}

fs.writeFileSync('constants.ts', content);
console.log("Updated to status: 'new'");
