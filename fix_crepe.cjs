const fs = require('fs');
let file = fs.readFileSync('constants.ts', 'utf-8');

// replace the base menu coming_soon
file = file.replace(
  `        id: "d_crepe_rolls",
        name: "Crepe Rolls",
        ingredients:
          "It’s made with our signature crepe mix, crisp on the outside and delicately tender inside, filled with Valrhona Dulcey chocolate and finished with smooth milk chocolate sauce. ✨",
        price: "42",
        image: "https://iili.io/qxFnyvt.png",
        status: 'coming_soon' as const,
        calories: 0,`,
  `        id: "d_crepe_rolls",
        name: "Crepe Rolls",
        ingredients:
          "It’s made with our signature crepe mix, crisp on the outside and delicately tender inside, filled with Valrhona Dulcey chocolate and finished with smooth milk chocolate sauce. ✨",
        price: "42",
        image: "https://iili.io/qxFnyvt.png",
        status: 'available' as const,
        calories: 0,`
);

// replace the khalifa menu override
file = file.replace(
  `        {
          ...findItem("desserts", "d_crepe_rolls")!,
          status: 'coming_soon' as const,
        },`,
  `        findItem("desserts", "d_crepe_rolls")!,`
);

fs.writeFileSync('constants.ts', file);
console.log('Fixed crepe rolls');
