import fs from 'fs';

const branchConfig = JSON.parse(fs.readFileSync('bean_update.json', 'utf-8'));

let content = fs.readFileSync('constants.ts', 'utf-8');

const replacementDubaiFiltered = `    const filteredCategory = {
      id: "filtered",
      title: "FILTERED",
      items: ${JSON.stringify(branchConfig.dubai.filtered, null, 8).replace(/}/g, '      }')}
    };`;

content = content.replace(/    const filteredCategory = \{\s*id: "filtered",\s*title: "FILTERED",\s*items: \[\s*\{[\s\S]*?\]\s*\};/m, replacementDubaiFiltered);

fs.writeFileSync('constants.ts', content);

// Add ESPRESSO_BEANS to constants.ts
const espressoBeansExport = `\nexport const BRANCH_ESPRESSO_BEANS: Record<string, any[]> = {\n` + 
  Object.keys(branchConfig).map(k => `  '${k}': ${JSON.stringify(branchConfig[k].espresso, null, 2)}`).join(',\n') +
`\n};\n\n`;

fs.appendFileSync('constants.ts', espressoBeansExport);

console.log("Updated constants.ts");
