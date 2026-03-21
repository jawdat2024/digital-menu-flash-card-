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

const arrays = ['mirdifBeans', 'alQanaBeans', 'dubaiBeans'];

arrays.forEach(arrName => {
  const searchStr = `    {
      id: 'bean_decaf',`;
  
  const startIdx = content.indexOf(`const ${arrName} = [`);
  const endIdx = content.indexOf(`];\n\n  ${arrName.replace('Beans', 'Espresso')}.beanSelection`);
  let block = content.substring(startIdx, endIdx);
  
  // add new bean
  block = block.replace(searchStr, newBeanComingSoon + searchStr);
  
  content = content.substring(0, startIdx) + block + content.substring(endIdx);
});

fs.writeFileSync('constants.ts', content);
console.log('Done');
