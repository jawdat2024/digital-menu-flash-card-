import fs from 'fs';

const data = {
  "alqana": [
    { "name": "Ethiopia Guji-Rogicha", "notes": "Apricot, Pear, Honey." },
    { "name": "Colombia Blackberry", "notes": "Blackberry Soda, Cacao Nibs, Karkade." },
    { "name": "Gesha Key Lime Pie", "notes": "Orange Blossom, Lemongrass, Condensed Milk" },
    { "name": "Kenya Kirimara", "notes": "Wild Cherry, Brown Sugar, Raisins." },
    { "name": "Colombia Mish Mish", "notes": "Apricot Jam, Raspberry, Lychee" },
    { "name": "Colombia Sweet Dreams Decaf", "notes": "Passion fruit cheesecake, Milk chocolate, Molasses" }
  ],
  "marina": [
    { "name": "Colombia - Bourbon Sidra", "notes": "Red grapes, Watermelon, Hard Candy, Raspberry." },
    { "name": "Panama Cordillera Gesha", "notes": "Cantaloupe, Honey, Berries, Lemongrass." },
    { "name": "Costa Rica - Canet Chopin", "notes": "Cacao, Fig Compote, Honey, Cherry." },
    { "name": "Kenya Kirimara", "notes": "Wild Cherry, Brown Sugar, Raisins." },
    { "name": "Colombia Mish Mish", "notes": "Apricot Jam, Raspberry, Lychee" },
    { "name": "Colombia Sweet Dreams Decaf", "notes": "Passion fruit cheesecake, Milk chocolate, Molasses" }
  ],
  "albateen": [
    { "name": "Gesha Key Lime Pie", "notes": "Orange Blossom, Lemongrass, Condensed Milk" },
    { "name": "Kenya Kirimara", "notes": "Wild Cherry, Brown Sugar, Raisins." },
    { "name": "Colombia Mish Mish", "notes": "Apricot Jam, Raspberry, Lychee" },
    { "name": "Colombia Sweet Dreams Decaf", "notes": "Passion fruit cheesecake, Milk chocolate, Molasses" },
    { "name": "Panama Cordillera Gesha", "notes": "Cantaloupe, Honey, Berries, Lemongrass" }
  ],
  "khalifa": [
    { "name": "Ethiopia Guji-Rogicha", "notes": "Apricot, Pear, Honey." },
    { "name": "Kenya Kirimara", "notes": "Wild Cherry, Brown Sugar, Raisins." },
    { "name": "Colombia Mish Mish", "notes": "Apricot Jam, Raspberry, Lychee" },
    { "name": "Gesha Key Lime Pie", "notes": "Orange Blossom, Lemongrass, Condensed Milk" },
    { "name": "Colombia Sweet Dreams Decaf", "notes": "Passion fruit cheesecake, Milk chocolate, Molasses" },
    { "name": "Colombia Blackberry", "notes": "Blackberry Soda, Cacao Nibs, Karkade." }
  ],
  "mirdif": [
    { "name": "Ethiopia Guji-Rogicha", "notes": "Apricot, Pear, Honey." },
    { "name": "Kenya Kirimara", "notes": "Wild Cherry, Brown Sugar, Raisins." },
    { "name": "Colombia Blackberry", "notes": "Blackberry Soda, Cacao Nibs, Karkade." },
    { "name": "Colombia Mish Mish", "notes": "Apricot Jam, Raspberry, Lychee." },
    { "name": "Colombia Sweet Dreams Decaf", "notes": "Passion fruit cheesecake, Milk chocolate, Molasses" }
  ],
  "dubai": [
    { "name": "Ethiopia Guji-Rogicha", "notes": "Apricot, Pear, Honey." },
    { "name": "Kenya Kirimara", "notes": "Wild Cherry, Brown Sugar, Raisins." },
    { "name": "Colombia Blackberry", "notes": "Blackberry Soda, Cacao Nibs, Karkade." },
    { "name": "Colombia Mish Mish", "notes": "Apricot Jam, Raspberry, Lychee." },
    { "name": "Colombia Sweet Dreams Decaf", "notes": "Passion fruit cheesecake, Milk chocolate, Molasses" }
  ]
};

