import fs from 'fs';

let content = fs.readFileSync('constants.ts', 'utf-8');

const updates = [
  { match: /notes:\s*'Flavors will be available soon\.'/g, replace: "notes: 'Strawberry Jam, Honey, Milk Chocolates'" },
  { match: /notes:\s*'Passion fruit cheesecake, milk chocolate, molasses'/g, replace: "notes: 'Passion fruit cheesecake, Milk chocolate, Molasses'" }
];

updates.forEach(u => {
  content = content.replace(u.match, u.replace);
});

fs.writeFileSync('constants.ts', content);
console.log('Updated constants.ts');
