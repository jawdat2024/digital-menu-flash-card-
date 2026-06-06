import fs from 'fs';

const filepath = './constants.ts';
let content = fs.readFileSync(filepath, 'utf8');

// 1. Add d_snickers_coffee_bean to Dubai
function addToDubai() {
  const start = content.indexOf('const createDubaiMenu');
  if (start === -1) return;
  const dessertsStart = content.indexOf('id: "desserts"', start);
  const itemsStart = content.indexOf('items: [', dessertsStart);
  if (itemsStart === -1) return;
  
  // check if it's already there
  const snippet = content.substring(itemsStart, itemsStart+1500);
  if (!snippet.includes('"d_snickers_coffee_bean"')) {
    const targetInsert = '        findItem("desserts", "STICKY DATE")!, // Sticky Dates';
    const targetPos = content.indexOf(targetInsert, itemsStart);
    if (targetPos !== -1 && targetPos < itemsStart + 1500) {
      const newLine = '        findItem("desserts", "d_snickers_coffee_bean")!, // Snickers coffee bean\n';
      content = content.substring(0, targetPos) + newLine + content.substring(targetPos);
      console.log('Added Snickers to Dubai');
    } else {
      console.log("Could not find STICKY DATE in Dubai menu");
    }
  }
}

// 2. Add d_1000 to ALL branches (where it is missing)
function addToAll() {
    const branches = ['createMirdifMenu', 'createMarinaMenu', 'createDubaiMenu'];
    
    for (const branch of branches) {
      const start = content.indexOf(`const ${branch}`);
      if (start === -1) continue;
      
      if (branch === 'createMarinaMenu') {
          const marinaDessertMenu = content.indexOf('if (cat.id === "desserts")', start);
          const itemsArray = content.indexOf('items: [', marinaDessertMenu);
          const snippet = content.substring(itemsArray, itemsArray+500);
          if (!snippet.includes('"d_1000"')) {
              const insertPos = content.indexOf('],', itemsArray);
              content = content.substring(0, insertPos) + '          findItem("desserts", "d_1000")!,\n        ' + content.substring(insertPos);
              console.log(`Added 1000 Layers to ${branch}`);
          }
          continue;
      }

      const dessertsStart = content.indexOf('id: "desserts"', start);
      if (dessertsStart === -1) continue;
      
      const itemsStart = content.indexOf('items: [', dessertsStart);
      if (itemsStart === -1) continue;
      
      const snippet = content.substring(itemsStart, itemsStart+1500);
      if (!snippet.includes('"d_1000"')) {
        let targetInsert = '        findItem("desserts", "STICKY DATE")!,';
        let targetPos = content.indexOf(targetInsert, itemsStart);
        
        if (targetPos === -1 || targetPos > itemsStart + 1500) {
           const arrayEnd = content.indexOf(']', itemsStart);
           const newLine = '        findItem("desserts", "d_1000")!,\n';
           content = content.substring(0, arrayEnd) + newLine + '      ' + content.substring(arrayEnd);
        } else {
           const newLine = '        findItem("desserts", "d_1000")!,\n';
           content = content.substring(0, targetPos) + newLine + content.substring(targetPos);
        }
        console.log(`Added 1000 Layers to ${branch}`);
      }
    }
}

addToDubai();
addToAll();

fs.writeFileSync(filepath, content);
console.log('Done');
