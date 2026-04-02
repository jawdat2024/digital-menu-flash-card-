import fs from 'fs';

let content = fs.readFileSync('constants.ts', 'utf-8');

// Remove double newlines after `const [name]Beans = [`
content = content.replace(/(const \w+Beans = \[)\n\n\n/g, '$1\n');

fs.writeFileSync('constants.ts', content, 'utf-8');
console.log("Cleaned up newlines");
