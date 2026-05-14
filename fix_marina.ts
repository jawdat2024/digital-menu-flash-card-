import * as fs from 'fs';
let content = fs.readFileSync('constants.ts', 'utf8');

content = content.replace(
  "        item.status = 'coming_soon';",
  "        item.status = 'active';"
);

content = content.replace(
  '      item.status = "coming_soon";',
  '      item.status = "active";'
);

fs.writeFileSync('constants.ts', content);
