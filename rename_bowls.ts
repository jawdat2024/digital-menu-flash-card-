import fs from 'fs';

let content = fs.readFileSync('constants.ts', 'utf-8');

// Replace fruits-gangs
content = content.replace(/id:\s*'fruits-gangs',\s*title:\s*'Fruits and Gangs'/g, "id: 'healthy-bowls',\n      title: 'Healthy Bowls'");

// Replace fruits-grains
content = content.replace(/id:\s*'fruits-grains',\s*title:\s*'Fruits and Grains'/g, "id: 'healthy-bowls',\n      title: 'Healthy Bowls'");

fs.writeFileSync('constants.ts', content, 'utf-8');
console.log("Renamed fruits-gangs and fruits-grains to healthy-bowls");
