import fs from 'fs';

const content = fs.readFileSync('constants.ts', 'utf-8');
const lines = content.split('\n');

let inAlQana = false;
let inBakedGoods = false;
let braces = 0;
for (let i = 0; i < lines.length; i++) {
  if (lines[i].includes('const createAlQanaMenu')) inAlQana = true;
  if (inAlQana && lines[i].includes('const createMarinaMenu')) break;
  
  if (inAlQana && lines[i].includes('id: "baked-goods"')) {
    inBakedGoods = true;
  }
  if (inBakedGoods) {
    console.log(i + 1, lines[i]);
    if (lines[i].includes('{')) braces += (lines[i].match(/\{/g) || []).length;
    if (lines[i].includes('}')) braces -= (lines[i].match(/\}/g) || []).length;
    if (braces === 0 && lines[i].includes('},')) {
      inBakedGoods = false;
    }
  }
}
