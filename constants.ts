import { MenuCategory, Branch, BranchMenuDirectory } from './types';

/* 
  ========================================
  CARTEL MENU DATA SYSTEM
  ========================================
*/

export const BRANCH_DATA: Branch[] = [
  {
    id: 'khalifa',
    name: 'CARTEL Khalifa City',
    address: '5 Al Almas 2 St, Khalifa City, SW18, Abu Dhabi',
    coordinates: { lat: 24.4239, lng: 54.5728 },
    theme: 'warm',
    description: 'A sanctuary of specialty coffee with warm tones and minimalist vibes.',
    specialty: 'Signature Blends',
    image: '',
    workingHours: ''
  },
  {
    id: 'alqana',
    name: 'CARTEL Al Qana',
    address: 'Al Qana Walk, Rabdan Area, Abu Dhabi',
    coordinates: { lat: 24.4175, lng: 54.4920 },
    theme: 'aquatic',
    description: 'Waterfront luxury inspired by the deep ocean.',
    specialty: 'Single Origin',
    image: '',
    workingHours: ''
  },
  {
    id: 'albateen',
    name: 'CARTEL Al Bateen',
    address: '469 Al Khaleej Al Arabi St, Al Khalidiyah, W17 02, Abu Dhabi',
    coordinates: { lat: 24.4590, lng: 54.3418 },
    theme: 'luxury',
    description: 'A premium lounge for your evening coffee.',
    specialty: 'Late Night Coffee',
    image: '',
    workingHours: ''
  },
  {
    id: 'marina',
    name: 'CARTEL Marina',
    address: '38 Mohammed Bin Mejren Al Marar St, Al Kasir, Al Marina, Abu Dhabi',
    coordinates: { lat: 24.4764, lng: 54.3211 },
    theme: 'nautical',
    description: ' WE KNOW OUR NOTES .',
    specialty: 'BENSE EXPERTS ',
    image: '',
    workingHours: ''
  },
  {
    id: 'mirdif',
    name: 'CARTEL Dubai Mirdif',
    address: '35 60C St, Mirdif, Dubai',
    coordinates: { lat: 25.2269, lng: 55.4168 },
    theme: 'urban',
    description: 'Modern industrial urban chic with neon accents.',
    specialty: 'Urban Blends',
    image: '',
    workingHours: ''
  }
];

// Standardized Espresso Bean Options
const ESPRESSO_BEAN_OPTIONS = [
  { 
    id: 'bean_blind', 
    name: 'BLIND 469', 
    price: 0, 
    description: '' 
  },
  { 
    id: 'bean_amazonic', 
    name: 'Amazonic Soul', 
    price: 1, 
    description: '' 
  },
  { 
    id: 'bean_yemen', 
    name: 'Yemen - Sharki Haraz', 
    price: 10, 
    description: '' 
  }
];

