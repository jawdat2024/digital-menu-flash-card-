import fs from 'fs';

let content = fs.readFileSync('constants.ts', 'utf-8');

const newBeanComingSoon = `    {
      id: 'bean_colombia_strawberry',
      name: 'Colombia - Strawberry',
      notes: 'Flavors will be available soon.',
      price: 5,
      isNew: true,
      status: 'Coming Soon'
    },
`;

const newBeanAvailable = `    {
      id: 'bean_colombia_strawberry',
      name: 'Colombia - Strawberry',
      notes: 'Flavors will be available soon.',
      price: 5,
      isNew: true,
      status: 'Available'
    },
`;

const arrays = ['mirdifBeans', 'alBateenBeans', 'khalifaBeans', 'alQanaBeans', 'marinaBeans', 'dubaiBeans'];

arrays.forEach(arrName => {
  const searchStr = `    {
      id: 'bean_colombia_decaf',`;
  
  if (arrName === 'alBateenBeans') {
    // Remove Coconutella
    const startIdx = content.indexOf(`const ${arrName} = [`);
    const endIdx = content.indexOf(`];\n\n  alBateenEspresso.beanSelection`);
    let block = content.substring(startIdx, endIdx);
    
    // remove coconutella block
    block = block.replace(/    \{\n      id: 'bean_coconutella',\n      name: 'COCONUTELLA',\n      notes: 'Coconut Cream, Milk Chocolate, Toffee Caramel',\n      price: 5,\n      isNew: false\n    \},\n/, '');
    
    // add new bean
    block = block.replace(searchStr, newBeanAvailable + searchStr);
    
    content = content.substring(0, startIdx) + block + content.substring(endIdx);
  } else {
    const startIdx = content.indexOf(`const ${arrName} = [`);
    const endIdx = content.indexOf(`];\n\n  ${arrName.replace('Beans', 'Espresso')}.beanSelection`);
    let block = content.substring(startIdx, endIdx);
    
    // add new bean
    block = block.replace(searchStr, newBeanComingSoon + searchStr);
    
    content = content.substring(0, startIdx) + block + content.substring(endIdx);
  }
});

fs.writeFileSync('constants.ts', content);
console.log('Done');
