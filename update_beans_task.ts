import * as fs from 'fs';

let content = fs.readFileSync('constants.ts', 'utf8');

function createSidraBean(status: string) {
  return `    {
      id: "bean_colombia_bourbon_sidra",
      name: "Colombia Bourbon Sidra",
      notes: "Red Grapes, Watermelon, Hard Candy, Raspberry",
      price: 5,
      isNew: true,
      status: '${status}' as const,
    },
`;
}

const targetArrays = [
  { name: 'mirdifBeans', sidraStatus: 'coming_soon', removeThreeAfrica: false },
  { name: 'alBateenBeans', sidraStatus: 'coming_soon', removeThreeAfrica: false },
  { name: 'khalifaBeans', sidraStatus: 'coming_soon', removeThreeAfrica: false },
  { name: 'alQanaBeans', sidraStatus: 'available', removeThreeAfrica: true },
  { name: 'marinaBeans', sidraStatus: 'available', removeThreeAfrica: true },
  { name: 'dubaiBeans', sidraStatus: 'coming_soon', removeThreeAfrica: false },
];

for (const target of targetArrays) {
  const arrayStartRegex = new RegExp(`const ${target.name} = \\[\\];|const ${target.name} = \\[([\\s\\S]*?)\\];`);
  
  content = content.replace(arrayStartRegex, (match, arrayContent) => {
    let newArrayContent = arrayContent || '';
    
    if (target.removeThreeAfrica) {
      const threeAfricaRegex = /\\s*\\{[^}]*name:\\s*["']Three Africa \\(The Bright Classic\\)["'][^}]*\\},?\\n?/g;
      const idRegex = /\\s*\\{[^}]*id:\\s*["']bean_three_africa["'][^}]*\\},?\\n?/g;
      
      newArrayContent = newArrayContent.replace(threeAfricaRegex, '');
      newArrayContent = newArrayContent.replace(idRegex, '');
    }
    
    if (!newArrayContent.includes('Colombia Bourbon Sidra')) {
      newArrayContent += createSidraBean(target.sidraStatus);
    }
    
    return `const ${target.name} = [${newArrayContent}];`;
  });
}

fs.writeFileSync('constants.ts', content, 'utf8');
console.log('constants.ts updated successfully!');
