import fs from 'fs';

let content = fs.readFileSync('constants.ts', 'utf-8');

const regex1 = /\{\s*id:\s*["']fil_cuban_cigar["'],[\s\S]*?status:\s*['"]available['"]\s*as\s*const,\s*\},/g;
let newContent = content.replace(regex1, '');

if (newContent === content) {
    console.log("Could not find fil_cuban_cigar");
}

const regex2 = /\{\s*id:\s*["']tap_cuban["'],[\s\S]*?calories:\s*5,\s*\},/g;
let finalContent = newContent.replace(regex2, '');

if (finalContent === newContent) {
    console.log("Could not find tap_cuban");
}

fs.writeFileSync('constants.ts', finalContent);
console.log("Done");
