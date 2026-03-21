import fs from 'fs';

let content = fs.readFileSync('constants.ts', 'utf-8');

// First, let's clean up the multiple status: b.status lines
content = content.replace(/,\n\s*status: b\.status/g, '');

// Now let's do it properly
const searchStr = `        id: b.id,
        name: b.name,
        price: b.price,
        description: b.notes
      }));`;
  
const replaceStr = `        id: b.id,
        name: b.name,
        price: b.price,
        description: b.notes,
        status: b.status
      }));`;

content = content.split(searchStr).join(replaceStr);

fs.writeFileSync('constants.ts', content);
console.log('Done');