// Base menu used to populate branches (simulating database seed)
const BASE_MENU: MenuCategory[] = [
  {
    id: 'highly-recommend',
    title: 'BEST SELLER',
    items: [
      { 
        id: 'bw6', 
        name: 'EXOTIC SUNRISE', 
        ingredients: 'Coconut yogurt, homemade granola, passion fruit, mango slices, exotic gel, and lime zest.', 
        price: '42',
        image: 'https://iili.io/fvyol0F.jpg',
        calories:360
      },
      { 
        id: 'bw7', 
        name: 'Apple Cinnamon Muesli', 
        ingredients: 'Cinnamon yogurt, granola, apple crumble, soft caramel, berry compote, honeycomb, raspberries, blueberries, blackberries, apple crisp, mixed nuts, and organic honey drizzle.', 
        price: '42',
        image: 'https://iili.io/fvyxG49.jpg',
        calories:410 
      },
      { 
        id: 'bw2', 
        name: 'CARTEL Overnight Oats', 
        ingredients: 'Oats are soaked in oat milk with mixed berry compote, peanut butter, and cashew nuts.', 
        price: '42',
        image: 'https://iili.io/fvyqMn1.jpg',
        calories: 380
      },
      { 
        id: ' sw_italian', 
        name: 'Cold Cut Italian', 
        ingredients: 'White slice bread with pesto oil, fresh mozzarella, tomato slice, tartufo salami, chorizo, baby Rocca, sun-dried tomatoes, balsamic glaze, organic olive oil', 
        price: '38', 
        image: 'https://iili.io/qqEieVe.png',
        calories: 580
      },
      {
        id: 'sig8',
        name: 'CARTEL Tanzanian Hot Chocolate',
        ingredients: 'Single origin Tanzanian cacao, rich and velvety steamed milk. MARSHMELLO, chocholate stick',
        price: '32',
        image: 'https://iili.io/q2u8XqB.jpg',
        calories: 290
      },
      {
        id: 'sig3',
        name: 'Matcha Cloud',
        ingredients: 'matcha cream , matcha dust. coconut water',
        price: '38',
        image: 'https://iili.io/q2ugtIa.png',
        calories: 220
      }
    ]
  },
  {
    id: 'desserts',
    title: 'Dessert',
    items: [
      { 
        id: 'd_san_seb', 
        name: 'CARTEL Crust San Sebastian', 
        ingredients: 'Basque-style burnt cheesecake, creamy center, caramelized exterior', 
        price: '39.20',
        image: 'https://iili.io/q2hnbp4.png',
        calories: 600
      },
      { 
        id: 'd_crepe_rolls', 
        name: 'Crepe Rolls', 
        ingredients: 'It’s made with our signature crepe mix, crisp on the outside and delicately tender inside, filled with Valrhona Dulcey chocolate and finished with smooth milk chocolate sauce. ✨', 
        price: '38', 
        image: 'https://iili.io/qxFnyvt.png',
        status: 'Coming Soon',
        calories: 0
      },

      { 
        id: 'MUHALABIYA', 
        name: 'CARTEL MUHALABIYA', 
        ingredients: 'Our silky-smooth Muhalabiya is infused with delicate floral notes and topped with a cloud of premium Ghazl el Banat (Arabic cotton candy). Finished with a vibrant sprinkle of crushed pistachios and dried rose petals, every spoonful offers a perfect balance of creamy, airy, and crunchy textures.', 
        price: '39.20', 
        image: 'https://iili.io/q2iSCcx.png',
        calories: 260
      },
      { 
        id: 'd_rasp_mad', 
        name: 'Raspberry Madeleine (1 piece)', 
        ingredients: 'Classic French butter cake with fresh raspberries', 
        price: '15', 
        image: 'https://iili.io/q2hjx4t.jpg',
        calories: 180
      },
      { 
        id: 'd_choc_chip', 
        name: 'Chocolate Chip Cookie', 
        ingredients: 'Chewy cookie loaded with premium chocolate chunks', 
        price: '16', 
        image: 'https://iili.io/qqMwcbf.png',
        calories: 320
      },
      { 
        id: 'd_snickers', 
        name: ' CARTEL Snickers', 
        ingredients: 'Peanuts, caramel, and nougat coated in milk chocolate', 
        price: '39.20', 
        image: 'https://iili.io/q2hTJNj.png',
        calories: 450
      },
      { 
        id: 'd_aseeda', 
        name: 'CARTEL ASEEDA', 
        ingredients: 'Modern twist on traditional Aseeda, saffron, cardamom, date molasses, roasted nuts', 
        price: '43', 
        image: 'https://i.postimg.cc/cLJWz07y/asseda.jpg',
        calories: 460
      },
      { 
        id: 'd_decon_cheese', 
        name: 'Deconstructed Cheese Cake', 
        ingredients: 'A light and creamy eggless yogurt vanilla cheesecake served deconstructed, layered with crunchy almond crumble.with mixed berries compote', 
        price: '39.20', 
        image: 'https://iili.io/q2hets4.png',
        calories: 380
      },
      { 
        id: 'd_vanilla_pud', 
        name: 'Vanilla Pudding', 
        ingredients: 'Silky smooth vanilla custard, Madagascar vanilla bean, sweet cream', 
        price: '39.20',
        image: 'https://i.postimg.cc/d0kYq6S8/vanilla_pudding.jpg',
        calories: 380
      },
      { 
        id: 'd_banana_pud', 
        name: 'Banana Pudding', 
        ingredients: 'Layers of vanilla wafers, fresh bananas, creamy vanilla pudding, whipped cream', 
        price: '38', 
        image: 'https://iili.io/q2uy95b.jpg',
        calories: 420
      },
      { 
        id: 'd_1000', 
        name: '1000 Layers( Mille Fuille)', 
        ingredients: 'Crispy layers of puff pastry with caramels sauce and  vanilla cream', 
        price: '39.20', 
        image: 'https://iili.io/q2ATUt2.png',
        calories: 440
      },
      { 
        id: 'STICKY DATE', 
        name: 'CARTEL SICKY DATE ', 
        ingredients: 'Warm, treacle-infused date cake, house-made candied pecans, and London Dairy Vanilla Ice Cream. Rich, velvety, and classic', 
        price: '39.20', 
        image: 'https://iili.io/q2PPbjV.png',
        calories: 310
      },
    
      { 
        id: 'd_fudge_cookie', 
        name: 'Chocolate Fudge Cookie', 
        ingredients: 'Rich and fudgy dark chocolate cookie', 
        price: '21', 
        image: 'https://iili.io/qqMhN2e.png',
        calories: 340
      },
    ]
  },
  {
    id: 'filter',
    title: 'Filter Coffee',
    items: [
      {
        id: 'fil_eth_guji',
        name: 'Colombia - Bourbon Sidra',
        tastingNotes: 'Red grapes, Watermelon, Hard Candy, Raspberry',
        ingredients: 'Pour-over brewing method',
        price: '46',
        image: 'https://iili.io/qjAjZAJ.png',
        calories: 5,
        status: 'Available'
      },
      {
        id: 'fil_cuban',
        name: 'Costa Rica - Canet Chopin',
        tastingNotes: 'Cacao, Fig Compote, Honey, Cherry',
        ingredients: 'Pour-over brewing method',
        price: '57',
        image: 'https://iili.io/qjAjZAJ.png',
        calories: 5,
        status: 'Available'
      },
      {
        id: 'fil_kenya_kirimara',
        name: 'Kenya Kirimara',
        tastingNotes: 'Wild Cherry, Brown Sugar, Raisins',
        ingredients: 'Pour-over brewing method',
        price: '46',
        image: 'https://iili.io/qjAjZAJ.png',
        calories: 5,
        status: 'Available'
      },
      {
        id: 'fil_col_mish',
        name: 'Colombia Mish Mish',
        tastingNotes: 'Apricot Jam, Raspberry, Lychee',
        ingredients: 'Pour-over brewing method',
        price: '57',
        image: 'https://iili.io/qjAjZAJ.png',
        calories: 5,
        status: 'Available'
      },
      {
        id: 'fil_col_black',
        name: 'Panamá Cordillera Gesha',
        tastingNotes: 'Cantaloupe, Honey, Berries, Lemongrass',
        ingredients: 'Pour-over brewing method',
        price: '65',
        image: 'https://iili.io/qjAjZAJ.png',
        calories: 5,
        status: 'Available'
      },
      {
        id: 'fil_decaf',
        name: 'Colombia Sweet Dreams Decaf',
        tastingNotes: 'Passion fruit cheesecake, Milk chocolate, Molasses',
        ingredients: 'Passion fruit cheesecake, Milk chocolate, Molasses',
        price: '38',
        image: 'https://iili.io/qjAjZAJ.png',
        calories: 5,
        status: 'Available'
      }
    ]
  },
  {
    id: 'cold-brew',
    title: 'Cold Brew',
    items: [
      {
        id: 'cb_eth',
        name: 'Ethiopia Cold Brew',
        origin: 'Ethiopia',
        tastingNotes: 'Apricot, Pear, Honey',
        ingredients: 'Slow-steeped cold water extraction for 12+ hours.',
        price: '38',
        image: 'https://iili.io/fUAAQ07.png',
        calories: 10
      },
      {
        id: 'cb_col',
        name: 'Colombia Cold Brew',
        origin: 'Colombia',
        tastingNotes: 'Apricot Jam, Raspberry, Lychee',
        ingredients: 'Slow-steeped cold water extraction for 12+ hours.',
        price: '38',
        image: 'https://iili.io/qKYaxff.png',
        calories: 10
      },
      {
        id: 'cb_ken',
        name: 'Kenya Cold Brew',
        origin: 'Kenya',
        tastingNotes: 'Wild Cherry, Brown Sugar, Raisins',
        ingredients: 'Slow-steeped cold water extraction for 12+ hours.',
        price: '38',
        image: 'https://iili.io/qjc71DB.png',
        calories: 10
      }
    ]
  },
  {
    id: 'filter-taps',
    title: 'Filter Taps ',
    items: [
      {
        id: 'tap_col_straw',
        name: 'Colombia Strawberry',
        ingredients: '[ TAP]  Strawberry jam – honey - milk chocolates ',
        price: '36',
        image: 'https://iili.io/qKkcmJa.png',
        calories: 5
      },
      {
        id: 'tap_cuban',
        name: 'Cuban Cigar',
        ingredients: '[TAP] Caramel popcorn - fresh tobaco - Deep Earthy Undertones',
        price: '41',
        image: 'https://iili.io/qKkRw5Q.png',
        calories: 5
      },
      {
        id: 'tap_eth_rog',
        name: 'Ethiopia Rogisha',
        ingredients: '[TAP] apricots – pear – honey ',
        price: '36',
        image: 'https://iili.io/qKka1vj.png',
        calories: 5
      }
    ]
  },
  {
    id: 'espresso',
    title: 'Espresso',
    description: 'Our espresso selection features distinct profiles:\n\n• BLIND 469\n• Amazonic Soul\n• Yemen - Sharki Haraz',
    items: [
      {
        id: 'esp1',
        name: 'CARTEL Espresso',
        ingredients: '',
        price: '24',
        image: 'https://iili.io/fUCfVDl.jpg',
        calories: 5,
        customizations: [
          {
            id: 'bean_choice',
            title: 'Bean Choice',
            options: ESPRESSO_BEAN_OPTIONS
          }
        ]
      },
      {
        id: 'esp_cap',
        name: 'CARTEL Cappuccino',
        ingredients: '',
        price: '28',
        image: 'https://iili.io/q2uiIPj.jpg',
        calories: 120,
        disableTemperature: true,
        customizations: [
          {
            id: 'bean_choice',
            title: 'Bean Choice',
            options: ESPRESSO_BEAN_OPTIONS
          },
          {
            id: 'milk_choice',
            title: 'Milk Choice',
            options: [
              { id: 'milk_std', name: 'Standard', price: 0 },
              { id: 'milk_alm', name: 'Almond Milk', price: 5 },
              { id: 'milk_oat', name: 'Oat Milk', price: 5 },
              { id: 'milk_coc', name: 'Coconut Milk', price: 5 },
              { id: 'milk_lf', name: 'Lactose Free', price: 2 }
            ]
          }
        ]
      },
      {
        id: 'esp2',
        name: 'CARTEL Latte',
        ingredients: '',
        price: '27',
        image: 'https://iili.io/qwbtDVn.jpg',
        calories: 140,
        customizations: [
          {
            id: 'bean_choice',
            title: 'Bean Choice',
            options: ESPRESSO_BEAN_OPTIONS
          },
          {
            id: 'milk_choice',
            title: 'Milk Choice',
            options: [
              { id: 'milk_std', name: 'Standard', price: 0 },
              { id: 'milk_alm', name: 'Almond Milk', price: 5 },
              { id: 'milk_oat', name: 'Oat Milk', price: 5 },
              { id: 'milk_coc', name: 'Coconut Milk', price: 5 },
              { id: 'milk_lf', name: 'Lactose Free', price: 2 }
            ]
          }
        ]
      },
      {
        id: 'esp3',
        name: 'CARTEL Macchiato',
        ingredients: '',
        price: '26',
        image: 'https://iili.io/q2usfqJ.jpg',
        calories: 30,
        customizations: [
          {
            id: 'bean_choice',
            title: 'Bean Choice',
            options: ESPRESSO_BEAN_OPTIONS
          }
        ]
      },
      {
        id: 'esp4',
        name: 'CARTEL Cortado',
        ingredients: '',
        price: '26',
        image: 'https://iili.io/q2uiNDX.jpg',
        calories: 80,
        disableTemperature: true,
        customizations: [
          {
            id: 'bean_choice',
            title: 'Bean Choice',
            options: ESPRESSO_BEAN_OPTIONS
          },
          {
            id: 'milk_choice',
            title: 'Milk Choice',
            options: [
              { id: 'milk_std', name: 'Standard', price: 0 },
              { id: 'milk_alm', name: 'Almond Milk', price: 5 },
              { id: 'milk_oat', name: 'Oat Milk', price: 5 },
              { id: 'milk_coc', name: 'Coconut Milk', price: 5 },
              { id: 'milk_lf', name: 'Lactose Free', price: 2 }
            ]
          }
        ]
      },
      {
        id: 'esp5',
        name: 'CARTEL Piccolo',
        ingredients: '',
        price: '25',
        image: 'https://iili.io/q2uQQWX.jpg',
        calories: 60,
        disableTemperature: true,
        customizations: [
          {
            id: 'bean_choice',
            title: 'Bean Choice',
            options: ESPRESSO_BEAN_OPTIONS
          },
          {
            id: 'milk_choice',
            title: 'Milk Choice',
            options: [
              { id: 'milk_std', name: 'Standard', price: 0 },
              { id: 'milk_alm', name: 'Almond Milk', price: 5 },
              { id: 'milk_oat', name: 'Oat Milk', price: 5 },
              { id: 'milk_coc', name: 'Coconut Milk', price: 5 },
              { id: 'milk_lf', name: 'Lactose Free', price: 2 }
            ]
          }
        ]
      },
      {
        id: 'esp6',
        name: 'CARTEL Flat White',
        ingredients: '',
        price: '27',
        image: 'https://iili.io/q2usTzX.jpg',
        calories: 130,
        disableTemperature: true,
        customizations: [
          {
            id: 'bean_choice',
            title: 'Bean Choice',
            options: ESPRESSO_BEAN_OPTIONS
          },
          {
            id: 'milk_choice',
            title: 'Milk Choice',
            options: [
              { id: 'milk_std', name: 'Standard', price: 0 },
              { id: 'milk_alm', name: 'Almond Milk', price: 5 },
              { id: 'milk_oat', name: 'Oat Milk', price: 5 },
              { id: 'milk_coc', name: 'Coconut Milk', price: 5 },
              { id: 'milk_lf', name: 'Lactose Free', price: 2 }
            ]
          }
        ]
      },
      {
        id: 'esp7',
        name: 'CARTEL Americano',
        ingredients: '',
        price: '25',
        image: 'https://iili.io/q2u6jgp.jpg',
        calories: 5,
        customizations: [
          {
            id: 'bean_choice',
            title: 'Bean Choice',
            options: ESPRESSO_BEAN_OPTIONS
          }
        ]
      },
      {
        id: 'esp8',
        name: 'CARTEL Spanish Piccolo',
        ingredients: '',
        price: '28',
        image: 'https://iili.io/q2usMXe.jpg',
        calories: 90,
        disableTemperature: true,
        customizations: [
          {
            id: 'bean_choice',
            title: 'Bean Choice',
            options: ESPRESSO_BEAN_OPTIONS
          },
          {
            id: 'milk_choice',
            title: 'Milk Choice',
            options: [
              { id: 'milk_std', name: 'Standard', price: 0 },
              { id: 'milk_alm', name: 'Almond Milk', price: 5 },
              { id: 'milk_oat', name: 'Oat Milk', price: 5 },
              { id: 'milk_coc', name: 'Coconut Milk', price: 5 },
              { id: 'milk_lf', name: 'Lactose Free', price: 2 }
            ]
          }
        ]
      },
      {
        id: 'esp9',
        name: 'CARTEL Spanish Latte',
        ingredients: '',
        price: '32',
        image: 'https://iili.io/q2uLKT7.jpg',
        calories: 220,
        customizations: [
          {
            id: 'bean_choice',
            title: 'Bean Choice',
            options: ESPRESSO_BEAN_OPTIONS
          },
          {
            id: 'milk_choice',
            title: 'Milk Choice',
            options: [
              { id: 'milk_std', name: 'Standard', price: 0 },
              { id: 'milk_alm', name: 'Almond Milk', price: 5 },
              { id: 'milk_oat', name: 'Oat Milk', price: 5 },
              { id: 'milk_coc', name: 'Coconut Milk', price: 5 },
              { id: 'milk_lf', name: 'Lactose Free', price: 2 }
            ]
          }
        ]
      },
      {
        id: 'esp10',
        name: 'CARTEL Spanish Cortado',
        ingredients: '',
        price: '29',
        image: 'https://iili.io/q2usMXe.jpg',
        calories: 140,
        disableTemperature: true,
        customizations: [
          {
            id: 'bean_choice',
            title: 'Bean Choice',
            options: ESPRESSO_BEAN_OPTIONS
          },
          {
            id: 'milk_choice',
            title: 'Milk Choice',
            options: [
              { id: 'milk_std', name: 'Standard', price: 0 },
              { id: 'milk_alm', name: 'Almond Milk', price: 5 },
              { id: 'milk_oat', name: 'Oat Milk', price: 5 },
              { id: 'milk_coc', name: 'Coconut Milk', price: 5 },
              { id: 'milk_lf', name: 'Lactose Free', price: 2 }
            ]
          }
        ]
      },
            {
        id: 'esp11',
        name: 'CARTEL Babyccino',
        ingredients: '',
        price: '11',
        image: 'https://iili.io/q2uPvaV.jpg',
        calories: 90
      },


    ]
  },
  {
    id: 'healthy-bowls',
    title: 'Healthy Bowls',
    items: [
      { 
        id: 'bw1', 
        name: 'Pure Açaí Bowl', 
        ingredients: 'Açaí berry, peanut butter, mango, kiwi, dragon fruit, banana, strawberries, blueberries, passion fruit.', 
        price: '48',
        image: 'https://iili.io/fvyuItf.jpg',
        calories: 450
      },
      { 
        id: 'bw2', 
        name: 'Overnight Oats', 
        ingredients: 'Oats are soaked in oat milk with mixed-berry compote, peanut butter, and cashews.', 
        price: '42',
        image: 'https://iili.io/fvyqMn1.jpg',
        calories: 380
      },
      { 
        id: 'bw3', 
        name: 'Chia Bowl', 
        ingredients: 'Coconut chia pudding, Greek yogurt, strawberries, blackberries, raspberries, blueberries, mixed-berry compote, sesame toil, whipped chocolate, and shaved dark chocolate with an organic honey drizzle.', 
        price: '38',
        image: 'https://iili.io/fvyC2gs.jpg',
        calories: 320
      },
      { 
        id: 'bw4', 
        name: 'Exotic Sunrise', 
        ingredients: 'Coconut yogurt, homemade granola, passion fruit, mango slices, exotic gel, and lime zest.', 
        price: '42',
        image: 'https://iili.io/fvyol0F.jpg',
        calories: 360
      },
      { 
        id: 'bw5', 
        name: 'Apple Cinnamon Muesli', 
        ingredients: 'Cinnamon yogurt, granola, apple crumble, soft caramel, berry compote, honeycomb, raspberries, blueberries, blackberries, apple crisp, mixed nuts, and organic honey drizzle.', 
        price: '42',
        image: 'https://iili.io/fvyxG49.jpg',
        calories: 410
      },
      { 
        id: 'bw6', 
        name: 'CARTEL Banana, Dates & Yogurt', 
        ingredients: 'Earl Grey Chia, fresh banana, sweet dates, creamy yogurt.', 
        price: '38',
        image: 'https://iili.io/q2j9Vwu.png',
        calories: 350
      },
      { 
        id: 'bw7', 
        name: 'CARTEL Matcha Chia Pudding', 
        ingredients: 'Premium Matcha infused chia pudding, coconut milk, seasonal toppings.', 
        price: '38',
        image: 'https://iili.io/q2hpnov.png',
        calories: 330
      }
    ]
  },
  {
    id: 'signature-drinks',
    title: 'Signature drink',
    items: [
      {
        id: 'sig1',
        name: 'CARTEL RUSH HOUR',
        ingredients: '',
        price: '33',
        image: 'https://iili.io/q2urMyF.jpg',
        disableTemperature: true,
        calories: 180,
        customizations: [
          {
            id: 'rh_sweet',
            title: 'Sweetness',
            options: [
              { id: 'rh_std', name: 'Standard', price: 0 },
              { id: 'rh_xtra', name: 'Extra Sweet', price: 2 }
            ]
          }
        ]
      },
       {
        id: 'sig8',
        name: 'CARTEL Tanzanian Hot Chocolate',
        ingredients: 'Single origin Tanzanian cacao, rich and velvety steamed milk. MARSHMELLO, chocholate stick',
        price: '32',
        image: 'https://iili.io/q2u8XqB.jpg',
        calories: 290
      },
         {
        id: 'sig3',
        name: 'Matcha Cloud',
        ingredients: 'matcha cream , matcha dust. coconut water',
        price: '38',
        image: 'https://iili.io/q2ugtIa.png',
        calories: 220
      },
      {
        id: 'sig_espresso_shake',
        name: 'Espresso Shake',
        ingredients: 'Double shot espresso blended with vanilla ice cream',
        price: '40',
        image: 'https://iili.io/q2uUQV4.jpg',
        calories: 310,
        disableTemperature: true,
        customizations: [
          {
            id: 'milk_choice',
            title: 'Milk Choice',
            options: [
              { id: 'milk_full', name: 'Full Cream', price: 0 },
              { id: 'milk_low', name: 'Low Fat', price: 0 },
              { id: 'milk_oat', name: 'Oat Milk', price: 5 },
              { id: 'milk_alm', name: 'Almond Milk', price: 5 }
            ]
          }
        ]
      },
      {
        id: 'sig_matcha_shake',
        name: 'Matcha Shake',
        ingredients: 'Premium matcha blended with vanilla ice cream',
        price: '40',
        image: 'https://iili.io/q2ugGzG.jpg',
        calories: 320,
        disableTemperature: true,
        customizations: [
          {
            id: 'milk_choice',
            title: 'Milk Choice',
            options: [
              { id: 'milk_full', name: 'Full Cream', price: 0 },
              { id: 'milk_low', name: 'Low Fat', price: 0 },
              { id: 'milk_oat', name: 'Oat Milk', price: 5 },
              { id: 'milk_alm', name: 'Almond Milk', price: 5 }
            ]
          }
        ]
      },

      {
        id: 'sig_baby_shark',
        name: 'Baby Shark',
        ingredients: 'A fun, colorful signature drink for kids and the young at heart',
        price: '26',
        image: 'https://iili.io/q2uUxn4.jpg',
        calories: 240,
        tags: ['Kids Favorite', 'Signature'],
        disableTemperature: true
      },
      {
        id: 'sig_eg',
        name: 'Earl Grey Tea',
        ingredients: '',
        price: '24',
        image: 'https://iili.io/qqMG13b.jpg',
        calories: 5,
        customizations: [
           {
            id: 'tea_add_eg',
            title: 'Add-ons',
            options: [
              { id: 'opt_std_eg', name: 'Standard', price: 0 },
              { id: 'opt_mint_eg', name: 'Mint leaves', price: 0 },
              { id: 'opt_honey_eg', name: 'Honey', price: 2 },
              { id: 'opt_lemon_eg', name: 'Lemon slice', price: 0 }
            ]
          }
        ]
      },
      {
        id: 'sig_green_tea',
        name: 'Mao Feng Green Tea',
        ingredients: 'Premium Green Tea',
        price: '24',
        image: 'https://iili.io/qqMGJ3J.jpg',
        calories: 5,
        customizations: [
           {
            id: 'tea_add_gt',
            title: 'Add-ons',
            options: [
              { id: 'opt_std_gt', name: 'Standard', price: 0 },
              { id: 'opt_mint_gt', name: 'Mint leaves', price: 0 },
              { id: 'opt_honey_gt', name: 'Honey', price: 2 },
              { id: 'opt_lemon_gt', name: 'Lemon slice', price: 0 }
            ]
          }
        ]
      },
      {
        id: 'sig2',
        name: 'Matcha Latte',
        ingredients: 'Premium Matcha green tea. choose your milk.',
        price: '28',
        image: 'https://iili.io/q2utJ3J.jpg',
        calories: 180,
        variants: [
          { id: 'm_lf', name: 'Lactose Free', price: 35, notes: 'Easy on digestion' },
          { id: 'm_ff', name: 'Full Fat', price: 33, notes: 'Creamy and rich' },
          { id: 'm_low', name: 'Low Fat', price: 33, notes: 'Light and balanced' },
          { id: 'm_coc', name: 'Coconut Milk', price: 38, notes: 'Sweet tropical notes' },
          { id: 'm_oat', name: 'Oat Milk', price: 38, notes: 'Plant-based favorite' },
          { id: 'm_alm', name: 'Almond Milk', price: 38, notes: 'Nutty and light' }
        ]
      },
     
    ]
  },
  {
    id: 'from-our-bakery',
    title: 'BAKE GOODS',
    items: [
      { 
        id: 'fob_zaatar', 
        name: 'Zaatar & Labneh Muffin', 
        ingredients: 'Flaky croissant dough muffin filled with tangy fresh labneh, topped with aromatic organic zaatar, olive oil, and a pinch of sea salt.', 
        price: '22', 
        image: 'https://i.postimg.cc/1znQ9BYK/zaatar_labnieh.jpg',
        calories: 340
      },
      { 
        id: 'fob_burrata', 
        name: 'Burrata Pizza', 
        ingredients: 'Crisp round croissant base layered with rich tomato sauce, creamy fresh burrata, and basil, finished with chili flakes, smoked salt, and organic olive oil.', 
        price: '26', 
        image: 'https://i.postimg.cc/y8NKGshd/buratta_pizza.jpg',
        calories: 410
      },
      { 
        id: 'fob_turkey', 
        name: 'Turkey & Cheese Danish', 
        ingredients: 'Buttery Danish croissant dough wrapped around savory smoked turkey and sharp cheddar, encrusted with mixed sesame seeds.', 
        price: '20', 
        image: 'https://i.postimg.cc/PqpjtyFZ/turkey_danish.jpg',
        calories: 310
      },
      { 
        id: 'fob_potato', 
        name: 'Potato Truffle', 
        ingredients: 'Savory round croissant filled with caramelized onions and creamy potato dauphinois, topped with melted Comté cheese, truffle oil, smoked salt, and fresh chives.', 
        price: '26', 
        image: 'https://iili.io/q2u4YAX.jpg', 
        calories: 380
      },
      { 
        id: 'fob_almond', 
        name: 'Almond Croissant', 
        ingredients: 'Golden croissant filled with rich almond frangipane, topped with toasted almond flakes and a dusting of icing sugar.', 
        price: '22', 
        image: 'https://i.postimg.cc/QdMDzhgZ/almond.png',
        calories: 380
      },
      { 
        id: 'fob_choc', 
        name: 'Chocolate Croissant', 
        ingredients: 'Classic buttery croissant filled with premium Valrhona chocolate batons.', 
        price: '17', 
        image: 'https://iili.io/q2A7dsp.png',
        calories: 320
      },
      { 
        id: 'd_1000', 
        name: 'Black Forest', 
        ingredients: 'A decadent pastry filled with tart dark cherry compote and a light, whipped white chocolate ganache, finished with chocolate shavings.', 
        price: '28', 
        image: 'https://iili.io/q2h5ddP.png',
        calories: 440
      },
      { 
        id: 'fob_cardamom', 
        name: 'Cardamom Bun', 
        ingredients: 'Cruffin-shaped croissant dough knotted with aromatic cardamom spice, baked to a golden crisp, and tossed in vanilla sugar for a buttery, spiced finish.', 
        price: '22', 
        image: 'https://iili.io/q2AKLIn.png', 
        calories: 280
      },
    ]
  },
  {
    id: 'juices',
    title: 'Juices',
    items: [
      { id: 'juice_green', name: 'Green Apple', price: '24', image: 'https://iili.io/qv5Opwu.jpg', ingredients: 'Freshly squeezed green apple juice', calories: 120 },
      { id: 'juice_orange', name: 'Orange', price: '24', image: 'https://iili.io/qv5W3mv.jpg', ingredients: 'Freshly squeezed orange juice', calories: 110 },
      { id: 'juice_carrot', name: 'Carrot', price: '24', image: 'https://iili.io/qv5h6gt.jpg', ingredients: 'Freshly squeezed carrot juice', calories: 90 },
      { id: 'juice_water', name: 'Watermelon', price: '24', image: 'https://iili.io/qv5Tqc7.jpg', ingredients: 'Freshly squeezed watermelon juice', calories: 80 },
    ]
  },
  {
    id: 'tea',
    title: 'Signature drink',
    items: [
      { id: 'tea_black', name: 'Black Tea', price: '24', image: 'https://iili.io/qqX7BhF.jpg', ingredients: 'Premium black tea', calories: 5 },
      { id: 'tea_green', name: 'Green Tea', price: '24', image: 'https://iili.io/qqMGJ3J.jpg', ingredients: 'Premium green tea', calories: 5 },
      { id: 'tea_rush', name: 'Rush Hour Berry', price: '24', image: 'https://iili.io/q2urMyF.jpg', ingredients: 'Berry infused tea', calories: 5 },
    ]
  }
];