const prices: Record<string, string> = {
  "Ethiopia Guji-Rogicha": "38",
  "Colombia Blackberry": "57",
  "Gesha Key Lime Pie": "48",
  "Kenya Kirimara": "46",
  "Colombia Mish Mish": "57",
  "Colombia Sweet Dreams Decaf": "38",
  "Colombia - Bourbon Sidra": "46",
  "Panama Cordillera Gesha": "65",
  "Costa Rica - Canet Chopin": "57"
};

const generateItems = (branchKey: string, branchName: string) => {
  const items = data[branchKey as keyof typeof data];
  return items.map((item, index) => {
    const id = `fil_${item.name.toLowerCase().replace(/[^a-z0-9]/g, '_').substring(0, 10)}_${index}`;
    const price = prices[item.name] || "40";
    return `        { 
          id: '${id}', 
          name: '${item.name}',
          tastingNotes: '${item.notes}', 
          price: '${price}', 
          image: 'https://iili.io/qjAjZAJ.png', 
          ingredients: 'Pour-over brewing method', 
          calories: 5,
          branch: '${branchName}',
          status: 'Available'
        }`;
  }).join(',\n');
};

let content = fs.readFileSync('constants.ts', 'utf-8');

const replaceFilterCoffee = (content: string, branchName: string, itemsStr: string) => {
  // Find the filter-coffee section for the specific branch
  // We can use a regex that looks for the specific branch's filter-coffee block
  // Since the structure is consistent, we can find the block that follows the branch's Espresso
  
  // A simpler way is to split the file by `id: 'filter-coffee'` and replace the items array
  // But we need to make sure we replace the right one for each branch.
  return content;
};

// Let's use a more robust way to replace the items array for each branch.
// The branches are created in functions: createMirdifMenu, createAlBateenMenu, createKhalifaMenu, createAlQanaMenu, createMarinaMenu, createDubaiMenu

const branchFunctions = {
  mirdif: { func: 'createMirdifMenu', name: 'Mirdif' },
  dubai: { func: 'createDubaiMenu', name: 'Dubai' },
  alqana: { func: 'createAlQanaMenu', name: 'Al Qana' },
  khalifa: { func: 'createKhalifaMenu', name: 'Khalifa City' },
  albateen: { func: 'createAlBateenMenu', name: 'Al Bateen' },
  marina: { func: 'createMarinaMenu', name: 'Marina' }
};

for (const [key, info] of Object.entries(branchFunctions)) {
  const itemsStr = generateItems(key, info.name);
  
  // Find the function definition
  const funcRegex = new RegExp(`const ${info.func} = \\(\\): MenuCategory\\[\\] => \\{[\\s\\S]*?return \\[([\\s\\S]*?)\\];\\n\\};`);
  const match = content.match(funcRegex);
  
  if (match) {
    const funcBody = match[0];
    
    // Find the filter-coffee block inside the function body
    const filterCoffeeRegex = /\{\s*id:\s*'filter-coffee'[\s\S]*?items:\s*\[([\s\S]*?)\]\s*\}/;
    const filterMatch = funcBody.match(filterCoffeeRegex);
    
    if (filterMatch) {
      const newFilterCoffeeBlock = filterMatch[0].replace(filterMatch[1], `\n${itemsStr}\n      `);
      const newFuncBody = funcBody.replace(filterMatch[0], newFilterCoffeeBlock);
      content = content.replace(funcBody, newFuncBody);
      console.log(`Updated ${info.name}`);
    } else {
      console.log(`Could not find filter-coffee in ${info.name}`);
    }
  } else {
    console.log(`Could not find function ${info.func}`);
  }
}

fs.writeFileSync('constants.ts', content);
console.log('Done!');
