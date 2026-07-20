const fs = require('fs');$
const lines = fs.readFileSync('constants.ts', 'utf8').split('\n');$
console.log(lines.slice(4450, 4460).map(l => JSON.stringify(l)).join('\n'));$
