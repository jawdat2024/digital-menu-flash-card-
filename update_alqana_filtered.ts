import * as fs from 'fs';

let content = fs.readFileSync('constants.ts', 'utf8');

const newAlQanaFilteredItems = `        {
          id: "fil_ethiopia_rogicha",
          name: "Ethiopia ROGICHA",
          tastingNotes: "Apricot, Pear, Honey",
          price: "36",
          image: "https://iili.io/qLf9mXt.jpg",
          ingredients: "Pour-over brewing method",
          calories: 5,
          status: 'available' as const,
        },
        {
          id: "fil_decaf_sweet_dreams",
          name: "Decaf - Sweet Dreams",
          tastingNotes: "Dried Apricot, Molasses, Pecan Nuts",
          price: "38",
          image: "https://iili.io/qLf9mXt.jpg",
          ingredients: "Pour-over brewing method",
          calories: 5,
          status: 'available' as const,
        },
        {
          id: "fil_kenya_kirimara",
          name: "Kenya Kirimara",
          tastingNotes: "Brown Sugar, Wild Cherry, Raisins",
          price: "46",
          image: "https://iili.io/qLf9mXt.jpg",
          ingredients: "Pour-over brewing method",
          calories: 5,
          status: 'available' as const,
        },
        {
          id: "fil_colombia_strawberry",
          name: "Colombia - Strawberry",
          isNew: true,
          tastingNotes: "Strawberry Jam, Honey, Milk Chocolates",
          price: "57",
          image: "https://iili.io/qLf9mXt.jpg",
          ingredients: "Pour-over brewing method",
          calories: 5,
          status: 'available' as const,
        },
        {
          id: "fil_mish_mish",
          name: "Colombia Mish Mish",
          tastingNotes: "Apricot Jam, Raspberry, Lychee",
          price: "57",
          image: "https://iili.io/qLf9mXt.jpg",
          ingredients: "Pour-over brewing method",
          calories: 5,
          status: 'available' as const,
        },
        {
          id: "fil_colombia_gesha_key_lime",
          name: "Colombia Gesha Key Lime Pie",
          tastingNotes: "Orange Blossom, Lemon Grass, Condensed Milk",
          price: "65",
          image: "https://iili.io/qLf9mXt.jpg",
          ingredients: "Pour-over brewing method",
          calories: 5,
          status: 'available' as const,
        }`;

// fix the constants.ts by loading
content = content.replace('${newAlQanaFilteredItems}', newAlQanaFilteredItems);
fs.writeFileSync('constants.ts', content, 'utf8');
