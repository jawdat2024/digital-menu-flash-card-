import fs from 'fs';

let content = fs.readFileSync('constants.ts', 'utf-8');

const beanToAdd = `    {
      id: 'bean_colombia_decaf',
      name: 'Colombia Sweet Dreams (Decaf)',
      notes: 'Passion fruit cheesecake, Milk chocolate, Molasses',
      price: 0,
      isNew: false,
      isDecaf: true
    }`;

const arraysToUpdate = [
  'mirdifBeans',
  'alBateenBeans',
  'khalifaBeans',
  'alQanaBeans',
  'marinaBeans',
  'dubaiBeans'
];

for (const arrName of arraysToUpdate) {
  const regex = new RegExp("const " + arrName + " = \\\[([\\s\\S]*?)\\\];");
  const match = content.match(regex);
  
  if (match) {
    let arrayContent = match[1];
    
    // Check if it already has the decaf bean
    if (!arrayContent.includes('bean_colombia_decaf')) {
      // Remove trailing whitespace/newlines
      arrayContent = arrayContent.replace(/\s+$/, '');
      
      // Add a comma if there isn't one at the end of the last item
      if (!arrayContent.endsWith(',')) {
        arrayContent += ',\n';
      } else {
        arrayContent += '\n';
      }
      
      arrayContent += beanToAdd + '\n  ';
      
      const newArrayStr = "const " + arrName + " = [" + arrayContent + "];";
      content = content.replace(match[0], newArrayStr);
      console.log("Added to " + arrName);
    } else {
      console.log("Already in " + arrName);
    }
  } else {
    console.log("Could not find " + arrName);
  }
}

fs.writeFileSync('constants.ts', content, 'utf-8');
console.log('Done');