// Standard Menu Order as requested
const createStandardMenu = (): MenuCategory[] => {
  const order = [
    'desserts',
    'filter',
    'filter-taps',
    'espresso',
    'healthy-bowls',
    'signature-drinks',
    'from-our-bakery'
  ];
  
  const menu = JSON.parse(JSON.stringify(BASE_MENU));
  // Filter and sort based on the requested order
  return order
    .map(id => menu.find((cat: MenuCategory) => cat.id === id))
    .filter((cat: MenuCategory | undefined): cat is MenuCategory => !!cat);
};

// Dubai Mirdif Specific Menu
const createMirdifMenu = (): MenuCategory[] => {
  // Helper to find item in BASE_MENU
  const findItem = (catId: string, itemId: string) => {
    const cat = BASE_MENU.find(c => c.id === catId);
    return cat?.items.find(i => i.id === itemId);
  };

  // Custom Espresso Category for Mirdif
  const baseEspresso = BASE_MENU.find(c => c.id === 'espresso');
  const mirdifEspresso = JSON.parse(JSON.stringify(baseEspresso));

  mirdifEspresso.title = 'MIRDIF ESPRESSO SELECTION';
  mirdifEspresso.headerStyle = {
    backgroundColor: 'transparent',
    color: '#fbbf24', // Gold
    padding: '1rem 0',
    textAlign: 'center',
    fontFamily: 'serif',
    letterSpacing: '0.2em',
    fontSize: '2.5rem',
    borderBottom: 'none'
  };

  const mirdifBeans = [
    {
      id: 'bean_469',
      name: 'THE 469 BLAND',
      notes: 'White Chocolate, Apricot Jam, Jaggery',
      price: 0,
      isNew: false
    },
    {
      id: 'bean_coconutella',
      name: 'COCONUTELLA',
      notes: 'Coconut Cream, Milk Chocolate, Toffee Caramel',
      price: 5,
      isNew: false
    },
    {
      id: 'bean_kenya',
      name: 'KENYA GICHATHA',
      notes: 'Caramel, Cacao Nibs, Black Cherry',
      price: 1,
      isNew: false
    },
    {
      id: 'bean_colombia_strawberry',
      name: 'Colombia - Strawberry',
      notes: 'Strawberry Jam, Honey, Milk Chocolates',
      price: 5,
      isNew: true,
      status: 'Coming Soon'
    },
    {
      id: 'bean_decaf',
      name: 'SWEET DREAMS DECAF',
      notes: 'Passion fruit cheesecake, Milk chocolate, Molasses',
      price: 0,
      isNew: false,
      isDecaf: true
    }
  ];

  mirdifEspresso.beanSelection = mirdifBeans;
  mirdifEspresso.description = '';

  // Update all items to use these beans
  mirdifEspresso.items.forEach((item: any) => {
    const beanCustomization = item.customizations?.find((c: any) => c.id === 'bean_choice');
    if (beanCustomization) {
      beanCustomization.options = mirdifBeans.map((b: any) => ({
        id: b.id,
        name: b.name,
        price: b.price,
        description: b.notes,
        status: b.status
      }));
    }
    item.branch = 'Mirdif';
  });

  return [
    mirdifEspresso,
    {
      id: 'filter-coffee',
      title: 'Filter Coffee',
      items: [
        { 
          id: 'fil_ethiopia_g_0', 
          name: 'Ethiopia Guji-Rogicha',
          tastingNotes: 'Apricot, Pear, Honey.', 
          price: '38', 
          image: 'https://iili.io/qjAjZAJ.png', 
          ingredients: 'Pour-over brewing method', 
          calories: 5,
          branch: 'Mirdif',
          status: 'Available'
        },
        { 
          id: 'fil_kenya_kiri_1', 
          name: 'Kenya Kirimara',
          tastingNotes: 'Wild Cherry, Brown Sugar, Raisins.', 
          price: '46', 
          image: 'https://iili.io/qjAjZAJ.png', 
          ingredients: 'Pour-over brewing method', 
          calories: 5,
          branch: 'Mirdif',
          status: 'Available'
        },
        { 
          id: 'fil_colombia_b_2', 
          name: 'Colombia Blackberry',
          tastingNotes: 'Blackberry Soda, Cacao Nibs, Karkade.', 
          price: '57', 
          image: 'https://iili.io/qjAjZAJ.png', 
          ingredients: 'Pour-over brewing method', 
          calories: 5,
          branch: 'Mirdif',
          status: 'Available'
        },
        { 
          id: 'fil_colombia_m_3', 
          name: 'Colombia Mish Mish',
          tastingNotes: 'Apricot Jam, Raspberry, Lychee.', 
          price: '57', 
          image: 'https://iili.io/qjAjZAJ.png', 
          ingredients: 'Pour-over brewing method', 
          calories: 5,
          branch: 'Mirdif',
          status: 'Available'
        },
        { 
          id: 'fil_colombia_s_4', 
          name: 'Colombia Sweet Dreams Decaf',
          tastingNotes: 'Passion fruit cheesecake, Milk chocolate, Molasses', 
          price: '38', 
          image: 'https://iili.io/qjAjZAJ.png', 
          ingredients: 'Pour-over brewing method', 
          calories: 5,
          branch: 'Mirdif',
          status: 'Available'
        }
      ]
    },
    {
      id: 'eggs-more',
      title: 'Eggs & More',
      items: [
        { id: 'egg_avo', name: 'AVOCADO TOAST', price: '45', image: 'https://iili.io/qqGqaMg.jpg', ingredients: 'Sourdough with smashed avocado, whipped feta, Pico de Gallo, pine nuts, parmesan, coriander, dill leaves, mix sesame seeds, lime wedges, chili flakes, dukka, and poached egg.', calories: 380 },
        { id: 'egg_ben', name: 'EGG BENEDICT', price: '46', image: 'https://iili.io/qqGfw3x.jpg', ingredients: 'English muffins with cream cheese, tomato sauce, smoky bacon, poached eggs, and miso hollandaise.', calories: 450 },
        { id: 'egg_truffle', name: 'Truffled Scrambled Egg', price: '54', image: 'https://iili.io/qqGqpDP.jpg', ingredients: 'Creamy scrambled eggs on brioche slice with truffle mayo, truffle oil, and shaved black truffle.', calories: 420 },
        { id: 'egg_cro', name: 'Egg And Avocado Croissant', price: '38', image: 'https://iili.io/qqXARp9.jpg', ingredients: 'Plain croissant, cream cheese mix, smashed avocado, tomato sauce, poached eggs sprinkled with pumpkin seeds and mix sesame seeds.', calories: 490 },
        { id: 'egg_nduja', name: 'TORNADO CHILLI EGG', price: '52', image: 'https://iili.io/qqGClvR.jpg', ingredients: 'garlic and butter pita bread, creamy mayo, mama’s sauce, smoked yogurt, spicy beef nduja, microgreens, and a drizzle of smoked oil.', calories: 450 },
        { id: 'egg_big', name: 'BIG BREAKFAST', price: '65', image: 'https://iili.io/qqVHZ1R.png', ingredients: 'hash brown potatoes, red beans, sautéed portobello mushrooms, wagyu beef sausage, smoked veal bacon, roasted vine tomatoes, two sunny side up eggs on a slice of brioche bread, (eggs your way: scrambled, poached, sunny side up).', calories: 850 },
        { id: 'egg_aussie', name: 'Aussie pulled beef benedict', price: '58', image: 'https://iili.io/qqMpPzG.png', ingredients: 'brioche bun with white barbecue sauce, pulled beef, 2 poached eggs, miso hollandaise, crispy onions & spring roll, chives.', calories: 580 },
        { id: 'egg_turkish', name: 'Turkish Egg', price: '46', image: 'https://iili.io/qqGBwmB.jpg', ingredients: 'homemade tomato jam, poached eggs, mint pesto, chilly butter served with 2 slices of toasted zaatar sourdough.', calories: 400 },
      ].filter(Boolean)
    },
    {
      id: 'signature-drinks',
      title: 'Signature drink',
      items: [
        findItem('signature-drinks', 'sig3')!, // Matcha cloud
        findItem('signature-drinks', 'sig_espresso_shake')!, // Espresso shake
        { ...findItem('espresso', 'esp11')!, name: 'Babycino' }, // Babycino
        findItem('signature-drinks', 'sig_baby_shark')!, // Baby shark
        findItem('signature-drinks', 'sig_matcha_shake')!, // Matcha shake
        findItem('signature-drinks', 'sig8')!, // Tanzanian hot chocolate
        findItem('tea', 'tea_black')!, // Black tea
        findItem('tea', 'tea_green')!, // Green tea
        { ...findItem('tea', 'tea_rush')!, name: 'Hot Rush Hour', price: '33', image: 'https://iili.io/qlbAzS2.jpg' }, // Hot Rush Hour
        { id: 'sig_cartel_rush', name: 'CARTEL Rush Hou', price: '33', image: 'https://iili.io/q2urMyF.jpg', ingredients: '', calories: 0 },
        { 
          id: 'sig_matcha_latte', 
          name: 'MATCHA LATTE', 
          price: '26', 
          image: 'https://iili.io/q2utJ3J.jpg', 
          ingredients: '', 
          calories: 0,
          customizations: [
            {
              id: 'milk_choice',
              name: 'Milk Choice',
              type: 'single',
              options: [
                { id: 'milk_full', name: 'Full Fat Milk', price: 0 },
                { id: 'milk_skim', name: 'Skimmed Milk', price: 0 },
                { id: 'milk_oat', name: 'Oat Milk', price: 4 },
                { id: 'milk_almond', name: 'Almond Milk', price: 4 },
                { id: 'milk_coconut', name: 'Coconut Milk', price: 4 },
                { id: 'milk_soya', name: 'Soya Milk', price: 4 }
              ]
            }
          ]
        },
      ].filter(Boolean)
    },
    {
      id: 'desserts',
      title: 'Desserts',
      items: [
        findItem('desserts', 'MUHALABIYA')!, // Muhalabiya
        findItem('desserts', 'd_aseeda')!, // Aseeda
        findItem('desserts', 'd_san_seb')!, // San Sebastián
        { ...findItem('desserts', 'd_crepe_rolls')!, status: 'Available' }, // Crepe Rolls
        { id: 'd_honey', name: 'Honeycake', price: '39.20', image: 'https://iili.io/qqXWIea.png', ingredients: 'Layers of honey sponge and cream', calories: 450 }, // Honeycake
        { id: 'd_tiramisu', name: 'Tiramisu', price: '39.20', image: 'https://iili.io/qnnTv0G.png', ingredients: 'Classic Italian dessert with coffee', calories: 400 }, // Tiramisu
        findItem('desserts', 'STICKY DATE')!, // Sticky dates
        findItem('desserts', 'd_banana_pud')!, // Banana pudding
        { id: 'd_peanut', name: 'Peanut Butter Choco Tart', price: '39.20', image: 'https://iili.io/qqXGUIR.png', ingredients: 'Rich chocolate tart with peanut butter', calories: 480 }, // Peanut butter choco tart
        findItem('desserts', 'd_vanilla_pud')!, // Vanilla pudding
      ].filter(Boolean)
    },
    {
      id: 'baked-items',
      title: 'Baked Items',
      items: [
        findItem('from-our-bakery', 'fob_choc')!, // Chocolate croissant
        findItem('from-our-bakery', 'fob_turkey')!, // Turkey and cheese
        { id: 'bg_plain', name: 'Plain Croissant', price: '18', image: 'https://iili.io/qqX0EeR.png', ingredients: 'Classic butter croissant', calories: 280 }, // Plain croissant
        findItem('from-our-bakery', 'fob_almond')!, // Almond croissant
        { id: 'bg_3cheese', name: '3 Cheese Croissant', price: '24', image: 'https://iili.io/qqECJAN.jpg', ingredients: 'Cheddar, mozzarella, and parmesan', calories: 350 }, // 3 cheese croissant
        findItem('from-our-bakery', 'fob_burrata')!, // Burrata pizza
        findItem('from-our-bakery', 'fob_zaatar')!, // Zaatar and labneh
        findItem('desserts', 'd_choc_chip')!, // Chocolate chip cookies
      ].filter(Boolean)
    },
    {
      id: 'greens',
      title: 'Greens',
      items: [
        { id: 'sal_caesar', name: 'Caesar Salad', price: '42', image: 'https://iili.io/qqE6hg4.jpg', ingredients: 'little gem lettuce, creaser dressing, crouton, parmesan cheese, crushed pistachio (add Ons: poached egg, bacon or chicken).', calories: 350 },
      ].filter(Boolean)
    },
    {
      id: 'sandwiches',
      title: 'Sandwiches & Bagels',
      items: [
        { id: 'sw_bacon', name: 'Bacon & Egg Cheese Bun', price: '44', image: 'https://iili.io/qqEAsNj.jpg', ingredients: 'Brioche bun with crispy bacon, scrambled egg, cheddar cheese, kimchi ketchup.', calories: 550 },
        { id: 'sw_tuna', name: 'Tunacado', price: '38', image: 'https://iili.io/qqEgPdN.jpg', ingredients: "Joe's bread, pesto mayo, tuna mix, tomato slice, avocado slice.", calories: 480 },
        { id: 'sw_chick', name: 'Chicken & Avocado Croissant', price: '42', image: 'https://iili.io/qqG2qR1.png', ingredients: 'Grilled chicken, fresh avocado, croissant', calories: 520 },
        { id: 'sw_club', name: 'Cartel Club Sandwich', price: '38', image: 'https://iili.io/qqEPTpS.jpg', ingredients: 'White sliced bread, chipotle mayo, cheddar, lettuce, grilled chicken, bacon, fried egg, tomato slice.', calories: 600 },
        { id: 'sw_brisket', name: 'Brisket Blaze', price: '45', image: 'https://iili.io/qqERigt.jpg', ingredients: 'Brioche toast, chipotle mayo, cheddar, brisket, caramelized onion, jalapeño.', calories: 650 },
        { id: 'sw_shrimp', name: 'Shrimp Toast', price: '35', image: 'https://iili.io/qqEYw12.jpg', ingredients: 'Sautéed shrimp on brioche toast', calories: 420 },
        { id: 'sw_italian', name: 'Cold Cut Italian', price: '38', image: 'https://iili.io/qqEieVe.png', ingredients: 'White slice bread with pesto oil, fresh mozzarella, tomato slice, tartufo salami, chorizo, baby Rocca, sun-dried tomatoes, balsamic glaze, organic olive oil.', calories: 580 },
      ].filter(Boolean)
    },
    {
      id: 'fruits-gangs',
      title: 'Fruits and Gangs',
      items: [
        findItem('healthy-bowls', 'bw1')!, // Acai bowl
        findItem('healthy-bowls', 'bw3')!, // Chia pudding
        findItem('healthy-bowls', 'bw2')!, // Overnight oats
        findItem('healthy-bowls', 'bw5')!, // Apple and cinnamon muesli
        findItem('healthy-bowls', 'bw4')!, // Exotic sunrise
      ].filter(Boolean)
    },
    {
      id: 'juices',
      title: 'Juices',
      items: [
        findItem('juices', 'juice_green')!, // Green apple
        findItem('juices', 'juice_orange')!, // Orange
        findItem('juices', 'juice_carrot')!, // Carrot
        findItem('juices', 'juice_water')!, // Watermelon
      ].filter(Boolean)
    },
    {
      id: 'healthy-bar',
      title: 'Healthy Bar',
      items: [
        { id: 'sm_pit', name: 'Pitaya Smoothie', price: '42', image: 'https://iili.io/qqEH3rP.jpg', ingredients: 'Apple juice, lemon juice, pitaya, frozen pineapple, banana, and lemon electrolytes.', calories: 270, badge: 'NEW' },
        { id: 'sm_acai', name: 'Açaí Smoothie', price: '42', image: 'https://iili.io/qnBllxp.jpg', ingredients: 'Acai berry, banana, strawberry, peanut butter, coconut water, oat milk, and apple juice.', calories: 280, badge: 'NEW' },
        { id: 'sm_straw', name: 'Strawberry Glaze Smoothie', price: '42', image: 'https://iili.io/qq1mS5b.jpg', ingredients: 'Almond milk, frozen strawberries, bananas, dates, maple syrup, collagen, vanilla stevia, sea moss gel, strawberry sauce, and coconut cloud cream.', calories: 260, badge: 'NEW' },
        { id: 'sm_coc', name: 'Blue Cloud Smoothie', price: '42', image: 'https://iili.io/qqE9JUX.jpg', ingredients: 'Coconut milk, pineapple, banana, avocado, vanilla stevia, collagen, peanut butter, blue spirulina, and on top coconut cloud cream.', calories: 300, badge: 'NEW' },
      ].filter(Boolean)
    }
  ];
};

