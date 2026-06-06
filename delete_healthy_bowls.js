import fs from 'fs';

let content = fs.readFileSync('constants.ts', 'utf8');

// We simply want to remove the healthy-bowls category everywhere. 
// A robust way to just strip it from the menus output is to add a step in `applyGoldenRuleLayout` to filter out healthy-bowls
// Actually, `applyGoldenRuleLayout` is applied to every menu. Let's look at `applyGoldenRuleLayout` first.
