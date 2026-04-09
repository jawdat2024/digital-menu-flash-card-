import fs from 'fs';
import path from 'path';

const constantsPath = path.join(process.cwd(), 'constants.ts');
let content = fs.readFileSync(constantsPath, 'utf8');

content = content.replace(/status: "Available",/g, 'status: "Available" as const,');
content = content.replace(/status: "Coming Soon",/g, 'status: "Coming Soon" as const,');
content = content.replace(/status: "Sold Out",/g, 'status: "Sold Out" as const,');

fs.writeFileSync(constantsPath, content, 'utf8');
console.log('Fixed type errors');
