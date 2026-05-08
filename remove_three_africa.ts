import * as fs from 'fs';

let content = fs.readFileSync('constants.ts', 'utf8');

const tA_AlQana = `    {
      id: "bean_brazil",
      name: "Three Africa (The Bright Classic)",
      notes: "Caramel, Vanilla, Candied Tamarind",
      price: 0,
      isNew: false,
    },`;

const tA_Marina = `    {
      id: "bean_three_africa",
      name: "Three Africa (The Bright Classic)",
      notes: "Caramel, Vanilla, Candied Tamarind",
      price: 0,
      isNew: false,
    },`;

content = content.replace(tA_AlQana, '');
content = content.replace(tA_Marina, '');

fs.writeFileSync('constants.ts', content, 'utf8');
console.log('constants.ts updated successfully!');
