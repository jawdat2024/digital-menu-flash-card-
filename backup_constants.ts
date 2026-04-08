import fs from 'fs';
import path from 'path';

const source = path.join(process.cwd(), 'constants.ts');
const dest = path.join(process.cwd(), 'constants_v1_backup.ts');

fs.copyFileSync(source, dest);
console.log('Backup created successfully.');
