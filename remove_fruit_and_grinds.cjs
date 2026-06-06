const fs = require('fs');

let code = fs.readFileSync('constants.ts', 'utf8');

// The easiest way is to find the object bounded by `id: "healthy-bowls",` up to `].filter(Boolean),\n    },` or `    },\n`
// Let's replace the whole category object.

const removeCategory = (input, categoryId) => {
    // Regex to match `{ id: "healthy-bowls", ... }` and remove it
    // We match the opening `{` followed by any whitespace, then `id: "categoryId"`,
    // and we need to match the closing `},` for that object.
    
    // Instead of complex regex, let's just parse it line by line and skip the object.
    const lines = input.split('\n');
    let output = [];
    let skipping = false;
    let braceCount = 0;
    
    for (let i = 0; i < lines.length; i++) {
        const line = lines[i];
        
        if (!skipping) {
            if (line.includes(`id: "${categoryId}"`)) {
                // start skipping backward to the opening brace
                // The opening brace is usually on the same line or previous line
                if (output[output.length - 1].trim() === '{') {
                    output.pop();
                }
                skipping = true;
                braceCount = 1;
            } else {
                output.push(line);
            }
        } else {
            // Keep counting braces to know when this object ends
            const openBraces = (line.match(/\{/g) || []).length;
            const closeBraces = (line.match(/\}/g) || []).length;
            braceCount += openBraces;
            braceCount -= closeBraces;
            
            if (braceCount === 0) {
                // We're done skipping this object
                skipping = false;
                // If there's a comma after the brace, it might be on the same line `},`
                // which is handled by brace count falling to zero on that line.
                // However, there might be `.filter(Boolean),` etc. Let's see if the next line is `    },`
                // Wait, the line with the matching close brace is already skipped.
                // we might need to skip `.filter(Boolean),` if it's on this line.
            }
        }
    }
    
    return output.join('\n');
};

code = removeCategory(code, "healthy-bowls");

// Let's also remove the `applyGoldenRuleLayout` part
const applyGoldenRegex = /\/\/ 5\. FRUIT & GRINDS[\s\S]*?if \(healthyBowls\.length > 0\) \{[\s\S]*?newMenu\.push\(\{[\s\S]*?id: "healthy-bowls",[\s\S]*?\}\);\s*\}/g;
code = code.replace(applyGoldenRegex, '');

// Also let's fix the `filter-coffee` bug in `createDubaiMenu` where healthy-bowls were added.
code = code.replace(/id: "filter-coffee",[\s\S]*?items: \[(\s*findItem\("healthy-bowls", ".*?"\)!,?\s*)+\]/g, 'id: "filter-coffee", title: "Filter Coffee", items: []');

// Also remove `healthyBowls` from `order` array in `applyGoldenRuleLayout`
code = code.replace(/"healthy-bowls",\s*/g, '');

fs.writeFileSync('constants.ts', code);
console.log("Done");