// Al Bateen Specific Menu
const createAlBateenMenu = (): MenuCategory[] => {
  // Helper to find item in BASE_MENU
  const findItem = (catId: string, itemId: string) => {
    const cat = BASE_MENU.find(c => c.id === catId);
    return cat?.items.find(i => i.id === itemId);
  };

  // Custom Espresso Category for Al Bateen
  const baseEspresso = BASE_MENU.find(c => c.id === 'espresso');
  const alBateenEspresso = JSON.parse(JSON.stringify(baseEspresso));

  alBateenEspresso.title = 'AL BATEEN ESPRESSO SELECTION';
  alBateenEspresso.headerStyle = {
    backgroundColor: 'transparent',
    color: '#fbbf24', // Gold
    padding: '1rem 0',
    textAlign: 'center',
    fontFamily: 'serif',
    letterSpacing: '0.2em',
    fontSize: '2.5rem',
    borderBottom: 'none'
  };

  // Define Custom Beans
  const alBateenBeans = [
    {
      id: 'bean_brazil_amazonic',
      name: 'BRAZIL AMAZONIC SOUL',
      notes: 'Dark Chocolate, Roasted Hazelnut, Caramel',
      price: 1,
      isNew: false
    },
    {
      id: 'bean_kenya_gichatha',
      name: 'KENYA GICHATHA',
      notes: 'Caramel, Cacao Nibs, Black Cherry',
      price: 1,
      isNew: true
    },
    {
      id: 'bean_colombia_strawberry',
      name: 'Colombia - Strawberry',
      notes: 'Strawberry Jam, Honey, Milk Chocolates',
      price: 5,
      isNew: true,
      status: 'Available'
    },
    {
      id: 'bean_colombia_decaf',
      name: 'COLOMBIA SWEET DREAMS (DECAF)',
      notes: 'Passion fruit cheesecake, Milk chocolate, Molasses',
      price: 0,
      isNew: false,
      isDecaf: true
    }
  ];

  alBateenEspresso.beanSelection = alBateenBeans;
  alBateenEspresso.description = '';

  // Update all items to use these beans
  alBateenEspresso.items.forEach((item: any) => {
    const beanCustomization = item.customizations?.find((c: any) => c.id === 'bean_choice');
    if (beanCustomization) {
      beanCustomization.options = alBateenBeans.map((b: any) => ({
        id: b.id,
        name: b.name,
        price: b.price,
        description: b.notes,
        status: b.status
      }));
    }
    item.branch = 'Al Bateen';
  });

  return [
    alBateenEspresso,
    {
      id: 'filter-coffee',
      title: 'Filter Coffee',
      items: [
        { 
          id: 'fil_gesha_key__0', 
          name: 'Gesha Key Lime Pie',
          tastingNotes: 'Orange Blossom, Lemongrass, Condensed Milk', 
          price: '48', 
          image: 'https://iili.io/qjAjZAJ.png', 
          ingredients: 'Pour-over brewing method', 
          calories: 5,
          branch: 'Al Bateen',
          status: 'Available'
        },
        { 
          id: 'fil_kenya_kiri_1', 
          name: 'Kenya Kirimara',
          tastingNotes: 'Wild Cherry, Brown Sugar, Raisins.', 
          price: '46', 
          image: 'https://iili.io/qjAjZAJ.png', 
          ingredients: 'Pour-over brewing method', 
          calories: 5,
          branch: 'Al Bateen',
          status: 'Available'
        },
        { 
          id: 'fil_colombia_m_2', 
          name: 'Colombia Mish Mish',
          tastingNotes: 'Apricot Jam, Raspberry, Lychee', 
          price: '57', 
          image: 'https://iili.io/qjAjZAJ.png', 
          ingredients: 'Pour-over brewing method', 
          calories: 5,
          branch: 'Al Bateen',
          status: 'Available'
        },
        { 
          id: 'fil_colombia_s_3', 
          name: 'Colombia Sweet Dreams Decaf',
          tastingNotes: 'Passion fruit cheesecake, Milk chocolate, Molasses', 
          price: '38', 
          image: 'https://iili.io/qjAjZAJ.png', 
          ingredients: 'Pour-over brewing method', 
          calories: 5,
          branch: 'Al Bateen',
          status: 'Available'
        },
        { 
          id: 'fil_panama_cor_4', 
          name: 'Panama Cordillera Gesha',
          tastingNotes: 'Cantaloupe, Honey, Berries, Lemongrass', 
          price: '65', 
          image: 'https://iili.io/qjAjZAJ.png', 
          ingredients: 'Pour-over brewing method', 
          calories: 5,
          branch: 'Al Bateen',
          status: 'Available'
        }
      ]
    },
    {
      id: 'cold-drip',
      title: 'Cold Drip',
      items: [
        { 
          id: 'cd_kenya', 
          name: 'Kenya Kirimara',
          tastingNotes: 'Wild Cherry, Brown Sugar, Raisins', 
          price: '38', 
          image: 'https://iili.io/qjAjZAJ.png', 
          ingredients: 'Cold drip brewing method', 
          calories: 5,
          status: 'Available'
        },
        { 
          id: 'cd_gesha', 
          name: 'Gesha Key Lime Pie',
          tastingNotes: 'Orange Blossom, Lemongrass, Condensed Milk', 
          price: '48', 
          image: 'https://iili.io/qjAjZAJ.png', 
          ingredients: 'Cold drip brewing method', 
          calories: 5 
        },
      ]
    },
    {
      id: 'fruits-grains',
      title: 'Fruits and Grains',
      items: [
        findItem('healthy-bowls', 'bw1')!,
        findItem('healthy-bowls', 'bw5')!,
        findItem('healthy-bowls', 'bw2')!,
        findItem('healthy-bowls', 'bw3')!,
        findItem('healthy-bowls', 'bw4')!,
      ].filter(Boolean)
    },
    {
      id: 'baked-goods',
      title: 'Baked Goods',
      items: [
        findItem('from-our-bakery', 'fob_turkey')!,
        findItem('from-our-bakery', 'fob_zaatar')!,
        findItem('from-our-bakery', 'fob_burrata')!,
        findItem('from-our-bakery', 'fob_almond')!,
        { id: 'bg_plain', name: 'Plain Croissant', price: '18', image: 'https://iili.io/qqX0EeR.png', ingredients: 'Classic butter croissant', calories: 280 },
        { id: 'bg_3cheese', name: '3 Cheese Croissant', price: '17', image: 'https://iili.io/qqECJAN.jpg', ingredients: 'Cheddar, mozzarella, and parmesan', calories: 350 },
        findItem('from-our-bakery', 'fob_choc')!,
      ].filter(Boolean)
    },
    {
      id: 'desserts',
      title: 'Desserts',
      items: [
        { ...findItem('desserts', 'd_crepe_rolls')!, status: 'Available' as const },
        findItem('desserts', 'd_aseeda')!,
        { id: 'd_honey', name: 'Honey Cake', price: '39.20', image: 'https://iili.io/qqXWIea.png', ingredients: 'Layers of honey sponge and cream', calories: 450 },
        { id: 'd_peanut', name: 'Peanut Choco Tart', price: '39.20', image: 'https://iili.io/qqXGUIR.png', ingredients: 'Rich chocolate tart with peanut butter', calories: 480 },
        findItem('desserts', 'd_san_seb')!,
        { id: 'd_tiramisu', name: 'Tiramisu Bowl', price: '39.20', image: 'https://iili.io/qnnTv0G.png', ingredients: 'Classic Italian dessert with coffee', calories: 400 },
        findItem('desserts', 'd_vanilla_pud')!,
        findItem('desserts', 'd_banana_pud')!,
        findItem('desserts', 'STICKY DATE')!,
        findItem('desserts', 'd_choc_chip')!,
      ].filter(Boolean)
    },
    {
      id: 'sandwiches',
      title: 'Sandwiches & Bagels',
      items: [
        { id: 'sw_bacon', name: 'Bacon & Egg Cheese Bun', price: '44', image: 'https://iili.io/qqEAsNj.jpg', ingredients: 'Brioche bun with crispy bacon, scrambled egg, cheddar cheese, kimchi ketchup.', calories: 550 },
        { id: 'sw_tuna', name: 'Tunacado', price: '38', image: 'https://iili.io/qqEgPdN.jpg', ingredients: "Joe's bread, pesto mayo, tuna mix, tomato slice, avocado slice.", calories: 480 },
        { id: 'sw_chick', name: 'Chicken & Avocado Croissant', price: '42', image: 'https://iili.io/qqG2qR1.png', ingredients: 'Grilled chicken, fresh avocado, croissant', calories: 520 },
        { id: 'sw_club', name: 'Cartel Club Sandwich', price: '38', image: 'https://iili.io/qqEPTpS.jpg', ingredients: 'White sliced bread, chipotle mayo, cheddar, lettuce, grilled chicken, bacon, fried egg, tomato slice.', calories: 600 },
        { id: 'sw_brisket', name: 'Brisket Blaze', price: '45', image: 'https://iili.io/qqERigt.jpg', ingredients: 'Brioche toast, chipotle mayo, cheddar, brisket, caramelized onion, jalapeño.', calories: 650 },
        { id: 'sw_italian', name: 'Cold Cut Italian', price: '38', image: 'https://iili.io/qqEieVe.png', ingredients: 'White slice bread with pesto oil, fresh mozzarella, tomato slice, tartufo salami, chorizo, baby Rocca, sun-dried tomatoes, balsamic glaze, organic olive oil.', calories: 580 },
        { id: 'sw_shrimp', name: 'Shrimp Toast', price: '35', image: 'https://iili.io/qqEYw12.jpg', ingredients: 'Sautéed shrimp on brioche toast', calories: 420 },
      ]
    },
    {
      id: 'eggs-more',
      title: 'Eggs & More',
      items: [
        { id: 'egg_avo', name: 'Avocado Toast', price: '45', image: 'https://iili.io/qqGqaMg.jpg', ingredients: 'Sourdough with smashed avocado, whipped feta, Pico de Gallo, pine nuts, parmesan, coriander, dill leaves, mix sesame seeds, lime wedges, chili flakes, dukka, and poached egg.', calories: 380 },
        { id: 'egg_ben', name: 'Eggs Benedict', price: '46', image: 'https://iili.io/qqGfw3x.jpg', ingredients: 'English muffins with cream cheese, tomato sauce, smoky bacon, poached eggs, miso hollandaise, chives.', calories: 450 },
        { id: 'egg_truffle', name: 'Scrambled Truffle Eggs', price: '54', image: 'https://iili.io/qqGqpDP.jpg', ingredients: 'Creamy scrambled eggs on brioche slice with truffle mayo, truffle oil, and shaved black truffle.', calories: 420 },
        { id: 'egg_turkish', name: 'Minted yogurt', price: '46', image: 'https://iili.io/qqGBwmB.jpg', ingredients: 'homemade tomato jam, poached eggs, mint pesto, chilly butter served with 2 slices of toasted zaatar sourdough.', calories: 400 },
        { id: 'egg_aussie', name: 'Aussie Benedict', price: '58', image: 'https://iili.io/qqMpPzG.png', ingredients: 'brioche bun with white barbecue sauce, pulled beef, 2 poached eggs, miso hollandaise, crispy onions & spring roll, chives.', calories: 580 },
        { id: 'egg_cro', name: 'EGG & AVO CROISSANT', price: '38', image: 'https://iili.io/qqXARp9.jpg', ingredients: 'Plain croissant, cream cheese mix, smashed avocado, tomato sauce, poached eggs sprinkled with pumpkin seeds and mix sesame seeds.', calories: 490 },
        { id: 'egg_nduja', name: 'Nduja Chili Scrambled Tornado Eggs', price: '52', image: 'https://iili.io/qqGClvR.jpg', ingredients: 'garlic and butter pita bread, creamy mayo, mama’s sauce, smoked yogurt, spicy beef nduja, microgreens, and a drizzle of smoked oil.', calories: 450 },
        { id: 'egg_big', name: 'Big Breakfast Homemade', price: '65', image: 'https://iili.io/qqVHZ1R.png', ingredients: 'hash brown potatoes, red beans, sautéed portobello mushrooms, wagyu beef sausage, smoked veal bacon, roasted vine tomatoes, two sunny side up eggs on a slice of brioche bread, (eggs your way: scrambled, poached, sunny side up).', calories: 850 },
      ]
    },
    {
      id: 'sweet-breakfast',
      title: 'SWEET BREAKFAST',
      items: [
        {
          id: 'sb_french_toast',
          name: 'FRENCH TOAST',
          price: '66',
          image: 'https://iili.io/q2ARzyG.jpg',
          ingredients: 'Caramelized and served with vanilla ice cream, almond streusel, whipped vanilla cream, and rhubarb compote (option: salted caramel, mix berries compote)',
        }
      ]
    },
    {
      id: 'signature-drinks',
      title: 'Signature drink',
      items: [
        findItem('signature-drinks', 'sig1')!,
        findItem('signature-drinks', 'sig_baby_shark')!,
        findItem('signature-drinks', 'sig2')!,
        findItem('signature-drinks', 'sig_matcha_shake')!,
        findItem('signature-drinks', 'sig_espresso_shake')!,
        findItem('signature-drinks', 'sig3')!,
        findItem('signature-drinks', 'sig8')!,
        findItem('signature-drinks', 'sig_green_tea')!,
        { ...findItem('signature-drinks', 'sig_eg')!, name: 'Earl Grey Tea', image: 'https://iili.io/qqX7BhF.jpg' },
      ].filter(Boolean)
    },
    {
      id: 'salads',
      title: 'Green (Salad)',
      items: [
        { id: 'sal_caesar', name: 'Caesar-Style Salad', price: '42', image: 'https://iili.io/qqE6hg4.jpg', ingredients: 'little gem lettuce, creaser dressing, crouton, parmesan cheese, crushed pistachio (add Ons: poached egg, bacon or chicken).', calories: 350 },
      ]
    },
    {
      id: 'smoothies',
      title: 'Smoothies',
      items: [
        { id: 'sm_acai', name: 'Açaí Smoothie', price: '42', image: 'https://iili.io/qnBllxp.jpg', ingredients: 'Acai berry, banana, strawberry, peanut butter, coconut water, oat milk, and apple juice.', calories: 280 },
        { id: 'sm_straw', name: 'Strawberry Glaze Smoothie', price: '42', image: 'https://iili.io/qq1mS5b.jpg', ingredients: 'Almond milk, frozen strawberries, bananas, dates, maple syrup, collagen, vanilla stevia, sea moss gel, strawberry sauce, and coconut cloud cream.', calories: 260 },
        { id: 'sm_coc', name: 'Blue Cloud Smoothie', price: '42', image: 'https://iili.io/qqE9JUX.jpg', ingredients: 'Coconut milk, pineapple, banana, avocado, vanilla stevia, collagen, peanut butter, blue spirulina, and on top coconut cloud cream.', calories: 300 },
        { id: 'sm_pit', name: 'Pitaya Smoothie', price: '42', image: 'https://iili.io/qqEH3rP.jpg', ingredients: 'Apple juice, lemon juice, pitaya, frozen pineapple, banana, and lemon electrolytes.', calories: 270 },
      ]
    },
    BASE_MENU.find(c => c.id === 'juices')!,
  ];
};

