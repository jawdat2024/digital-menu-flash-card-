import fs from 'fs';

const content = fs.readFileSync('constants.ts', 'utf-8');
const lines = content.split('\n');

let inBaseMenu = false;
for (let i = 0; i < lines.length; i++) {
  if (lines[i].includes("const BASE_MENU: MenuCategory[] = [")) {
    inBaseMenu = true;
  }
  if (inBaseMenu) {
    if (lines[i].includes("id: '")) {
      console.log(lines[i].trim());
    }
    if (lines[i].includes("const createMirdifMenu")) {
      break;
    }
  }
}
