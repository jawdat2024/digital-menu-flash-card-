import fs from 'fs';

const content = fs.readFileSync('constants.ts', 'utf-8');
const lines = content.split('\n');

function findBakedGoods(startStr: string, endStr: string) {
  let inBranch = false;
  let inBakedGoods = false;
  let braces = 0;
  console.log(`\n--- ${startStr} ---`);
  for (let i = 0; i < lines.length; i++) {
    if (lines[i].includes(startStr)) inBranch = true;
    if (inBranch && lines[i].includes(endStr)) break;
    
    if (inBranch && lines[i].includes('id: "baked-goods"')) {
      inBakedGoods = true;
      braces = 0;
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
}

findBakedGoods('const createAlBateenMenu', 'const createKhalifaMenu');
findBakedGoods('const createKhalifaMenu', 'const createAlQanaMenu');
findBakedGoods('const createAlQanaMenu', 'const createMarinaMenu');
