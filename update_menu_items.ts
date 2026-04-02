import fs from 'fs';

let content = fs.readFileSync('constants.ts', 'utf-8');

// 1. Açaí Smoothie
content = content.replace(
  /name:\s*'Açaí Smoothie',\s*price:\s*'42',\s*image:\s*'https:\/\/iili\.io\/qnBllxp\.jpg'/g,
  "name: 'Açaí Smoothie', price: '42', image: 'https://iili.io/BBBfCDN.jpg'"
);

// 2. Espresso
content = content.replace(
  /name:\s*'Espresso',\s*ingredients:\s*'',\s*price:\s*'24',\s*image:\s*'https:\/\/iili\.io\/fUCfVDl\.jpg'/g,
  "name: 'Espresso',\n        ingredients: '',\n        price: '24',\n        image: 'https://iili.io/BBB0NcJ.jpg'"
);

// 3. Crepe Rolls
content = content.replace(
  /name:\s*'Crepe Rolls',\s*ingredients:\s*'It’s made with our signature crepe mix, crisp on the outside and delicately tender inside, filled with Valrhona Dulcey chocolate and finished with smooth milk chocolate sauce\. ✨',\s*price:\s*'38'/g,
  "name: 'Crepe Rolls', \n        ingredients: 'It’s made with our signature crepe mix, crisp on the outside and delicately tender inside, filled with Valrhona Dulcey chocolate and finished with smooth milk chocolate sauce. ✨', \n        price: '42'"
);

fs.writeFileSync('constants.ts', content, 'utf-8');
console.log("Updated constants.ts");
