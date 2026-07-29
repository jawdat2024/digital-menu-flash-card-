const fs = require('fs');
let constants = fs.readFileSync('constants.ts', 'utf8');

// I will just use sed to append a global fix to the end of constants.ts
