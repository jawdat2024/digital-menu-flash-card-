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
    workingHours: '7:00 AM - 12:00 AM'
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
    workingHours: '7:00 AM - 12:00 AM'
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
    workingHours: '7:00 AM - 1:00 AM'
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
    workingHours: '6:00 PM - 1:00 AM'
  },
  {
    id: 'mirdif',
    name: 'CARTEL Dubai Mirdif',
    address: '35 60C St, Mirdif, Dubai',
    coordinates: { lat: 25.2269, lng: 55.4168 },
    theme: 'urban',
    description: 'Modern industrial urban chic with neon accents.',
    specialty: 'Urban Blends',
    image: 'https://iili.io/fy9C8Bt.jpg',
    workingHours: '8:00 AM - 12:00 AM'
  }
];

// Standardized Espresso Bean Options
const ESPRESSO_BEAN_OPTIONS = [
  { 
    id: 'bean_classic', 
    name: 'The Classic (Nicaragua)', 
    price: 0, 
    description: 'Velvety milk chocolate, sugar cane sweetness, and a finish of candied peanuts.' 
  },
  { 
    id: 'bean_modern', 
    name: 'The Modern (Coconutella)', 
    price: 5, 
    description: 'Vibrant coconut cream layered with milk chocolate and rich toffee caramel.' 
  },
  { 
    id: 'bean_fruity', 
    name: 'The Fruity (Kenya Gichatha)', 
    price: 1, 
    description: 'Blackcurrants, blackberries & raisins.' 
  },
  { 
    id: 'bean_decaf', 
    name: 'The Decaf (Sweet Dream)', 
    price: 0, 
    description: 'Indulgent passion fruit cheesecake notes with milk chocolate and deep molasses.' 
  }
];

