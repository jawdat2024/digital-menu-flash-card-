import * as fs from 'fs';
let content = fs.readFileSync('constants.ts', 'utf8');

// The one in applyGoldenRuleLayout (line 3741) needs to be reverted to "coming_soon".
content = content.replace(
  '      item.status = "active";',
  '      item.status = "coming_soon";'
);

// We need to change Khalifa city. It's currently: khalifa: applyGoldenRuleLayout(createKhalifaMenu()),
// Let's modify it to be an IIFE:
const khalifaFind = `  // Khalifa City\n  khalifa: applyGoldenRuleLayout(createKhalifaMenu()),`;
const khalifaReplace = `  // Khalifa City\n  khalifa: (() => {\n    const menu = applyGoldenRuleLayout(createKhalifaMenu());\n    const sandwichesIdx = menu.findIndex(c => c.id === 'sandwiches');\n    if (sandwichesIdx !== -1) {\n      menu[sandwichesIdx].items.forEach(item => {\n        item.status = 'active';\n      });\n    }\n    return menu;\n  })(),`;

content = content.replace(khalifaFind, khalifaReplace);

fs.writeFileSync('constants.ts', content);
