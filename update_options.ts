import fs from 'fs';

let content = fs.readFileSync('constants.ts', 'utf-8');

const arrays = ['mirdifBeans', 'alBateenBeans', 'khalifaBeans', 'alQanaBeans', 'marinaBeans', 'dubaiBeans'];

arrays.forEach(arrName => {
  const searchStr = `        id: b.id,
        name: b.name,
        price: b.price,
        description: b.notes`;
  
  const replaceStr = `        id: b.id,
        name: b.name,
        price: b.price,
        description: b.notes,
        status: b.status`;
  
  content = content.replace(searchStr, replaceStr);
});

fs.writeFileSync('constants.ts', content);
console.log('Done');
