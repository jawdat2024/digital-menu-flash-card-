import fs from 'fs';
let content = fs.readFileSync('constants.ts', 'utf8');

// replace all item.status = 'available' under sandwiches with 'active'
content = content.replace(/item\.status = 'available';/g, "item.status = 'active';");
// also item.status = 'coming_soon' inside other areas if any? We already changed the main one.

fs.writeFileSync('constants.ts', content);
