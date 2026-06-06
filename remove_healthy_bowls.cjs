const fs = require('fs');

let code = fs.readFileSync('constants.ts', 'utf8');

function removeBlock(code, strToFind) {
    let index = code.indexOf(strToFind);
    if (index === -1) return code;

    let i = index;
    // Find the opening brace
    while (i >= 0 && code[i] !== '{') {
       i--;
    }
    if (i < 0) return code;
    
    let start = i;
    // Move start backwards to include leading whitespace on the line
    while (start > 0 && (code[start-1] === ' ' || code[start-1] === '\t')) {
       start--;
    }

    let braceCount = 0;
    for (i = i; i < code.length; i++) {
        if (code[i] === '{') braceCount++;
        if (code[i] === '}') {
            braceCount--;
            if (braceCount === 0) {
                let end = i + 1;
                // handle .filter(Boolean)
                const snippet = code.substring(end, end + 30);
                const filterMatch = snippet.match(/^\s*\.filter\(Boolean\)/);
                if (filterMatch) {
                    end += filterMatch[0].length;
                }
                
                // gobble up to the next comma or newline
                let commaFound = false;
                while (end < code.length) {
                    if (code[end] === ',') {
                       if (!commaFound) {
                           commaFound = true;
                           end++;
                       } else {
                           break;
                       }
                    } else if (code[end] === ' ' || code[end] === '\t' || code[end] === '\r') {
                        end++;
                    } else if (code[end] === '\n') {
                        end++;
                        break;
                    } else {
                        break;
                    }
                }
                
                return code.substring(0, start) + code.substring(end);
            }
        }
    }
    return code;
}

while (true) {
    let nextIdx = code.indexOf('id: "healthy-bowls"');
    if (nextIdx === -1) break;
    code = removeBlock(code, 'id: "healthy-bowls"');
}

// Remove from applyGoldenRuleLayout
const applyGoldenRegex = /\/\/ 5\. FRUIT & GRINDS[\s\S]*?if \(healthyBowls\.length > 0\) \{[\s\S]*?newMenu\.push\(\{[\s\S]*?id: "healthy-bowls",[\s\S]*?\}\);\s*\}/g;
code = code.replace(applyGoldenRegex, '');

// Remove "healthy-bowls", from order array
code = code.replace(/"healthy-bowls",\s*/g, '');

fs.writeFileSync('constants.ts', code);
console.log('Removed healthy-bowls globally');
