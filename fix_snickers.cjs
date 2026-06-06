const fs = require('fs');

let code = fs.readFileSync('constants.ts', 'utf8');

const explicitItem = [
  '{',
  '          id: "d_snickers_coffee_bean",',
  '          name: "Snickers coffee bean",',
  '          ingredients: "Rich chocolate snickers with an infusion of premium coffee beans.",',
  '          price: "39.20",',
  '          image: "https://iili.io/q2hTJNj.png",',
  '          calories: 320,',
  '        }'
].join('\n');

const snickersBlockStart = code.indexOf('id: "d_snickers_coffee_bean"');
if (snickersBlockStart !== -1 && snickersBlockStart < code.indexOf('createDubaiMenu')) {
    const blockStart = code.lastIndexOf('{', snickersBlockStart);
    const blockEnd = code.indexOf('},', snickersBlockStart) + 2;
    code = code.replace(code.substring(blockStart, blockEnd), '');
}

code = code.replace(/findItem\("desserts",\s*"d_snickers_coffee_bean"\)!,\s*\/\/\s*Snickers coffee bean/, explicitItem + ", // Snickers coffee bean");

fs.writeFileSync('constants.ts', code);
console.log('Fixed Snickers to be ONLY in Dubai!');
