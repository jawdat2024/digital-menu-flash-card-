import * as fs from 'fs';
let content = fs.readFileSync('constants.ts', 'utf8');

// The three menus have their own create methods. 
// We will replace strings specific to those methods.

function replaceInFunction(content: string, funcName: string, searchStr: string, replacement: string) {
    const startIndex = content.indexOf(`const ${funcName} =`);
    if (startIndex === -1) {
        console.error("Function not found", funcName);
        return content;
    }
    const endIndex = content.indexOf(`};\n\n`, startIndex);
    
    let before = content.substring(0, startIndex);
    let during = content.substring(startIndex, endIndex !== -1 ? endIndex : content.length);
    let after = endIndex !== -1 ? content.substring(endIndex) : '';
    
    during = during.replace(searchStr, replacement);
    return before + during + after;
}

content = replaceInFunction(content, 'createAlBateenMenu', `        findItem("desserts", "STICKY DATE")!,\n        findItem("desserts", "d_choc_chip")!,`, `        findItem("desserts", "STICKY DATE")!,\n        findItem("desserts", "d_1000")!,\n        findItem("desserts", "d_choc_chip")!,`);

content = replaceInFunction(content, 'createKhalifaMenu', `        findItem("desserts", "STICKY DATE")!,\n        findItem("desserts", "d_choc_chip")!,`, `        findItem("desserts", "STICKY DATE")!,\n        findItem("desserts", "d_1000")!,\n        findItem("desserts", "d_choc_chip")!,`);

fs.writeFileSync('constants.ts', content);
