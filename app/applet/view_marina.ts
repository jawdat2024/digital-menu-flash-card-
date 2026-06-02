import fs from 'fs';
const lines = fs.readFileSync('constants.ts', 'utf-8').split('\n');
const start = lines.findIndex(l => l.includes('const createMarinaMenu '));
const end = lines.findIndex((l, i) => i > start && l.includes('createDubaiMenu'));
console.log(lines.slice(end - 40, end).join('\n'));
