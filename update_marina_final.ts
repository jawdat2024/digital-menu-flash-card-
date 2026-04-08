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
    // 1. Best Seller Modification
    const bestSellerIdx = menu.findIndex(c => c.id === 'highly-recommend');
    if (bestSellerIdx !== -1) {
      menu[bestSellerIdx].items = menu[bestSellerIdx].items.filter(item => {
        const name = item.name.toLowerCase();
        return !name.includes('exotic sunrise') && 
               !name.includes('apple cinnamon muesli') && 
               !name.includes('cold cut italian');
      });
    }

    // 2. Category Deletion: "Juices"
    const juicesIdx = menu.findIndex(c => c.id === 'juices');
    if (juicesIdx !== -1) {
      menu.splice(juicesIdx, 1);
    }

    // 3. Availability Updates (Coming Soon)
    const sandwichesIdx = menu.findIndex(c => c.id === 'sandwiches');
    if (sandwichesIdx !== -1) {
      menu[sandwichesIdx].items.forEach(item => {
        item.status = 'Coming Soon';
      });
    }

    const healthyBowlsIdx = menu.findIndex(c => c.id === 'healthy-bowls');
    if (healthyBowlsIdx !== -1) {
      menu[healthyBowlsIdx].items.forEach(item => {
        if (!item.name.toLowerCase().includes('overnight oat')) {
          item.status = 'Coming Soon';
        }
      });
    }

    `;
    
    marinaBlock = marinaBlock.substring(0, injectionPoint) + injectionCode + marinaBlock.substring(injectionPoint);
    content = content.substring(0, marinaBlockStart) + marinaBlock + content.substring(marinaBlockEnd);
    
    fs.writeFileSync(constantsPath, content, 'utf8');
    console.log('Successfully updated Marina menu.');
  } else {
    console.log('Could not find return menu; in Marina block.');
  }
} else {
  console.log('Could not find Marina block.');
}
