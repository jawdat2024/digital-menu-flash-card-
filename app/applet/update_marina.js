const fs = require('fs');

let content = fs.readFileSync('constants.ts', 'utf-8');

const marinaStart = content.indexOf('const createMarinaMenu');
const marinaEnd = content.indexOf('const create', marinaStart + 10);
let marinaBlock = content.substring(marinaStart, marinaEnd > 0 ? marinaEnd : content.length);

const targetStr = `    {
      id: "healthy-bowls",
      title: "FRUITS SEEDS & GRAINS.",
      items: [
        findItem("healthy-bowls", "bw2")!,
        findItem("healthy-bowls", "bw3")!,
        findItem("healthy-bowls", "bw5")!,
        findItem("healthy-bowls", "bw4")!,
      ].filter(Boolean),
    },`;

const replaceStr = `    {
      id: "healthy-bowls",
      title: "FRUITS SEEDS & GRAINS.",
      items: [
        findItem("healthy-bowls", "bw2")!,
        findItem("healthy-bowls", "bw3")!,
        findItem("healthy-bowls", "bw5")!,
        findItem("healthy-bowls", "bw4")!,
        {
          id: "marina_matcha_chia",
          name: "Matcha Chia Pudding",
          ingredients: "Placeholder description",
          price: "0",
          image: "https://iili.io/qLf9mXt.jpg",
          isVisible: true,
          status: 'new'
        }
      ].filter(Boolean),
    },`;

if (marinaBlock.includes(targetStr)) {
  marinaBlock = marinaBlock.replace(targetStr, replaceStr);
  content = content.substring(0, marinaStart) + marinaBlock + content.substring(marinaEnd > 0 ? marinaEnd : content.length);
  fs.writeFileSync('constants.ts', content, 'utf-8');
  console.log('Successfully added Matcha Chia Pudding to Marina');
} else {
  console.log('Could not find the target string in Marina block. Here is what we found around healthy-bowls:');
  const healthyIdx = marinaBlock.indexOf('healthy-bowls');
  if (healthyIdx !== -1) {
    console.log(marinaBlock.substring(healthyIdx - 100, healthyIdx + 400));
  } else {
    console.log('healthy-bowls not found in Marina block!');
  }
}
