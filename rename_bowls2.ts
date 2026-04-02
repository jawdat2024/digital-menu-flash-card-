import fs from 'fs';

let content = fs.readFileSync('constants.ts', 'utf-8');

// Replace fruits-grains with Fruits, Grains
content = content.replace(/id:\s*'fruits-grains',\s*title:\s*'Fruits,\s*Grains'/g, "id: 'healthy-bowls',\n      title: 'Healthy Bowls'");

fs.writeFileSync('constants.ts', content, 'utf-8');
console.log("Renamed remaining fruits-grains to healthy-bowls");