// Khalifa Specific Menu
const createKhalifaMenu = (): MenuCategory[] => {
  // Helper to find item in BASE_MENU
  const findItem = (catId: string, itemId: string) => {
    const cat = BASE_MENU.find(c => c.id === catId);
    return cat?.items.find(i => i.id === itemId);
  };

  // Custom Espresso Category for Khalifa
  const baseEspresso = BASE_MENU.find(c => c.id === 'espresso');
  const khalifaEspresso = JSON.parse(JSON.stringify(baseEspresso));

  khalifaEspresso.title = 'KHALIFA ESPRESSO SELECTION';
  khalifaEspresso.headerStyle = {
    backgroundColor: 'transparent',
    color: '#fbbf24', // Gold
    padding: '1rem 0',
    textAlign: 'center',
    fontFamily: 'serif',
    letterSpacing: '0.2em',
    fontSize: '2.5rem',
    borderBottom: 'none'
  };

  const khalifaBeans = [
    {
      id: 'bean_brazil_amazonic',
      name: 'BRAZIL AMAZONIC SOUL',
      notes: 'Dark chocolate, Roasted hazelnut, Caramel',
      price: 1,
      isNew: false
    },
    {
      id: 'bean_yemen_sharqi',
      name: 'YEMEN SHARQI',
      notes: 'Chestnut, Cola, Red grape',
      price: 10,
      isNew: false
    },
    {
      id: 'bean_coconutella',
      name: 'COCONUTELLA',
      notes: 'Coconut cream, Milk chocolate, Toffee caramel',
      price: 5,
      isNew: false
    },
    {
      id: 'bean_colombia_strawberry',
      name: 'Colombia - Strawberry',
      notes: 'Strawberry Jam, Honey, Milk Chocolates',
      price: 5,
      isNew: true,
      status: 'Coming Soon'
    },
    {
      id: 'bean_colombia_decaf',
      name: 'COLOMBIA SWEET DREAMS – DECAF',
      notes: 'Passion fruit cheesecake, Milk chocolate, Molasses',
      price: 0,
      isNew: false,
      isDecaf: true
    }
  ];

  khalifaEspresso.beanSelection = khalifaBeans;
  khalifaEspresso.description = '';

  khalifaEspresso.items.forEach((item: any) => {
    const beanCustomization = item.customizations?.find((c: any) => c.id === 'bean_choice');
    if (beanCustomization) {
      beanCustomization.options = khalifaBeans.map((b: any) => ({
        id: b.id,
        name: b.name,
        price: b.price,
        description: b.notes,
        status: b.status
      }));
    }
    item.branch = 'Khalifa City';
  });

  return [
    khalifaEspresso,
    {
      id: 'filter-coffee',
      title: 'Filter Coffee',
      items: [
        { 
          id: 'fil_ethiopia_g_0', 
          name: 'Ethiopia Guji-Rogicha',
          tastingNotes: 'Apricot, Pear, Honey.', 
          price: '38', 
          image: 'https://iili.io/qjAjZAJ.png', 
          ingredients: 'Pour-over brewing method', 
          calories: 5,
          branch: 'Khalifa City',
          status: 'Available'
        },
        { 
          id: 'fil_kenya_kiri_1', 
          name: 'Kenya Kirimara',
          tastingNotes: 'Wild Cherry, Brown Sugar, Raisins.', 
          price: '46', 
          image: 'https://iili.io/qjAjZAJ.png', 
          ingredients: 'Pour-over brewing method', 
          calories: 5,
          branch: 'Khalifa City',
          status: 'Available'
        },
        { 
          id: 'fil_colombia_m_2', 
          name: 'Colombia Mish Mish',
          tastingNotes: 'Apricot Jam, Raspberry, Lychee', 
          price: '57', 
          image: 'https://iili.io/qjAjZAJ.png', 
          ingredients: 'Pour-over brewing method', 
          calories: 5,
          branch: 'Khalifa City',
          status: 'Available'
        },
        { 
          id: 'fil_gesha_key__3', 
          name: 'Gesha Key Lime Pie',
          tastingNotes: 'Orange Blossom, Lemongrass, Condensed Milk', 
          price: '48', 
          image: 'https://iili.io/qjAjZAJ.png', 
          ingredients: 'Pour-over brewing method', 
          calories: 5,
          branch: 'Khalifa City',
          status: 'Available'
        },
        { 
          id: 'fil_colombia_s_4', 
          name: 'Colombia Sweet Dreams Decaf',
          tastingNotes: 'Passion fruit cheesecake, Milk chocolate, Molasses', 
          price: '38', 
          image: 'https://iili.io/qjAjZAJ.png', 
          ingredients: 'Pour-over brewing method', 
          calories: 5,
          branch: 'Khalifa City',
          status: 'Available'
        },
        { 
          id: 'fil_colombia_b_5', 
          name: 'Colombia Blackberry',
          tastingNotes: 'Blackberry Soda, Cacao Nibs, Karkade.', 
          price: '57', 
          image: 'https://iili.io/qjAjZAJ.png', 
          ingredients: 'Pour-over brewing method', 
          calories: 5,
          branch: 'Khalifa City',
          status: 'Available'
        }
      ]
    },
    {
      id: 'cold-brew',
      title: 'Cold Brew',
      items: [
        { 
          id: 'cb_col_plan', 
          name: 'Cuban Cigar',
          tastingNotes: 'Deep Earthy Undertones, Caramel Popcorn, Fresh Tobacco', 
          price: '38', 
          image: 'https://iili.io/qKYaxff.png', 
          ingredients: 'Slow-steeped cold water extraction', 
          calories: 10 
        },
        { 
          id: 'cb_kenya', 
          name: 'Kenya Kirimara',
          tastingNotes: 'Wild Cherry, Brown Sugar, Raisins', 
          price: '38', 
          image: 'https://iili.io/f8yS6jj.jpg', 
          ingredients: 'Slow-steeped cold water extraction', 
          calories: 10,
          status: 'Available'
        },
        { 
          id: 'cb_eth_guji', 
          name: 'Ethiopia Guji-Rogicha',
          tastingNotes: 'Apricot, Pear, Honey', 
          price: '38', 
          image: 'https://iili.io/fUAAQ07.png', 
          ingredients: 'Slow-steeped cold water extraction', 
          calories: 10 
        }
      ]
    },
    {
      id: 'desserts',
      title: 'Desserts',
      items: [
        { ...findItem('desserts', 'd_crepe_rolls')!, status: 'Coming Soon' as const },
        findItem('desserts', 'd_aseeda')!,
        { id: 'd_honey', name: 'Honey Cake', price: '39.20', image: 'https://iili.io/qqXWIea.png', ingredients: 'Layers of honey sponge and cream', calories: 450 },
        { id: 'd_peanut', name: 'Peanut Choco Tart', price: '39.20', image: 'https://iili.io/qqXGUIR.png', ingredients: 'Rich chocolate tart with peanut butter', calories: 480 },
        findItem('desserts', 'd_san_seb')!,
        { id: 'd_tiramisu', name: 'Tiramisu Bowl', price: '39.20', image: 'https://iili.io/qnnTv0G.png', ingredients: 'Classic Italian dessert with coffee', calories: 400 },
        findItem('desserts', 'd_vanilla_pud')!,
        findItem('desserts', 'd_banana_pud')!,
        findItem('desserts', 'STICKY DATE')!,
        findItem('desserts', 'd_choc_chip')!,
        findItem('desserts', 'MUHALABIYA')!,
        { ...findItem('desserts', 'd_fudge_cookie')!, name: 'CHOCO FUDGE COOKIE', image: 'https://iili.io/qqMhuXp.png' },
      ].filter(Boolean)
    },
    {
      id: 'fruits-grains',
      title: 'Fruits and Grains',
      items: [
        findItem('healthy-bowls', 'bw1')!,
        findItem('healthy-bowls', 'bw5')!,
        findItem('healthy-bowls', 'bw2')!,
        findItem('healthy-bowls', 'bw3')!,
        findItem('healthy-bowls', 'bw4')!,
      ].filter(Boolean)
    },
    {
      id: 'sandwiches',
      title: 'Sandwiches',
      items: [
        { id: 'sw_bacon', name: 'Bacon & Egg Cheese Bun', price: '44', image: 'https://iili.io/qqEAsNj.jpg', ingredients: 'Brioche bun with crispy bacon, scrambled egg, cheddar cheese, kimchi ketchup.', calories: 550 },
        { id: 'sw_tuna', name: 'Tunacado', price: '38', image: 'https://iili.io/qqEgPdN.jpg', ingredients: "Joe's bread, pesto mayo, tuna mix, tomato slice, avocado slice.", calories: 480 },
        { id: 'sw_chick', name: 'Chicken & Avocado Croissant', price: '42', image: 'https://iili.io/qqGn1cb.jpg', ingredients: 'Grilled chicken, fresh avocado, croissant', calories: 520 },
        { id: 'sw_club', name: 'Cartel Club Sandwich', price: '38', image: 'https://iili.io/qqEPTpS.jpg', ingredients: 'White sliced bread, chipotle mayo, cheddar, lettuce, grilled chicken, bacon, fried egg, tomato slice.', calories: 600 },
        { id: 'sw_brisket', name: 'Brisket Blaze', price: '45', image: 'https://iili.io/qqERigt.jpg', ingredients: 'Brioche toast, chipotle mayo, cheddar, brisket, caramelized onion, jalapeño.', calories: 650 },
      ]
    },
    {
      id: 'baked-goods',
      title: 'Baked Goods',
      items: [
        findItem('from-our-bakery', 'fob_turkey')!,
        findItem('from-our-bakery', 'fob_zaatar')!,
        findItem('from-our-bakery', 'fob_burrata')!,
        findItem('from-our-bakery', 'fob_almond')!,
        { id: 'bg_plain', name: 'Plain Croissant', price: '18', image: 'https://iili.io/qqX0EeR.png', ingredients: 'Classic butter croissant', calories: 280 },
        { id: 'bg_3cheese', name: '3 Cheese Croissant', price: '17', image: 'https://iili.io/qqECJAN.jpg', ingredients: 'Cheddar, mozzarella, and parmesan', calories: 350 },
        findItem('from-our-bakery', 'fob_choc')!,
      ].filter(Boolean)
    },
    {
      id: 'eggs-more',
      title: 'Eggs & More',
      items: [
        { id: 'egg_avo', name: 'Avocado Toast', price: '45', image: 'https://iili.io/qqGqaMg.jpg', ingredients: 'Sourdough with smashed avocado, whipped feta, Pico de Gallo, pine nuts, parmesan, coriander, dill leaves, mix sesame seeds, lime wedges, chili flakes, dukka, and poached egg.', calories: 380 },
        { id: 'egg_ben', name: 'Eggs Benedict', price: '46', image: 'https://iili.io/qqGfw3x.jpg', ingredients: 'English muffins with cream cheese, tomato sauce, smoky bacon, poached eggs, miso hollandaise, chives.', calories: 450 },
        { id: 'egg_truffle', name: 'Scrambled Truffle Eggs', price: '54', image: 'https://iili.io/qqGqpDP.jpg', ingredients: 'Creamy scrambled eggs on brioche slice with truffle mayo, truffle oil, and shaved black truffle.', calories: 420 },
        { id: 'egg_aussie', name: 'Aussie Benedict', price: '58', image: 'https://iili.io/qqMpPzG.png', ingredients: 'brioche bun with white barbecue sauce, pulled beef, 2 poached eggs, miso hollandaise, crispy onions & spring roll, chives.', calories: 580 },
        { id: 'egg_cro', name: 'EGG & AVO CROISSANT', price: '38', image: 'https://iili.io/qqXARp9.jpg', ingredients: 'Plain croissant, cream cheese mix, smashed avocado, tomato sauce, poached eggs sprinkled with pumpkin seeds and mix sesame seeds.', calories: 490 },
        { id: 'egg_nduja', name: 'Nduja Chili Scrambled Tornado Eggs', price: '52', image: 'https://iili.io/qqGClvR.jpg', ingredients: 'garlic and butter pita bread, creamy mayo, mama’s sauce, smoked yogurt, spicy beef nduja, microgreens, and a drizzle of smoked oil.', calories: 450 },
      ]
    },
    {
      id: 'signature-drinks',
      title: 'Signature drink',
      items: [
        findItem('signature-drinks', 'sig7')!,
        findItem('signature-drinks', 'sig2')!,
        findItem('signature-drinks', 'sig5')!,
        findItem('signature-drinks', 'sig6')!,
        findItem('signature-drinks', 'sig3')!,
        findItem('signature-drinks', 'sig8')!,
        findItem('signature-drinks', 'sig_green_tea')!,
        { ...findItem('signature-drinks', 'sig_eg')!, name: 'Earl Grey Tea', image: 'https://iili.io/qqX7BhF.jpg' },
        findItem('signature-drinks', 'sig_espresso_shake')!,
        findItem('signature-drinks', 'sig_baby_shark')!,
        findItem('signature-drinks', 'sig_matcha_shake')!,
      ].filter(Boolean)
    },
    {
      id: 'smoothies',
      title: 'Smoothies',
      items: [
        { id: 'sm_acai', name: 'Açaí Smoothie', price: '42', image: 'https://iili.io/qnBllxp.jpg', ingredients: 'Acai berry, banana, strawberry, peanut butter, coconut water, oat milk, and apple juice.', calories: 280 },
        { id: 'sm_straw', name: 'Strawberry Glaze Smoothie', price: '42', image: 'https://iili.io/qq1mS5b.jpg', ingredients: 'Almond milk, frozen strawberries, bananas, dates, maple syrup, collagen, vanilla stevia, sea moss gel, strawberry sauce, and coconut cloud cream.', calories: 260 },
        { id: 'sm_coc', name: 'Blue Cloud Smoothie', price: '42', image: 'https://iili.io/qqE9JUX.jpg', ingredients: 'Coconut milk, pineapple, banana, avocado, vanilla stevia, collagen, peanut butter, blue spirulina, and on top coconut cloud cream.', calories: 300 },
        { id: 'sm_pit', name: 'Pitaya Smoothie', price: '42', image: 'https://iili.io/qqEH3rP.jpg', ingredients: 'Apple juice, lemon juice, pitaya, frozen pineapple, banana, and lemon electrolytes.', calories: 270 },
      ]
    },
    BASE_MENU.find(c => c.id === 'juices')!,
  ];
};

