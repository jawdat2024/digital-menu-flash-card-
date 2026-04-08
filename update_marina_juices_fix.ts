import fs from 'fs';
import path from 'path';

const constantsPath = path.join(process.cwd(), 'constants.ts');
let content = fs.readFileSync(constantsPath, 'utf8');

const marinaBlockStart = content.indexOf('marina: (() => {');
const marinaBlockEnd = content.indexOf('  albateen: applyGoldenRuleLayout(createAlBateenMenu()),', marinaBlockStart);

if (marinaBlockStart !== -1 && marinaBlockEnd !== -1) {
  let marinaBlock = content.substring(marinaBlockStart, marinaBlockEnd);

  const injectionPoint = marinaBlock.lastIndexOf('return menu;');
  
  if (injectionPoint !== -1) {
    const injectionCode = `
    // 2. Category Deletion: "Juices" (Fix for subCategories)
    const sigTeaIdx = menu.findIndex(c => c.id === 'signature-tea');
    if (sigTeaIdx !== -1 && menu[sigTeaIdx].subCategories) {
      menu[sigTeaIdx].subCategories = menu[sigTeaIdx].subCategories.filter(sc => sc.id !== 'juices');
    }
    `;
    
    marinaBlock = marinaBlock.substring(0, injectionPoint) + injectionCode + marinaBlock.substring(injectionPoint);
    content = content.substring(0, marinaBlockStart) + marinaBlock + content.substring(marinaBlockEnd);
    
    fs.writeFileSync(constantsPath, content, 'utf8');
    console.log('Successfully updated Marina menu juices.');
  } else {
    console.log('Could not find return menu; in Marina block.');
  }
} else {
  console.log('Could not find Marina block.');
}
