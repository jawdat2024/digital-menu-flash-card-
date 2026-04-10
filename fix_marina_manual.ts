import fs from 'fs';

let content = fs.readFileSync('constants.ts', 'utf-8');

// We need to remove man_ethiopia_rojicha from manually-pouring
const blockToRemove = `            {
              id: "man_ethiopia_rojicha",
              name: "ETHIOPIA ROJICHA",
              tastingNotes: "Apricot, Pear, Honey.",
              price: "36",
              image: "https://iili.io/qKka1vj.png",
              ingredients: "Manual Pouring",
              calories: 5,
              status: "Available" as const,
            },
`;

content = content.replace(blockToRemove, '');
fs.writeFileSync('constants.ts', content);
console.log('Fixed manually pouring');
