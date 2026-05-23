import fs from 'fs';

let text = fs.readFileSync('constants.ts', 'utf8');

text = text.replace(/(name:\s*["']BRAZIL CHOCOLATE["'],[^}]*?price:\s*)(\d+)/gi, (match, prefix, price) => {
    return prefix + "1";
});

fs.writeFileSync('constants.ts', text);
console.log('Update complete');