// Al Qana Specific Menu
const createAlQanaMenu = (): MenuCategory[] => {
  // Helper to find item in BASE_MENU
  const findItem = (catId: string, itemId: string) => {
    const cat = BASE_MENU.find(c => c.id === catId);
    return cat?.items.find(i => i.id === itemId);
  };

  // Custom Espresso Category for Al Qana
  const baseEspresso = BASE_MENU.find(c => c.id === 'espresso');
  const alQanaEspresso = JSON.parse(JSON.stringify(baseEspresso));

  alQanaEspresso.title = 'AL QANA ESPRESSO SELECTION';
  alQanaEspresso.headerStyle = {
    backgroundColor: 'transparent',
    color: '#fbbf24', // Gold
    padding: '1rem 0',
    textAlign: 'center',
    fontFamily: 'serif',
    letterSpacing: '0.2em',
    fontSize: '2.5rem',
    borderBottom: 'none'
  };

  // Define Custom Beans
  const alQanaBeans = [
    {
      id: 'bean_469',
      name: '469 Blend',
      notes: 'Apricot Jam, White Chocolate, Jaggery',
      price: 0,
      isNew: false
    },
    {
      id: 'bean_brazil',
      name: 'Brazil Amazonic Soul',
      notes: 'Dark Chocolate, Roasted Hazelnut, Caramel',
      price: 1,
      isNew: false
    },
    {
      id: 'bean_yemen',
      name: 'Yemen Sharqi Haraaz',
      notes: 'Chestnut, Cola, Red Grape',
      price: 10,
      isNew: false
    },
    {
      id: 'bean_colombia_strawberry',
      name: 'Colombia - Strawberry',
      notes: 'Strawberry Jam, Honey, Milk Chocolates',
      price: 5,
      isNew: true,
      status: 'Coming Soon'
    },
    {
      id: 'bean_decaf',
      name: 'Colombia Sweet Dreams Decaf',
      notes: 'Passion fruit cheesecake, Milk chocolate, Molasses',
      price: 0,
      isNew: false,
      isDecaf: true
    }
  ];

  alQanaEspresso.beanSelection = alQanaBeans;
  alQanaEspresso.description = '';

  // Update all items to use these beans
  alQanaEspresso.items.forEach((item: any) => {
    const beanCustomization = item.customizations?.find((c: any) => c.id === 'bean_choice');
    if (beanCustomization) {
      beanCustomization.options = alQanaBeans.map((b: any) => ({
        id: b.id,
        name: b.name,
        price: b.price,
        description: b.notes,
        status: b.status
      }));
    }
    item.branch = 'Al Qana';
  });

  return [
    alQanaEspresso,
    {
      id: 'filter-coffee',
      title: 'Filter Coffee',
      items: [
        { 
          id: 'fil_ethiopia_g_0', 
          name: 'Ethiopia Guji-Rogicha',
          tastingNotes: 'Apricot, Pear, Honey.', 
          price: '38', 
          image: 'https://iili.io/qjAjZAJ.png', 
          ingredients: 'Pour-over brewing method', 
          calories: 5,
          branch: 'Al Qana',
          status: 'Available'
        },
        { 
          id: 'fil_colombia_b_1', 
          name: 'Colombia Blackberry',
          tastingNotes: 'Blackberry Soda, Cacao Nibs, Karkade.', 
          price: '57', 
          image: 'https://iili.io/qjAjZAJ.png', 
          ingredients: 'Pour-over brewing method', 
          calories: 5,
          branch: 'Al Qana',
          status: 'Available'
        },
        { 
          id: 'fil_gesha_key__2', 
          name: 'Gesha Key Lime Pie',
          tastingNotes: 'Orange Blossom, Lemongrass, Condensed Milk', 
          price: '48', 
          image: 'https://iili.io/qjAjZAJ.png', 
          ingredients: 'Pour-over brewing method', 
          calories: 5,
          branch: 'Al Qana',
          status: 'Available'
        },
        { 
          id: 'fil_kenya_kiri_3', 
          name: 'Kenya Kirimara',
          tastingNotes: 'Wild Cherry, Brown Sugar, Raisins.', 
          price: '46', 
          image: 'https://iili.io/qjAjZAJ.png', 
          ingredients: 'Pour-over brewing method', 
          calories: 5,
          branch: 'Al Qana',
          status: 'Available'
        },
        { 
          id: 'fil_colombia_m_4', 
          name: 'Colombia Mish Mish',
          tastingNotes: 'Apricot Jam, Raspberry, Lychee', 
          price: '57', 
          image: 'https://iili.io/qjAjZAJ.png', 
          ingredients: 'Pour-over brewing method', 
          calories: 5,
          branch: 'Al Qana',
          status: 'Available'
        },
        { 
          id: 'fil_colombia_s_5', 
          name: 'Colombia Sweet Dreams Decaf',
          tastingNotes: 'Passion fruit cheesecake, Milk chocolate, Molasses', 
          price: '38', 
          image: 'https://iili.io/qjAjZAJ.png', 
          ingredients: 'Pour-over brewing method', 
          calories: 5,
          branch: 'Al Qana',
          status: 'Available'
        }
      ]
    },
    {
      id: 'sandwiches',
      title: 'Sandwiches',
      items: [
        { id: 'sw_italian', name: 'Cold Cut Italian', price: '38', image: 'https://iili.io/qqEieVe.png', ingredients: 'White slice bread with pesto oil, fresh mozzarella, tomato slice, tartufo salami, chorizo, baby Rocca, sun-dried tomatoes, balsamic glaze, organic olive oil.', calories: 580 },
        { id: 'sw_tuna', name: 'Tunacado', price: '38', image: 'https://iili.io/qqEgPdN.jpg', ingredients: "Joe's bread, pesto mayo, tuna mix, tomato slice, avocado slice.", calories: 480 },
        { id: 'sw_club', name: 'Cartel Club Sandwich', price: '38', image: 'https://iili.io/qqEPTpS.jpg', ingredients: 'White sliced bread, chipotle mayo, cheddar, lettuce, grilled chicken, bacon, fried egg, tomato slice.', calories: 600 },
        { id: 'sw_brisket', name: 'Brisket Blaze', price: '45', image: 'https://iili.io/qqERigt.jpg', ingredients: 'Brioche toast, chipotle mayo, cheddar, brisket, caramelized onion, jalapeño.', calories: 650 },
        { id: 'sw_chick', name: 'Chicken Avocado Croissant', price: '35', image: 'https://iili.io/qqG2qR1.png', ingredients: 'A buttery, toasted kalonji-seed square croissant filled with tender grilled chicken and fresh avocado slices. Layered with crisp Lollo Bionda, sun-dried tomatoes, and shaved Grano Padano cheese. Finished with a house-made Caesar dressing and a fragrant drizzle of pesto oil.', calories: 520, branch: 'Al Qana' },
        { id: 'sw_shrimp', name: 'Shrimp Toast', price: '35', image: 'https://iili.io/qqEYw12.jpg', ingredients: 'Sautéed shrimp on brioche toast', calories: 420 },
        { id: 'sw_bacon', name: 'Bacon & Egg Cheese Bun', price: '44', image: 'https://iili.io/qqEAsNj.jpg', ingredients: 'Brioche bun with crispy bacon, scrambled egg, cheddar cheese, kimchi ketchup.', calories: 550 },
      ]
    },
    {
      id: 'baked-goods',
      title: 'Baked Goods',
      items: [
        { id: 'bg_plain', name: 'Plain Croissant', price: '18', image: 'https://iili.io/qqX0EeR.png', ingredients: 'Classic butter croissant', calories: 280 },
        { id: 'bg_3cheese', name: '3 Cheese Croissant', price: '24', image: 'https://iili.io/qqECJAN.jpg', ingredients: 'Cheddar, mozzarella, and parmesan', calories: 350 },
        findItem('from-our-bakery', 'fob_burrata')!,
        findItem('from-our-bakery', 'fob_almond')!,
        findItem('from-our-bakery', 'fob_choc')!,
        findItem('from-our-bakery', 'fob_zaatar')!,
        findItem('from-our-bakery', 'fob_turkey')!,
      ].filter(Boolean)
    },
    {
      id: 'desserts',
      title: 'Desserts',
      items: [
        findItem('desserts', 'd_aseeda')!,
        { id: 'd_french_toast', name: 'French Toast', price: '66', image: 'https://iili.io/fUBoGzx.png', ingredients: 'Caramelized and served with vanilla ice cream, almond streusel, whipped vanilla cream, and rhubarb compote (option salted caramel, mix berries compote on the side)', branch: 'Al Qana' },
        { ...findItem('desserts', 'd_crepe_rolls')!, status: 'Available' },
        { id: 'd_peanut', name: 'Peanut Choco Tart', price: '39.20', image: 'https://iili.io/qqXGUIR.png', ingredients: 'Rich chocolate tart with peanut butter', calories: 480 },
        { id: 'd_honey', name: 'Honey Cake', price: '39.20', image: 'https://iili.io/qqXWIea.png', ingredients: 'Layers of honey sponge and cream', calories: 450 },
        findItem('desserts', 'd_san_seb')!,
        { id: 'd_cartel_crust_san_seb', name: 'CARTEL Crust San Sebastian', price: '39.20', image: 'https://iili.io/q2hnbp4.png' },
        findItem('desserts', 'STICKY DATE')!,
        { id: 'd_tiramisu', name: 'Tiramisu Bowl', price: '39.20', image: 'https://iili.io/qnnTv0G.png', ingredients: 'Classic Italian dessert with coffee', calories: 400 },
        findItem('desserts', 'd_vanilla_pud')!,
        findItem('desserts', 'd_choc_chip')!,
        { id: 'd_choco_fudge_cookie', name: 'CHOCO FUDGE COOKIE', ingredients: 'Rich and fudgy dark chocolate cookie', price: '21', image: 'https://iili.io/qqMhN2e.png' },
        findItem('desserts', 'MUHALABIYA')!,
        findItem('desserts', 'd_banana_pud')!,
      ].filter(Boolean)
    },
    {
      id: 'eggs-more',
      title: 'Eggs & More',
      items: [
        { id: 'egg_big', name: 'Big Breakfast Homemade', price: '65', image: 'https://iili.io/qqVHZ1R.png', ingredients: 'hash brown potatoes, red beans, sautéed portobello mushrooms, wagyu beef sausage, smoked veal bacon, roasted vine tomatoes, two sunny side up eggs on a slice of brioche bread, (eggs your way: scrambled, poached, sunny side up).', calories: 850 },
        { id: 'egg_benedict', name: 'Egg Benedict', price: '46', image: 'https://iili.io/qqGfw3x.jpg', ingredients: 'English muffins with cream cheese, tomato sauce, smoky bacon, poached eggs, miso hollandaise', branch: 'Al Qana' },
        { id: 'egg_avo', name: 'Avocado Toast', price: '45', image: 'https://iili.io/qqGqaMg.jpg', ingredients: 'Sourdough with smashed avocado, whipped feta, Pico de Gallo, pine nuts, parmesan, coriander, dill leaves, mix sesame seeds, lime wedges, chili flakes, dukka, and poached egg.', calories: 380 },
        { id: 'egg_cro', name: 'EGG & AVO CROISSANT', price: '48', image: 'https://iili.io/qqXARp9.jpg', ingredients: 'Plain croissant, cream cheese mix, smashed avocado, tomato sauce, poached eggs sprinkled with pumpkin seeds and mix sesame seeds.', calories: 490 },
        { id: 'egg_aussie', name: 'Aussie Benedict', price: '58', image: 'https://iili.io/qqMpPzG.png', ingredients: 'brioche bun with white barbecue sauce, pulled beef, 2 poached eggs, miso hollandaise, crispy onions & spring roll, chives.', calories: 580 },
        { id: 'egg_turkish', name: 'Minted yogurt', price: '46', image: 'https://iili.io/qqGBwmB.jpg', ingredients: 'homemade tomato jam, poached eggs, mint pesto, chilly butter served with 2 slices of toasted zaatar sourdough.', calories: 400 },
        { id: 'egg_truffle', name: 'Scrambled Truffle Eggs', price: '54', image: 'https://iili.io/qqGqpDP.jpg', ingredients: 'Creamy scrambled eggs on brioche slice with truffle mayo, truffle oil, and shaved black truffle.', calories: 420 },
        { id: 'egg_nduja', name: 'Nduja Chili Scrambled Tornado Eggs', price: '52', image: 'https://iili.io/qqGClvR.jpg', ingredients: 'garlic and butter pita bread, creamy mayo, mama’s sauce, smoked yogurt, spicy beef nduja, microgreens, and a drizzle of smoked oil.', calories: 450 },
      ]
    },
    {
      id: 'signature-drinks',
      title: 'Signature drink',
      items: [
        findItem('signature-drinks', 'sig_espresso_shake')!,
        findItem('signature-drinks', 'sig_matcha_shake')!,
        findItem('signature-drinks', 'sig_baby_shark')!,
        findItem('signature-drinks', 'sig3')!,
        findItem('signature-drinks', 'sig8')!,
        findItem('signature-drinks', 'sig_green_tea')!,
        { ...findItem('signature-drinks', 'sig_eg')!, name: 'Earl Grey Tea', image: 'https://iili.io/qqX7BhF.jpg' },
      ].filter(Boolean)
    },
    {
      id: 'smoothies',
      title: 'Smoothies',
      items: [
        { id: 'sm_straw', name: 'Strawberry Glaze Smoothie', price: '42', image: 'https://iili.io/qq1mS5b.jpg', ingredients: 'Almond milk, frozen strawberries, bananas, dates, maple syrup, collagen, vanilla stevia, sea moss gel, strawberry sauce, and coconut cloud cream.', calories: 260 },
        { id: 'sm_pit', name: 'Pitaya Smoothie', price: '42', image: 'https://iili.io/qqEH3rP.jpg', ingredients: 'Apple juice, lemon juice, pitaya, frozen pineapple, banana, and lemon electrolytes.', calories: 270 },
        { id: 'sm_acai', name: 'Açaí Smoothie', price: '42', image: 'https://iili.io/qnBllxp.jpg', ingredients: 'Acai berry, banana, strawberry, peanut butter, coconut water, oat milk, and apple juice.', calories: 280 },
        { id: 'sm_coc', name: 'Blue Cloud Smoothie', price: '42', image: 'https://iili.io/qqE9JUX.jpg', ingredients: 'Coconut milk, pineapple, banana, avocado, vanilla stevia, collagen, peanut butter, blue spirulina, and on top coconut cloud cream.', calories: 300 },
      ]
    },
    BASE_MENU.find(c => c.id === 'juices')!,
    {
      id: 'salads',
      title: 'Green Salad',
      items: [
        { id: 'sal_caesar', name: 'Caesar-Style Salad', price: '42', image: 'https://iili.io/qqE6hg4.jpg', ingredients: 'little gem lettuce, creaser dressing, crouton, parmesan cheese, crushed pistachio (add Ons: poached egg, bacon or chicken).', calories: 350 },
      ]
    },
    {
      id: 'fruits-grains',
      title: 'Fruits and Grains',
      items: [
        findItem('healthy-bowls', 'bw2')!,
        findItem('healthy-bowls', 'bw3')!,
        findItem('healthy-bowls', 'bw5')!,
        findItem('healthy-bowls', 'bw4')!,
      ].filter(Boolean)
    }
  ];
};

