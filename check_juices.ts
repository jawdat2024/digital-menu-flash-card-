import fs from 'fs';

const content = fs.readFileSync('constants.ts', 'utf-8');

const getMenuStr = (menuName) => {
  const startIdx = content.indexOf(`const ${menuName} = (): MenuCategory[] => {`);
  const endIdx = content.indexOf(`};`, startIdx);
  return content.substring(startIdx, endIdx);
};

const menus = ['createAlBateenMenu', 'createKhalifaMenu', 'createAlQanaMenu', 'createMarinaMenu', 'createDubaiMenu'];

menus.forEach(menu => {
  const menuStr = getMenuStr(menu);
  console.log(`${menu} has juices:`, menuStr.includes(`id: 'juices'`));
});
