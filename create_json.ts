import fs from 'fs';

const branchConfig = {
  khalifa: {
    espresso: [
      { name: "Costa Rica", notes: "Cacao, Fig Compote, Honey, Cherry", price: "+5 AED" },
      { name: "Colombia witch", notes: "Dried Figs, Jaggery, Orange Zest, Sugarcane Juice", price: "+0 AED" },
      { name: "sweet dream decaf", notes: "Passion Fruit, Cheesecake, Milk Chocolate", price: "+0 AED" }
    ],
    filtered: [
      { id: "khalifa_fil_1", name: "Ethiopia ROGICHA", price: "36", image: "https://iili.io/qLf9mXt.jpg", tastingNotes: "Apricot, Pear, Honey", ingredients: "Filtered Coffee", calories: 5, status: "available" as const },
      { id: "khalifa_fil_2", name: "Kenya Kirimara", price: "46", image: "https://iili.io/qLf9mXt.jpg", tastingNotes: "Brown Sugar – Wild Cherry – Raisins", ingredients: "Filtered Coffee", calories: 5, status: "available" as const },
      { id: "khalifa_fil_3", name: "Colombia - Bourbon Sidra", price: "46", image: "https://iili.io/qLf9mXt.jpg", tastingNotes: "Red Grapes – Watermelon – Hard Candy – Raspberry", ingredients: "Filtered Coffee", calories: 5, status: "available" as const },
      { id: "khalifa_fil_4", name: "Colombia blackberry", price: "57", image: "https://iili.io/qLf9mXt.jpg", tastingNotes: "Blackberry Soda, Cacao Nibs, Karkade", ingredients: "Filtered Coffee", calories: 5, status: "available" as const },
      { id: "khalifa_fil_5", name: "Colombia mish-mish", price: "57", image: "https://iili.io/qLf9mXt.jpg", tastingNotes: "Apricot Jam – Raspberry – Lychee", ingredients: "Filtered Coffee", calories: 5, status: "available" as const },
      { id: "khalifa_fil_6", name: "Sweet Dreams Decaf", price: "38", image: "https://iili.io/qLf9mXt.jpg", tastingNotes: "Passion Fruit, Cheesecake, Milk Chocolate", ingredients: "Filtered Coffee", calories: 5, status: "available" as const },
      { id: "khalifa_fil_7", name: "Colombia key lime gesha", price: "65", image: "https://iili.io/qLf9mXt.jpg", tastingNotes: "Orange Blossom – Lemon Grass – Condensed Milk", ingredients: "Filtered Coffee", calories: 5, status: "available" as const }
    ]
  },
  albateen: {
    espresso: [
      { name: "sweet dream decaf", notes: "Passion Fruit, Cheesecake, Milk Chocolate", price: "+0 AED" },
      { name: "Colombia witch", notes: "Dried Figs, Jaggery, Orange Zest, Sugarcane Juice", price: "+0 AED" },
      { name: "Nicaragua", notes: "Milk Chocolate, Sugar Cane, Candied Peanuts", price: "+0 AED" },
      { name: "Colombia Peach", notes: "Peach, Vanilla Ice Cream, Lychee", price: "+5 AED" }
    ],
    filtered: [
      { id: "albateen_fil_1", name: "Ethiopia ROGICHA", price: "36", image: "https://iili.io/qLf9mXt.jpg", tastingNotes: "Apricot, Pear, Honey", ingredients: "Filtered Coffee", calories: 5, status: "available" as const },
      { id: "albateen_fil_2", name: "Kenya Kirimara", price: "46", image: "https://iili.io/qLf9mXt.jpg", tastingNotes: "Brown Sugar – Wild Cherry – Raisins", ingredients: "Filtered Coffee", calories: 5, status: "available" as const },
      { id: "albateen_fil_3", name: "Colombia blackberry", price: "57", image: "https://iili.io/qLf9mXt.jpg", tastingNotes: "Blackberry Soda, Cacao Nibs, Karkade", ingredients: "Filtered Coffee", calories: 5, status: "available" as const },
      { id: "albateen_fil_4", name: "Colombia - Bourbon Sidra", price: "46", image: "https://iili.io/qLf9mXt.jpg", tastingNotes: "Red Grapes – Watermelon – Hard Candy – Raspberry", ingredients: "Filtered Coffee", calories: 5, status: "available" as const },
      { id: "albateen_fil_5", name: "Colombia mish-mish", price: "57", image: "https://iili.io/qLf9mXt.jpg", tastingNotes: "Apricot Jam – Raspberry – Lychee", ingredients: "Filtered Coffee", calories: 5, status: "available" as const },
      { id: "albateen_fil_6", name: "Colombia key lime gesha", price: "65", image: "https://iili.io/qLf9mXt.jpg", tastingNotes: "Orange Blossom – Lemon Grass – Condensed Milk", ingredients: "Filtered Coffee", calories: 5, status: "available" as const },
      { id: "albateen_fil_7", name: "sweet dream decaf", price: "38", image: "https://iili.io/qLf9mXt.jpg", tastingNotes: "Passion Fruit, Cheesecake, Milk Chocolate", ingredients: "Filtered Coffee", calories: 5, status: "available" as const }
    ]
  },
  dubai: {
    espresso: [
      { name: "Costa Rica", notes: "Cacao, Fig Compote, Honey, Cherry", price: "+5 AED" },
      { name: "Colombia witch", notes: "Dried Figs, Jaggery, Orange Zest, Sugarcane Juice", price: "+0 AED" },
      { name: "sweet dream decaf", notes: "Passion Fruit, Cheesecake, Milk Chocolate", price: "+0 AED" },
      { name: "Nicaragua", notes: "Milk Chocolate, Sugar Cane, Candied Peanuts", price: "+0 AED" }
    ],
    filtered: [
      { id: "dubai_fil_1", name: "Kenya Kirimara", price: "46", image: "https://iili.io/qLf9mXt.jpg", tastingNotes: "Brown Sugar – Wild Cherry – Raisins", ingredients: "Filtered Coffee", calories: 5, status: "available" as const },
      { id: "dubai_fil_2", name: "Ethiopia ROGICHA", price: "36", image: "https://iili.io/qLf9mXt.jpg", tastingNotes: "Apricot, Pear, Honey", ingredients: "Filtered Coffee", calories: 5, status: "available" as const },
      { id: "dubai_fil_3", name: "Colombia strawberry", price: "57", image: "https://iili.io/qLf9mXt.jpg", tastingNotes: "Strawberry Jam – Honey – Milk Chocolates", ingredients: "Filtered Coffee", calories: 5, status: "available" as const },
      { id: "dubai_fil_4", name: "Colombia mish-mish", price: "57", image: "https://iili.io/qLf9mXt.jpg", tastingNotes: "Apricot Jam – Raspberry – Lychee", ingredients: "Filtered Coffee", calories: 5, status: "available" as const },
      { id: "dubai_fil_5", name: "Colombia key lime gesha", price: "65", image: "https://iili.io/qLf9mXt.jpg", tastingNotes: "Orange Blossom – Lemon Grass – Condensed Milk", ingredients: "Filtered Coffee", calories: 5, status: "available" as const },
      { id: "dubai_fil_6", name: "Colombia - Bourbon Sidra", price: "46", image: "https://iili.io/qLf9mXt.jpg", tastingNotes: "Red Grapes – Watermelon – Hard Candy – Raspberry", ingredients: "Filtered Coffee", calories: 5, status: "available" as const }
    ]
  },
  alqana: {
    espresso: [
      { name: "Colombia - Bourbon Sidra", notes: "Red Grapes – Watermelon – Hard Candy – Raspberry", price: "+5 AED" },
      { name: "Costa Rica", notes: "Cacao, Fig Compote, Honey, Cherry", price: "+5 AED" },
      { name: "sweet dream decaf", notes: "Passion Fruit, Cheesecake, Milk Chocolate", price: "+0 AED" },
      { name: "Brazil Chocolate", notes: "Chocolate Biscuit, Condensed Milk, Chestnut", price: "+1 AED" }
    ],
    filtered: [
      { id: "alqana_fil_1", name: "Colombia key lime gesha", price: "65", image: "https://iili.io/qLf9mXt.jpg", tastingNotes: "Orange Blossom – Lemon Grass – Condensed Milk", ingredients: "Filtered Coffee", calories: 5, status: "available" as const },
      { id: "alqana_fil_2", name: "Colombia strawberry", price: "57", image: "https://iili.io/qLf9mXt.jpg", tastingNotes: "Strawberry Jam – Honey – Milk Chocolates", ingredients: "Filtered Coffee", calories: 5, status: "available" as const },
      { id: "alqana_fil_3", name: "Colombia mish-mish", price: "57", image: "https://iili.io/qLf9mXt.jpg", tastingNotes: "Apricot Jam – Raspberry – Lychee", ingredients: "Filtered Coffee", calories: 5, status: "available" as const },
      { id: "alqana_fil_4", name: "Ethiopia ROGICHA", price: "36", image: "https://iili.io/qLf9mXt.jpg", tastingNotes: "Apricot, Pear, Honey", ingredients: "Filtered Coffee", calories: 5, status: "available" as const },
      { id: "alqana_fil_5", name: "Kenya Kirimara", price: "46", image: "https://iili.io/qLf9mXt.jpg", tastingNotes: "Brown Sugar – Wild Cherry – Raisins", ingredients: "Filtered Coffee", calories: 5, status: "available" as const },
      { id: "alqana_fil_6", name: "sweet dream decaf", price: "38", image: "https://iili.io/qLf9mXt.jpg", tastingNotes: "Passion Fruit, Cheesecake, Milk Chocolate", ingredients: "Filtered Coffee", calories: 5, status: "available" as const }
    ]
  }
};

fs.writeFileSync('bean_update.json', JSON.stringify(branchConfig, null, 2));

console.log("JSON written successfully.");