// Marina Specific Menu
const createMarinaMenu = (): MenuCategory[] => {
  // Custom Espresso Category for Marina
  const baseEspresso = BASE_MENU.find(c => c.id === 'espresso');
  const marinaEspresso = JSON.parse(JSON.stringify(baseEspresso));

  marinaEspresso.title = 'Espresso Based';
  marinaEspresso.headerStyle = {
    backgroundColor: 'transparent',
    color: '#fbbf24', // Gold
    padding: '1rem 0',
    textAlign: 'center',
    fontFamily: 'serif',
    letterSpacing: '0.2em',
    fontSize: '2.5rem',
    borderBottom: 'none'
  };

  // Define Custom Beans for Marina
  const marinaBeans = [
    {
      id: 'bean_nicaragua',
      name: 'Nicaragua',
      notes: 'Milk chocolate, sugar cane, and candied peanuts',
      price: 0,
      isNew: false
    },
    {
      id: 'bean_kenya',
      name: 'Kenya - Gichatha',
      notes: 'Caramel, black cherry, Cacao Nibs',
      price: 0,
      isNew: true
    },
    {
      id: 'bean_coconutella',
      name: 'Coconutella',
      notes: 'Coconut cream, milk chocolate, toffee caramel',
      price: 5,
      isNew: false
    },
    {
      id: 'bean_colombia_strawberry',
      name: 'Colombia - Strawberry',
      notes: 'Strawberry Jam, Honey, Milk Chocolates',
      price: 5,
      isNew: true,
      status: 'Coming Soon'
    },
    {
      id: 'bean_colombia_decaf',
      name: 'Colombia Sweet Dreams (Decaf)',
      notes: 'Passion fruit cheesecake, Milk chocolate, Molasses',
      price: 0,
      isNew: false,
      isDecaf: true
    }
  ];

  marinaEspresso.beanSelection = marinaBeans;
  marinaEspresso.description = ''; // Clear description to use custom bean selection view

  // Update all items to use these beans
  marinaEspresso.items.forEach((item: any) => {
    const beanCustomization = item.customizations?.find((c: any) => c.id === 'bean_choice');
    if (beanCustomization) {
      beanCustomization.options = marinaBeans.map((b: any) => ({
        id: b.id,
        name: b.name,
        price: b.price,
        description: b.notes,
        status: b.status
      }));
    }
    item.branch = 'Marina';
  });

  // Custom Tea Category for Marina
  const baseTea = BASE_MENU.find(c => c.id === 'tea');
  const marinaTea = JSON.parse(JSON.stringify(baseTea));
  
  // Remove the bottom row items (EARL GRAY TEA and Green Tea)
  marinaTea.items = marinaTea.items.filter((i: any) => i.id !== 'tea_black' && i.id !== 'tea_green');

  const rushHour = marinaTea.items.find((i: any) => i.id === 'tea_rush');
  if (rushHour) {
    rushHour.name = 'Hot Rush Hour';
    rushHour.price = '33';
    rushHour.image = 'https://iili.io/qlbAzS2.jpg';
  }

  const marinaFilter = {
    id: 'filter-coffee',
    title: 'Filter Coffee',
    items: [
        { 
          id: 'fil_colombia___0', 
          name: 'Colombia - Bourbon Sidra',
          tastingNotes: 'Red grapes, Watermelon, Hard Candy, Raspberry.', 
          price: '46', 
          image: 'https://iili.io/qjAjZAJ.png', 
          ingredients: 'Pour-over brewing method', 
          calories: 5,
          branch: 'Marina',
          status: 'Available'
        },
        { 
          id: 'fil_panama_cor_1', 
          name: 'Panama Cordillera Gesha',
          tastingNotes: 'Cantaloupe, Honey, Berries, Lemongrass.', 
          price: '65', 
          image: 'https://iili.io/qjAjZAJ.png', 
          ingredients: 'Pour-over brewing method', 
          calories: 5,
          branch: 'Marina',
          status: 'Available'
        },
        { 
          id: 'fil_costa_rica_2', 
          name: 'Costa Rica - Canet Chopin',
          tastingNotes: 'Cacao, Fig Compote, Honey, Cherry.', 
          price: '57', 
          image: 'https://iili.io/qjAjZAJ.png', 
          ingredients: 'Pour-over brewing method', 
          calories: 5,
          branch: 'Marina',
          status: 'Available'
        },
        { 
          id: 'fil_kenya_kiri_3', 
          name: 'Kenya Kirimara',
          tastingNotes: 'Wild Cherry, Brown Sugar, Raisins.', 
          price: '46', 
          image: 'https://iili.io/qjAjZAJ.png', 
          ingredients: 'Pour-over brewing method', 
          calories: 5,
          branch: 'Marina',
          status: 'Available'
        },
        { 
          id: 'fil_colombia_m_4', 
          name: 'Colombia Mish Mish',
          tastingNotes: 'Apricot Jam, Raspberry, Lychee', 
          price: '57', 
          image: 'https://iili.io/qjAjZAJ.png', 
          ingredients: 'Pour-over brewing method', 
          calories: 5,
          branch: 'Marina',
          status: 'Available'
        },
        { 
          id: 'fil_colombia_s_5', 
          name: 'Colombia Sweet Dreams Decaf',
          tastingNotes: 'Passion fruit cheesecake, Milk chocolate, Molasses', 
          price: '38', 
          image: 'https://iili.io/qjAjZAJ.png', 
          ingredients: 'Pour-over brewing method', 
          calories: 5,
          branch: 'Marina',
          status: 'Available'
        }
    ]
  };

  // Return full menu with replaced espresso and tea
  const marinaMenu = BASE_MENU
    .map(cat => {
      if (cat.id === 'espresso') return marinaEspresso;
      if (cat.id === 'tea') return marinaTea;
      if (cat.id === 'filter') return marinaFilter;
      if (cat.id === 'desserts') {
        return {
          ...cat,
          items: cat.items.map(item =>
            item.id === 'd_crepe_rolls' ? { ...item, status: 'Available' } : item
          )
        };
      }
      return cat;
    });

  marinaMenu.push({
    id: 'sandwiches',
    title: 'SANDWICHES & BAGELS',
    items: [
      { id: 'sw_italian', name: 'Cold Cut Italian', price: '38', image: 'https://iili.io/qqEieVe.png', ingredients: 'White slice bread with pesto oil, fresh mozzarella, tomato slice, tartufo salami, chorizo, baby Rocca, sun-dried tomatoes, balsamic glaze, organic olive oil.', calories: 580 },
      { id: 'sw_club', name: 'Cartel Club Sandwich', price: '38', image: 'https://iili.io/qqEPTpS.jpg', ingredients: 'White sliced bread, chipotle mayo, cheddar, lettuce, grilled chicken, bacon, fried egg, tomato slice.', calories: 600 },
      { id: 'sw_tuna', name: 'Tunacado', price: '38', image: 'https://iili.io/qqEgPdN.jpg', ingredients: "Joe's bread, pesto mayo, tuna mix, tomato slice, avocado slice.", calories: 480 },
      { id: 'sw_brisket', name: 'Brisket Blaze', price: '45', image: 'https://iili.io/qqERigt.jpg', ingredients: 'Brioche toast, chipotle mayo, cheddar, brisket, caramelized onion, jalapeño.', calories: 650 }
    ]
  });

  return marinaMenu;
};

// Golden Rule Layout Helper
const applyGoldenRuleLayout = (menu: MenuCategory[]): MenuCategory[] => {
  // Clone to avoid mutation of the original array during splice operations
  const remaining = [...menu];
  const newMenu: MenuCategory[] = [];

  const extract = (predicate: (c: MenuCategory) => boolean): MenuCategory | undefined => {
    const idx = remaining.findIndex(predicate);
    if (idx !== -1) return remaining.splice(idx, 1)[0];
    return undefined;
  };

  const extractAll = (predicate: (c: MenuCategory) => boolean): MenuCategory[] => {
    const extracted: MenuCategory[] = [];
    let idx = remaining.findIndex(predicate);
    while (idx !== -1) {
      extracted.push(remaining.splice(idx, 1)[0]);
      idx = remaining.findIndex(predicate);
    }
    return extracted;
  };

  // 1. BEST SELLER
  let bestSeller = extract(c => c.id === 'highly-recommend');
  if (!bestSeller) {
    const baseBestSeller = BASE_MENU.find(c => c.id === 'highly-recommend');
    if (baseBestSeller) {
      bestSeller = JSON.parse(JSON.stringify(baseBestSeller));
    }
  }
  if (bestSeller) {
    bestSeller.title = 'BEST SELLER';
    newMenu.push(bestSeller);
  }

  // 2. ESPRESSO BASED
  const esp = extract(c => c.id === 'espresso');
  if (esp) {
    esp.title = 'ESPRESSO BASED';
    // Remove custom styling to ensure it matches the default white, sans-serif style
    if (esp.headerStyle) {
      delete esp.headerStyle;
    }
    newMenu.push(esp);
  }

  // 3. FILTERED
  const specialtyItems = extractAll(c => ['filter', 'filter-coffee', 'cold-drip', 'filter-taps', 'cold-brew'].includes(c.id));
  if (specialtyItems.length > 0) {
    newMenu.push({
      id: 'specialty-coffee',
      title: 'FILTERED',
      items: [],
      subCategories: specialtyItems
    });
  }

  // 4. SIGNATURE DRINKS + TEA
  const sigTeaItems = extractAll(c => ['signature-drinks', 'tea', 'juices', 'smoothies'].includes(c.id));
  if (sigTeaItems.length > 0) {
    newMenu.push({
      id: 'signature-tea',
      title: 'SIGNATURE DRINKS + TEA',
      items: [],
      subCategories: sigTeaItems
    });
  }

  // 5. FRUITS, SEEDS & GRAINS
  const breakfastItems = extractAll(c => ['healthy-bowls', 'fruits-grains', 'fruits-gangs', 'eggs-more', 'breakfast', 'healthy-bar', 'salads', 'greens', 'green-salad'].includes(c.id));
  if (breakfastItems.length > 0) {
    newMenu.push({
      id: 'breakfast-mains',
      title: 'FRUITS, SEEDS & GRAINS',
      items: [],
      subCategories: breakfastItems
    });
  }

  // 6. BAKED GOODS
  const bakedItems = extractAll(c => ['baked-goods', 'baked-items', 'from-our-bakery'].includes(c.id));
  if (bakedItems.length > 0) {
    newMenu.push({
      id: 'baked-goods-group',
      title: 'BAKED GOODS',
      items: [],
      subCategories: bakedItems
    });
  }

  // 7. SANDWICHES & BAGELS
  const sandwiches = extract(c => c.id === 'sandwiches');
  if (sandwiches) {
    sandwiches.title = 'SANDWICHES & BAGELS';
    newMenu.push(sandwiches);
  }

  // 8. DESSERTS
  const dessert = extract(c => c.id === 'desserts');
  if (dessert) {
    dessert.title = 'DESSERTS';
    newMenu.push(dessert);
  }

  // Append any remaining categories just in case, to avoid losing data
  if (remaining.length > 0) {
    newMenu.push(...remaining);
  }

  return newMenu;
};

