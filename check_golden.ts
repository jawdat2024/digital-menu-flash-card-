import fs from 'fs';

const content = fs.readFileSync('constants.ts', 'utf-8');
const lines = content.split('\n');

let inGolden = false;
for (let i = 0; i < lines.length; i++) {
  if (lines[i].includes("const applyGoldenRuleLayout")) {
    inGolden = true;
  }
  if (inGolden) {
    console.log(lines[i]);
    if (lines[i].includes("return newMenu;")) {
      break;
    }
  }
}
