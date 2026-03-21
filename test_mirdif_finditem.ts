import { MENU_DATA } from './constants';
import fs from 'fs';

const content = fs.readFileSync('constants.ts', 'utf-8');
const mirdifMenuStr = content.substring(content.indexOf('const createMirdifMenu'), content.indexOf('const createAlBateenMenu'));
const findItemMatches = mirdifMenuStr.match(/findItem\(([^)]+)\)/g);

const findItem = (catId: string, itemId: string) => {
  const cat = MENU_DATA.find(c => c.id === catId);
  return cat?.items.find(i => i.id === itemId);
};

if (findItemMatches) {
  findItemMatches.forEach(match => {
    const args = match.replace('findItem(', '').replace(')', '').split(',').map(s => s.trim().replace(/['"]/g, ''));
    const item = findItem(args[0], args[1]);
    if (!item) {
      console.log(`findItem(${args[0]}, ${args[1]}) returned undefined!`);
    }
  });
}