// Dubai Branch Specific Menu
const createDubaiMenu = (): MenuCategory[] => {
  const findItem = (catId: string, itemId: string) => {
    const cat = BASE_MENU.find(c => c.id === catId);
    return cat?.items.find(i => i.id === itemId);
  };

  // Custom Espresso Category for Dubai
  const baseEspresso = BASE_MENU.find(c => c.id === 'espresso');
  const dubaiEspresso = JSON.parse(JSON.stringify(baseEspresso));

  dubaiEspresso.title = 'DUBAI ESPRESSO SELECTION';
  dubaiEspresso.headerStyle = {
    backgroundColor: 'transparent',
    color: '#fbbf24', // Gold
    padding: '1rem 0',
    textAlign: 'center',
    fontFamily: 'serif',
    letterSpacing: '0.2em',
    fontSize: '2.5rem',
    borderBottom: 'none'
  };

  const dubaiBeans = [
    {
      id: 'bean_469',
      name: 'THE 469 BLAND',
      notes: 'White Chocolate, Apricot Jam, Jaggery',
      price: 0,
      isNew: false
    },
    {
      id: 'bean_coconutella',
      name: 'COCONUTELLA',
      notes: 'Coconut Cream, Milk Chocolate, Toffee Caramel',
      price: 5,
      isNew: false
    },
    {
      id: 'bean_kenya',
      name: 'KENYA GICHATHA',
      notes: 'Caramel, Cacao Nibs, Black Cherry',
      price: 1,
      isNew: false
    },
    {
      id: 'bean_colombia_strawberry',
      name: 'Colombia - Strawberry',
      notes: 'Strawberry Jam, Honey, Milk Chocolates',
      price: 5,
      isNew: true,
      status: 'active'
    },
    {
      id: 'bean_decaf',
      name: 'SWEET DREAMS DECAF',
      notes: 'Passion fruit cheesecake, Milk chocolate, Molasses',
      price: 0,
      isNew: false,
      isDecaf: true
    }
  ];

  dubaiEspresso.beanSelection = dubaiBeans;
  dubaiEspresso.description = '';

  // Update all items to use these beans
  dubaiEspresso.items.forEach((item: any) => {
    const beanCustomization = item.customizations?.find((c: any) => c.id === 'bean_choice');
    if (beanCustomization) {
      beanCustomization.options = dubaiBeans.map((b: any) => ({
        id: b.id,
        name: b.name,
        price: b.price,
        description: b.notes,
        status: b.status
      }));
    }
    item.branch = 'Dubai';
  });

  return [
    dubaiEspresso,
    {
      id: 'filter-coffee',
      title: 'Filter Coffee',
      items: [
        { 
          id: 'fil_ethiopia_g_0', 
          name: 'Ethiopia Guji-Rogicha',
          tastingNotes: 'Apricot, Pear, Honey.', 
          price: '38', 
          image: 'https://iili.io/qjAjZAJ.png', 
          ingredients: 'Pour-over brewing method', 
          calories: 5,
          branch: 'Dubai',
          status: 'Available'
        },
        { 
          id: 'fil_kenya_kiri_1', 
          name: 'Kenya Kirimara',
          tastingNotes: 'Wild Cherry, Brown Sugar, Raisins.', 
          price: '46', 
          image: 'https://iili.io/qjAjZAJ.png', 
          ingredients: 'Pour-over brewing method', 
          calories: 5,
          branch: 'Dubai',
          status: 'Available'
        },
        { 
          id: 'fil_colombia_b_2', 
          name: 'Colombia Blackberry',
          tastingNotes: 'Blackberry Soda, Cacao Nibs, Karkade.', 
          price: '46', 
          image: 'https://iili.io/qjAjZAJ.png', 
          ingredients: 'Pour-over brewing method', 
          calories: 5,
          branch: 'Dubai',
          status: 'Available'
        },
        { 
          id: 'fil_colombia_m_3', 
          name: 'Colombia Mish Mish',
          tastingNotes: 'Apricot Jam, Raspberry, Lychee.', 
          price: '57', 
          image: 'https://iili.io/qjAjZAJ.png', 
          ingredients: 'Pour-over brewing method', 
          calories: 5,
          branch: 'Dubai',
          status: 'Available'
        },
        { 
          id: 'fil_colombia_s_4', 
          name: 'Colombia Sweet Dreams Decaf',
          tastingNotes: 'Passion fruit cheesecake, Milk chocolate, Molasses', 
          price: '38', 
          image: 'https://iili.io/qjAjZAJ.png', 
          ingredients: 'Pour-over brewing method', 
          calories: 5,
          branch: 'Dubai',
          status: 'Available'
        }
      ]
    },
    {
      id: 'fruits-grains',
      title: 'Fruits, Grains',
      items: [
        findItem('healthy-bowls', 'bw1')!, // Acai Bowl
        findItem('healthy-bowls', 'bw3')!, // Chia Pudding
        findItem('healthy-bowls', 'bw2')!, // Overnight Oats
        findItem('healthy-bowls', 'bw5')!, // Apple and Cinnamon Muesli
        findItem('healthy-bowls', 'bw4')!, // Exotic Sunrise
      ].filter(Boolean)
    },
    {
      id: 'baked-goods',
      title: 'Baked Goods',
      items: [
        findItem('from-our-bakery', 'fob_turkey')!, // Turkey Cheese Danish
        findItem('from-our-bakery', 'fob_zaatar')!, // Zaatar & Labneh
        findItem('from-our-bakery', 'fob_burrata')!, // Buratta Pizza
        { id: 'bg_3cheese', name: '3 Cheese Croissant', price: '17', image: 'https://iili.io/qqECJAN.jpg', ingredients: 'Cheddar, mozzarella, and parmesan', calories: 350 }, // 3 Cheese Croissant
        { id: 'bg_plain', name: 'Plain Croissant', price: '18', image: 'https://iili.io/qqX0EeR.png', ingredients: 'Classic butter croissant', calories: 280 }, // Plain Croissant
        findItem('from-our-bakery', 'fob_almond')!, // Almond Croissant
        findItem('desserts', 'd_choc_chip')!, // Chocolate Chip Cookies
        findItem('from-our-bakery', 'fob_choc')!, // Chocolate Croissant
      ].filter(Boolean)
    },
    {
      id: 'desserts',
      title: 'Desserts',
      items: [
        findItem('desserts', 'd_aseeda')!, // Aseeda
        { id: 'd_honey', name: 'Honey Cake', price: '39.20', image: 'https://iili.io/qqXWIea.png', ingredients: 'Layers of honey sponge and cream', calories: 450 }, // Honey Cake
        { id: 'd_peanut', name: 'Peanut Choco Tart', price: '39.20', image: 'https://iili.io/qqXGUIR.png', ingredients: 'Rich chocolate tart with peanut butter', calories: 480 }, // Peanut Choco Tart
        { id: 'd_tiramisu', name: 'Tiramisu Bowl', price: '39.20', image: 'https://iili.io/qnnTv0G.png', ingredients: 'Classic Italian dessert with coffee', calories: 400 }, // Tiramisu Bowl
        findItem('desserts', 'd_vanilla_pud')!, // Vanilla Pudding
        findItem('desserts', 'd_banana_pud')!, // Banana Pudding
        findItem('desserts', 'STICKY DATE')!, // Sticky Dates
        findItem('desserts', 'MUHALABIYA')!, // Muhalabiya
      ].filter(Boolean)
    },
    {
      id: 'sandwiches',
      title: 'Sandwiches & Bagels',
      items: [
        { id: 'sw_bacon', name: 'Bacon & Egg Cheese Bun', price: '44', image: 'https://iili.io/qqEAsNj.jpg', ingredients: 'Brioche bun with crispy bacon, scrambled egg, cheddar cheese, kimchi ketchup.', calories: 550 },
        { id: 'sw_tuna', name: 'Tunacado', price: '38', image: 'https://iili.io/qqEgPdN.jpg', ingredients: "Joe's bread, pesto mayo, tuna mix, tomato slice, avocado slice.", calories: 480 },
        { id: 'sw_chick', name: 'Chicken & Avocado Croissant', price: '42', image: 'https://iili.io/qqG2qR1.png', ingredients: 'Grilled chicken, fresh avocado, croissant', calories: 520 },
        { id: 'sw_club', name: 'Cartel Club Sandwich', price: '38', image: 'https://iili.io/qqEPTpS.jpg', ingredients: 'White sliced bread, chipotle mayo, cheddar, lettuce, grilled chicken, bacon, fried egg, tomato slice.', calories: 600 },
        { id: 'sw_brisket', name: 'Brisket Blaze', price: '45', image: 'https://iili.io/qqERigt.jpg', ingredients: 'Brioche toast, chipotle mayo, cheddar, brisket, caramelized onion, jalapeño.', calories: 650 },
        { id: 'sw_shrimp', name: 'Shrimp Toast', price: '35', image: 'https://iili.io/qqEYw12.jpg', ingredients: 'Sautéed shrimp on brioche toast', calories: 420 },
        { id: 'sw_italian', name: 'Cold Cut Italian', price: '38', image: 'https://iili.io/qqEieVe.png', ingredients: 'White slice bread with pesto oil, fresh mozzarella, tomato slice, tartufo salami, chorizo, baby Rocca, sun-dried tomatoes, balsamic glaze, organic olive oil.', calories: 580 },
      ].filter(Boolean)
    },
    {
      id: 'eggs-more',
      title: 'Eggs & More',
      items: [
        { id: 'egg_avo', name: 'Avocado Toast', price: '45', image: 'https://iili.io/qqGqaMg.jpg', ingredients: 'Sourdough with smashed avocado, whipped feta, Pico de Gallo, pine nuts, parmesan, coriander, dill leaves, mix sesame seeds, lime wedges, chili flakes, dukka, and poached egg.', calories: 380 },
        { id: 'egg_ben', name: 'Eggs Benedict', price: '46', image: 'https://iili.io/qqGfw3x.jpg', ingredients: 'English muffins with cream cheese, tomato sauce, smoky bacon, poached eggs, miso hollandaise, chives.', calories: 450 },
        { id: 'egg_truffle', name: 'Scrambled Truffle Eggs', price: '54', image: 'https://iili.io/qqGqpDP.jpg', ingredients: 'Creamy scrambled eggs on brioche slice with truffle mayo, truffle oil, and shaved black truffle.', calories: 420 },
        { id: 'egg_cro', name: 'EGG & AVO CROISSANT', price: '38', image: 'https://iili.io/qqXARp9.jpg', ingredients: 'Plain croissant, cream cheese mix, smashed avocado, tomato sauce, poached eggs sprinkled with pumpkin seeds and mix sesame seeds.', calories: 490 },
        { id: 'egg_nduja', name: 'Nduja Chili Scrambled Tornado Eggs', price: '52', image: 'https://iili.io/qqGClvR.jpg', ingredients: 'garlic and butter pita bread, creamy mayo, mama’s sauce, smoked yogurt, spicy beef nduja, microgreens, and a drizzle of smoked oil.', calories: 450 },
        { id: 'egg_big', name: 'Big Breakfast Homemade', price: '65', image: 'https://iili.io/qqVHZ1R.png', ingredients: 'hash brown potatoes, red beans, sautéed portobello mushrooms, wagyu beef sausage, smoked veal bacon, roasted vine tomatoes, two sunny side up eggs on a slice of brioche bread, (eggs your way: scrambled, poached, sunny side up).', calories: 850 },
        { id: 'egg_aussie', name: 'Aussie Benedict', price: '58', image: 'https://iili.io/qqMpPzG.png', ingredients: 'brioche bun with white barbecue sauce, pulled beef, 2 poached eggs, miso hollandaise, crispy onions & spring roll, chives.', calories: 580 },
        { id: 'egg_turkish', name: 'Minted yogurt', price: '46', image: 'https://iili.io/qqGBwmB.jpg', ingredients: 'homemade tomato jam, poached eggs, mint pesto, chilly butter served with 2 slices of toasted zaatar sourdough.', calories: 400 },
      ].filter(Boolean)
    },
    {
      id: 'salads',
      title: 'Greens (Salad)',
      items: [
        { id: 'sal_caesar', name: 'Caesar-Style Salad', price: '42', image: 'https://iili.io/qqE6hg4.jpg', ingredients: 'little gem lettuce, creaser dressing, crouton, parmesan cheese, crushed pistachio (add Ons: poached egg, bacon or chicken).', calories: 350 },
      ].filter(Boolean)
    },
    {
      id: 'smoothies',
      title: 'Smoothies',
      items: [
        { id: 'sm_acai', name: 'Açaí Smoothie', price: '42', image: 'https://iili.io/qnBllxp.jpg', ingredients: 'Acai berry, banana, strawberry, peanut butter, coconut water, oat milk, and apple juice.', calories: 280 },
        { id: 'sm_pit', name: 'Pitaya Smoothie', price: '42', image: 'https://iili.io/qqEH3rP.jpg', ingredients: 'Apple juice, lemon juice, pitaya, frozen pineapple, banana, and lemon electrolytes.', calories: 270 },
        { id: 'sm_coc', name: 'Blue Cloud Smoothie', price: '42', image: 'https://iili.io/qqE9JUX.jpg', ingredients: 'Coconut milk, pineapple, banana, avocado, vanilla stevia, collagen, peanut butter, blue spirulina, and on top coconut cloud cream.', calories: 300 },
        { id: 'sm_straw', name: 'Strawberry Glaze Smoothie', price: '42', image: 'https://iili.io/qq1mS5b.jpg', ingredients: 'Almond milk, frozen strawberries, bananas, dates, maple syrup, collagen, vanilla stevia, sea moss gel, strawberry sauce, and coconut cloud cream.', calories: 260 },
      ].filter(Boolean)
    },
    BASE_MENU.find(c => c.id === 'juices')!,
    {
      id: 'signature-drinks',
      title: 'Signature drink',
      items: [
        findItem('signature-drinks', 'sig3')!, // Matcha Cloud
        { id: 'sig_pink_cloud', name: 'Pink Cloud Matcha', price: '38', image: 'https://iili.io/q2ugtIa.png', ingredients: 'Matcha cream, matcha dust, coconut water, strawberry infusion', calories: 230 },
        { id: 'sig_blue_cloud', name: 'Blue Cloud Matcha', price: '38', image: 'https://iili.io/q2ugtIa.png', ingredients: 'Matcha cream, matcha dust, coconut water, blue spirulina', calories: 230 },
        findItem('signature-drinks', 'sig2')!, // Matcha Latte
        findItem('signature-drinks', 'sig_matcha_shake')!, // Matcha Shake
        findItem('signature-drinks', 'sig8')!, // Tanzanian Hot Chocolate
        findItem('signature-drinks', 'sig_baby_shark')!, // Baby Shark
        { id: 'sig_espresso_martini', name: "Cartel's Espresso Martini", price: '42', image: 'https://iili.io/q2uUQV4.jpg', ingredients: 'Double shot espresso, vanilla syrup, shaken over ice', calories: 150 },
        findItem('signature-drinks', 'sig_espresso_shake')!, // Espresso Shake
      ].filter(Boolean)
    }
  ];
};

// MULTI-BRANCH DATA DICTIONARY
// Key = Branch ID, Value = Specific Menu Structure
export const BRANCH_MENUS: BranchMenuDirectory = {
  // Dubai Mirdif
  'mirdif': applyGoldenRuleLayout(createMirdifMenu()),
  
  // Dubai
  'dubai': applyGoldenRuleLayout(createDubaiMenu()),

  // Al Qana
  'alqana': applyGoldenRuleLayout(createAlQanaMenu()),

  // Khalifa City
  'khalifa': applyGoldenRuleLayout(createKhalifaMenu()),

  // Marina
  'marina': applyGoldenRuleLayout(createMarinaMenu()),

  // Al Bateen
  'albateen': applyGoldenRuleLayout(createAlBateenMenu()),
};

// DEFAULT EXPORT FOR BACKWARD COMPATIBILITY & TYPES
export const MENU_DATA = BASE_MENU;