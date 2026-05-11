import fs from 'fs';
import path from 'path';

const constantsPath = path.join(process.cwd(), 'constants.ts');
let content = fs.readFileSync(constantsPath, 'utf8');

const getNextFunc = (str, startIdx) => {
    const nextCreate = str.indexOf('\nconst create', startIdx + 20);
    const nextRAW = str.indexOf('\nconst RAW_BRANCH_MENUS', startIdx + 20);
    
    if (nextCreate !== -1 && nextRAW !== -1) {
        return Math.min(nextCreate, nextRAW);
    }
    if (nextCreate !== -1) return nextCreate;
    if (nextRAW !== -1) return nextRAW;
    return str.length;
};

// 1. Al Qana (add Tornado Egg to EGG& MORE)
const alQanaStart = content.indexOf('const createAlQanaMenu');
const alQanaEnd = getNextFunc(content, alQanaStart);
let alQanaContent = content.substring(alQanaStart, alQanaEnd);

const tornadoEggStr = `{
          id: "egg_nduja_alqana",
          name: "Tornado Chilli Egg",
          price: "52",
          image: "https://iili.io/fvpnDhB.jpg",
          ingredients: "garlic and butter pita bread, creamy mayo, mama’s sauce, smoked yogurt, spicy beef nduja, microgreens, and a drizzle of smoked oil.",
          calories: 450,
          status: 'available' as const,
        },
        {
          id: "sw_bacon",`;

alQanaContent = alQanaContent.replace(
    '        {\n          id: "sw_bacon",',
    tornadoEggStr
);

content = content.substring(0, alQanaStart) + alQanaContent + content.substring(alQanaEnd);

// 2. Al Bateen (add Snickers coffee bean to Desserts)
const alBateenStart = content.indexOf('const createAlBateenMenu');
const alBateenEnd = getNextFunc(content, alBateenStart);
let alBateenContent = content.substring(alBateenStart, alBateenEnd);

alBateenContent = alBateenContent.replace(
    /findItem\(\"desserts\", \"d_aseeda\"\)\!,/g,
    'findItem("desserts", "d_aseeda")!,\n        findItem("desserts", "d_snickers_coffee_bean")!,'
);

content = content.substring(0, alBateenStart) + alBateenContent + content.substring(alBateenEnd);

// 3. Khalifa City (add Snickers coffee bean to Desserts)
const khalifaStart = content.indexOf('const createKhalifaMenu');
const khalifaEnd = getNextFunc(content, khalifaStart);
let khalifaContent = content.substring(khalifaStart, khalifaEnd);

khalifaContent = khalifaContent.replace(
    /findItem\(\"desserts\", \"d_aseeda\"\)\!,/g,
    'findItem("desserts", "d_aseeda")!,\n        findItem("desserts", "d_snickers_coffee_bean")!,'
);

content = content.substring(0, khalifaStart) + khalifaContent + content.substring(khalifaEnd);

// 4. Also fix the sandwiches update for Dubai Dubai-Mirdif 
// "update the sandwiches status in the 'Dubai Mirdif' branch to active, not coming soon"
// This implies finding the RAW_BRANCH_MENUS section, specifically mirdif.

const fixMirdifStart = content.indexOf('mirdif: (() => {');
if (fixMirdifStart !== -1) {
    const fixMirdifEnd = content.indexOf('  })(),', fixMirdifStart);
    let fixMirdifContent = content.substring(fixMirdifStart, fixMirdifEnd);
    
    // ensure available is there
    fixMirdifContent = fixMirdifContent.replace(/item.status = 'coming_soon';/, "item.status = 'available';");
    content = content.substring(0, fixMirdifStart) + fixMirdifContent + content.substring(fixMirdifEnd);
}

fs.writeFileSync(constantsPath, content, 'utf8');

