import fs from 'fs';

const content = fs.readFileSync('constants.ts', 'utf-8');
const lines = content.split('\n');

let inMarina = false;
for (let i = 0; i < lines.length; i++) {
  if (lines[i].includes('const createMarinaMenu')) {
    inMarina = true;
  }
  if (inMarina && lines[i].includes('const createDubaiMenu')) {
    break;
  }
  if (inMarina && lines[i].includes('id: "') && !lines[i].includes('findItem') && !lines[i].includes('bean_') && !lines[i].includes('man_') && !lines[i].includes('tap_') && !lines[i].includes('fil_') && !lines[i].includes('bg_') && !lines[i].includes('d_') && !lines[i].includes('fob_')) {
    console.log(i + 1, lines[i].trim());
  }
}
