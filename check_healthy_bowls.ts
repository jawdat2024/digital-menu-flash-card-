import fs from 'fs';

const content = fs.readFileSync('constants.ts', 'utf-8');
const lines = content.split('\n');

let inHealthyBowls = false;
for (let i = 0; i < lines.length; i++) {
  if (lines[i].includes("id: 'healthy-bowls'")) {
    inHealthyBowls = true;
  }
  if (inHealthyBowls) {
    console.log(lines[i]);
    if (lines[i].includes("]")) {
      break;
    }
  }
}
