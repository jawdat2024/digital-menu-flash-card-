import fs from 'fs';

let content = fs.readFileSync('/constants.ts', 'utf-8');

const targetStr = `    const healthyBowlsIdx = menu.findIndex(c => c.id === 'healthy-bowls');
    if (healthyBowlsIdx !== -1) {
      menu[healthyBowlsIdx].items.forEach(item => {
        item.status = 'available';
      });
    }`;

const replaceStr = `    const healthyBowlsIdx = menu.findIndex(c => c.id === 'healthy-bowls');
    if (healthyBowlsIdx !== -1) {
      menu[healthyBowlsIdx].items.push({
        id: "marina_matcha_chia",
        name: "Matcha Chia Pudding",
        ingredients: "Placeholder description",
        price: "0",
        image: "https://iili.io/qLf9mXt.jpg",
        isVisible: true,
        status: 'new'
      });
      menu[healthyBowlsIdx].items.forEach(item => {
        if (item.id !== "marina_matcha_chia") {
          item.status = 'available';
        }
      });
    }`;

if (content.includes(targetStr)) {
  content = content.replace(targetStr, replaceStr);
  fs.writeFileSync('/constants.ts', content, 'utf-8');
  console.log("Successfully updated Marina healthy bowls");
} else {
  console.log("Could not find target block");
}