// Base menu used to populate branches (simulating database seed)
const BASE_MENU: MenuCategory[] = [
  {
    id: 'highly-recommend',
    title: 'HIGHLY recommend',
    items: [
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
        id: 'd_decon_cheese', 
        name: 'Deconstructed Cheese Cake', 
        ingredients: 'A light and creamy eggless yogurt vanilla cheesecake served deconstructed, layered with crunchy almond crumble.with mixed berries compote', 
        price: '39.20', 
        image: 'https://iili.io/q2hets4.png',
        calories: 380
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
        name: 'CARTEL Matcha Cloud',
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
        id: 'umali', 
        name: 'CARTEL UM ALI ', 
        ingredients: '', 
        price: '39.20',
        image: 'https://iili.io/q2hAbKN.png',
        calories:450 
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
        image: 'https://iili.io/q2ubl7j.jpg',
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
        image: 'https://iili.io/q2i9bwX.png',
        calories: 340
      },
    ]
  },
  {
    id: 'filter',
    title: 'Filter Coffee',
    items: [
      {
        id: 'fil_kenya_kirimara',
        name: 'Kirimara AA ',
        origin: 'Kenya',
        farm: 'Kirimara Estate',
        tastingNotes: 'Bright acidity with notes of wild cherry, brown sugar, and raisins.',
        ingredients: 'Pour-over brewing method (V60/Chemex) to highlight clarity and aroma.',
        price: '46',
        image: 'https://iili.io/qKemkeS.png',
        tags: ['Seasonal Rotation'],
        calories: 5
      },
      {
        id: 'fil_col_mish',
        name: 'Mish Mish',
        origin: 'Colombia',
        farm: 'Finca El Paraiso',
        tastingNotes: 'Intense apricot and peach notes with a creamy body.',
        ingredients: 'Pour-over brewing method (V60/Chemex).',
        price: '57',
        image: 'https://iili.io/qKkHXu2.png',
        tags: ['Staff Pick'],
        calories: 5
      },
      {
        id: 'fil_costa_canet',
        name: 'Canet Chopin',
        origin: 'Costa Rica',
        farm: 'Canet Musician Series',
        tastingNotes: 'CACAO FIG COMPOTE HONEY CHERRY',
        ingredients: 'Pour-over brewing method (V60/Chemex).',
        price: '57',
        image: 'https://iili.io/qKkdOdb.png',
        calories: 5
      },
      {
        id: 'fil_col_sidra',
        name: 'Bourbon Sidra',
        origin: 'Colombia',
        farm: 'Finca La Palma',
        tastingNotes: 'Exotic tropical fruits, red apple, and a wine-like acidity.',
        ingredients: 'Pour-over brewing method (V60/Chemex).',
        price: '46',
        image: 'https://iili.io/qKk3AKX.png',
        calories: 5
      },
      {
        id: 'fil_panama_gesha',
        name: 'Gesha Cordillera',
        origin: 'Panama',
        farm: 'Volcan Baru',
        tastingNotes: 'Jasmine, bergamot, and sweet mandarin with a tea-like body.',
        ingredients: 'Pour-over brewing method (V60/Chemex).',
        price: '65',
        image: 'https://iili.io/qKeQ4ja.png',
        tags: ['Premium'],
        calories: 5
      },
      {
        id: 'fil_decaf',
        name: 'Sweet Dreams Decaf',
        origin: 'Colombia',
        farm: 'Various Smallholders',
        tastingNotes: 'PASSTION FRUTIT CHEESECAKE MILK CHOCOLATE MOLASSES',
        ingredients: 'Pour-over brewing method (V60/Chemex).',
        price: '38',
        image: 'https://iili.io/qKkqSTJ.png',
        calories: 5
      },
      {
        id: 'fil_eth_cb',
        name: 'Ethiopia Cold Brew',
        origin: 'Ethiopia',
        tastingNotes: 'Apricot, Honey, Pear',
        ingredients: 'Slow-steeped cold water extraction for 12+ hours.',
        price: '38',
        image: 'https://iili.io/fUAAQ07.png',
        calories: 10
      },
      {
        id: 'fil_col_cb',
        name: 'Colombia Cold Brew',
        origin: 'Colombia',
        tastingNotes: 'Hazelnut, Orange, Molasses',
        ingredients: 'Slow-steeped cold water extraction for 12+ hours.',
        price: '38',
        image: 'https://iili.io/qKYaxff.png',
        calories: 10
      },
      {
        id: 'fil_ken_cb',
        name: 'Kenya Cold Brew',
        origin: 'Kenya',
        tastingNotes: 'Wild Cherry, Brown Sugar, Raisins',
        ingredients: 'Slow-steeped cold water extraction for 12+ hours.',
        price: '38',
        image: 'https://iili.io/f8yS6jj.jpg',
        calories: 10
      }
    ]
  },
  {
    id: 'filter-taps',
    title: 'Filter Taps Kegerator',
    items: [
      {
        id: 'tap_col_straw',
        name: 'Colombia Strawberry',
        ingredients: 'Filter coffee on tap',
        price: '36',
        image: 'https://iili.io/qKka1vj.png',
        calories: 5
      },
      {
        id: 'tap_cuban',
        name: 'Cuban Cigar',
        ingredients: 'Filter coffee on tap',
        price: '41',
        image: 'https://iili.io/qKkRw5Q.png',
        calories: 5
      },
      {
        id: 'tap_eth_rog',
        name: 'Ethiopia Rogisha',
        ingredients: 'Filter coffee on tap',
        price: '41',
        image: 'https://iili.io/qKkcmJa.png',
        calories: 5
      }
    ]
  },
  {
    id: 'espresso',
    title: 'Espresso',
    description: 'Our espresso selection features four distinct profiles:\n\n• The Classic (Nicaragua): Velvety milk chocolate, sugar cane sweetness.\n• The Modern (Coconutella): Vibrant coconut cream, milk chocolate.\n• The Fruity (Kenya Gichatha): Blackcurrants, blackberries & raisins.\n• The Decaf (Sweet Dream): Passion fruit cheesecake notes.',
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
        image: 'https://iili.io/fUCZ079.png',
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
      }
    ]
  },
  {
    id: 'healthy-bowls',
    title: 'Healthy Bowls',
    items: [
      { 
        id: 'bw1', 
        name: 'CARTEL Acai Bowl', 
        ingredients: 'Açaí berry, peanut butter, mango, kiwi, granola ,dragon fruit, banana, strawberries, blueberries, passion fruit.', 
        price: '48',
        image: 'https://iili.io/fvyuItf.jpg',
        calories: 450
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
        id: 'bw3', 
        name: 'CARTEL Chia Pudding', 
        ingredients: 'Coconut chia pudding, Greek yogurt, strawberries, blackberries, raspberries, blueberries, mixed berry compote,sesame toile, whipped chocolate shaved dark chocolate ,honey', 
        price: '38',
        image: 'https://iili.io/fvyC2gs.jpg',
        calories: 320
      },
      { 
        id: 'bw4', 
        name: 'CARTEL Exotic Sunrise', 
        ingredients: 'Coconut yogurt, homemade granola, passion fruit, mango slices, exotic gel, and lime zest.', 
        price: '42',
        image: 'https://iili.io/fvyol0F.jpg',
        calories: 360
      },
      { 
        id: 'bw5', 
        name: 'CARTEL Apple Cinnamon Muesli', 
        ingredients: 'Cinnamon yogurt, granola, apple crumble, soft caramel, berry compote, honeycomb, raspberries, blueberries, blackberries, apple crisp,  mixed nuts, and organic honey drizzle', 
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
    title: 'Signature Drinks',
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
        name: 'CARTEL Matcha Cloud',
        ingredients: 'matcha cream , matcha dust. coconut water',
        price: '38',
        image: 'https://iili.io/q2ugtIa.png',
        calories: 220
      },
      {
        id: 'sig_gt',
        name: 'CARTEL Organic Green Tea',
        ingredients: '',
        price: '24',
        image: 'https://iili.io/fUrxg0F.png',
        calories: 5,
        customizations: [
          {
            id: 'tea_add',
            title: 'Add-ons',
            options: [
              { id: 'opt_std', name: 'Standard', price: 0 },
              { id: 'opt_mint', name: 'Mint leaves', price: 0 },
              { id: 'opt_honey', name: 'Honey', price: 2 },
              { id: 'opt_lemon', name: 'Lemon slice', price: 0 }
            ]
          }
        ]
      },
      {
        id: 'sig_eg',
        name: 'CARTEL Earl Grey Tea',
        ingredients: '',
        price: '24',
        image: 'https://iili.io/fUrCzo7.png',
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
        id: 'sig2',
        name: 'CARTEL Matcha Latte',
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
   
      {
        id: 'sig5',
        name: 'CARTEL Matcha Shake',
        ingredients: '.',
        price: '40',
        image: 'https://iili.io/q2ugGzG.jpg',
        calories: 320,
        disableTemperature: true,
        customizations: [
          {
            id: 'ms_milk',
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
        id: 'sig6',
        name: 'CARTEL Espresso Shake',
        ingredients: 'Double shot espresso blended with vanilla ice cream, you favorite milk .',
        price: '40',
        image: 'https://iili.io/q2uUQV4.jpg',
        calories: 310,
        disableTemperature: true,
        customizations: [
          {
            id: 'es_beans',
            title: 'Bean Choice',
            options: ESPRESSO_BEAN_OPTIONS
          },
          {
            id: 'es_milk',
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
        id: 'sig7',
        name: 'CARTEL Baby Shark',
        ingredients: '',
        price: '26',
        image: 'https://iili.io/q2uUxn4.jpg',
        calories: 240
      },
     
    ]
  },
  {
    id: 'from-our-bakery',
    title: 'From Our Bakery',
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

// MULTI-BRANCH DATA DICTIONARY
// Key = Branch ID, Value = Specific Menu Structure
export const BRANCH_MENUS: BranchMenuDirectory = {
  // Dubai Mirdif
  'mirdif': createStandardMenu(),
  
  // Al Qana
  'alqana': createStandardMenu(),

  // Khalifa City
  'khalifa': createStandardMenu(),

  // Marina
  'marina': createStandardMenu(),

  // Al Bateen
  'albateen': createStandardMenu(),
};

// DEFAULT EXPORT FOR BACKWARD COMPATIBILITY & TYPES
export const MENU_DATA = BASE_MENU;