import fs from 'fs';

let content = fs.readFileSync('constants.ts', 'utf-8');

function toTitleCase(str: string): string {
  return str.replace(
    /\w\S*/g,
    function(txt) {
      // Keep acronyms or specific words if needed, but standard title case:
      return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
    }
  );
}

// We want to replace name: '...' or name: "..."
// We need to be careful about names that might have special characters or emojis.
// Let's use a regex with a replacer function.
const nameRegex = /name:\s*(['"])(.*?)\1/g;

content = content.replace(nameRegex, (match, quote, nameStr) => {
  // Apply title case
  let titleCased = toTitleCase(nameStr);
  
  // Fix specific words that should remain uppercase or specific case if needed
  // e.g. "Açaí" -> "Açaí"
  titleCased = titleCased.replace(/Acai/gi, 'Açaí');
  titleCased = titleCased.replace(/Açai/gi, 'Açaí');
  titleCased = titleCased.replace(/Acaí/gi, 'Açaí');
  
  // Preserve CARTEL uppercase for branch names
  if (titleCased.startsWith('Cartel ')) {
    titleCased = titleCased.replace(/^Cartel /, 'CARTEL ');
  }
  
  return `name: ${quote}${titleCased}${quote}`;
});

// Specific replacements
content = content.replace(/Big Breakfast Homemade/gi, 'Big Breakfast');
content = content.replace(/Minted Yogurt/gi, 'Turkish Egg');
content = content.replace(/Minted yogurt/gi, 'Turkish Egg');
content = content.replace(/FRUITS, SEEDS & GRAINS/g, 'Eggs & More');

fs.writeFileSync('constants.ts', content, 'utf-8');
console.log("Done");
