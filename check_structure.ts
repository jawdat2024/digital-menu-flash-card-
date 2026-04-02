import fs from 'fs';

const content = fs.readFileSync('constants.ts', 'utf-8');
const lines = content.split('\n');

let inBaseMenu = false;
let baseMenuLines = [];
for (let i = 0; i < lines.length; i++) {
  if (lines[i].includes('const BASE_MENU: MenuCategory[] = [')) {
    inBaseMenu = true;
  }
  if (inBaseMenu) {
    baseMenuLines.push(lines[i]);
    if (lines[i].startsWith('];') && baseMenuLines.length > 10) {
      break;
    }
  }
}

console.log("BASE_MENU categories:");
const baseMenuStr = baseMenuLines.join('\n');
const idRegex = /id:\s*'([^']+)'/g;
let match;
while ((match = idRegex.exec(baseMenuStr)) !== null) {
  console.log(match[1]);
}
