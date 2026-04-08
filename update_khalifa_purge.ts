import fs from 'fs';
import path from 'path';

const constantsPath = path.join(process.cwd(), 'constants.ts');
let content = fs.readFileSync(constantsPath, 'utf8');

// Find the start and end of createKhalifaMenu
const startIndex = content.indexOf('const createKhalifaMenu = (): MenuCategory[] => {');
const endIndex = content.indexOf('const createAlQanaMenu = (): MenuCategory[] => {');

if (startIndex !== -1 && endIndex !== -1) {
  let khalifaSection = content.substring(startIndex, endIndex);

  // 1. Remove Cuban Cigar {tap filter}
  const cigarTarget = [
    '        {',
    '          id: "fil_cuban_cigar",',
    '          name: "Cuban Cigar {tap filter}",',
    '          tastingNotes: "Caramel popcorn, fresh tobacco",',
    '          price: "41",',
    '          image: "https://iili.io/qLf9mXt.jpg",',
    '          ingredients: "Pour-over brewing method",',
    '          calories: 5,',
    '          status: "Available",',
    '        },'
  ].join('\\n');
  
  // 2. Remove Costa Rica
  const costaRicaTarget = [
    '        {',
    '          id: "fil_costa_rica",',
    '          name: "Costa Rica",',
    '          tastingNotes: "Cacao, fig compote, honey, cherry",',
    '          price: "57",',
    '          image: "https://iili.io/qLf9mXt.jpg",',
    '          ingredients: "Pour-over brewing method",',
    '          calories: 5,',
    '          status: "Available",',
    '        },'
  ].join('\\n');

  // 3. Remove Chicken & Avocado Croissant
  const chickenCroissantTarget = [
    '        {',
    '          id: "sw_chick",',
    '          name: "Chicken & Avocado Croissant",',
    '          price: "42",',
    '          image: "https://iili.io/qqGn1cb.jpg",',
    '          ingredients: "Grilled chicken, fresh avocado, croissant",',
    '          calories: 520,',
    '        },'
  ].join('\\n');

  // Replace using string literals directly
  khalifaSection = khalifaSection.replace(
    '        {\\n          id: "fil_cuban_cigar",\\n          name: "Cuban Cigar {tap filter}",\\n          tastingNotes: "Caramel popcorn, fresh tobacco",\\n          price: "41",\\n          image: "https://iili.io/qLf9mXt.jpg",\\n          ingredients: "Pour-over brewing method",\\n          calories: 5,\\n          status: "Available",\\n        },\\n',
    ''
  );
  
  khalifaSection = khalifaSection.replace(
    '        {\\n          id: "fil_costa_rica",\\n          name: "Costa Rica",\\n          tastingNotes: "Cacao, fig compote, honey, cherry",\\n          price: "57",\\n          image: "https://iili.io/qLf9mXt.jpg",\\n          ingredients: "Pour-over brewing method",\\n          calories: 5,\\n          status: "Available",\\n        },\\n',
    ''
  );

  khalifaSection = khalifaSection.replace(
    '        {\\n          id: "sw_chick",\\n          name: "Chicken & Avocado Croissant",\\n          price: "42",\\n          image: "https://iili.io/qqGn1cb.jpg",\\n          ingredients: "Grilled chicken, fresh avocado, croissant",\\n          calories: 520,\\n        },\\n',
    ''
  );

  content = content.substring(0, startIndex) + khalifaSection + content.substring(endIndex);
  fs.writeFileSync(constantsPath, content, 'utf8');
  console.log('Successfully purged items from Khalifa branch.');
} else {
  console.log('Could not find Khalifa section.');
}
