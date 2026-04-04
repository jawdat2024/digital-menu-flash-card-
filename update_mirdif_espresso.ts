import fs from 'fs';
import path from 'path';

const constantsPath = path.join(process.cwd(), 'constants.ts');
let content = fs.readFileSync(constantsPath, 'utf8');

const newItems = `
  mirdifEspresso.items.push(
    {
      id: "esp_cortado_freedo",
      name: "Cortado Freedo",
      ingredients: "",
      price: "31",
      image: "https://iili.io/BxjiyhX.jpg",
      calories: 0,
      customizations: [
        {
          id: "bean_choice",
          title: "Bean Choice",
          options: [],
        },
      ],
    },
    {
      id: "esp_cartel_espresso_martini",
      name: "Cartel Espresso Martini",
      ingredients: "",
      price: "36",
      image: "https://iili.io/BxwBNCg.jpg",
      calories: 0,
      customizations: [
        {
          id: "bean_choice",
          title: "Bean Choice",
          options: [],
        },
      ],
    }
  );
`;

content = content.replace(
  "  // Update all items to use these beans",
  newItems + "\n  // Update all items to use these beans"
);

fs.writeFileSync(constantsPath, content, 'utf8');
console.log('Done');
