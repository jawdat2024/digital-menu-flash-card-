const fs = require('fs');

let code = fs.readFileSync('constants.ts', 'utf8');

const beanOptionsStrMatches = code.match(/const ESPRESSO_BEAN_OPTIONS = \[[\s\S]*?\];/);
if (beanOptionsStrMatches) {
   const beanOptionsStr = beanOptionsStrMatches[0];
   code = code.replace(beanOptionsStr, '');
   code = code.replace('const BASE_MENU: MenuCategory[] = [', beanOptionsStr + '\n\nconst BASE_MENU: MenuCategory[] = [');
}

fs.writeFileSync('constants.ts', code);
console.log('Fixed TDZ');
