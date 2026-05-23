import fs from 'fs';

let text = fs.readFileSync('constants.ts', 'utf8');

text = text.replace(/(name:\s*["']BRAZIL CHOCOLATE["'],[^}]*?price:\s*)(\d+)/gi, (match, prefix, price) => {
    return prefix + (parseInt(price) + 1).toString();
});

text = text.replace(/(name:\s*["']Colombia-Witch["'],[^}]*?status:\s*)['"]coming_soon['"]/gi, "$1'active'");

fs.writeFileSync('constants.ts', text);
console.log('Update complete');
