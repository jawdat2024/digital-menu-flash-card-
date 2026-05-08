import * as fs from 'fs';
const content = fs.readFileSync('constants.ts', 'utf8');

// The Al Qana export is probably RAW_BRANCH_MENUS or something
const match = content.match(/const alQanaEspresso[\s\S]*?(?=const marinaEspresso|RAW_BRANCH_MENUS)/);
if (match) {
  fs.writeFileSync('output.json', match[0]);
  console.log('written to output.json');
} else {
  console.log('not found');
}
