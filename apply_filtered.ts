import fs from 'fs';

const branchConfig = JSON.parse(fs.readFileSync('bean_update.json', 'utf-8'));

let content = fs.readFileSync('constants.ts', 'utf-8');

// We need to rewrite how each branch is defined in RAW_BRANCH_MENUS
function injectFiltered(branchName: string, createFunc: string, branchKey: string) {
  const filteredCategoryStr = `
    const filteredCategory = {
      id: "filtered",
      title: "FILTERED",
      items: ${JSON.stringify(branchConfig[branchKey].filtered, null, 8).replace(/}/g, '      }')}
    };
`;

  const newBlock = `  ${branchKey}: (() => {
    const menu = applyGoldenRuleLayout(${createFunc}());
    const idx = menu.findIndex(c => c.id === "specialty-coffee" || c.id === "filtered" || c.title === "FILTERED");
    if (idx !== -1) menu.splice(idx, 1);
    
    // Al Bateen specific sig fix
    if ('${branchKey}' === 'marina' || '${branchKey}' === 'albateen') {
      const sigTeaIdx = menu.findIndex(c => c.id === 'signature-tea');
      if (sigTeaIdx !== -1 && menu[sigTeaIdx].subCategories) {
        menu[sigTeaIdx].subCategories = menu[sigTeaIdx].subCategories.filter(sc => sc.id !== 'juices');
      }
    }
    
    // Khalifa specific sandwich fix
    if ('${branchKey}' === 'khalifa') {
      const sandwichesIdx = menu.findIndex(c => c.id === 'sandwiches');
      if (sandwichesIdx !== -1) {
        menu[sandwichesIdx].items.forEach(item => {
          item.status = 'active';
        });
      }
    }
    ${filteredCategoryStr}
    const espressoIdx = menu.findIndex(c => c.id === "espresso");
    if (espressoIdx !== -1) {
      menu.splice(espressoIdx + 1, 0, filteredCategory as any);
    } else {
      menu.push(filteredCategory as any);
    }
    return menu;
  })(),`;

  return newBlock;
}

// Read constants and replace blocks
// We can use a regex to replace each block safely.

content = content.replace(/  khalifa:\s*\(\(\) => \{[\s\S]*?\}\)\(\),/, injectFiltered('Khalifa City', 'createKhalifaMenu', 'khalifa'));
content = content.replace(/  albateen:\s*applyGoldenRuleLayout\(createAlBateenMenu\(\)\),/, injectFiltered('Al Bateen', 'createAlBateenMenu', 'albateen'));
content = content.replace(/  dubai:\s*\(\(\) => \{[\s\S]*?\}\)\(\),/, injectFiltered('Dubai', 'createDubaiMenu', 'dubai'));
content = content.replace(/  alqana:\s*applyGoldenRuleLayout\(createAlQanaMenu\(\)\),/, injectFiltered('Al Qana', 'createAlQanaMenu', 'alqana'));

// Inject ESPRESSO
const espressoExport = `\nexport const BRANCH_ESPRESSO_BEANS: Record<string, any[]> = {\n` + 
Object.keys(branchConfig).map(k => `  '${k}': ${JSON.stringify(branchConfig[k].espresso, null, 2)}`).join(',\n') +
`\n};\n\n`;

content += espressoExport;

fs.writeFileSync('constants.ts', content);
console.log('Update applied');
