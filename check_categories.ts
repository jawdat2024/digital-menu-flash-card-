import fs from 'fs';

const content = fs.readFileSync('constants.ts', 'utf-8');

const getMenuStr = (menuName) => {
  const startIdx = content.indexOf(`const ${menuName} = (): MenuCategory[] => {`);
  const endIdx = content.indexOf(`};`, startIdx);
  return content.substring(startIdx, endIdx);
};

const alBateenStr = getMenuStr('createAlBateenMenu');
const categories = alBateenStr.match(/id:\s*'([^']+)'/g);
console.log('Al Bateen categories:', categories);
