import fs from 'fs';

let content = fs.readFileSync('constants.ts', 'utf-8');

// Standardize all variations to "Colombia Sweet Dreams (Decaf)"
content = content.replace(/name:\s*'Colombia Sweet Dreams Decaf'/g, "name: 'Colombia Sweet Dreams (Decaf)'");
content = content.replace(/name:\s*'Colombia Sweet Dreams – Decaf'/g, "name: 'Colombia Sweet Dreams (Decaf)'");

fs.writeFileSync('constants.ts', content, 'utf-8');
console.log('Done');
