const fs = require('fs');
let content = fs.readFileSync('constants.ts', 'utf-8');
content = content.replace(/https:\/\/iili\.io\/qnnTv0G\.png/g, 'https://iili.io/C27waOg.jpg');
fs.writeFileSync('constants.ts', content);
console.log('Update complete');
