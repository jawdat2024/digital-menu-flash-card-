const fs = require('fs');
const file = fs.readFileSync('constants_updated.ts', 'utf-8');
const lines = file.split('\n');

const changed = [
  "Colombia - Bourbon Sidra", "Costa Rica - Canet Chopin", "Kenya Kirimara", "Colombia Mish Mish", 
  "Panamá Cordillera Gesha", "Colombia Sweet Dreams (Decaf)", "Ethiopia Cold Brew", "Colombia Cold Brew", 
  "Kenya Cold Brew", "Colombia Strawberry", "Cuban Cigar", "Ethiopia Rogisha", "Espresso", "Ethiopia", 
  "Sweet dream Decaf", "KIRIMARA", "Mish Mish", "Colombia strawberry v60", "Bourbon sidra v60", 
  "Cold Brew Ethiopia.", "Cold Brew Kenya Kirimara", "Cold Brew - Colombian EXOTIC", "Blackberry {tap filter}", 
  "Colombia Sweet Decaf", "Costa Rica", "Colombia Bourbon Sidra", "Ethiopia ROGICHA", "Decaf - Sweet Dreams", 
  "Colombia - Strawberry", "Colombia Sidra", "Kenya kiramara", "Ethiopia Rogicha", "Sweet Dreams Decaf"
];

for (let i = 0; i < lines.length; i++) {
  const line = lines[i];
  const priceMatch = line.match(/price:\s*(["']?)(\d+(\.\d+)?)(["']?)/);
  if (priceMatch) {
    const originalPriceStr = priceMatch[2];
    const numPrice = parseFloat(originalPriceStr);
    
    // We want to decrement only if we are in target categories, but we can just use the stack logic again!
  }
}
