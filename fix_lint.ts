import fs from 'fs';
import path from 'path';

function fixFile(filePath: string) {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Replace string literals in comparisons
    content = content.replace(/status === (?:'|")Available(?:'|")/gi, "status === 'available'");
    content = content.replace(/status === (?:'|")Sold Out(?:'|")/gi, "status === 'sold_out'");
    content = content.replace(/status === (?:'|")Coming Soon(?:'|")/gi, "status === 'coming_soon'");
    content = content.replace(/status === (?:'|")Out of Stock(?:'|")/gi, "status === 'out_of_stock'");

    content = content.replace(/status: (?:'|")Available(?:'|")/g, "status: 'available'");
    content = content.replace(/status: (?:'|")Sold Out(?:'|")/g, "status: 'sold_out'");
    content = content.replace(/status: (?:'|")Coming Soon(?:'|")/g, "status: 'coming_soon'");

    // For cases like "Coming Soon" as const
    content = content.replace(/status: (?:'|")Available(?:'|") as const/g, "status: 'available' as const");
    content = content.replace(/status: (?:'|")Sold Out(?:'|") as const/g, "status: 'sold_out' as const");
    content = content.replace(/status: (?:'|")Coming Soon(?:'|") as const/g, "status: 'coming_soon' as const");

    fs.writeFileSync(filePath, content);
}

fixFile('App.tsx');
fixFile('constants.ts');
fixFile('components/FlipCard.tsx');
fixFile('components/SmoothieCard.tsx');

// Also fix AdminDashboard where active/isSoldOut might still cause some TS errors if I didn't replace property names completely.
let adminContent = fs.readFileSync('components/AdminDashboard.tsx', 'utf8');
adminContent = adminContent.replace(/item\.isSoldOut/g, "['sold_out', 'out_of_stock'].includes(item.status)");
adminContent = adminContent.replace(/item\.active/g, "item.isVisible");
// Fix toggleStatus -> toggleVisibility remaining error
adminContent = adminContent.replace(/toggleStatus\(/g, "toggleVisibility(");
fs.writeFileSync('components/AdminDashboard.tsx', adminContent);

