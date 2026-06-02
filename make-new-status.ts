import fs from 'fs';

let content = fs.readFileSync('constants.ts', 'utf-8');

// I will just add status: "new" to these items. We had previously added isNew: true which we can also remove to keep it clean.
content = content.replace(/\\s*isNew: true,\s*status: ['"]available['"]\s*as\s*const,/g, '\\n        status: "new",');
content = content.replace(/\\s*isNew: true,/g, '\\n        status: "new",');

fs.writeFileSync('constants.ts', content);
console.log("Updated to status: 'new'");
