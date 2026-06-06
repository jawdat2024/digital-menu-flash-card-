const fs = require('fs');

let code = fs.readFileSync('constants.ts', 'utf8');

code = code.replace(/\{\s*id: "fruits-and-grinds",\s*title: "FRUIT & GRINDS",\s*items: \[\s*/, '');

fs.writeFileSync('constants.ts', code);
console.log('Fixed constants.ts syntax error');
