const fs = require('fs');
let code = fs.readFileSync('constants.ts', 'utf8');

code = code.replace(/if \('(\w+)' === '(\w+)' \|\| '(\w+)' === '(\w+)'\)/g, (match, a, b, c, d) => {
  if (a !== b && c !== d) return `if (false /* ${match} */)`;
  if (a === b && c === d) return `if (true /* ${match} */)`;
  if (a === b || c === d) return `if (true /* ${match} */)`;
  return match;
});

code = code.replace(/if \('(\w+)' === '(\w+)'\)/g, (match, a, b) => {
  if (a !== b) return `if (false /* ${match} */)`;
  return `if (true /* ${match} */)`;
});

fs.writeFileSync('constants.ts', code);
