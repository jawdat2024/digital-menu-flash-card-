import fs from 'fs';
import path from 'path';

const constantsPath = path.join(process.cwd(), 'constants.ts');
let content = fs.readFileSync(constantsPath, 'utf8');

const startIndex = content.indexOf('const createKhalifaMenu = (): MenuCategory[] => {');
const endIndex = content.indexOf('const createAlQanaMenu = (): MenuCategory[] => {');

if (startIndex !== -1 && endIndex !== -1) {
  let khalifaSection = content.substring(startIndex, endIndex);
  fs.writeFileSync(path.join(process.cwd(), 'khalifa_menu.ts'), khalifaSection, 'utf8');
}
