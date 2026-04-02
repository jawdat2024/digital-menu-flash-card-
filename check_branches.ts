import fs from 'fs';

const content = fs.readFileSync('constants.ts', 'utf-8');

// We want to find where branches define their menus.
// Usually it's in RAW_BRANCH_MENUS.
// Let's print the structure of RAW_BRANCH_MENUS.

const branchRegex = /name:\s*'CARTEL[^']+',\s*menu:\s*\[([\s\S]*?)\]\s*}/g;
let match;
while ((match = branchRegex.exec(content)) !== null) {
  console.log("Found branch menu");
}
