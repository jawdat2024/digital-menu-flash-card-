"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BRANCH_ESPRESSO_BEANS = exports.MENU_DATA = exports.BRANCH_MENUS = exports.sortFilteredCoffeeByPrice = exports.createStandardMenu = exports.BRANCH_DATA = void 0;
/*
  ========================================
  CARTEL MENU DATA SYSTEM
  ========================================
*/
exports.BRANCH_DATA = [
    {
        id: "alain",
        name: "CARTEL Al Ain",
        address: "Al Ain",
        coordinates: { lat: 24.2075, lng: 55.7447 },
        theme: "warm",
        description: "CARTEL Al Ain.",
        specialty: "Specialty Coffee",
        image: "",
        workingHours: "",
    },
    {
        id: "khalifa",
        name: "CARTEL Khalifa City",
        address: "5 Al Almas 2 St, Khalifa City, SW18, Abu Dhabi",
        coordinates: { lat: 24.4239, lng: 54.5728 },
        theme: "warm",
        description: "A sanctuary of specialty coffee with warm tones and minimalist vibes.",
        specialty: "Signature Blends",
        image: "",
        workingHours: "",
    },
    {
        id: "alqana",
        name: "CARTEL Al Qana",
        address: "Al Qana Walk, Rabdan Area, Abu Dhabi",
        coordinates: { lat: 24.4175, lng: 54.492 },
        theme: "aquatic",
        description: "Waterfront luxury inspired by the deep ocean.",
        specialty: "Single Origin",
        image: "",
        workingHours: "",
    },
    {
        id: "albateen",
        name: "CARTEL Al Bateen",
        address: "469 Al Khaleej Al Arabi St, Al Khalidiyah, W17 02, Abu Dhabi",
        coordinates: { lat: 24.459, lng: 54.3418 },
        theme: "luxury",
        description: "A premium lounge for your evening coffee.",
        specialty: "Late Night Coffee",
        image: "",
        workingHours: "",
    },
    {
        id: "marina",
        name: "CARTEL Marina",
        address: "38 Mohammed Bin Mejren Al Marar St, Al Kasir, Al Marina, Abu Dhabi",
        coordinates: { lat: 24.4764, lng: 54.3211 },
        theme: "nautical",
        description: " WE KNOW OUR NOTES .",
        specialty: "BENSE EXPERTS ",
        image: "",
        workingHours: "",
    },
    {
        id: "mirdif",
        name: "CARTEL Dubai Mirdif",
        address: "35 60C St, Mirdif, Dubai",
        coordinates: { lat: 25.2269, lng: 55.4168 },
        theme: "urban",
        description: "Modern industrial urban chic with neon accents.",
        specialty: "Urban Blends",
        image: "",
        workingHours: "",
    },
];
// Base menu used to populate branches (simulating database seed)
// Standardized Espresso Bean Options
const ESPRESSO_BEAN_OPTIONS = [
    {
        id: "bean_costa_rica",
        name: "Costa Rica",
        price: 5,
        description: "",
    },
    {
        id: "bean_brazil_chocolate",
        name: "Brazil Chocolate",
        price: 1,
        description: "",
    },
    {
        id: "bean_honduras",
        name: "Honduras",
        price: 0,
        description: "",
    },
    {
        id: "bean_colombia_decaf",
        name: "Colombia Sweet Dreams (Decaf)",
        price: 0,
        description: "",
    },
    {
        id: "bean_yemen",
        name: "Yemen - Sharki Haraz",
        price: 10,
        description: "",
    },
];
const BASE_MENU = [
    {
        id: "fruits-and-grinds",
        title: "FRUIT & GRINDS",
        items: [
            {
                id: "fg_overnight_oat",
                name: "Overnight Oat",
                price: "42",
                image: "https://iili.io/fvyqMn1.jpg",
                ingredients: "Oats are soaked in oat milk with mixed-berry compote, peanut butter, and cashews.",
            },
            {
                id: "fg_apple_cinnamon",
                name: "Apple Cinnamon",
                price: "42",
                image: "https://iili.io/qttz2I4.jpg",
                ingredients: "Cinnamon yogurt, granola, apple crumble, soft caramel, berry compote, honeycomb, raspberries, blueberries, blackberries, apple crisp, mixed nuts, and organic honey drizzle.",
            },
            {
                id: "fg_exotic_sunrise",
                name: "Exotic Sunrise",
                price: "42",
                image: "https://iili.io/qtt1Pz7.jpg",
                ingredients: "Coconut yogurt, homemade granola, passion fruit, mango slices, exotic gel, and lime zest.",
            },
            {
                id: "fg_chia_bowl",
                name: "CHIA PUDDING",
                price: "38",
                image: "https://iili.io/qttcGUl.jpg",
                ingredients: "Coconut chia pudding, Greek yogurt, strawberries, blackberries, raspberries, blueberries, mixed-berry compote, sesame toil, whipped chocolate, and shaved dark chocolate with an organic honey drizzle.",
            },
            {
                id: "fg_pure_acai",
                name: "Pure Açaí Bowl",
                price: "48",
                image: "https://iili.io/fvyuItf.jpg",
                ingredients: "Açaí berry, peanut butter, mango, kiwi, dragon fruit, banana, strawberries, blueberries, passion fruit.",
            }
        ]
    },
    {
        id: "highly-recommend",
        title: "BEST SELLER",
        items: [
            {
                id: "bw6",
                name: "Exotic Sunrise",
                ingredients: "Coconut yogurt, homemade granola, passion fruit, mango slices, exotic gel, and lime zest.",
                price: "42",
                image: "https://iili.io/qtt1Pz7.jpg",
                calories: 360,
            },
            {
                id: "bw7",
                name: "Apple Cinnamon Muesli",
                ingredients: "Cinnamon yogurt, granola, apple crumble, soft caramel, berry compote, honeycomb, raspberries, blueberries, blackberries, apple crisp, mixed nuts, and organic honey drizzle.",
                price: "42",
                image: "https://iili.io/qttz2I4.jpg",
                calories: 410,
            },
            {
                id: "bw2",
                name: "Overnight Oats",
                ingredients: "Oats are soaked in oat milk with mixed berry compote, peanut butter, and cashew nuts.",
                price: "42",
                image: "https://iili.io/fvyqMn1.jpg",
                calories: 380,
            },
            {
                id: " sw_italian",
                name: "Cold Cut Italian",
                ingredients: "White slice bread with pesto oil, fresh mozzarella, tomato slice, tartufo salami, chorizo, baby Rocca, sun-dried tomatoes, balsamic glaze, organic olive oil",
                price: "38",
                image: "https://iili.io/qqEieVe.png",
                calories: 580,
            },
            {
                id: "sig8",
                name: "Tanzanian Hot Chocolate",
                ingredients: "Single-origin Tanzanian cacao, rich and velvety steamed milk, served with a chocolate stick.",
                price: "32",
                image: "https://iili.io/q2u8XqB.jpg",
                calories: 290,
            },
            {
                id: "sig3",
                name: "Matcha Cloud",
                ingredients: "matcha cream , matcha dust. coconut water",
                price: "38",
                image: "https://iili.io/BBR55tj.jpg",
                calories: 220,
            },
        ],
    },
    {
        id: "desserts",
        title: "Dessert",
        items: [
            {
                id: "d_san_seb",
                name: "Crust San Sebastian",
                ingredients: "Basque-style burnt cheesecake, creamy center, caramelized exterior",
                price: "39.20",
                image: "https://iili.io/q2hnbp4.png",
                calories: 600,
            },
            {
                id: "d_crepe_rolls",
                name: "Crepe Rolls",
                ingredients: "It’s made with our signature crepe mix, crisp on the outside and delicately tender inside, filled with Valrhona Dulcey chocolate and finished with smooth milk chocolate sauce. ✨",
                price: "42",
                image: "https://iili.io/qxFnyvt.png",
                status: 'coming_soon',
                calories: 0,
            },
            {
                id: "d_choc_chip",
                name: "Chocolate Chip Cookie",
                ingredients: "Chewy cookie loaded with premium chocolate chunks",
                price: "16",
                image: "https://iili.io/qqMwcbf.png",
                calories: 320,
            },
            {
                id: "d_aseeda",
                name: "Aseeda",
                ingredients: "Modern twist on traditional Aseeda, saffron, cardamom, date molasses, roasted nuts",
                price: "43",
                image: "https://i.postimg.cc/cLJWz07y/asseda.jpg",
                calories: 460,
            },
            {
                id: "d_vanilla_pud",
                name: "Vanilla Pudding",
                ingredients: "Silky smooth vanilla custard, Madagascar vanilla bean, sweet cream",
                price: "39.20",
                image: "https://iili.io/C27jV9e.jpg",
                calories: 380,
            },
            {
                id: "d_banana_pud",
                name: "Banana Pudding",
                ingredients: "Layers of vanilla wafers, fresh bananas, creamy vanilla pudding, whipped cream",
                price: "38",
                image: "https://iili.io/q2uy95b.jpg",
                calories: 420,
            },
            {
                id: "d_1000",
                name: "1000 Layers( Mille Fuille)",
                ingredients: "Crispy layers of puff pastry with caramels sauce and  vanilla cream",
                price: "39.20",
                image: "https://iili.io/q2ATUt2.png",
                calories: 440,
            },
            {
                id: "STICKY DATE",
                name: "Sicky Date ",
                ingredients: "Warm, treacle-infused date cake, house-made candied pecans, and London Dairy Vanilla Ice Cream. Rich, velvety, and classic",
                price: "39.20",
                image: "https://iili.io/q2PPbjV.png",
                calories: 310,
            },
            {
                id: "d_fudge_cookie",
                name: "Chocolate Fudge Cookie",
                ingredients: "Rich and fudgy dark chocolate cookie",
                price: "21",
                image: "https://iili.io/qqMhN2e.png",
                calories: 340,
            },
        ],
    },
    {
        id: "filter",
        title: "Filter Coffee",
        items: [
            {
                id: "fil_eth_guji",
                name: "Colombia - Bourbon Sidra",
                tastingNotes: "Red Grapes, Watermelon, Hard Candy, Raspberry.",
                ingredients: "Pour-over brewing method",
                price: "46",
                image: "https://iili.io/qLf9mXt.jpg",
                calories: 5,
                status: 'available',
            },
            {
                id: "fil_cuban",
                name: "Costa Rica - Canet Chopin",
                tastingNotes: "Cacao, Fig Compote, Honey, Cherry.",
                ingredients: "Pour-over brewing method",
                price: "57",
                image: "https://iili.io/qLf9mXt.jpg",
                calories: 5,
                status: 'available',
            },
            {
                id: "fil_kenya_kirimara",
                name: "Kenya Kirimara",
                tastingNotes: "Brown Sugar, Wild Cherry, Raisins.",
                ingredients: "Pour-over brewing method",
                price: "46",
                image: "https://iili.io/qLf9mXt.jpg",
                calories: 5,
                status: 'available',
            },
            {
                id: "fil_col_mish",
                name: "Colombia Mish Mish",
                tastingNotes: "Apricot Jam, Raspberry, Lychee.",
                ingredients: "Pour-over brewing method",
                price: "57",
                image: "https://iili.io/qLf9mXt.jpg",
                calories: 5,
                status: 'available',
            },
            {
                id: "fil_col_black",
                name: "Panamá Cordillera Gesha",
                tastingNotes: "Cantaloupe, Honey, Berries, And Lemongrass.",
                ingredients: "Pour-over brewing method",
                price: "65",
                image: "https://iili.io/qLf9mXt.jpg",
                calories: 5,
                status: 'available',
            },
            {
                id: "fil_decaf",
                name: "Colombia Sweet Dreams (Decaf)",
                tastingNotes: "Passion fruit cheesecake, Milk chocolate, Molasses",
                ingredients: "Passion fruit cheesecake, Milk chocolate, Molasses",
                price: "38",
                image: "https://iili.io/qLf9mXt.jpg",
                calories: 5,
                status: 'available',
            },
            {
                id: "cb_eth",
                name: "Ethiopia Cold Brew",
                origin: "Ethiopia",
                tastingNotes: "Apricot, Pear, Honey.",
                ingredients: "Slow-steeped cold water extraction for 12+ hours.",
                price: "38",
                image: "https://iili.io/B3OHMFV.jpg",
                calories: 10,
                status: 'available',
            },
            {
                id: "cb_col",
                name: "Colombia Cold Brew",
                origin: "Colombia",
                tastingNotes: "Apricot Jam, Raspberry, Lychee",
                ingredients: "Slow-steeped cold water extraction for 12+ hours.",
                price: "38",
                image: "https://iili.io/C27AgUB.jpg",
                calories: 10,
                status: 'available',
            },
            {
                id: "cb_ken",
                name: "Kenya Cold Brew",
                origin: "Kenya",
                tastingNotes: "Brown Sugar, Wild Cherry, Raisins.",
                ingredients: "Slow-steeped cold water extraction for 12+ hours.",
                price: "38",
                image: "https://iili.io/B3Ns6UG.jpg",
                calories: 10,
                status: 'available',
            },
            {
                id: "fil_new_0",
                name: "Colombia - Anaerobic Banana",
                tastingNotes: "Banana Bread, Milk Chocolate, Toffee.",
                ingredients: "Pour-over brewing method",
                price: "TBD",
                image: "https://iili.io/qLf9mXt.jpg",
                calories: 5,
                status: 'available'
            },
            {
                id: "fil_new_1",
                name: "Colombia - La Vega Farm",
                tastingNotes: "Jaggery, Elderberry, Cantaloupe.",
                ingredients: "Pour-over brewing method",
                price: "TBD",
                image: "https://iili.io/qLf9mXt.jpg",
                calories: 5,
                status: 'available'
            },
            {
                id: "fil_new_2",
                name: "Yemen - Shariq Haraz",
                tastingNotes: "Chestnut, Cola, Red Grapes.",
                ingredients: "Pour-over brewing method",
                price: "TBD",
                image: "https://iili.io/qLf9mXt.jpg",
                calories: 5,
                status: 'available'
            },
            {
                id: "fil_new_3",
                name: "Colombia - Rum Brule",
                tastingNotes: "Golden Raisins, Molasses, Custard, Oak.",
                ingredients: "Pour-over brewing method",
                price: "TBD",
                image: "https://iili.io/qLf9mXt.jpg",
                calories: 5,
                status: 'available'
            },
            {
                id: "fil_new_4",
                name: "Colombia - Eucalyptus",
                tastingNotes: "Mint Chocolate, Cinnamon, Caramel.",
                ingredients: "Pour-over brewing method",
                price: "TBD",
                image: "https://iili.io/qLf9mXt.jpg",
                calories: 5,
                status: 'available'
            },
        ],
    },
    {
        id: "filter-taps",
        title: "Filter Taps ",
        items: [
            {
                id: "tap_col_straw",
                name: "Colombia Strawberry",
                tastingNotes: "Strawberry Jam, Honey, Milk Chocolates.",
                ingredients: "",
                price: "41",
                image: "https://iili.io/qKkcmJa.png",
                calories: 5,
            },
            {
                id: "tap_cuban",
                name: "Cuban Cigar",
                tastingNotes: "Caramel popcorn, fresh tobacco, Deep Earthy Undertones",
                ingredients: "",
                price: "41",
                image: "https://iili.io/qKkRw5Q.png",
                calories: 5,
            },
            {
                id: "tap_eth_rog",
                name: "Ethiopia Rogisha",
                tastingNotes: "Apricot, Pear, Honey.",
                ingredients: "",
                price: "36",
                image: "https://iili.io/qKka1vj.png",
                calories: 5,
            },
        ],
    },
    {
        id: "espresso",
        title: "Espresso",
        description: "Our espresso selection features distinct profiles:\n\n• BLIND 469\n• Amazonic Soul\n• Yemen - Sharki Haraz",
        items: [
            {
                id: "esp1",
                name: "Espresso",
                ingredients: "",
                price: "24",
                image: "https://iili.io/BBB0NcJ.jpg",
                calories: 5,
                customizations: [
                    {
                        id: "bean_choice",
                        title: "Bean Choice",
                        options: ESPRESSO_BEAN_OPTIONS,
                    },
                ],
            },
            {
                id: "esp_cap",
                name: "Cappuccino",
                ingredients: "",
                price: "28",
                image: "https://iili.io/q2uiIPj.jpg",
                calories: 120,
                disableTemperature: true,
                customizations: [
                    {
                        id: "bean_choice",
                        title: "Bean Choice",
                        options: ESPRESSO_BEAN_OPTIONS,
                    },
                    {
                        id: "milk_choice",
                        title: "Milk Choice",
                        options: [
                            { id: "milk_std", name: "Standard", price: 0 },
                            { id: "milk_alm", name: "Almond Milk", price: 5 },
                            { id: "milk_oat", name: "Oat Milk", price: 5 },
                            { id: "milk_coc", name: "Coconut Milk", price: 5 },
                            { id: "milk_lf", name: "Lactose Free", price: 2 },
                        ],
                    },
                ],
            },
            {
                id: "esp2",
                name: "Latte",
                ingredients: "",
                price: "27",
                image: "https://iili.io/qwbtDVn.jpg",
                calories: 140,
                customizations: [
                    {
                        id: "bean_choice",
                        title: "Bean Choice",
                        options: ESPRESSO_BEAN_OPTIONS,
                    },
                    {
                        id: "milk_choice",
                        title: "Milk Choice",
                        options: [
                            { id: "milk_std", name: "Standard", price: 0 },
                            { id: "milk_alm", name: "Almond Milk", price: 5 },
                            { id: "milk_oat", name: "Oat Milk", price: 5 },
                            { id: "milk_coc", name: "Coconut Milk", price: 5 },
                            { id: "milk_lf", name: "Lactose Free", price: 2 },
                        ],
                    },
                ],
            },
            {
                id: "esp3",
                name: "Macchiato",
                ingredients: "",
                price: "26",
                image: "https://iili.io/q2usfqJ.jpg",
                calories: 30,
                customizations: [
                    {
                        id: "bean_choice",
                        title: "Bean Choice",
                        options: ESPRESSO_BEAN_OPTIONS,
                    },
                ],
            },
            {
                id: "esp4",
                name: "Cortado",
                ingredients: "",
                price: "26",
                image: "https://iili.io/q2uiNDX.jpg",
                calories: 80,
                disableTemperature: true,
                customizations: [
                    {
                        id: "bean_choice",
                        title: "Bean Choice",
                        options: ESPRESSO_BEAN_OPTIONS,
                    },
                    {
                        id: "milk_choice",
                        title: "Milk Choice",
                        options: [
                            { id: "milk_std", name: "Standard", price: 0 },
                            { id: "milk_alm", name: "Almond Milk", price: 5 },
                            { id: "milk_oat", name: "Oat Milk", price: 5 },
                            { id: "milk_coc", name: "Coconut Milk", price: 5 },
                            { id: "milk_lf", name: "Lactose Free", price: 2 },
                        ],
                    },
                ],
            },
            {
                id: "esp5",
                name: "Piccolo",
                ingredients: "",
                price: "25",
                image: "https://iili.io/q2uQQWX.jpg",
                calories: 60,
                disableTemperature: true,
                customizations: [
                    {
                        id: "bean_choice",
                        title: "Bean Choice",
                        options: ESPRESSO_BEAN_OPTIONS,
                    },
                    {
                        id: "milk_choice",
                        title: "Milk Choice",
                        options: [
                            { id: "milk_std", name: "Standard", price: 0 },
                            { id: "milk_alm", name: "Almond Milk", price: 5 },
                            { id: "milk_oat", name: "Oat Milk", price: 5 },
                            { id: "milk_coc", name: "Coconut Milk", price: 5 },
                            { id: "milk_lf", name: "Lactose Free", price: 2 },
                        ],
                    },
                ],
            },
            {
                id: "esp6",
                name: "Flat White",
                ingredients: "",
                price: "27",
                image: "https://iili.io/q2usTzX.jpg",
                calories: 130,
                disableTemperature: true,
                customizations: [
                    {
                        id: "bean_choice",
                        title: "Bean Choice",
                        options: ESPRESSO_BEAN_OPTIONS,
                    },
                    {
                        id: "milk_choice",
                        title: "Milk Choice",
                        options: [
                            { id: "milk_std", name: "Standard", price: 0 },
                            { id: "milk_alm", name: "Almond Milk", price: 5 },
                            { id: "milk_oat", name: "Oat Milk", price: 5 },
                            { id: "milk_coc", name: "Coconut Milk", price: 5 },
                            { id: "milk_lf", name: "Lactose Free", price: 2 },
                        ],
                    },
                ],
            },
            {
                id: "esp7",
                name: "Americano",
                ingredients: "",
                price: "25",
                image: "https://iili.io/q2u6jgp.jpg",
                calories: 5,
                customizations: [
                    {
                        id: "bean_choice",
                        title: "Bean Choice",
                        options: ESPRESSO_BEAN_OPTIONS,
                    },
                ],
            },
            {
                id: "esp8",
                name: "Spanish Piccolo",
                ingredients: "",
                price: "28",
                image: "https://iili.io/q2usMXe.jpg",
                calories: 90,
                disableTemperature: true,
                customizations: [
                    {
                        id: "bean_choice",
                        title: "Bean Choice",
                        options: ESPRESSO_BEAN_OPTIONS,
                    },
                    {
                        id: "milk_choice",
                        title: "Milk Choice",
                        options: [
                            { id: "milk_std", name: "Standard", price: 0 },
                            { id: "milk_alm", name: "Almond Milk", price: 5 },
                            { id: "milk_oat", name: "Oat Milk", price: 5 },
                            { id: "milk_coc", name: "Coconut Milk", price: 5 },
                            { id: "milk_lf", name: "Lactose Free", price: 2 },
                        ],
                    },
                ],
            },
            {
                id: "esp9",
                name: "Spanish Latte",
                ingredients: "",
                price: "32",
                image: "https://iili.io/q2uLKT7.jpg",
                calories: 220,
                customizations: [
                    {
                        id: "bean_choice",
                        title: "Bean Choice",
                        options: ESPRESSO_BEAN_OPTIONS,
                    },
                    {
                        id: "milk_choice",
                        title: "Milk Choice",
                        options: [
                            { id: "milk_std", name: "Standard", price: 0 },
                            { id: "milk_alm", name: "Almond Milk", price: 5 },
                            { id: "milk_oat", name: "Oat Milk", price: 5 },
                            { id: "milk_coc", name: "Coconut Milk", price: 5 },
                            { id: "milk_lf", name: "Lactose Free", price: 2 },
                        ],
                    },
                ],
            },
            {
                id: "esp10",
                name: "Spanish Cortado",
                ingredients: "",
                price: "29",
                image: "https://iili.io/q2usMXe.jpg",
                calories: 140,
                disableTemperature: true,
                customizations: [
                    {
                        id: "bean_choice",
                        title: "Bean Choice",
                        options: ESPRESSO_BEAN_OPTIONS,
                    },
                    {
                        id: "milk_choice",
                        title: "Milk Choice",
                        options: [
                            { id: "milk_std", name: "Standard", price: 0 },
                            { id: "milk_alm", name: "Almond Milk", price: 5 },
                            { id: "milk_oat", name: "Oat Milk", price: 5 },
                            { id: "milk_coc", name: "Coconut Milk", price: 5 },
                            { id: "milk_lf", name: "Lactose Free", price: 2 },
                        ],
                    },
                ],
            },
            {
                id: "esp11",
                name: "Babyccino",
                ingredients: "",
                price: "11",
                image: "https://iili.io/q2uPvaV.jpg",
                calories: 90,
            },
        ],
    },
    {
        id: "signature-drinks",
        title: "Signature drink",
        items: [
            {
                id: "sig1",
                name: "Rush Hour",
                ingredients: "",
                price: "33",
                image: "https://iili.io/q2urMyF.jpg",
                disableTemperature: true,
                calories: 180,
                customizations: [
                    {
                        id: "rh_sweet",
                        title: "Sweetness",
                        options: [
                            { id: "rh_std", name: "Standard", price: 0 },
                            { id: "rh_xtra", name: "Extra Sweet", price: 2 },
                        ],
                    },
                ],
            },
            {
                id: "sig8",
                name: "Tanzanian Hot Chocolate",
                ingredients: "Single-origin Tanzanian cacao, rich and velvety steamed milk, served with a chocolate stick.",
                price: "32",
                image: "https://iili.io/q2u8XqB.jpg",
                calories: 290,
            },
            {
                id: "sig3",
                name: "Matcha Cloud",
                ingredients: "matcha cream , matcha dust. coconut water",
                price: "38",
                image: "https://iili.io/BBR55tj.jpg",
                calories: 220,
            },
            {
                id: "sig_espresso_shake",
                name: "Espresso Shake",
                ingredients: "Double shot espresso blended with vanilla ice cream",
                price: "40",
                image: "https://iili.io/q2uUQV4.jpg",
                calories: 310,
                disableTemperature: true,
                customizations: [
                    {
                        id: "milk_choice",
                        title: "Milk Choice",
                        options: [
                            { id: "milk_full", name: "Full Cream", price: 0 },
                            { id: "milk_low", name: "Low Fat", price: 0 },
                            { id: "milk_oat", name: "Oat Milk", price: 5 },
                            { id: "milk_alm", name: "Almond Milk", price: 5 },
                        ],
                    },
                ],
            },
            {
                id: "sig_matcha_shake",
                name: "Matcha Shake",
                ingredients: "Premium matcha blended with vanilla ice cream",
                price: "40",
                image: "https://iili.io/q2ugGzG.jpg",
                calories: 320,
                disableTemperature: true,
                customizations: [
                    {
                        id: "milk_choice",
                        title: "Milk Choice",
                        options: [
                            { id: "milk_full", name: "Full Cream", price: 0 },
                            { id: "milk_low", name: "Low Fat", price: 0 },
                            { id: "milk_oat", name: "Oat Milk", price: 5 },
                            { id: "milk_alm", name: "Almond Milk", price: 5 },
                        ],
                    },
                ],
            },
            {
                id: "sig_baby_shark",
                name: "Baby Shark",
                ingredients: "A premium strawberry powder and your choice of milk.",
                price: "26",
                image: "https://iili.io/q2uUxn4.jpg",
                calories: 240,
                tags: ["Kids Favorite", "Signature"],
                disableTemperature: true,
            },
            {
                id: "sig_eg",
                name: "Earl Grey Tea",
                ingredients: "",
                price: "24",
                image: "https://iili.io/qqMG13b.jpg",
                calories: 5,
                customizations: [
                    {
                        id: "tea_add_eg",
                        title: "Add-ons",
                        options: [
                            { id: "opt_std_eg", name: "Standard", price: 0 },
                            { id: "opt_mint_eg", name: "Mint Leaves", price: 0 },
                            { id: "opt_honey_eg", name: "Honey", price: 2 },
                            { id: "opt_lemon_eg", name: "Lemon Slice", price: 0 },
                        ],
                    },
                ],
            },
            {
                id: "sig_green_tea",
                name: "Mao Feng Green Tea",
                ingredients: "Premium Green Tea",
                price: "24",
                image: "https://iili.io/qqMGJ3J.jpg",
                calories: 5,
                customizations: [
                    {
                        id: "tea_add_gt",
                        title: "Add-ons",
                        options: [
                            { id: "opt_std_gt", name: "Standard", price: 0 },
                            { id: "opt_mint_gt", name: "Mint Leaves", price: 0 },
                            { id: "opt_honey_gt", name: "Honey", price: 2 },
                            { id: "opt_lemon_gt", name: "Lemon Slice", price: 0 },
                        ],
                    },
                ],
            },
            {
                id: "sig2",
                name: "Matcha Latte",
                ingredients: "Premium Matcha green tea. choose your milk.",
                price: "33.20",
                image: "https://iili.io/q2utJ3J.jpg",
                calories: 180,
                variants: [
                    {
                        id: "m_lf",
                        name: "Lactose Free",
                        price: 35,
                        notes: "Easy on digestion",
                    },
                    { id: "m_ff", name: "Full Fat", price: 33, notes: "Creamy and rich" },
                    {
                        id: "m_low",
                        name: "Low Fat",
                        price: 33,
                        notes: "Light and balanced",
                    },
                    {
                        id: "m_coc",
                        name: "Coconut Milk",
                        price: 38,
                        notes: "Sweet tropical notes",
                    },
                    {
                        id: "m_oat",
                        name: "Oat Milk",
                        price: 38,
                        notes: "Plant-based favorite",
                    },
                    {
                        id: "m_alm",
                        name: "Almond Milk",
                        price: 38,
                        notes: "Nutty and light",
                    },
                ],
            },
        ],
    },
    {
        id: "from-our-bakery",
        title: "BAKE GOODS",
        items: [
            {
                id: "fob_zaatar",
                name: "Zaatar & Labneh Muffin",
                ingredients: "Flaky croissant dough muffin filled with tangy fresh labneh, topped with aromatic organic zaatar, olive oil, and a pinch of sea salt.",
                price: "22",
                image: "https://i.postimg.cc/1znQ9BYK/zaatar_labnieh.jpg",
                calories: 340,
            },
            {
                id: "fob_burrata",
                name: "Burrata Pizza",
                ingredients: "Crisp round croissant base layered with rich tomato sauce, creamy fresh burrata, and basil, finished with chili flakes, smoked salt, and organic olive oil.",
                price: "26",
                image: "https://i.postimg.cc/y8NKGshd/buratta_pizza.jpg",
                calories: 410,
            },
            {
                id: "fob_turkey",
                name: "Turkey & Cheese Danish",
                ingredients: "Buttery Danish croissant dough wrapped around savory smoked turkey and sharp cheddar, encrusted with mixed sesame seeds.",
                price: "20",
                image: "https://i.postimg.cc/PqpjtyFZ/turkey_danish.jpg",
                calories: 310,
            },
            {
                id: "fob_potato",
                name: "Potato Truffle",
                ingredients: "Savory round croissant filled with caramelized onions and creamy potato dauphinois, topped with melted Comté cheese, truffle oil, smoked salt, and fresh chives.",
                price: "26",
                image: "https://iili.io/q2u4YAX.jpg",
                calories: 380,
            },
            {
                id: "fob_almond",
                name: "Almond Croissant",
                ingredients: "Golden croissant filled with rich almond frangipane, topped with toasted almond flakes and a dusting of icing sugar.",
                price: "22",
                image: "https://i.postimg.cc/QdMDzhgZ/almond.png",
                calories: 380,
            },
            {
                id: "fob_bacon_glaze",
                name: "Bacon Glaze",
                ingredients: "Flaky croissant dough rolled with Angus beef bacon inside, baked until golden, then glazed with burnt butter and organic maple syrup.",
                price: "22",
                image: "https://iili.io/B1idjQn.jpg",
                status: 'available',
            },
            {
                id: "fob_choc",
                name: "Chocolate Croissant",
                ingredients: "Classic buttery croissant filled with premium Valrhona chocolate batons.",
                price: "17",
                image: "https://iili.io/q2A7dsp.png",
                calories: 320,
            },
        ],
    },
    {
        id: "juices",
        title: "Juices",
        items: [
            {
                id: "juice_green",
                name: "Green Apple",
                price: "24",
                image: "https://iili.io/qv5Opwu.jpg",
                ingredients: "Freshly squeezed green apple juice",
                calories: 120,
            },
            {
                id: "juice_orange",
                name: "Orange",
                price: "24",
                image: "https://iili.io/qv5W3mv.jpg",
                ingredients: "Freshly squeezed orange juice",
                calories: 110,
            },
            {
                id: "juice_carrot",
                name: "Carrot",
                price: "24",
                image: "https://iili.io/qv5h6gt.jpg",
                ingredients: "Freshly squeezed carrot juice",
                calories: 90,
            },
            {
                id: "juice_water",
                name: "Watermelon",
                price: "24",
                image: "https://iili.io/qv5Tqc7.jpg",
                ingredients: "Freshly squeezed watermelon juice",
                calories: 80,
            },
        ],
    },
    {
        id: "tea",
        title: "Signature drink",
        items: [
            {
                id: "tea_black",
                name: "Black Tea",
                price: "24",
                image: "https://iili.io/qqX7BhF.jpg",
                ingredients: "Premium black tea",
                calories: 5,
            },
            {
                id: "tea_green",
                name: "Green Tea",
                price: "24",
                image: "https://iili.io/qqMGJ3J.jpg",
                ingredients: "Premium green tea",
                calories: 5,
            },
            {
                id: "tea_rush",
                name: "Rush Hour Berry",
                price: "24",
                image: "https://iili.io/q2urMyF.jpg",
                ingredients: "Berry infused tea",
                calories: 5,
            },
        ],
    },
];
// Standard Menu Order as requested
const createStandardMenu = () => {
    const order = [
        "desserts",
        "filter",
        "filter-taps",
        "espresso",
        "signature-drinks",
        "from-our-bakery",
    ];
    const menu = JSON.parse(JSON.stringify(BASE_MENU));
    // Filter and sort based on the requested order
    return order
        .map((id) => menu.find((cat) => cat.id === id))
        .filter((cat) => !!cat);
};
exports.createStandardMenu = createStandardMenu;
// Dubai Mirdif Specific Menu
const createMirdifMenu = () => {
    // Helper to find item in BASE_MENU
    const findItem = (catId, itemId) => {
        const cat = BASE_MENU.find((c) => c.id === catId);
        return cat?.items.find((i) => i.id === itemId);
    };
    // Custom Espresso Category for Mirdif
    const baseEspresso = BASE_MENU.find((c) => c.id === "espresso");
    const mirdifEspresso = JSON.parse(JSON.stringify(baseEspresso));
    mirdifEspresso.title = "MIRDIF ESPRESSO SELECTION";
    mirdifEspresso.headerStyle = {
        backgroundColor: "transparent",
        color: "#fbbf24", // Gold
        padding: "1rem 0",
        textAlign: "center",
        fontFamily: "serif",
        letterSpacing: "0.2em",
        fontSize: "2.5rem",
        borderBottom: "none",
    };
    const mirdifBeans = [
        {
            id: "bean_469",
            name: "Three Africa (The Bright Classic)",
            notes: "Caramel, Vanilla, Candied Tamarind",
            price: 0,
            isNew: false,
        },
        {
            id: "bean_colombia_strawberry",
            name: "Colombia Peach",
            notes: "Strawberry Jam, Honey, Milk Chocolates",
            price: 5,
            isNew: true,
            status: 'available',
        },
        {
            id: "bean_latino",
            name: "Latino Blend",
            notes: "Milk Chocolate, Hazelnut, Toffee",
            price: 1,
            isNew: false,
        },
        {
            id: "bean_colombia_decaf",
            name: "Colombia Sweet Dreams (Decaf)",
            notes: "Passion fruit cheesecake, Milk chocolate, Molasses",
            price: 0,
            isNew: false,
            isDecaf: true,
        },
        {
            id: "bean_colombia_bourbon_sidra",
            name: "Colombia Bourbon Sidra",
            notes: "Red Grapes, Watermelon, Hard Candy, Raspberry",
            price: 5,
            isNew: true,
            status: 'coming_soon',
        },
    ];
    mirdifEspresso.beanSelection = mirdifBeans;
    mirdifEspresso.description = "";
    mirdifEspresso.items.push({
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
    }, {
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
    });
    // Update all items to use these beans
    mirdifEspresso.items.forEach((item) => {
        const beanCustomization = item.customizations?.find((c) => c.id === "bean_choice");
        if (beanCustomization) {
            beanCustomization.options = mirdifBeans.map((b) => ({
                id: b.id,
                name: b.name,
                price: b.price,
                description: b.notes,
                status: b.status,
            }));
        }
        item.branch = "Mirdif";
    });
    return [
        mirdifEspresso,
        {
            id: "filtered-cold-brew",
            title: "FILTERED & cold brew",
            items: [
                {
                    id: "mirdif_fil_ethiopia",
                    name: "Ethiopia",
                    price: "36",
                    image: "https://iili.io/qLf9mXt.jpg",
                    tastingNotes: "Apricot, Pear, Honey.",
                    notes: "Apricot, Pear, Honey.",
                    ingredients: "Filtered Coffee",
                    calories: 5,
                    status: 'available',
                },
                {
                    id: "mirdif_fil_sweet_dream_decaf",
                    name: "Sweet dream Decaf",
                    price: "36",
                    image: "https://iili.io/qLf9mXt.jpg",
                    tastingNotes: "Passion fruit cheesecake, milk chocolate, molasses",
                    notes: "Passion fruit cheesecake, milk chocolate, molasses",
                    ingredients: "Filtered Coffee",
                    calories: 5,
                    status: 'available',
                },
                {
                    id: "mirdif_fil_kirimara",
                    name: "KIRIMARA",
                    price: "46",
                    image: "https://iili.io/qLf9mXt.jpg",
                    tastingNotes: "Brown Sugar, Wild Cherry, Raisins.",
                    notes: "Brown Sugar, Wild Cherry, Raisins.",
                    ingredients: "Filtered Coffee",
                    calories: 5,
                    status: 'available',
                },
                {
                    id: "mirdif_fil_mish_mish",
                    name: "Mish Mish",
                    price: "57",
                    image: "https://iili.io/qLf9mXt.jpg",
                    tastingNotes: "Apricot Jam, Raspberry, Lychee.",
                    notes: "Apricot Jam, Raspberry, Lychee.",
                    ingredients: "Filtered Coffee",
                    calories: 5,
                    status: 'available',
                },
                {
                    id: "mirdif_fil_gesha",
                    name: "Gesha",
                    price: "65",
                    image: "https://iili.io/qLf9mXt.jpg",
                    tastingNotes: "Orange blossom, lemon grass, condensed milk",
                    notes: "Orange blossom, lemon grass, condensed milk",
                    ingredients: "Filtered Coffee",
                    calories: 5,
                    status: 'available',
                },
                {
                    id: "mirdif_fil_colombia_strawberry_v60",
                    name: "Colombia strawberry v60",
                    price: "57",
                    image: "https://iili.io/qLf9mXt.jpg",
                    tastingNotes: "Strawberry jam – honey - milk chocolates",
                    notes: "Strawberry jam – honey - milk chocolates",
                    ingredients: "Filtered Coffee",
                    calories: 5,
                    status: 'available',
                },
                {
                    id: "mirdif_fil_bourbon_sidra_v60",
                    name: "Bourbon sidra v60",
                    price: "46",
                    image: "https://iili.io/qLf9mXt.jpg",
                    tastingNotes: "Red grips – watermelon – hard candy- raspberry",
                    notes: "Red grips – watermelon – hard candy- raspberry",
                    ingredients: "Filtered Coffee",
                    calories: 5,
                    status: 'available',
                },
                {
                    id: "mirdif_cb_ethiopia",
                    name: "Cold Brew Ethiopia.",
                    price: "38",
                    image: "https://iili.io/B3OHMFV.jpg",
                    tastingNotes: "Apricot, Pear, Honey",
                    notes: "Apricot, Pear, Honey",
                    ingredients: "Cold Brew Coffee",
                    calories: 5,
                    status: 'available',
                },
                {
                    id: "mirdif_cb_kirimara",
                    name: "Cold Brew Kenya Kirimara",
                    price: "38",
                    image: "https://iili.io/B3Ns6UG.jpg",
                    tastingNotes: "Brown Sugar, Wild Cherry, Raisins.",
                    notes: "Brown Sugar, Wild Cherry, Raisins.",
                    ingredients: "Cold Brew Coffee",
                    calories: 5,
                    status: 'available',
                },
                {
                    id: "mirdif_cb_colombian_exotic",
                    name: "Cold Brew - Colombian EXOTIC",
                    price: "38",
                    image: "https://iili.io/C27AgUB.jpg",
                    tastingNotes: "",
                    notes: "",
                    ingredients: "Cold Brew Coffee",
                    calories: 5,
                    status: 'available',
                }
            ],
        },
        {
            id: "eggs-more",
            title: "EGG& MORE",
            items: [
                {
                    id: "sw_bacon",
                    name: "Bacon & Egg Cheese Bun",
                    price: "44",
                    image: "https://iili.io/qqEAsNj.jpg",
                    ingredients: "Brioche bun with crispy bacon, scrambled egg, cheddar cheese, kimchi ketchup.",
                    calories: 550,
                },
                {
                    id: "egg_avo",
                    name: "Avocado Toast",
                    price: "45",
                    image: "https://iili.io/qqGqaMg.jpg",
                    ingredients: "Sourdough with smashed avocado, whipped feta, Pico de Gallo, pine nuts, parmesan, coriander, dill leaves, mix sesame seeds, lime wedges, chili flakes, dukka, and poached egg.",
                    calories: 380,
                },
                {
                    id: "egg_ben",
                    name: "Egg Benedict",
                    price: "46",
                    image: "https://iili.io/qqGfw3x.jpg",
                    ingredients: "English muffins with cream cheese, tomato sauce, smoky bacon, poached eggs, and miso hollandaise.",
                    calories: 450,
                },
                {
                    id: "egg_truffle",
                    name: "Truffled Scrambled Egg",
                    price: "54",
                    image: "https://iili.io/qqGqpDP.jpg",
                    ingredients: "Creamy scrambled eggs on brioche slice with truffle mayo, truffle oil, and shaved black truffle.",
                    calories: 420,
                },
                {
                    id: "egg_cro",
                    name: "Egg And Avocado Croissant",
                    price: "38",
                    image: "https://iili.io/qqXARp9.jpg",
                    ingredients: "Plain croissant, cream cheese mix, smashed avocado, tomato sauce, poached eggs sprinkled with pumpkin seeds and mix sesame seeds.",
                    calories: 490,
                },
                {
                    id: "egg_nduja",
                    name: "Tornado Chilli Egg",
                    price: "54",
                    image: "https://iili.io/qqGClvR.jpg",
                    ingredients: "garlic and butter pita bread, creamy mayo, mama’s sauce, smoked yogurt, spicy beef nduja, microgreens, and a drizzle of smoked oil.",
                    calories: 450,
                },
                {
                    id: "egg_big",
                    name: "Big Breakfast",
                    price: "65",
                    image: "https://iili.io/qqVHZ1R.png",
                    ingredients: "hash brown potatoes, red beans, sautéed portobello mushrooms, wagyu beef sausage, smoked veal bacon, roasted vine tomatoes, two sunny side up eggs on a slice of brioche bread, (eggs your way: scrambled, poached, sunny side up).",
                    calories: 850,
                },
                {
                    id: "egg_aussie",
                    name: "Aussie Pulled Beef Benedict",
                    price: "58",
                    image: "https://iili.io/qqMpPzG.png",
                    ingredients: "brioche bun with white barbecue sauce, pulled beef, 2 poached eggs, miso hollandaise, crispy onions & spring roll, chives.",
                    calories: 580,
                },
                {
                    id: "egg_turkish",
                    name: "Turkish Egg",
                    price: "46",
                    image: "https://iili.io/qqGBwmB.jpg",
                    ingredients: "mint labneh, homemade tomato jam, poached eggs, mint pesto, chilli butter served with 2 slices of toasted zaatar sourdough.",
                    calories: 400,
                },
            ].filter(Boolean),
        },
        {
            id: "signature-drinks",
            title: "Signature drink",
            items: [
                findItem("signature-drinks", "sig3"), // Matcha cloud
                findItem("signature-drinks", "sig_espresso_shake"), // Espresso shake
                { ...findItem("espresso", "esp11"), name: "Babycino" }, // Babycino
                findItem("signature-drinks", "sig_baby_shark"), // Baby shark
                findItem("signature-drinks", "sig_matcha_shake"), // Matcha shake
                findItem("signature-drinks", "sig8"), // Tanzanian hot chocolate
                findItem("tea", "tea_black"), // Black tea
                findItem("tea", "tea_green"), // Green tea
                {
                    ...findItem("tea", "tea_rush"),
                    name: "Hot Rush Hour",
                    price: "33",
                    image: "https://iili.io/qlbAzS2.jpg",
                }, // Hot Rush Hour
                {
                    id: "sig_cartel_rush",
                    name: "Rush Hour",
                    price: "33",
                    image: "https://iili.io/q2urMyF.jpg",
                    ingredients: "",
                    calories: 0,
                },
                {
                    id: "sig_matcha_latte",
                    name: "Matcha Latte",
                    price: "33.20",
                    image: "https://iili.io/q2utJ3J.jpg",
                    ingredients: "",
                    calories: 0,
                    customizations: [
                        {
                            id: "milk_choice",
                            name: "Milk Choice",
                            type: "single",
                            options: [
                                { id: "milk_full", name: "Full Fat Milk", price: 0 },
                                { id: "milk_skim", name: "Skimmed Milk", price: 0 },
                                { id: "milk_oat", name: "Oat Milk", price: 4 },
                                { id: "milk_almond", name: "Almond Milk", price: 4 },
                                { id: "milk_coconut", name: "Coconut Milk", price: 4 },
                                { id: "milk_soya", name: "Soya Milk", price: 4 },
                            ],
                        },
                    ],
                },
            ].filter(Boolean),
        },
        {
            id: "desserts",
            title: "Desserts",
            items: [
                findItem("desserts", "d_aseeda"), // Aseeda
                findItem("desserts", "d_san_seb"), // San Sebastián
                { ...findItem("desserts", "d_crepe_rolls"), status: 'available' }, // Crepe Rolls
                {
                    id: "d_honey",
                    name: "Honeycake",
                    price: "39.20",
                    image: "https://iili.io/qqXWIea.png",
                    ingredients: "Layers of honey sponge and cream",
                    calories: 450,
                }, // Honeycake
                {
                    id: "d_tiramisu",
                    name: "Tiramisu",
                    price: "39.20",
                    image: "https://iili.io/C27waOg.jpg",
                    ingredients: "Classic Italian dessert with coffee",
                    calories: 400,
                }, // Tiramisu
                findItem("desserts", "STICKY DATE"), // Sticky dates
                findItem("desserts", "d_banana_pud"), // Banana pudding
                {
                    id: "d_peanut",
                    name: "Peanut Butter Choco Tart",
                    price: "39.20",
                    image: "https://iili.io/qqXGUIR.png",
                    ingredients: "Rich chocolate tart with peanut butter",
                    calories: 480,
                }, // Peanut butter choco tart
                findItem("desserts", "d_vanilla_pud"),
            ].filter(Boolean),
        },
        {
            id: "baked-items",
            title: "Baked Items",
            items: [
                findItem("from-our-bakery", "fob_choc"), // Chocolate croissant
                findItem("from-our-bakery", "fob_turkey"), // Turkey and cheese
                {
                    id: "bg_plain",
                    name: "Plain Croissant",
                    price: "18",
                    image: "https://iili.io/qqX0EeR.png",
                    ingredients: "Classic butter croissant",
                    calories: 280,
                }, // Plain croissant
                findItem("from-our-bakery", "fob_almond"),
                findItem("from-our-bakery", "fob_bacon_glaze"), // Almond croissant
                {
                    id: "bg_3cheese",
                    name: "3 Cheese Croissant",
                    price: "24",
                    image: "https://iili.io/qqECJAN.jpg",
                    ingredients: "Cheddar, mozzarella, and parmesan",
                    calories: 350,
                }, // 3 cheese croissant
                findItem("from-our-bakery", "fob_burrata"), // Burrata pizza
                findItem("from-our-bakery", "fob_zaatar"), // Zaatar and labneh
                findItem("desserts", "d_choc_chip"),
            ].filter(Boolean),
        },
        {
            id: "greens",
            title: "Greens",
            items: [
                {
                    id: "sal_caesar",
                    name: "Caesar Salad",
                    price: "42",
                    image: "https://iili.io/qqE6hg4.jpg",
                    ingredients: "little gem lettuce, creaser dressing, crouton, parmesan cheese, crushed pistachio (add Ons: poached egg, bacon or chicken).",
                    calories: 350,
                },
            ].filter(Boolean),
        },
        {
            id: "sandwiches",
            title: "Sandwiches & Bagels",
            items: [
                {
                    id: "sw_tuna",
                    name: "Tunacado",
                    price: "38",
                    image: "https://iili.io/qqEgPdN.jpg",
                    ingredients: "Toasted Brown slice bread with pesto oil, avocado, tuna mix, tomato, and jalapeños.",
                    calories: 480,
                },
                {
                    id: "sw_chick",
                    name: "Chicken & Avocado Croissant",
                    price: "42",
                    image: "https://iili.io/qqG2qR1.png",
                    ingredients: "Grilled chicken, fresh avocado, croissant",
                    calories: 520,
                },
                {
                    id: "sw_club",
                    name: "Club Sandwich",
                    price: "38",
                    image: "https://iili.io/qqEPTpS.jpg",
                    ingredients: "White sliced bread, chipotle mayo, cheddar, lettuce, gherkins, tomato, bacon, smoked turkey, homemade chips.",
                    calories: 600,
                },
                {
                    id: "sw_brisket",
                    name: "Brisket Blaze",
                    price: "45",
                    image: "https://iili.io/qqERigt.jpg",
                    ingredients: "Toasted brown sliced bread stacked with smoked brisket, aged white cheddar, Dijon mayo, tangy relish, and finished with a perfectly burnt matured white cheddar cheese for added flavor.",
                    calories: 650,
                },
                {
                    id: "sw_shrimp",
                    name: "Shrimp Toast",
                    price: "35",
                    image: "https://iili.io/qqEYw12.jpg",
                    ingredients: "Crispy milk bread topped with house-made shrimp paste, drizzled with dynamite sauce, garnished with salmon caviar, and finished with mixed sesame seeds.",
                    calories: 420,
                },
                {
                    id: "sw_italian",
                    name: "Cold Cut Italian",
                    price: "38",
                    image: "https://iili.io/qqEieVe.png",
                    ingredients: "White slice bread with pesto oil, fresh mozzarella, tomato slice, tartufo salami, chorizo, baby Rocca, sun-dried tomatoes, balsamic glaze, organic olive oil.",
                    calories: 580,
                },
            ].filter(Boolean),
        },
        {
            id: "juices",
            title: "Juices",
            items: [
                findItem("juices", "juice_green"), // Green apple
                findItem("juices", "juice_orange"), // Orange
                findItem("juices", "juice_carrot"), // Carrot
                findItem("juices", "juice_water"),
            ].filter(Boolean),
        },
        {
            id: "healthy-bar",
            title: "Healthy Bar",
            items: [
                {
                    id: "sm_pit",
                    name: "Pitaya Smoothie",
                    price: "42",
                    image: "https://iili.io/qqEH3rP.jpg",
                    ingredients: "Apple juice, lemon juice, pitaya, frozen pineapple, banana, and lemon electrolytes.",
                    calories: 270,
                    badge: "NEW",
                },
                {
                    id: "sm_acai",
                    name: "Açaí Smoothie",
                    price: "42",
                    image: "https://iili.io/BBBfCDN.jpg",
                    ingredients: "Acai berry, banana, strawberry, peanut butter, coconut water, oat milk, and apple juice.",
                    calories: 280,
                    badge: "NEW",
                },
                {
                    id: "sm_straw",
                    name: "Strawberry Glaze Smoothie",
                    price: "42",
                    image: "https://iili.io/qq1mS5b.jpg",
                    ingredients: "Almond milk, frozen strawberries, bananas, dates, maple syrup, collagen, vanilla stevia, sea moss gel, strawberry sauce, and coconut cloud cream.",
                    calories: 260,
                    badge: "NEW",
                },
                {
                    id: "sm_coc",
                    name: "Blue Cloud Smoothie",
                    price: "42",
                    image: "https://iili.io/qqE9JUX.jpg",
                    ingredients: "Coconut milk, pineapple, banana, avocado, vanilla stevia, collagen, peanut butter, blue spirulina, and on top coconut cloud cream.",
                    calories: 300,
                    badge: "NEW",
                },
            ].filter(Boolean),
        },
        {
            id: "sweet-breakfast-mirdif",
            title: "SWEET BREAKFAST",
            items: [
                {
                    id: "sb_french_toast_mirdif",
                    name: "French Toast",
                    price: "66",
                    image: "https://iili.io/q2ARzyG.jpg",
                    ingredients: "Caramelized and served with vanilla ice cream, almond streusel, whipped vanilla cream, and rhubarb compote (option salted caramel, mix berries compote on the side).",
                    calories: 650,
                    status: 'available',
                }
            ]
        },
    ];
};
// Al Bateen Specific Menu
const createAlBateenMenu = () => {
    // Helper to find item in BASE_MENU
    const findItem = (catId, itemId) => {
        const cat = BASE_MENU.find((c) => c.id === catId);
        return cat?.items.find((i) => i.id === itemId);
    };
    // Custom Espresso Category for Al Bateen
    const baseEspresso = BASE_MENU.find((c) => c.id === "espresso");
    const alBateenEspresso = JSON.parse(JSON.stringify(baseEspresso));
    alBateenEspresso.title = "AL BATEEN ESPRESSO SELECTION";
    alBateenEspresso.headerStyle = {
        backgroundColor: "transparent",
        color: "#fbbf24", // Gold
        padding: "1rem 0",
        textAlign: "center",
        fontFamily: "serif",
        letterSpacing: "0.2em",
        fontSize: "2.5rem",
        borderBottom: "none",
    };
    // Define Custom Beans
    const alBateenBeans = [
        {
            id: "bean_costa_rica",
            name: "Costa Rica",
            notes: "Cacao, Fig Compote, Honey, Cherry",
            price: 5,
            isNew: false,
        },
        {
            id: "bean_latino",
            name: "BRAZIL CHOCOLATE",
            notes: "Chocolate Biscuit, Condensed Milk, Chestnut",
            price: 1,
            isNew: false,
        },
        {
            id: "bean_coconutella",
            name: "coconutella",
            notes: "Coconut Cream, Milk Chocolate, Toffee Caramel",
            price: 10,
            isNew: true,
            status: 'active',
        },
        {
            id: "bean_colombia_decaf",
            name: "Colombia Sweet Dreams (Decaf)",
            notes: "Passion fruit cheesecake, Milk chocolate, Molasses",
            price: 0,
            isNew: false,
            isDecaf: true,
        },
        {
            id: "bean_colombia_bourbon_sidra",
            name: "Colombia Bourbon Sidra",
            notes: "Red Grapes, Watermelon, Hard Candy, Raspberry",
            price: 5,
            isNew: true,
            status: 'available',
        },
    ];
    alBateenEspresso.beanSelection = alBateenBeans;
    alBateenEspresso.description = "";
    // Update all items to use these beans
    alBateenEspresso.items.forEach((item) => {
        const beanCustomization = item.customizations?.find((c) => c.id === "bean_choice");
        if (beanCustomization) {
            beanCustomization.options = alBateenBeans.map((b) => ({
                id: b.id,
                name: b.name,
                price: b.price,
                description: b.notes,
                status: b.status,
            }));
        }
        item.branch = "Al Bateen";
    });
    return [
        alBateenEspresso,
        {
            id: "filter-coffee",
            title: "Filter Coffee",
            items: [
                {
                    id: "fil_mish_mish",
                    name: "Mish Mish",
                    tastingNotes: "Apricot Jam, Raspberry, Lychee.",
                    price: "57",
                    image: "https://iili.io/qLf9mXt.jpg",
                    ingredients: "Pour-over brewing method",
                    calories: 5,
                    status: 'available',
                },
                {
                    id: "fil_kenya_kirimara",
                    name: "Kenya KIRIMARA",
                    tastingNotes: "Brown Sugar, Wild Cherry, Raisins.",
                    price: "46",
                    image: "https://iili.io/qLf9mXt.jpg",
                    ingredients: "Pour-over brewing method",
                    calories: 5,
                    status: 'available',
                },
                {
                    id: "fil_blackberry",
                    name: "Blackberry {tap filter}",
                    tastingNotes: "Blackberry soda, cacao nibs, karkade",
                    price: "57",
                    image: "https://iili.io/qLf9mXt.jpg",
                    ingredients: "Pour-over brewing method",
                    calories: 5,
                    status: 'available',
                },
                {
                    id: "fil_ethiopia",
                    name: "Ethiopia",
                    tastingNotes: "Apricot, Pear, Honey.",
                    price: "36",
                    image: "https://iili.io/qLf9mXt.jpg",
                    ingredients: "Pour-over brewing method",
                    calories: 5,
                    status: 'available',
                },
                {
                    id: "fil_colombia_sweet_decaf",
                    name: "Colombia Sweet Decaf",
                    tastingNotes: "Passion fruit cheesecake, milk chocolate, molasses",
                    price: "36",
                    image: "https://iili.io/qLf9mXt.jpg",
                    ingredients: "Pour-over brewing method",
                    calories: 5,
                    status: 'available',
                },
                {
                    id: "fil_colombia_gesha",
                    name: "Colombia Gesha Key Lime Pie",
                    tastingNotes: "Orange blossom, lemon grass, condensed milk",
                    price: "65",
                    image: "https://iili.io/qLf9mXt.jpg",
                    ingredients: "Pour-over brewing method",
                    calories: 5,
                    status: 'available',
                },
                {
                    id: "fil_costa_rica",
                    name: "Costa Rica",
                    tastingNotes: "Cacao, Fig Compote, Honey, Cherry.",
                    price: "57",
                    image: "https://iili.io/qLf9mXt.jpg",
                    ingredients: "Pour-over brewing method",
                    calories: 5,
                    status: 'available',
                },
            ],
        },
        {
            id: "cold-drip",
            title: "Cold Drip",
            items: [
                {
                    id: "cd_kenya",
                    name: "Kenya Kirimara",
                    tastingNotes: "Brown Sugar, Wild Cherry, Raisins.",
                    price: "38",
                    image: "https://iili.io/qLf9mXt.jpg",
                    ingredients: "Cold drip brewing method",
                    calories: 5,
                    status: 'available',
                },
                {
                    id: "cd_gesha",
                    name: "Gesha Key Lime Pie",
                    tastingNotes: "Orange Blossom, Lemongrass, Condensed Milk",
                    price: "48",
                    image: "https://iili.io/qLf9mXt.jpg",
                    ingredients: "Cold drip brewing method",
                    calories: 5,
                },
            ],
        },
        {
            id: "baked-goods",
            title: "Baked Goods",
            items: [
                findItem("from-our-bakery", "fob_turkey"),
                findItem("from-our-bakery", "fob_zaatar"),
                findItem("from-our-bakery", "fob_burrata"),
                findItem("from-our-bakery", "fob_almond"),
                findItem("from-our-bakery", "fob_bacon_glaze"),
                {
                    id: "bg_plain",
                    name: "Plain Croissant",
                    price: "18",
                    image: "https://iili.io/qqX0EeR.png",
                    ingredients: "Classic butter croissant",
                    calories: 280,
                },
                {
                    id: "bg_3cheese",
                    name: "3 Cheese Croissant",
                    price: "17",
                    image: "https://iili.io/qqECJAN.jpg",
                    ingredients: "Cheddar, mozzarella, and parmesan",
                    calories: 350,
                },
                findItem("from-our-bakery", "fob_choc"),
            ].filter(Boolean),
        },
        {
            id: "desserts",
            title: "Desserts",
            items: [
                findItem("desserts", "d_deconstructed_cheesecake"),
                {
                    ...findItem("desserts", "d_crepe_rolls"),
                    status: 'available',
                },
                findItem("desserts", "d_aseeda"),
                {
                    id: "d_honey",
                    name: "Honey Cake",
                    price: "39.20",
                    image: "https://iili.io/qqXWIea.png",
                    ingredients: "Layers of honey sponge and cream",
                    calories: 450,
                },
                {
                    id: "d_peanut",
                    name: "Peanut Choco Tart",
                    price: "39.20",
                    image: "https://iili.io/qqXGUIR.png",
                    ingredients: "Rich chocolate tart with peanut butter",
                    calories: 480,
                },
                findItem("desserts", "d_san_seb"),
                {
                    id: "d_tiramisu",
                    name: "Tiramisu Bowl",
                    price: "39.20",
                    image: "https://iili.io/C27waOg.jpg",
                    ingredients: "Classic Italian dessert with coffee",
                    calories: 400,
                },
                findItem("desserts", "d_vanilla_pud"),
                findItem("desserts", "d_banana_pud"),
                findItem("desserts", "STICKY DATE"),
                findItem("desserts", "d_1000"),
                findItem("desserts", "d_choc_chip"),
            ].filter(Boolean),
        },
        {
            id: "sandwiches",
            title: "Sandwiches & Bagels",
            items: [
                {
                    id: "sw_tuna",
                    name: "Tunacado",
                    price: "38",
                    image: "https://iili.io/qqEgPdN.jpg",
                    ingredients: "Toasted Brown slice bread with pesto oil, avocado, tuna mix, tomato, and jalapeños.",
                    calories: 480,
                },
                {
                    id: "sw_chick",
                    name: "Chicken & Avocado Croissant",
                    price: "42",
                    image: "https://iili.io/qqG2qR1.png",
                    ingredients: "Grilled chicken, fresh avocado, croissant",
                    calories: 520,
                },
                {
                    id: "sw_club",
                    name: "Club Sandwich",
                    price: "38",
                    image: "https://iili.io/qqEPTpS.jpg",
                    ingredients: "White sliced bread, chipotle mayo, cheddar, lettuce, gherkins, tomato, bacon, smoked turkey, homemade chips.",
                    calories: 600,
                },
                {
                    id: "sw_brisket",
                    name: "Brisket Blaze",
                    price: "45",
                    image: "https://iili.io/qqERigt.jpg",
                    ingredients: "Toasted brown sliced bread stacked with smoked brisket, aged white cheddar, Dijon mayo, tangy relish, and finished with a perfectly burnt matured white cheddar cheese for added flavor.",
                    calories: 650,
                },
                {
                    id: "sw_italian",
                    name: "Cold Cut Italian",
                    price: "38",
                    image: "https://iili.io/qqEieVe.png",
                    ingredients: "White slice bread with pesto oil, fresh mozzarella, tomato slice, tartufo salami, chorizo, baby Rocca, sun-dried tomatoes, balsamic glaze, organic olive oil.",
                    calories: 580,
                },
                {
                    id: "sw_shrimp",
                    name: "Shrimp Toast",
                    price: "35",
                    image: "https://iili.io/qqEYw12.jpg",
                    ingredients: "Crispy milk bread topped with house-made shrimp paste, drizzled with dynamite sauce, garnished with salmon caviar, and finished with mixed sesame seeds.",
                    calories: 420,
                },
            ],
        },
        {
            id: "eggs-more",
            title: "EGG& MORE",
            items: [
                {
                    id: "sw_bacon",
                    name: "Bacon & Egg Cheese Bun",
                    price: "44",
                    image: "https://iili.io/qqEAsNj.jpg",
                    ingredients: "Brioche bun with crispy bacon, scrambled egg, cheddar cheese, kimchi ketchup.",
                    calories: 550,
                },
                {
                    id: "egg_avo",
                    name: "Avocado Toast",
                    price: "45",
                    image: "https://iili.io/qqGqaMg.jpg",
                    ingredients: "Sourdough with smashed avocado, whipped feta, Pico de Gallo, pine nuts, parmesan, coriander, dill leaves, mix sesame seeds, lime wedges, chili flakes, dukka, and poached egg.",
                    calories: 380,
                },
                {
                    id: "egg_ben",
                    name: "Eggs Benedict",
                    price: "46",
                    image: "https://iili.io/qqGfw3x.jpg",
                    ingredients: "English muffins with cream cheese, tomato sauce, smoky bacon, poached eggs, miso hollandaise, chives.",
                    calories: 450,
                },
                {
                    id: "egg_truffle",
                    name: "Scrambled Truffle Eggs",
                    price: "54",
                    image: "https://iili.io/qqGqpDP.jpg",
                    ingredients: "Creamy scrambled eggs on brioche slice with truffle mayo, truffle oil, and shaved black truffle.",
                    calories: 420,
                },
                {
                    id: "egg_turkish",
                    name: "Turkish Egg",
                    price: "46",
                    image: "https://iili.io/qqGBwmB.jpg",
                    ingredients: "mint labneh, homemade tomato jam, poached eggs, mint pesto, chilli butter served with 2 slices of toasted zaatar sourdough.",
                    calories: 400,
                },
                {
                    id: "egg_aussie",
                    name: "Aussie Benedict",
                    price: "58",
                    image: "https://iili.io/qqMpPzG.png",
                    ingredients: "brioche bun with white barbecue sauce, pulled beef, 2 poached eggs, miso hollandaise, crispy onions & spring roll, chives.",
                    calories: 580,
                },
                {
                    id: "egg_cro",
                    name: "Egg & Avo Croissant",
                    price: "38",
                    image: "https://iili.io/qqXARp9.jpg",
                    ingredients: "Plain croissant, cream cheese mix, smashed avocado, tomato sauce, poached eggs sprinkled with pumpkin seeds and mix sesame seeds.",
                    calories: 490,
                },
                {
                    id: "egg_big",
                    name: "Big Breakfast",
                    price: "65",
                    image: "https://iili.io/qqVHZ1R.png",
                    ingredients: "hash brown potatoes, red beans, sautéed portobello mushrooms, wagyu beef sausage, smoked veal bacon, roasted vine tomatoes, two sunny side up eggs on a slice of brioche bread, (eggs your way: scrambled, poached, sunny side up).",
                    calories: 850,
                },
                {
                    id: "egg_tornado",
                    name: "Tornado Chilli Egg",
                    price: "54",
                    image: "https://iili.io/qqGClvR.jpg",
                    ingredients: "",
                    calories: 0,
                },
            ],
        },
        {
            id: "sweet-breakfast",
            title: "SWEET BREAKFAST",
            items: [
                {
                    id: "sb_french_toast",
                    name: "French Toast",
                    price: "66",
                    image: "https://iili.io/q2ARzyG.jpg",
                    ingredients: "Caramelized and served with vanilla ice cream, almond streusel, whipped vanilla cream, and rhubarb compote (option: salted caramel, mix berries compote)",
                },
            ],
        },
        {
            id: "signature-drinks",
            title: "Signature drink",
            items: [
                findItem("signature-drinks", "sig1"),
                findItem("signature-drinks", "sig_baby_shark"),
                findItem("signature-drinks", "sig2"),
                findItem("signature-drinks", "sig_matcha_shake"),
                findItem("signature-drinks", "sig_espresso_shake"),
                findItem("signature-drinks", "sig3"),
                findItem("signature-drinks", "sig8"),
                findItem("signature-drinks", "sig_green_tea"),
                {
                    ...findItem("signature-drinks", "sig_eg"),
                    name: "Earl Grey Tea",
                    image: "https://iili.io/qqX7BhF.jpg",
                },
            ].filter(Boolean),
        },
        {
            id: "salads",
            title: "Green (Salad)",
            items: [
                {
                    id: "sal_caesar",
                    name: "Caesar-style Salad",
                    price: "42",
                    image: "https://iili.io/qqE6hg4.jpg",
                    ingredients: "little gem lettuce, creaser dressing, crouton, parmesan cheese, crushed pistachio (add Ons: poached egg, bacon or chicken).",
                    calories: 350,
                },
            ],
        },
        {
            id: "smoothies",
            title: "Smoothies",
            items: [
                {
                    id: "sm_acai",
                    name: "Açaí Smoothie",
                    price: "42",
                    image: "https://iili.io/BBBfCDN.jpg",
                    ingredients: "Acai berry, banana, strawberry, peanut butter, coconut water, oat milk, and apple juice.",
                    calories: 280,
                },
                {
                    id: "sm_straw",
                    name: "Strawberry Glaze Smoothie",
                    price: "42",
                    image: "https://iili.io/qq1mS5b.jpg",
                    ingredients: "Almond milk, frozen strawberries, bananas, dates, maple syrup, collagen, vanilla stevia, sea moss gel, strawberry sauce, and coconut cloud cream.",
                    calories: 260,
                },
                {
                    id: "sm_coc",
                    name: "Blue Cloud Smoothie",
                    price: "42",
                    image: "https://iili.io/qqE9JUX.jpg",
                    ingredients: "Coconut milk, pineapple, banana, avocado, vanilla stevia, collagen, peanut butter, blue spirulina, and on top coconut cloud cream.",
                    calories: 300,
                },
                {
                    id: "sm_pit",
                    name: "Pitaya Smoothie",
                    price: "42",
                    image: "https://iili.io/qqEH3rP.jpg",
                    ingredients: "Apple juice, lemon juice, pitaya, frozen pineapple, banana, and lemon electrolytes.",
                    calories: 270,
                },
            ],
        },
        BASE_MENU.find((c) => c.id === "juices"),
    ];
};
// Khalifa Specific Menu
const createKhalifaMenu = () => {
    // Helper to find item in BASE_MENU
    const findItem = (catId, itemId) => {
        const cat = BASE_MENU.find((c) => c.id === catId);
        return cat?.items.find((i) => i.id === itemId);
    };
    // Custom Espresso Category for Khalifa
    const baseEspresso = BASE_MENU.find((c) => c.id === "espresso");
    const khalifaEspresso = JSON.parse(JSON.stringify(baseEspresso));
    khalifaEspresso.title = "KHALIFA ESPRESSO SELECTION";
    khalifaEspresso.headerStyle = {
        backgroundColor: "transparent",
        color: "#fbbf24", // Gold
        padding: "1rem 0",
        textAlign: "center",
        fontFamily: "serif",
        letterSpacing: "0.2em",
        fontSize: "2.5rem",
        borderBottom: "none",
    };
    const khalifaBeans = [
        {
            id: "bean_brazil_amazonic",
            name: "Colombia witch",
            notes: "Dried Figs, Jaggery, Orange Zest, Sugarcane Juice",
            price: 0,
            isNew: false,
        },
        {
            id: "bean_colombia_decaf",
            name: "sweet dream decaf",
            notes: "Passion Fruit, Cheesecake, Milk Chocolate",
            price: 0,
            isNew: false,
            isDecaf: true,
        },
        {
            id: "bean_coconutella",
            name: "coconutella",
            notes: "Coconut Cream, Milk Chocolate, Toffee Caramel",
            price: 10,
            isNew: true,
        },
    ];
    khalifaEspresso.beanSelection = khalifaBeans;
    khalifaEspresso.description = "";
    khalifaEspresso.items.forEach((item) => {
        const beanCustomization = item.customizations?.find((c) => c.id === "bean_choice");
        if (beanCustomization) {
            beanCustomization.options = khalifaBeans.map((b) => ({
                id: b.id,
                name: b.name,
                price: b.price,
                description: b.notes,
                status: b.status,
            }));
        }
        item.branch = "Khalifa City";
    });
    return [
        khalifaEspresso,
        {
            id: "filter-coffee",
            title: "Filter Coffee",
            items: [
                {
                    id: "fil_colombia_bourbon_sidra",
                    name: "Colombia Bourbon Sidra",
                    tastingNotes: "Red grape, watermelon, hard candy, raspberry",
                    price: "46",
                    image: "https://iili.io/qLf9mXt.jpg",
                    ingredients: "Pour-over brewing method",
                    calories: 5,
                    status: 'available',
                },
                {
                    id: "fil_mish_mish",
                    name: "Mish Mish",
                    tastingNotes: "Apricot Jam, Raspberry, Lychee.",
                    price: "57",
                    image: "https://iili.io/qLf9mXt.jpg",
                    ingredients: "Pour-over brewing method",
                    calories: 5,
                    status: 'available',
                },
                {
                    id: "fil_kenya_kirimara",
                    name: "Kenya KIRIMARA",
                    tastingNotes: "Brown Sugar, Wild Cherry, Raisins.",
                    price: "46",
                    image: "https://iili.io/qLf9mXt.jpg",
                    ingredients: "Pour-over brewing method",
                    calories: 5,
                    status: 'available',
                },
                {
                    id: "fil_blackberry",
                    name: "Blackberry {tap filter}",
                    tastingNotes: "Blackberry soda, cacao nibs, karkade",
                    price: "57",
                    image: "https://iili.io/qLf9mXt.jpg",
                    ingredients: "Pour-over brewing method",
                    calories: 5,
                    status: 'available',
                },
                {
                    id: "fil_ethiopia",
                    name: "Ethiopia",
                    tastingNotes: "Apricot, Pear, Honey.",
                    price: "36",
                    image: "https://iili.io/qLf9mXt.jpg",
                    ingredients: "Pour-over brewing method",
                    calories: 5,
                    status: 'available',
                },
                {
                    id: "fil_colombia_sweet_decaf",
                    name: "Colombia Sweet Decaf",
                    tastingNotes: "Passion fruit cheesecake, milk chocolate, molasses",
                    price: "36",
                    image: "https://iili.io/qLf9mXt.jpg",
                    ingredients: "Pour-over brewing method",
                    calories: 5,
                    status: 'available',
                },
                {
                    id: "fil_colombia_gesha",
                    name: "Colombia Gesha",
                    tastingNotes: "Orange blossom, lemon grass, condensed milk",
                    price: "65",
                    image: "https://iili.io/qLf9mXt.jpg",
                    ingredients: "Pour-over brewing method",
                    calories: 5,
                    status: 'available',
                },
            ],
        },
        {
            id: "desserts",
            title: "Desserts",
            items: [
                {
                    ...findItem("desserts", "d_crepe_rolls"),
                    status: 'coming_soon',
                },
                findItem("desserts", "d_aseeda"),
                findItem("desserts", "d_san_seb"),
                findItem("desserts", "d_vanilla_pud"),
                findItem("desserts", "d_banana_pud"),
                findItem("desserts", "STICKY DATE"),
                findItem("desserts", "d_1000"),
                findItem("desserts", "d_choc_chip"),
            ].filter(Boolean),
        },
        {
            id: "sandwiches",
            title: "Sandwiches",
            items: [
                {
                    id: "sw_tuna",
                    name: "Tunacado",
                    price: "38",
                    image: "https://iili.io/qqEgPdN.jpg",
                    ingredients: "Toasted Brown slice bread with pesto oil, avocado, tuna mix, tomato, and jalapeños.",
                    calories: 480,
                },
                {
                    id: "sw_club",
                    name: "Club Sandwich",
                    price: "38",
                    image: "https://iili.io/qqEPTpS.jpg",
                    ingredients: "White sliced bread, chipotle mayo, cheddar, lettuce, gherkins, tomato, bacon, smoked turkey, homemade chips.",
                    calories: 600,
                },
                {
                    id: "sw_brisket",
                    name: "Brisket Blaze",
                    price: "45",
                    image: "https://iili.io/qqERigt.jpg",
                    ingredients: "Toasted brown sliced bread stacked with smoked brisket, aged white cheddar, Dijon mayo, tangy relish, and finished with a perfectly burnt matured white cheddar cheese for added flavor.",
                    calories: 650,
                },
            ],
        },
        {
            id: "baked-goods",
            title: "Baked Goods",
            items: [
                findItem("from-our-bakery", "fob_turkey"),
                findItem("from-our-bakery", "fob_zaatar"),
                findItem("from-our-bakery", "fob_burrata"),
                findItem("from-our-bakery", "fob_almond"),
                findItem("from-our-bakery", "fob_bacon_glaze"),
                {
                    id: "bg_plain",
                    name: "Plain Croissant",
                    price: "18",
                    image: "https://iili.io/qqX0EeR.png",
                    ingredients: "Classic butter croissant",
                    calories: 280,
                },
                {
                    id: "bg_3cheese",
                    name: "3 Cheese Croissant",
                    price: "17",
                    image: "https://iili.io/qqECJAN.jpg",
                    ingredients: "Cheddar, mozzarella, and parmesan",
                    calories: 350,
                },
                findItem("from-our-bakery", "fob_choc"),
            ].filter(Boolean),
        },
        {
            id: "eggs-more",
            title: "EGG& MORE",
            items: [
                {
                    id: "sw_bacon",
                    name: "Bacon & Egg Cheese Bun",
                    price: "44",
                    image: "https://iili.io/qqEAsNj.jpg",
                    ingredients: "Brioche bun with crispy bacon, scrambled egg, cheddar cheese, kimchi ketchup.",
                    calories: 550,
                },
                {
                    id: "egg_avo",
                    name: "Avocado Toast",
                    price: "45",
                    image: "https://iili.io/qqGqaMg.jpg",
                    ingredients: "Sourdough with smashed avocado, whipped feta, Pico de Gallo, pine nuts, parmesan, coriander, dill leaves, mix sesame seeds, lime wedges, chili flakes, dukka, and poached egg.",
                    calories: 380,
                },
                {
                    id: "egg_ben",
                    name: "Eggs Benedict",
                    price: "46",
                    image: "https://iili.io/qqGfw3x.jpg",
                    ingredients: "English muffins with cream cheese, tomato sauce, smoky bacon, poached eggs, miso hollandaise, chives.",
                    calories: 450,
                },
                {
                    id: "egg_truffle",
                    name: "Scrambled Truffle Eggs",
                    price: "54",
                    image: "https://iili.io/qqGqpDP.jpg",
                    ingredients: "Creamy scrambled eggs on brioche slice with truffle mayo, truffle oil, and shaved black truffle.",
                    calories: 420,
                },
                {
                    id: "egg_aussie",
                    name: "Aussie Benedict",
                    price: "58",
                    image: "https://iili.io/qqMpPzG.png",
                    ingredients: "brioche bun with white barbecue sauce, pulled beef, 2 poached eggs, miso hollandaise, crispy onions & spring roll, chives.",
                    calories: 580,
                },
                {
                    id: "egg_cro",
                    name: "Egg & Avo Croissant",
                    price: "38",
                    image: "https://iili.io/qqXARp9.jpg",
                    ingredients: "Plain croissant, cream cheese mix, smashed avocado, tomato sauce, poached eggs sprinkled with pumpkin seeds and mix sesame seeds.",
                    calories: 490,
                },
            ],
        },
        {
            id: "signature-drinks",
            title: "Signature drink",
            items: [
                findItem("signature-drinks", "sig7"),
                findItem("signature-drinks", "sig2"),
                findItem("signature-drinks", "sig5"),
                findItem("signature-drinks", "sig6"),
                findItem("signature-drinks", "sig3"),
                findItem("signature-drinks", "sig8"),
                findItem("signature-drinks", "sig_green_tea"),
                {
                    ...findItem("signature-drinks", "sig_eg"),
                    name: "Earl Grey Tea",
                    image: "https://iili.io/qqX7BhF.jpg",
                },
                findItem("signature-drinks", "sig_espresso_shake"),
                findItem("signature-drinks", "sig_baby_shark"),
                findItem("signature-drinks", "sig_matcha_shake"),
                {
                    id: "sig_rush_hour",
                    name: "Rush Hour",
                    price: "33",
                    image: "https://iili.io/q2urMyF.jpg",
                    ingredients: "Signature drink",
                    calories: 10,
                    status: 'available',
                },
            ].filter(Boolean),
        },
        {
            id: "smoothies",
            title: "Smoothies",
            items: [
                {
                    id: "sm_acai",
                    name: "Açaí Smoothie",
                    price: "42",
                    image: "https://iili.io/BBBfCDN.jpg",
                    ingredients: "Acai berry, banana, strawberry, peanut butter, coconut water, oat milk, and apple juice.",
                    calories: 280,
                },
                {
                    id: "sm_straw",
                    name: "Strawberry Glaze Smoothie",
                    price: "42",
                    image: "https://iili.io/qq1mS5b.jpg",
                    ingredients: "Almond milk, frozen strawberries, bananas, dates, maple syrup, collagen, vanilla stevia, sea moss gel, strawberry sauce, and coconut cloud cream.",
                    calories: 260,
                },
                {
                    id: "sm_coc",
                    name: "Blue Cloud Smoothie",
                    price: "42",
                    image: "https://iili.io/qqE9JUX.jpg",
                    ingredients: "Coconut milk, pineapple, banana, avocado, vanilla stevia, collagen, peanut butter, blue spirulina, and on top coconut cloud cream.",
                    calories: 300,
                },
                {
                    id: "sm_pit",
                    name: "Pitaya Smoothie",
                    price: "42",
                    image: "https://iili.io/qqEH3rP.jpg",
                    ingredients: "Apple juice, lemon juice, pitaya, frozen pineapple, banana, and lemon electrolytes.",
                    calories: 270,
                },
            ],
        },
        {
            ...BASE_MENU.find((c) => c.id === "juices"),
            items: BASE_MENU.find((c) => c.id === "juices").items.filter(item => item.name === "Orange" || item.id === "juice_orange"),
        },
    ];
};
// Al Qana Specific Menu
const createAlQanaMenu = () => {
    // Helper to find item in BASE_MENU
    const findItem = (catId, itemId) => {
        const cat = BASE_MENU.find((c) => c.id === catId);
        return cat?.items.find((i) => i.id === itemId);
    };
    // Custom Espresso Category for Al Qana
    const baseEspresso = BASE_MENU.find((c) => c.id === "espresso");
    const alQanaEspresso = JSON.parse(JSON.stringify(baseEspresso));
    alQanaEspresso.title = "AL QANA ESPRESSO SELECTION";
    alQanaEspresso.headerStyle = {
        backgroundColor: "transparent",
        color: "#fbbf24", // Gold
        padding: "1rem 0",
        textAlign: "center",
        fontFamily: "serif",
        letterSpacing: "0.2em",
        fontSize: "2.5rem",
        borderBottom: "none",
    };
    // Define Custom Beans
    const alQanaBeans = [
        {
            id: "bean_469",
            name: "Latino Blend",
            notes: "Milk Chocolate, Hazelnut, Toffee",
            price: 1,
            isNew: false,
        },
        {
            id: "bean_colombia_strawberry",
            name: "Colombia Peach",
            notes: "Strawberry Jam, Honey, Milk Chocolates",
            price: 5,
            isNew: true,
            status: 'available',
        },
        {
            id: "bean_colombia_decaf",
            name: "Colombia Sweet Dreams (Decaf)",
            notes: "Passion fruit cheesecake, Milk chocolate, Molasses",
            price: 0,
            isNew: false,
            isDecaf: true,
        },
        {
            id: "bean_colombia_bourbon_sidra",
            name: "Colombia Bourbon Sidra",
            notes: "Red Grapes, Watermelon, Hard Candy, Raspberry",
            price: 5,
            isNew: true,
            status: 'coming_soon',
        },
    ];
    alQanaEspresso.beanSelection = alQanaBeans;
    alQanaEspresso.description = "";
    // Update all items to use these beans
    alQanaEspresso.items.forEach((item) => {
        const beanCustomization = item.customizations?.find((c) => c.id === "bean_choice");
        if (beanCustomization) {
            beanCustomization.options = alQanaBeans.map((b) => ({
                id: b.id,
                name: b.name,
                price: b.price,
                description: b.notes,
                status: b.status,
            }));
        }
        item.branch = "Al Qana";
    });
    return [
        alQanaEspresso,
        {
            id: "filter-coffee",
            title: "Filter Coffee",
            items: [
                {
                    id: "fil_ethiopia_rogicha",
                    name: "Ethiopia ROGICHA",
                    tastingNotes: "Apricot, Pear, Honey",
                    price: "36",
                    image: "https://iili.io/qLf9mXt.jpg",
                    ingredients: "Pour-over brewing method",
                    calories: 5,
                    status: 'available',
                },
                {
                    id: "fil_decaf_sweet_dreams",
                    name: "Decaf - Sweet Dreams",
                    tastingNotes: "Dried Apricot, Molasses, Pecan Nuts",
                    price: "38",
                    image: "https://iili.io/qLf9mXt.jpg",
                    ingredients: "Pour-over brewing method",
                    calories: 5,
                    status: 'available',
                },
                {
                    id: "fil_kenya_kirimara",
                    name: "Kenya Kirimara",
                    tastingNotes: "Brown Sugar, Wild Cherry, Raisins",
                    price: "46",
                    image: "https://iili.io/qLf9mXt.jpg",
                    ingredients: "Pour-over brewing method",
                    calories: 5,
                    status: 'available',
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
                    status: 'available',
                },
                {
                    id: "fil_mish_mish",
                    name: "Colombia Mish Mish",
                    tastingNotes: "Apricot Jam, Raspberry, Lychee",
                    price: "57",
                    image: "https://iili.io/qLf9mXt.jpg",
                    ingredients: "Pour-over brewing method",
                    calories: 5,
                    status: 'available',
                },
                {
                    id: "fil_colombia_gesha_key_lime",
                    name: "Colombia Gesha Key Lime Pie",
                    tastingNotes: "Orange Blossom, Lemon Grass, Condensed Milk",
                    price: "65",
                    image: "https://iili.io/qLf9mXt.jpg",
                    ingredients: "Pour-over brewing method",
                    calories: 5,
                    status: 'available',
                }
            ],
        },
        {
            id: "sandwiches",
            title: "Sandwiches",
            items: [
                {
                    id: "sw_italian",
                    name: "Cold Cut Italian",
                    price: "38",
                    image: "https://iili.io/qqEieVe.png",
                    ingredients: "White slice bread with pesto oil, fresh mozzarella, tomato slice, tartufo salami, chorizo, baby Rocca, sun-dried tomatoes, balsamic glaze, organic olive oil.",
                    calories: 580,
                },
                {
                    id: "sw_tuna",
                    name: "Tunacado",
                    price: "38",
                    image: "https://iili.io/qqEgPdN.jpg",
                    ingredients: "Toasted Brown slice bread with pesto oil, avocado, tuna mix, tomato, and jalapeños.",
                    calories: 480,
                },
                {
                    id: "sw_club",
                    name: "Club Sandwich",
                    price: "38",
                    image: "https://iili.io/qqEPTpS.jpg",
                    ingredients: "White sliced bread, chipotle mayo, cheddar, lettuce, gherkins, tomato, bacon, smoked turkey, homemade chips.",
                    calories: 600,
                },
                {
                    id: "sw_brisket",
                    name: "Brisket Blaze",
                    price: "45",
                    image: "https://iili.io/qqERigt.jpg",
                    ingredients: "Toasted brown sliced bread stacked with smoked brisket, aged white cheddar, Dijon mayo, tangy relish, and finished with a perfectly burnt matured white cheddar cheese for added flavor.",
                    calories: 650,
                },
                {
                    id: "sw_chick",
                    name: "Chicken Avocado Croissant",
                    price: "35",
                    image: "https://iili.io/qqG2qR1.png",
                    ingredients: "A buttery, toasted kalonji-seed square croissant filled with tender grilled chicken and fresh avocado slices. Layered with crisp Lollo Bionda, sun-dried tomatoes, and shaved Grano Padano cheese. Finished with a house-made Caesar dressing and a fragrant drizzle of pesto oil.",
                    calories: 520,
                    branch: "Al Qana",
                },
                {
                    id: "sw_shrimp",
                    name: "Shrimp Toast",
                    price: "35",
                    image: "https://iili.io/qqEYw12.jpg",
                    ingredients: "Crispy milk bread topped with house-made shrimp paste, drizzled with dynamite sauce, garnished with salmon caviar, and finished with mixed sesame seeds.",
                    calories: 420,
                },
            ],
        },
        {
            id: "baked-goods",
            title: "Baked Goods",
            items: [
                {
                    id: "bg_plain",
                    name: "Plain Croissant",
                    price: "18",
                    image: "https://iili.io/qqX0EeR.png",
                    ingredients: "Classic butter croissant",
                    calories: 280,
                },
                {
                    id: "bg_3cheese",
                    name: "3 Cheese Croissant",
                    price: "24",
                    image: "https://iili.io/qqECJAN.jpg",
                    ingredients: "Cheddar, mozzarella, and parmesan",
                    calories: 350,
                },
                findItem("from-our-bakery", "fob_burrata"),
                findItem("from-our-bakery", "fob_almond"),
                findItem("from-our-bakery", "fob_bacon_glaze"),
                findItem("from-our-bakery", "fob_choc"),
                findItem("from-our-bakery", "fob_zaatar"),
                findItem("from-our-bakery", "fob_turkey"),
            ].filter(Boolean),
        },
        {
            id: "desserts",
            title: "Desserts",
            items: [
                findItem("desserts", "d_deconstructed_cheesecake"),
                findItem("desserts", "d_aseeda"),
                {
                    id: "d_french_toast",
                    name: "French Toast",
                    price: "66",
                    image: "https://iili.io/q2ARzyG.jpg",
                    ingredients: "Caramelized and served with vanilla ice cream, almond streusel, whipped vanilla cream, and rhubarb compote (option salted caramel, mix berries compote on the side)",
                    branch: "Al Qana",
                },
                { ...findItem("desserts", "d_crepe_rolls"), status: 'available' },
                {
                    id: "d_peanut",
                    name: "Peanut Choco Tart",
                    price: "39.20",
                    image: "https://iili.io/qqXGUIR.png",
                    ingredients: "Rich chocolate tart with peanut butter",
                    calories: 480,
                },
                {
                    id: "d_honey",
                    name: "Honey Cake",
                    price: "39.20",
                    image: "https://iili.io/qqXWIea.png",
                    ingredients: "Layers of honey sponge and cream",
                    calories: 450,
                },
                findItem("desserts", "d_san_seb"),
                findItem("desserts", "STICKY DATE"),
                findItem("desserts", "d_1000"),
                {
                    id: "d_tiramisu",
                    name: "Tiramisu Bowl",
                    price: "39.20",
                    image: "https://iili.io/C27waOg.jpg",
                    ingredients: "Classic Italian dessert with coffee",
                    calories: 400,
                },
                findItem("desserts", "d_vanilla_pud"),
                {
                    ...findItem("desserts", "d_choc_chip"),
                    image: "https://iili.io/qqMwcbf.png",
                },
                {
                    id: "d_choco_fudge_cookie",
                    name: "Choco Fudge Cookie",
                    ingredients: "Rich and fudgy dark chocolate cookie",
                    price: "21",
                    image: "https://iili.io/qqMhN2e.png",
                },
                findItem("desserts", "d_banana_pud"),
            ].filter(Boolean),
        },
        {
            id: "eggs-more",
            title: "EGG& MORE",
            items: [
                {
                    id: "egg_nduja_alqana",
                    name: "Tornado Chilli Egg",
                    price: "54",
                    image: "https://iili.io/qqGClvR.jpg",
                    ingredients: "garlic and butter pita bread, creamy mayo, mama’s sauce, smoked yogurt, spicy beef nduja, microgreens, and a drizzle of smoked oil.",
                    calories: 450,
                    status: 'available',
                },
                {
                    id: "sw_bacon",
                    name: "Bacon & Egg Cheese Bun",
                    price: "44",
                    image: "https://iili.io/qqEAsNj.jpg",
                    ingredients: "Brioche bun with crispy bacon, scrambled egg, cheddar cheese, kimchi ketchup.",
                    calories: 550,
                },
                {
                    id: "egg_big",
                    name: "Big Breakfast",
                    price: "65",
                    image: "https://iili.io/qqVHZ1R.png",
                    ingredients: "hash brown potatoes, red beans, sautéed portobello mushrooms, wagyu beef sausage, smoked veal bacon, roasted vine tomatoes, two sunny side up eggs on a slice of brioche bread, (eggs your way: scrambled, poached, sunny side up).",
                    calories: 850,
                },
                {
                    id: "egg_benedict",
                    name: "Egg Benedict",
                    price: "46",
                    image: "https://iili.io/qqGfw3x.jpg",
                    ingredients: "English muffins with cream cheese, tomato sauce, smoky bacon, poached eggs, miso hollandaise",
                    branch: "Al Qana",
                },
                {
                    id: "egg_avo",
                    name: "Avocado Toast",
                    price: "45",
                    image: "https://iili.io/qqGqaMg.jpg",
                    ingredients: "Sourdough with smashed avocado, whipped feta, Pico de Gallo, pine nuts, parmesan, coriander, dill leaves, mix sesame seeds, lime wedges, chili flakes, dukka, and poached egg.",
                    calories: 380,
                },
                {
                    id: "egg_cro",
                    name: "Egg & Avo Croissant",
                    price: "48",
                    image: "https://iili.io/qqXARp9.jpg",
                    ingredients: "Plain croissant, cream cheese mix, smashed avocado, tomato sauce, poached eggs sprinkled with pumpkin seeds and mix sesame seeds.",
                    calories: 490,
                },
                {
                    id: "egg_aussie",
                    name: "Aussie Benedict",
                    price: "58",
                    image: "https://iili.io/qqMpPzG.png",
                    ingredients: "brioche bun with white barbecue sauce, pulled beef, 2 poached eggs, miso hollandaise, crispy onions & spring roll, chives.",
                    calories: 580,
                },
                {
                    id: "egg_turkish",
                    name: "Turkish Egg",
                    price: "46",
                    image: "https://iili.io/qqGBwmB.jpg",
                    ingredients: "mint labneh, homemade tomato jam, poached eggs, mint pesto, chilli butter served with 2 slices of toasted zaatar sourdough.",
                    calories: 400,
                },
                {
                    id: "egg_truffle",
                    name: "Scrambled Truffle Eggs",
                    price: "54",
                    image: "https://iili.io/qqGqpDP.jpg",
                    ingredients: "Creamy scrambled eggs on brioche slice with truffle mayo, truffle oil, and shaved black truffle.",
                    calories: 420,
                },
            ],
        },
        {
            id: "signature-drinks",
            title: "Signature drink",
            items: [
                {
                    ...findItem("signature-drinks", "sig1"),
                    name: "Rush Hour",
                    image: "https://iili.io/q2urMyF.jpg",
                    status: 'available',
                },
                {
                    ...findItem("tea", "tea_rush"),
                    id: "sig_hot_rush",
                    name: "Hot Rush Hour",
                    price: "33",
                    image: "https://iili.io/qlbAzS2.jpg",
                    status: 'available',
                },
                findItem("signature-drinks", "sig_espresso_shake"),
                findItem("signature-drinks", "sig_matcha_shake"),
                findItem("signature-drinks", "sig_baby_shark"),
                findItem("signature-drinks", "sig3"),
                findItem("signature-drinks", "sig8"),
                findItem("signature-drinks", "sig_green_tea"),
                {
                    ...findItem("signature-drinks", "sig_eg"),
                    name: "Earl Grey Tea",
                    image: "https://iili.io/qqX7BhF.jpg",
                },
            ].filter(Boolean),
        },
        {
            id: "smoothies",
            title: "Smoothies",
            items: [
                {
                    id: "sm_straw",
                    name: "Strawberry Glaze Smoothie",
                    price: "42",
                    image: "https://iili.io/qq1mS5b.jpg",
                    ingredients: "Almond milk, frozen strawberries, bananas, dates, maple syrup, collagen, vanilla stevia, sea moss gel, strawberry sauce, and coconut cloud cream.",
                    calories: 260,
                },
                {
                    id: "sm_pit",
                    name: "Pitaya Smoothie",
                    price: "42",
                    image: "https://iili.io/qqEH3rP.jpg",
                    ingredients: "Apple juice, lemon juice, pitaya, frozen pineapple, banana, and lemon electrolytes.",
                    calories: 270,
                },
                {
                    id: "sm_acai",
                    name: "Açaí Smoothie",
                    price: "42",
                    image: "https://iili.io/BBBfCDN.jpg",
                    ingredients: "Acai berry, banana, strawberry, peanut butter, coconut water, oat milk, and apple juice.",
                    calories: 280,
                },
                {
                    id: "sm_coc",
                    name: "Blue Cloud Smoothie",
                    price: "42",
                    image: "https://iili.io/qqE9JUX.jpg",
                    ingredients: "Coconut milk, pineapple, banana, avocado, vanilla stevia, collagen, peanut butter, blue spirulina, and on top coconut cloud cream.",
                    calories: 300,
                },
            ],
        },
        BASE_MENU.find((c) => c.id === "juices"),
        {
            id: "salads",
            title: "Green Salad",
            items: [
                {
                    id: "sal_caesar",
                    name: "Caesar-style Salad",
                    price: "42",
                    image: "https://iili.io/qqE6hg4.jpg",
                    ingredients: "little gem lettuce, creaser dressing, crouton, parmesan cheese, crushed pistachio (add Ons: poached egg, bacon or chicken).",
                    calories: 350,
                },
            ],
        },
    ];
};
// Marina Specific Menu
const createMarinaMenu = () => {
    // Custom Espresso Category for Marina
    const baseEspresso = BASE_MENU.find((c) => c.id === "espresso");
    const marinaEspresso = JSON.parse(JSON.stringify(baseEspresso));
    marinaEspresso.title = "Espresso Based";
    marinaEspresso.headerStyle = {
        backgroundColor: "transparent",
        color: "#fbbf24", // Gold
        padding: "1rem 0",
        textAlign: "center",
        fontFamily: "serif",
        letterSpacing: "0.2em",
        fontSize: "2.5rem",
        borderBottom: "none",
    };
    // Define Custom Beans for Marina
    const marinaBeans = [
        {
            id: "bean_colombia_decaf",
            name: "sweet dream decaf",
            notes: "Molasses, Dried Apricot, Pecan Nuts ",
            price: 0,
            isNew: false,
            isDecaf: true,
        },
        {
            id: "bean_colombia_witch",
            name: "Colombia-Witch",
            notes: "Dried figs - Jaggery - Orange zest - sugarcane juice",
            price: 0,
            isNew: true,
            status: 'active',
        },
        {
            id: "bean_coconutella",
            name: "coconutella",
            notes: "Coconut Cream, Milk Chocolate, Toffee Caramel",
            price: 10,
            isNew: true,
        },
        {
            id: "bean_el_salvador",
            name: "El Salvador",
            notes: "Butterscotch, Almond, Dried Apricot",
            price: 1,
            isNew: true,
        },
    ];
    marinaEspresso.beanSelection = marinaBeans;
    marinaEspresso.description = ""; // Clear description to use custom bean selection view
    // Update all items to use these beans
    marinaEspresso.items.forEach((item) => {
        const beanCustomization = item.customizations?.find((c) => c.id === "bean_choice");
        if (beanCustomization) {
            beanCustomization.options = marinaBeans.map((b) => ({
                id: b.id,
                name: b.name,
                price: b.price,
                description: b.notes,
                status: b.status,
            }));
        }
        item.branch = "Marina";
    });
    // Custom Tea Category for Marina
    const baseTea = BASE_MENU.find((c) => c.id === "tea");
    const marinaTea = JSON.parse(JSON.stringify(baseTea));
    // Remove the bottom row items (EARL GRAY TEA and Green Tea)
    marinaTea.items = marinaTea.items.filter((i) => i.id !== "tea_black" && i.id !== "tea_green");
    const rushHour = marinaTea.items.find((i) => i.id === "tea_rush");
    if (rushHour) {
        rushHour.name = "Hot Rush Hour";
        rushHour.price = "33";
        rushHour.image = "https://iili.io/qlbAzS2.jpg";
    }
    const marinaFilter = {
        id: "filter-coffee",
        title: "Filter Coffee",
        items: [
            {
                id: "fil_colombia_mish_mish",
                name: "Colombia Mish Mish",
                tastingNotes: "Apricot Jam – Raspberry- Lychee",
                price: "57",
                image: "https://iili.io/qLf9mXt.jpg",
                ingredients: "Pour-over brewing method",
                calories: 5,
                status: 'available',
            },
            {
                id: "fil_colombia_sidra",
                name: "Colombia Sidra",
                tastingNotes: "Red Greps – Watermelon – Hard Candy- Raspberry",
                price: "46",
                image: "https://iili.io/qLf9mXt.jpg",
                ingredients: "Pour-over brewing method",
                calories: 5,
                status: 'available',
            },
            {
                id: "fil_colombia_gesha_key_lime_pie",
                name: "Colombia Gesha Key Lime Pie",
                tastingNotes: "Orange Blossom- Lemon Grass - Condensed Milk",
                price: "65",
                image: "https://iili.io/qLf9mXt.jpg",
                ingredients: "Pour-over brewing method",
                calories: 5,
                status: 'available',
            },
            {
                id: "fil_colombia_strawberry",
                name: "Colombia Strawberry",
                tastingNotes: "Strawberry Jam – Honey - Milk Chocolates",
                price: "57",
                image: "https://iili.io/qLf9mXt.jpg",
                ingredients: "Pour-over brewing method",
                calories: 5,
                status: 'available',
            },
            {
                id: "fil_kenya_kiramara",
                name: "Kenya kiramara",
                tastingNotes: "Brown Sugar – Wild Cherry- Raisins",
                price: "46",
                image: "https://iili.io/qLf9mXt.jpg",
                ingredients: "Pour-over brewing method",
                calories: 5,
                status: 'available',
            },
            {
                id: "fil_ethiopia_rogicha",
                name: "Ethiopia Rogicha",
                tastingNotes: "Apricot, Pear, Honey",
                price: "36",
                image: "https://iili.io/qLf9mXt.jpg",
                ingredients: "Pour-over brewing method",
                calories: 5,
                status: 'available',
            },
            {
                id: "fil_sweet_dreams_decaf",
                name: "Sweet Dreams Decaf",
                tastingNotes: "Passion Fruit , Cheesecake, Milk Chocolate .",
                price: "38",
                image: "https://iili.io/qLf9mXt.jpg",
                ingredients: "Pour-over brewing method",
                calories: 5,
                status: 'available',
            },
        ],
    };
    // Return full menu with replaced espresso and tea
    const marinaMenu = BASE_MENU.map((cat) => {
        if (cat.id === "espresso")
            return marinaEspresso;
        if (cat.id === "tea")
            return marinaTea;
        if (cat.id === "filter")
            return marinaFilter;
        if (cat.id === "desserts") {
            return {
                ...cat,
                items: [
                    ...cat.items.map((item) => item.id === "d_crepe_rolls" ? { ...item, status: 'available' } : item),
                ],
            };
        }
        if (cat.id === "fruits-and-grinds") {
            return {
                ...cat,
                items: [
                    ...cat.items,
                    {
                        id: "fg_banana_dates",
                        name: "Banana, Dates & Yogurt",
                        price: "38",
                        image: "https://iili.io/q2j9Vwu.png",
                        ingredients: "Earl Grey Chia, fresh banana, sweet dates, creamy yogurt.",
                        branch: "Marina"
                    }
                ]
            };
        }
        if (cat.id === "highly-recommend") {
            return {
                ...cat,
                items: [
                    ...cat.items,
                    {
                        id: "bw6_marina",
                        name: "Banana, Dates & Yogurt",
                        ingredients: "Earl Grey Chia, fresh banana, sweet dates, creamy yogurt.",
                        price: "38",
                        image: "https://iili.io/q2j9Vwu.png",
                        calories: 350,
                    },
                    {
                        id: "fil_colombia_sidra_marina",
                        name: "Colombia Sidra",
                        tastingNotes: "Red Grapes, Watermelon, Hard Candy, Raspberry.",
                        price: "57",
                        image: "https://iili.io/qLf9mXt.jpg",
                        ingredients: "Pour-over brewing method",
                        calories: 5,
                        status: 'available',
                    },
                    {
                        id: "d_1000_marina",
                        name: "1000 Layers( Mille Fuille)",
                        ingredients: "Crispy layers of puff pastry with caramels sauce and  vanilla cream",
                        price: "39.20",
                        image: "https://iili.io/q2ATUt2.png",
                        calories: 440,
                    },
                    {
                        id: "d_vanilla_pud_marina",
                        name: "Vanilla Pudding",
                        ingredients: "Silky smooth vanilla custard, Madagascar vanilla bean, sweet cream",
                        price: "39.20",
                        image: "https://iili.io/C27jV9e.jpg",
                        calories: 380,
                    },
                    {
                        id: "hb_acai_smoothie_marina_bs",
                        name: "Acai Smoothie",
                        price: "42",
                        image: "https://iili.io/BBBfCDN.jpg",
                        ingredients: "Acai berry, banana, strawberry, peanut butter, coconut water, oat milk, and apple juice.",
                        calories: 320,
                        status: 'available',
                    }
                ]
            };
        }
        return cat;
    });
    marinaMenu.push({
        id: "sandwiches",
        title: "SANDWICHES & BAGELS",
        items: [
            {
                id: "sw_italian",
                name: "Cold Cut Italian",
                price: "38",
                image: "https://iili.io/qqEieVe.png",
                ingredients: "White slice bread with pesto oil, fresh mozzarella, tomato slice, tartufo salami, chorizo, baby Rocca, sun-dried tomatoes, balsamic glaze, organic olive oil.",
                calories: 580,
            },
            {
                id: "sw_club",
                name: "Club Sandwich",
                price: "38",
                image: "https://iili.io/qqEPTpS.jpg",
                ingredients: "White sliced bread, chipotle mayo, cheddar, lettuce, gherkins, tomato, bacon, smoked turkey, homemade chips.",
                calories: 600,
            },
            {
                id: "sw_tuna",
                name: "Tunacado",
                price: "38",
                image: "https://iili.io/qqEgPdN.jpg",
                ingredients: "Toasted Brown slice bread with pesto oil, avocado, tuna mix, tomato, and jalapeños.",
                calories: 480,
            },
            {
                id: "sw_brisket",
                name: "Brisket Blaze",
                price: "45",
                image: "https://iili.io/qqERigt.jpg",
                ingredients: "Toasted brown sliced bread stacked with smoked brisket, aged white cheddar, Dijon mayo, tangy relish, and finished with a perfectly burnt matured white cheddar cheese for added flavor.",
                calories: 650,
            },
        ],
    });
    marinaMenu.push({
        id: "baked-goods",
        title: "BAKE GOODS",
        items: [
            {
                id: "bg_marina_1",
                name: "Zaatar & Labneh Cruffin",
                price: "22",
                image: "https://iili.io/C2hgaJR.jpg",
                ingredients: "Muffin-shaped croissant dough filled with labneh drizzled with organic olive oil, sprinkled with zaatar & sea salt.",
                calories: 380,
                status: 'available',
            },
            {
                id: "bg_marina_2",
                name: "Burrata Pizza",
                price: "26",
                image: "https://iili.io/C2hgDLF.jpg",
                ingredients: "Flaky round croissant dough with tomato pizza sauce, creamy burrata, fresh basil, chili flakes, smoked salt, and a drizzle of organic olive oil.",
                calories: 420,
                status: 'available',
            },
            {
                id: "bg_marina_3",
                name: "Turkey & Cheese Danish",
                price: "20",
                image: "https://iili.io/C2hrcrb.png",
                ingredients: "Buttery Danish croissant dough with smoked turkey, cheddar cheese, mixed sesame seeds.",
                calories: 340,
                status: 'available',
            },
            {
                id: "bg_marina_4",
                name: "Potato Truffle Croissant",
                price: "26",
                image: "https://iili.io/q2u4YAX.jpg",
                ingredients: "Flaky round croissant dough filled with caramelized onions, creamy potato dauphinois (sliced potatoes slow cooked in cream & parmesan), topped with Comté cheese, truffle oil, smoked salt, and chives.",
                calories: 460,
                status: 'available',
            },
            {
                id: "bg_marina_5",
                name: "Almond Croissant",
                price: "22",
                image: "https://iili.io/C2h6oOl.jpg",
                ingredients: "Plain butter croissant filled with almond frangipane, topped with almond flakes and a dusting of icing sugar.",
                calories: 490,
                status: 'available',
            },
            {
                id: "bg_marina_6",
                name: "Chocolate Croissant",
                price: "17",
                image: "https://iili.io/C2hsr11.jpg",
                ingredients: "Flaky croissant pastry filled with smooth dark chocolate for a perfectly balanced buttery and indulgent bite.",
                calories: 390,
                status: 'available',
            },
            {
                id: "bg_marina_7",
                name: "Three Cheese Croissant",
                price: "17",
                image: "https://iili.io/C2hLRhQ.jpg",
                ingredients: "Buttery Croissant layered with Gruyère, 12-month aged Comté, and matured white cheddar.",
                calories: 410,
                status: 'available',
            },
            {
                id: "bg_marina_8",
                name: "Plain Croissant",
                price: "15",
                image: "https://iili.io/C2hZsku.jpg",
                ingredients: "Pure, all-butter viennoiserie. Flaky, featherlight layers. No fillings, no distractions—just exceptional pastry.",
                calories: 280,
                status: 'available',
            }
        ]
    });
    return marinaMenu;
};
// Golden Rule Layout Helper
const applyGoldenRuleLayout = (menu) => {
    // Clone to avoid mutation of the original array during splice operations
    const remaining = [...menu];
    const newMenu = [];
    const extract = (predicate) => {
        const idx = remaining.findIndex(predicate);
        if (idx !== -1)
            return remaining.splice(idx, 1)[0];
        return undefined;
    };
    const extractAll = (predicate) => {
        const extracted = [];
        let idx = remaining.findIndex(predicate);
        while (idx !== -1) {
            extracted.push(remaining.splice(idx, 1)[0]);
            idx = remaining.findIndex(predicate);
        }
        return extracted;
    };
    // 1. BEST SELLER
    let bestSeller = extract((c) => c.id === "highly-recommend");
    if (!bestSeller) {
        const baseBestSeller = BASE_MENU.find((c) => c.id === "highly-recommend");
        if (baseBestSeller) {
            bestSeller = JSON.parse(JSON.stringify(baseBestSeller));
        }
    }
    if (bestSeller) {
        bestSeller.title = "BEST SELLER";
        newMenu.push(bestSeller);
    }
    // 2. ESPRESSO BASED
    const esp = extract((c) => c.id === "espresso");
    if (esp) {
        esp.title = "ESPRESSO BASED";
        // Remove custom styling to ensure it matches the default white, sans-serif style
        if (esp.headerStyle) {
            delete esp.headerStyle;
        }
        newMenu.push(esp);
    }
    // 3. FILTERED
    const specialtyItems = extractAll((c) => [
        "filter",
        "filter-coffee",
        "cold-drip",
        "filter-taps",
        "cold-brew",
    ].includes(c.id));
    if (specialtyItems.length > 0) {
        const allFilteredItems = [];
        specialtyItems.forEach((cat) => {
            if (cat.items) {
                allFilteredItems.push(...cat.items);
            }
        });
        // Deduplicate by ID
        const uniqueFilteredItems = Array.from(new Map(allFilteredItems.map((item) => [item.id, item])).values());
        const filteredHotItems = [];
        const coldDripItems = [];
        const coldBrewItems = [];
        uniqueFilteredItems.forEach((originalItem) => {
            // Clone the item to avoid mutating shared objects
            const item = { ...originalItem };
            let isColdBrew = item.id.includes("cb_") ||
                item.name.toLowerCase().includes("cold brew");
            let isColdDrip = item.id.includes("cd_") ||
                item.name.toLowerCase().includes("cold drip") ||
                item.id.includes("drip");
            // Extract Origin and Process
            let cleanName = item.name.replace("❄️", "").trim();
            let origin = item.origin || "";
            let process = item.process || "";
            let matchedOrigin = "";
            const origins = [
                "Colombia",
                "Ethiopia",
                "Kenya",
                "Panama",
                "Panamá",
                "Costa Rica",
                "Cuban",
            ];
            for (const o of origins) {
                if (cleanName.toUpperCase().startsWith(o.toUpperCase())) {
                    matchedOrigin = o;
                    break;
                }
            }
            if (matchedOrigin) {
                if (!origin)
                    origin = matchedOrigin;
                if (!process) {
                    process = cleanName.substring(matchedOrigin.length).trim();
                    if (process.startsWith("-") || process.startsWith("–")) {
                        process = process.substring(1).trim();
                    }
                }
            }
            else {
                // Fallback to splitting by dash
                const parts = cleanName.split(/ - | – |-/);
                if (parts.length > 1) {
                    if (!origin)
                        origin = parts[0].trim();
                    if (!process)
                        process = parts.slice(1).join("-").trim();
                }
                else {
                    if (!origin)
                        origin = cleanName;
                }
            }
            item.origin = origin;
            item.process = process;
            // Capitalize origin
            if (item.origin) {
                item.origin =
                    item.origin.charAt(0).toUpperCase() +
                        item.origin.slice(1).toLowerCase();
            }
            let displayName = process || origin;
            if (isColdBrew) {
                item.name = `${displayName} ❄️`;
                item.ingredients = "Slow-steeped cold water extraction for 12+ hours.";
                coldBrewItems.push(item);
            }
            else if (isColdDrip) {
                item.name = `${displayName} ❄️`;
                item.ingredients = "Gravity-fed slow drip extraction.";
                coldDripItems.push(item);
            }
            else {
                item.name = displayName;
                item.ingredients = "Pour-over brewing method.";
                filteredHotItems.push(item);
            }
        });
        const newSubCategories = [];
        if (filteredHotItems.length > 0) {
            newSubCategories.push({
                id: "filtered-hot",
                title: "FILTERED (Hot)",
                items: filteredHotItems,
            });
        }
        if (coldDripItems.length > 0) {
            newSubCategories.push({
                id: "cold-drip",
                title: "COLD DRIP",
                items: coldDripItems,
            });
        }
        // Always add the global cold brew items
        newSubCategories.push({
            id: "cold-brew",
            title: "COLD BREW",
            items: [
                {
                    id: "cb_colombia_global",
                    name: "Colombia",
                    tastingNotes: "hazelnut, orange, molasses",
                    price: "38",
                    image: "https://iili.io/C27AgUB.jpg",
                    ingredients: "Cold Brew",
                    calories: 5,
                    status: 'available',
                },
                {
                    id: "cb_ethiopia_global",
                    name: "Ethiopia",
                    tastingNotes: "Apricot, Pear, Honey.",
                    price: "38",
                    image: "https://iili.io/B3OHMFV.jpg",
                    ingredients: "Cold Brew",
                    calories: 5,
                    status: 'available',
                },
                {
                    id: "cb_kenya_global",
                    name: "Kenya",
                    tastingNotes: "Brown Sugar, Wild Cherry, Raisins.",
                    price: "38",
                    image: "https://iili.io/B3Ns6UG.jpg",
                    ingredients: "Cold Brew",
                    calories: 5,
                    status: 'available',
                }
            ],
        });
        newMenu.push({
            id: "specialty-coffee",
            title: "FILTERED",
            items: [],
            subCategories: newSubCategories,
        });
    }
    // 4. SIGNATURES DRINKS
    const sigTeaItems = extractAll((c) => ["signature-drinks", "tea", "juices", "smoothies"].includes(c.id));
    if (sigTeaItems.length > 0) {
        newMenu.push({
            id: "signature-tea",
            title: "SIGNATURES DRINKS",
            items: [],
            subCategories: sigTeaItems,
        });
    }
    // 5. FRUIT & GRINDS
    const healthyBowls = extractAll((c) => ["fruits-and-grinds", "fruits-grains", "fruits-gangs"].includes(c.id));
    if (healthyBowls.length > 0) {
        const allItems = healthyBowls.flatMap((c) => c.items || []);
        const uniqueItems = Array.from(new Map(allItems.map((item) => [item.id, item])).values());
        newMenu.push({
            id: "fruits-and-grinds",
            title: "FRUIT & GRINDS",
            items: uniqueItems,
        });
    }
    // 6. BAKE GOODS
    const bakedItems = extractAll((c) => ["baked-goods", "baked-items", "from-our-bakery"].includes(c.id));
    if (bakedItems.length > 0) {
        const allItems = bakedItems.flatMap((c) => c.items || []);
        const uniqueItems = Array.from(new Map(allItems.map((item) => [item.id, item])).values());
        newMenu.push({
            id: "baked-goods",
            title: "BAKE GOODS",
            items: uniqueItems,
        });
    }
    // 7. EGG & MORE
    const eggsMore = extractAll((c) => ["eggs-more", "breakfast"].includes(c.id));
    if (eggsMore.length > 0) {
        const allItems = eggsMore.flatMap((c) => c.items || []);
        const uniqueItems = Array.from(new Map(allItems.map((item) => [item.id, item])).values());
        newMenu.push({
            id: "eggs-more",
            title: "EGG & MORE",
            items: uniqueItems,
        });
    }
    // 8. SANDWICHES & BAGEL'S
    const sandwiches = extract((c) => c.id === "sandwiches");
    if (sandwiches) {
        sandwiches.title = "SANDWICHES & BAGEL'S";
        sandwiches.items.forEach(item => {
            item.status = "active";
        });
        newMenu.push(sandwiches);
    }
    // 9. DESSERTS
    const dessert = extract((c) => c.id === "desserts");
    if (dessert) {
        dessert.title = "DESSERTS";
        newMenu.push(dessert);
    }
    // 10. HEALTH BAR
    const healthyBar = extractAll((c) => ["healthy-bar"].includes(c.id));
    if (healthyBar.length > 0) {
        const allItems = healthyBar.flatMap((c) => c.items || []);
        const uniqueItems = Array.from(new Map(allItems.map((item) => [item.id, item])).values());
        newMenu.push({
            id: "healthy-bar",
            title: "HEALTH BAR",
            items: uniqueItems,
        });
    }
    // Append any remaining categories just in case, to avoid losing data
    if (remaining.length > 0) {
        newMenu.push(...remaining);
    }
    return newMenu;
};
// Dubai Branch Specific Menu
const createDubaiMenu = () => {
    const findItem = (catId, itemId) => {
        const cat = BASE_MENU.find((c) => c.id === catId);
        return cat?.items.find((i) => i.id === itemId);
    };
    // Custom Espresso Category for Dubai
    const baseEspresso = BASE_MENU.find((c) => c.id === "espresso");
    const dubaiEspresso = JSON.parse(JSON.stringify(baseEspresso));
    dubaiEspresso.title = "DUBAI ESPRESSO SELECTION";
    dubaiEspresso.headerStyle = {
        backgroundColor: "transparent",
        color: "#fbbf24", // Gold
        padding: "1rem 0",
        textAlign: "center",
        fontFamily: "serif",
        letterSpacing: "0.2em",
        fontSize: "2.5rem",
        borderBottom: "none",
    };
    const dubaiBeans = [
        {
            id: "bean_469",
            name: "Brazil Chocolate",
            notes: "Chocolate biscuit, condensed milk, chestnut",
            price: 1,
            isNew: false,
        },
        {
            id: "bean_coconutella",
            name: "Coconutella",
            notes: "Coconut Cream, Milk Chocolate, Toffee Caramel",
            price: 10,
            isNew: false,
        },
        {
            id: "bean_kenya",
            name: "Kenya Gichatha",
            notes: "Caramel, Cacao Nibs, Black Cherry",
            price: 1,
            isNew: false,
        },
        {
            id: "bean_colombia_strawberry",
            name: "Colombia Peach",
            notes: "Strawberry Jam, Honey, Milk Chocolates",
            price: 5,
            isNew: true,
            status: "active",
        },
        {
            id: "bean_colombia_decaf",
            name: "Colombia Sweet Dreams (Decaf)",
            notes: "Passion fruit cheesecake, Milk chocolate, Molasses",
            price: 0,
            isNew: false,
            isDecaf: true,
        },
        {
            id: "bean_colombia_bourbon_sidra",
            name: "Colombia Bourbon Sidra",
            notes: "Red Grapes, Watermelon, Hard Candy, Raspberry",
            price: 5,
            isNew: true,
            status: 'coming_soon',
        },
    ];
    dubaiEspresso.beanSelection = dubaiBeans;
    dubaiEspresso.description = "";
    // Update all items to use these beans
    dubaiEspresso.items.forEach((item) => {
        const beanCustomization = item.customizations?.find((c) => c.id === "bean_choice");
        if (beanCustomization) {
            beanCustomization.options = dubaiBeans.map((b) => ({
                id: b.id,
                name: b.name,
                price: b.price,
                description: b.notes,
                status: b.status,
            }));
        }
        item.branch = "Dubai";
    });
    return [
        dubaiEspresso,
        {
            id: "filtered-cold-brew",
            title: "FILTERED & cold brew",
            items: [
                {
                    id: "dubai_fil_ethiopia",
                    name: "Ethiopia",
                    price: "36",
                    image: "https://iili.io/qLf9mXt.jpg",
                    tastingNotes: "Apricot, Pear, Honey.",
                    notes: "Apricot, Pear, Honey.",
                    ingredients: "Filtered Coffee",
                    calories: 5,
                    status: 'available'
                },
                {
                    id: "dubai_fil_sweet_dream_decaf",
                    name: "Sweet dream Decaf",
                    price: "36",
                    image: "https://iili.io/qLf9mXt.jpg",
                    tastingNotes: "Passion fruit cheesecake, milk chocolate, molasses",
                    notes: "Passion fruit cheesecake, milk chocolate, molasses",
                    ingredients: "Filtered Coffee",
                    calories: 5,
                    status: 'available'
                },
                {
                    id: "dubai_fil_kirimara",
                    name: "KIRIMARA",
                    price: "46",
                    image: "https://iili.io/qLf9mXt.jpg",
                    tastingNotes: "Brown Sugar, Wild Cherry, Raisins.",
                    notes: "Brown Sugar, Wild Cherry, Raisins.",
                    ingredients: "Filtered Coffee",
                    calories: 5,
                    status: 'available'
                },
                {
                    id: "dubai_fil_mish_mish",
                    name: "Mish Mish",
                    price: "57",
                    image: "https://iili.io/qLf9mXt.jpg",
                    tastingNotes: "Apricot Jam, Raspberry, Lychee.",
                    notes: "Apricot Jam, Raspberry, Lychee.",
                    ingredients: "Filtered Coffee",
                    calories: 5,
                    status: 'available'
                },
                {
                    id: "dubai_fil_gesha",
                    name: "Gesha",
                    price: "65",
                    image: "https://iili.io/qLf9mXt.jpg",
                    tastingNotes: "Orange blossom, lemon grass, condensed milk",
                    notes: "Orange blossom, lemon grass, condensed milk",
                    ingredients: "Filtered Coffee",
                    calories: 5,
                    status: 'available'
                },
                {
                    id: "dubai_fil_colombia_strawberry_v60",
                    name: "Colombia strawberry v60",
                    price: "57",
                    image: "https://iili.io/qLf9mXt.jpg",
                    tastingNotes: "Strawberry jam – honey - milk chocolates",
                    notes: "Strawberry jam – honey - milk chocolates",
                    ingredients: "Filtered Coffee",
                    calories: 5,
                    status: 'available'
                },
                {
                    id: "dubai_fil_bourbon_sidra_v60",
                    name: "Bourbon sidra v60",
                    price: "46",
                    image: "https://iili.io/qLf9mXt.jpg",
                    tastingNotes: "Red grips – watermelon – hard candy- raspberry",
                    notes: "Red grips – watermelon – hard candy- raspberry",
                    ingredients: "Filtered Coffee",
                    calories: 5,
                    status: 'available'
                },
                {
                    id: "dubai_cb_ethiopia",
                    name: "Cold Brew Ethiopia.",
                    price: "38",
                    image: "https://iili.io/B3OHMFV.jpg",
                    tastingNotes: "Apricot, Pear, Honey",
                    notes: "Apricot, Pear, Honey",
                    ingredients: "Cold Brew Coffee",
                    calories: 5,
                    status: 'available'
                },
                {
                    id: "dubai_cb_kirimara",
                    name: "Cold Brew Kenya Kirimara",
                    price: "38",
                    image: "https://iili.io/B3Ns6UG.jpg",
                    tastingNotes: "Brown Sugar, Wild Cherry, Raisins.",
                    notes: "Brown Sugar, Wild Cherry, Raisins.",
                    ingredients: "Cold Brew Coffee",
                    calories: 5,
                    status: 'available'
                },
                {
                    id: "dubai_cb_colombian_exotic",
                    name: "Cold Brew - Colombian EXOTIC",
                    price: "38",
                    image: "https://iili.io/C27AgUB.jpg",
                    tastingNotes: "",
                    notes: "",
                    ingredients: "Cold Brew Coffee",
                    calories: 5,
                    status: 'available'
                }
            ],
        },
        {
            id: "baked-goods",
            title: "Baked Goods",
            items: [
                findItem("from-our-bakery", "fob_turkey"), // Turkey Cheese Danish
                findItem("from-our-bakery", "fob_zaatar"), // Zaatar & Labneh
                findItem("from-our-bakery", "fob_burrata"), // Buratta Pizza
                {
                    id: "bg_3cheese",
                    name: "3 Cheese Croissant",
                    price: "17",
                    image: "https://iili.io/qqECJAN.jpg",
                    ingredients: "Cheddar, mozzarella, and parmesan",
                    calories: 350,
                }, // 3 Cheese Croissant
                {
                    id: "bg_plain",
                    name: "Plain Croissant",
                    price: "18",
                    image: "https://iili.io/qqX0EeR.png",
                    ingredients: "Classic butter croissant",
                    calories: 280,
                }, // Plain Croissant
                findItem("from-our-bakery", "fob_almond"),
                findItem("from-our-bakery", "fob_bacon_glaze"), // Almond Croissant
                findItem("desserts", "d_choc_chip"), // Chocolate Chip Cookies
                findItem("from-our-bakery", "fob_choc"),
            ].filter(Boolean),
        },
        {
            id: "desserts",
            title: "Desserts",
            items: [
                {
                    id: "d_snickers_coffee_bean",
                    name: "Snickers coffee bean",
                    ingredients: "Rich chocolate snickers with an infusion of premium coffee beans.",
                    price: "39.20",
                    image: "https://iili.io/q2hTJNj.png",
                    calories: 320,
                }, // Snickers coffee bean
                findItem("desserts", "d_aseeda"), // Aseeda
                {
                    id: "d_honey",
                    name: "Honey Cake",
                    price: "39.20",
                    image: "https://iili.io/qqXWIea.png",
                    ingredients: "Layers of honey sponge and cream",
                    calories: 450,
                }, // Honey Cake
                {
                    id: "d_peanut",
                    name: "Peanut Choco Tart",
                    price: "39.20",
                    image: "https://iili.io/qqXGUIR.png",
                    ingredients: "Rich chocolate tart with peanut butter",
                    calories: 480,
                }, // Peanut Choco Tart
                {
                    id: "d_tiramisu",
                    name: "Tiramisu Bowl",
                    price: "39.20",
                    image: "https://iili.io/C27waOg.jpg",
                    ingredients: "Classic Italian dessert with coffee",
                    calories: 400,
                }, // Tiramisu Bowl
                findItem("desserts", "d_vanilla_pud"), // Vanilla Pudding
                findItem("desserts", "d_banana_pud"), // Banana Pudding
                findItem("desserts", "STICKY DATE"),
            ].filter(Boolean),
        },
        {
            id: "sandwiches",
            title: "Sandwiches & Bagels",
            items: [
                {
                    id: "sw_tuna",
                    name: "Tunacado",
                    price: "38",
                    image: "https://iili.io/qqEgPdN.jpg",
                    ingredients: "Toasted Brown slice bread with pesto oil, avocado, tuna mix, tomato, and jalapeños.",
                    calories: 480,
                },
                {
                    id: "sw_chick",
                    name: "Chicken & Avocado Croissant",
                    price: "42",
                    image: "https://iili.io/qqG2qR1.png",
                    ingredients: "Grilled chicken, fresh avocado, croissant",
                    calories: 520,
                },
                {
                    id: "sw_club",
                    name: "Club Sandwich",
                    price: "38",
                    image: "https://iili.io/qqEPTpS.jpg",
                    ingredients: "White sliced bread, chipotle mayo, cheddar, lettuce, gherkins, tomato, bacon, smoked turkey, homemade chips.",
                    calories: 600,
                },
                {
                    id: "sw_brisket",
                    name: "Brisket Blaze",
                    price: "45",
                    image: "https://iili.io/qqERigt.jpg",
                    ingredients: "Toasted brown sliced bread stacked with smoked brisket, aged white cheddar, Dijon mayo, tangy relish, and finished with a perfectly burnt matured white cheddar cheese for added flavor.",
                    calories: 650,
                },
                {
                    id: "sw_shrimp",
                    name: "Shrimp Toast",
                    price: "35",
                    image: "https://iili.io/qqEYw12.jpg",
                    ingredients: "Crispy milk bread topped with house-made shrimp paste, drizzled with dynamite sauce, garnished with salmon caviar, and finished with mixed sesame seeds.",
                    calories: 420,
                },
                {
                    id: "sw_italian",
                    name: "Cold Cut Italian",
                    price: "38",
                    image: "https://iili.io/qqEieVe.png",
                    ingredients: "White slice bread with pesto oil, fresh mozzarella, tomato slice, tartufo salami, chorizo, baby Rocca, sun-dried tomatoes, balsamic glaze, organic olive oil.",
                    calories: 580,
                },
            ].filter(Boolean),
        },
        {
            id: "eggs-more",
            title: "EGG& MORE",
            items: [
                {
                    id: "sw_bacon",
                    name: "Bacon & Egg Cheese Bun",
                    price: "44",
                    image: "https://iili.io/qqEAsNj.jpg",
                    ingredients: "Brioche bun with crispy bacon, scrambled egg, cheddar cheese, kimchi ketchup.",
                    calories: 550,
                },
                {
                    id: "egg_avo",
                    name: "Avocado Toast",
                    price: "45",
                    image: "https://iili.io/qqGqaMg.jpg",
                    ingredients: "Sourdough with smashed avocado, whipped feta, Pico de Gallo, pine nuts, parmesan, coriander, dill leaves, mix sesame seeds, lime wedges, chili flakes, dukka, and poached egg.",
                    calories: 380,
                },
                {
                    id: "egg_ben",
                    name: "Eggs Benedict",
                    price: "46",
                    image: "https://iili.io/qqGfw3x.jpg",
                    ingredients: "English muffins with cream cheese, tomato sauce, smoky bacon, poached eggs, miso hollandaise, chives.",
                    calories: 450,
                },
                {
                    id: "egg_truffle",
                    name: "Scrambled Truffle Eggs",
                    price: "54",
                    image: "https://iili.io/qqGqpDP.jpg",
                    ingredients: "Creamy scrambled eggs on brioche slice with truffle mayo, truffle oil, and shaved black truffle.",
                    calories: 420,
                },
                {
                    id: "egg_cro",
                    name: "Egg & Avo Croissant",
                    price: "38",
                    image: "https://iili.io/qqXARp9.jpg",
                    ingredients: "Plain croissant, cream cheese mix, smashed avocado, tomato sauce, poached eggs sprinkled with pumpkin seeds and mix sesame seeds.",
                    calories: 490,
                },
                {
                    id: "egg_big",
                    name: "Big Breakfast",
                    price: "65",
                    image: "https://iili.io/qqVHZ1R.png",
                    ingredients: "hash brown potatoes, red beans, sautéed portobello mushrooms, wagyu beef sausage, smoked veal bacon, roasted vine tomatoes, two sunny side up eggs on a slice of brioche bread, (eggs your way: scrambled, poached, sunny side up).",
                    calories: 850,
                },
                {
                    id: "egg_aussie",
                    name: "Aussie Benedict",
                    price: "58",
                    image: "https://iili.io/qqMpPzG.png",
                    ingredients: "brioche bun with white barbecue sauce, pulled beef, 2 poached eggs, miso hollandaise, crispy onions & spring roll, chives.",
                    calories: 580,
                },
                {
                    id: "egg_turkish",
                    name: "Turkish Egg",
                    price: "46",
                    image: "https://iili.io/qqGBwmB.jpg",
                    ingredients: "mint labneh, homemade tomato jam, poached eggs, mint pesto, chilli butter served with 2 slices of toasted zaatar sourdough.",
                    calories: 400,
                },
            ].filter(Boolean),
        },
        {
            id: "sweet-breakfast",
            title: "SWEET BREAKFAST",
            items: [
                {
                    id: "sb_french_toast",
                    name: "French Toast",
                    price: "66",
                    image: "https://iili.io/q2ARzyG.jpg",
                    ingredients: "Caramelized and served with vanilla ice cream, almond streusel, whipped vanilla cream, and rhubarb compote (option: salted caramel, mix berries compote)",
                },
            ],
        },
        {
            id: "salads",
            title: "Greens (Salad)",
            items: [
                {
                    id: "sal_caesar",
                    name: "Caesar-style Salad",
                    price: "42",
                    image: "https://iili.io/qqE6hg4.jpg",
                    ingredients: "little gem lettuce, creaser dressing, crouton, parmesan cheese, crushed pistachio (add Ons: poached egg, bacon or chicken).",
                    calories: 350,
                },
            ].filter(Boolean),
        },
        {
            id: "smoothies",
            title: "Smoothies",
            items: [
                {
                    id: "sm_acai",
                    name: "Açaí Smoothie",
                    price: "42",
                    image: "https://iili.io/BBBfCDN.jpg",
                    ingredients: "Acai berry, banana, strawberry, peanut butter, coconut water, oat milk, and apple juice.",
                    calories: 280,
                },
                {
                    id: "sm_pit",
                    name: "Pitaya Smoothie",
                    price: "42",
                    image: "https://iili.io/qqEH3rP.jpg",
                    ingredients: "Apple juice, lemon juice, pitaya, frozen pineapple, banana, and lemon electrolytes.",
                    calories: 270,
                },
                {
                    id: "sm_coc",
                    name: "Blue Cloud Smoothie",
                    price: "42",
                    image: "https://iili.io/qqE9JUX.jpg",
                    ingredients: "Coconut milk, pineapple, banana, avocado, vanilla stevia, collagen, peanut butter, blue spirulina, and on top coconut cloud cream.",
                    calories: 300,
                },
                {
                    id: "sm_straw",
                    name: "Strawberry Glaze Smoothie",
                    price: "42",
                    image: "https://iili.io/qq1mS5b.jpg",
                    ingredients: "Almond milk, frozen strawberries, bananas, dates, maple syrup, collagen, vanilla stevia, sea moss gel, strawberry sauce, and coconut cloud cream.",
                    calories: 260,
                },
            ].filter(Boolean),
        },
        BASE_MENU.find((c) => c.id === "juices"),
        {
            id: "signature-drinks",
            title: "Signature drink",
            items: [
                findItem("signature-drinks", "sig3"), // Matcha Cloud
                {
                    id: "sig_pink_cloud",
                    name: "Pink Cloud Matcha",
                    price: "38",
                    image: "https://iili.io/q2ugtIa.png",
                    ingredients: "Matcha cream, matcha dust, coconut water, strawberry infusion",
                    calories: 230,
                },
                {
                    id: "sig_blue_cloud",
                    name: "Blue Cloud Matcha",
                    price: "38",
                    image: "https://iili.io/q2ugtIa.png",
                    ingredients: "Matcha cream, matcha dust, coconut water, blue spirulina",
                    calories: 230,
                },
                findItem("signature-drinks", "sig2"), // Matcha Latte
                findItem("signature-drinks", "sig_matcha_shake"), // Matcha Shake
                findItem("signature-drinks", "sig8"), // Tanzanian Hot Chocolate
                findItem("signature-drinks", "sig_baby_shark"), // Baby Shark
                {
                    id: "sig_espresso_martini",
                    name: "Espresso Martini",
                    price: "42",
                    image: "https://iili.io/q2uUQV4.jpg",
                    ingredients: "Double shot espresso, vanilla syrup, shaken over ice",
                    calories: 150,
                },
                findItem("signature-drinks", "sig_espresso_shake"),
            ].filter(Boolean),
        },
    ];
};
// Global Sort Utility for Filtered Coffee
const sortFilteredCoffeeByPrice = (directory) => {
    const sortItems = (items) => {
        return [...items].sort((a, b) => {
            const priceA = parseFloat(a.price) || 0;
            const priceB = parseFloat(b.price) || 0;
            return priceA - priceB;
        });
    };
    const processCategory = (category) => {
        // Check if category is related to Filtered Coffee
        const isFiltered = category.id === "filter-coffee" ||
            category.title.toUpperCase().includes("FILTER");
        // Process subcategories recursively
        const subCategories = category.subCategories
            ? category.subCategories.map(processCategory)
            : undefined;
        return {
            ...category,
            items: isFiltered ? sortItems(category.items) : category.items,
            ...(subCategories && { subCategories }),
        };
    };
    const sortedDirectory = {};
    for (const [branchId, categories] of Object.entries(directory)) {
        sortedDirectory[branchId] = categories.map(processCategory);
    }
    return sortedDirectory;
};
exports.sortFilteredCoffeeByPrice = sortFilteredCoffeeByPrice;
// MULTI-BRANCH DATA DICTIONARY
// Key = Branch ID, Value = Specific Menu Structure
const RAW_BRANCH_MENUS = {
    // Al Ain
    alain: applyGoldenRuleLayout(JSON.parse(JSON.stringify(BASE_MENU))),
    // Dubai Mirdif
    mirdif: (() => {
        const menu = applyGoldenRuleLayout(createMirdifMenu());
        const idx = menu.findIndex(c => c.id === "specialty-coffee" || c.id === "filtered" || c.title === "FILTERED");
        if (idx !== -1)
            menu.splice(idx, 1);
        const sandwichesIdx = menu.findIndex(c => c.id === 'sandwiches');
        if (sandwichesIdx !== -1) {
            menu[sandwichesIdx].items.forEach(item => {
                item.status = 'active';
            });
        }
        return menu;
    })(),
    // Dubai
    dubai: (() => {
        const menu = applyGoldenRuleLayout(createDubaiMenu());
        const idx = menu.findIndex(c => c.id === "specialty-coffee" || c.id === "filtered" || c.title === "FILTERED");
        if (idx !== -1)
            menu.splice(idx, 1);
        // Al Bateen specific sig fix
        if (false /* if ('dubai' === 'marina' || 'dubai' === 'albateen') */) {
            const sigTeaIdx = menu.findIndex(c => c.id === 'signature-tea');
            if (sigTeaIdx !== -1 && menu[sigTeaIdx].subCategories) {
                menu[sigTeaIdx].subCategories = menu[sigTeaIdx].subCategories.filter(sc => sc.id !== 'juices');
            }
        }
        // Khalifa specific sandwich fix
        if (false /* if ('dubai' === 'khalifa') */) {
            const sandwichesIdx = menu.findIndex(c => c.id === 'sandwiches');
            if (sandwichesIdx !== -1) {
                menu[sandwichesIdx].items.forEach(item => {
                    item.status = 'active';
                });
            }
        }
        return menu;
    })(),
    // Al Qana
    alqana: (() => {
        const menu = applyGoldenRuleLayout(createAlQanaMenu());
        const idx = menu.findIndex(c => c.id === "specialty-coffee" || c.id === "filtered" || c.title === "FILTERED");
        if (idx !== -1)
            menu.splice(idx, 1);
        // Al Bateen specific sig fix
        if (false /* if ('alqana' === 'marina' || 'alqana' === 'albateen') */) {
            const sigTeaIdx = menu.findIndex(c => c.id === 'signature-tea');
            if (sigTeaIdx !== -1 && menu[sigTeaIdx].subCategories) {
                menu[sigTeaIdx].subCategories = menu[sigTeaIdx].subCategories.filter(sc => sc.id !== 'juices');
            }
        }
        // Khalifa specific sandwich fix
        if (false /* if ('alqana' === 'khalifa') */) {
            const sandwichesIdx = menu.findIndex(c => c.id === 'sandwiches');
            if (sandwichesIdx !== -1) {
                menu[sandwichesIdx].items.forEach(item => {
                    item.status = 'active';
                });
            }
        }
        const filteredCategory = {
            id: "filtered",
            title: "FILTERED",
            items: [
                {
                    "id": "alqana_fil_1",
                    "name": "Colombia key lime gesha",
                    "price": "65",
                    "image": "https://iili.io/qLf9mXt.jpg",
                    "tastingNotes": "Orange Blossom – Lemon Grass – Condensed Milk",
                    "ingredients": "Filtered Coffee",
                    "calories": 5,
                    "status": "available"
                },
                {
                    "id": "alqana_fil_2",
                    "name": "Colombia strawberry",
                    "price": "57",
                    "image": "https://iili.io/qLf9mXt.jpg",
                    "tastingNotes": "Strawberry Jam – Honey – Milk Chocolates",
                    "ingredients": "Filtered Coffee",
                    "calories": 5,
                    "status": "available"
                },
                {
                    "id": "alqana_fil_3",
                    "name": "Colombia mish-mish",
                    "price": "57",
                    "image": "https://iili.io/qLf9mXt.jpg",
                    "tastingNotes": "Apricot Jam – Raspberry – Lychee",
                    "ingredients": "Filtered Coffee",
                    "calories": 5,
                    "status": "available"
                },
                {
                    "id": "alqana_fil_4",
                    "name": "Ethiopia ROGICHA",
                    "price": "36",
                    "image": "https://iili.io/qLf9mXt.jpg",
                    "tastingNotes": "Apricot, Pear, Honey",
                    "ingredients": "Filtered Coffee",
                    "calories": 5,
                    "status": "available"
                },
                {
                    "id": "alqana_fil_5",
                    "name": "Kenya Kirimara",
                    "price": "46",
                    "image": "https://iili.io/qLf9mXt.jpg",
                    "tastingNotes": "Brown Sugar – Wild Cherry – Raisins",
                    "ingredients": "Filtered Coffee",
                    "calories": 5,
                    "status": "available"
                },
                {
                    "id": "alqana_fil_6",
                    "name": "sweet dream decaf",
                    "price": "38",
                    "image": "https://iili.io/qLf9mXt.jpg",
                    "tastingNotes": "Passion Fruit, Cheesecake, Milk Chocolate",
                    "ingredients": "Filtered Coffee",
                    "calories": 5,
                    "status": "available"
                }
            ]
        };
        const espressoIdx = menu.findIndex(c => c.id === "espresso");
        if (espressoIdx !== -1) {
            menu.splice(espressoIdx + 1, 0, filteredCategory);
        }
        else {
            menu.push(filteredCategory);
        }
        return menu;
    })(),
    // Khalifa City
    khalifa: (() => {
        const menu = applyGoldenRuleLayout(createKhalifaMenu());
        const idx = menu.findIndex(c => c.id === "specialty-coffee" || c.id === "filtered" || c.title === "FILTERED");
        if (idx !== -1)
            menu.splice(idx, 1);
        // Al Bateen specific sig fix
        if (false /* if ('khalifa' === 'marina' || 'khalifa' === 'albateen') */) {
            const sigTeaIdx = menu.findIndex(c => c.id === 'signature-tea');
            if (sigTeaIdx !== -1 && menu[sigTeaIdx].subCategories) {
                menu[sigTeaIdx].subCategories = menu[sigTeaIdx].subCategories.filter(sc => sc.id !== 'juices');
            }
        }
        // Khalifa specific sandwich fix
        if (true /* if ('khalifa' === 'khalifa') */) {
            const sandwichesIdx = menu.findIndex(c => c.id === 'sandwiches');
            if (sandwichesIdx !== -1) {
                menu[sandwichesIdx].items.forEach(item => {
                    item.status = 'active';
                });
            }
        }
        const filteredCategory = {
            id: "filtered",
            title: "FILTERED",
            items: [
                {
                    "id": "khalifa_fil_1",
                    "name": "Ethiopia ROGICHA",
                    "price": "36",
                    "image": "https://iili.io/qLf9mXt.jpg",
                    "tastingNotes": "Apricot, Pear, Honey",
                    "ingredients": "Filtered Coffee",
                    "calories": 5,
                    "status": "available"
                },
                {
                    "id": "khalifa_fil_2",
                    "name": "Kenya Kirimara",
                    "price": "46",
                    "image": "https://iili.io/qLf9mXt.jpg",
                    "tastingNotes": "Brown Sugar – Wild Cherry – Raisins",
                    "ingredients": "Filtered Coffee",
                    "calories": 5,
                    "status": "available"
                },
                {
                    "id": "khalifa_fil_3",
                    "name": "Colombia - Bourbon Sidra",
                    "price": "46",
                    "image": "https://iili.io/qLf9mXt.jpg",
                    "tastingNotes": "Red Grapes – Watermelon – Hard Candy – Raspberry",
                    "ingredients": "Filtered Coffee",
                    "calories": 5,
                    "status": "available"
                },
                {
                    "id": "khalifa_fil_4",
                    "name": "Colombia blackberry",
                    "price": "57",
                    "image": "https://iili.io/qLf9mXt.jpg",
                    "tastingNotes": "Blackberry Soda, Cacao Nibs, Karkade",
                    "ingredients": "Filtered Coffee",
                    "calories": 5,
                    "status": "available"
                },
                {
                    "id": "khalifa_fil_5",
                    "name": "Colombia mish-mish",
                    "price": "57",
                    "image": "https://iili.io/qLf9mXt.jpg",
                    "tastingNotes": "Apricot Jam – Raspberry – Lychee",
                    "ingredients": "Filtered Coffee",
                    "calories": 5,
                    "status": "available"
                },
                {
                    "id": "khalifa_fil_6",
                    "name": "Sweet Dreams Decaf",
                    "price": "38",
                    "image": "https://iili.io/qLf9mXt.jpg",
                    "tastingNotes": "Passion Fruit, Cheesecake, Milk Chocolate",
                    "ingredients": "Filtered Coffee",
                    "calories": 5,
                    "status": "available"
                },
                {
                    "id": "khalifa_fil_7",
                    "name": "Colombia key lime gesha",
                    "price": "65",
                    "image": "https://iili.io/qLf9mXt.jpg",
                    "tastingNotes": "Orange Blossom – Lemon Grass – Condensed Milk",
                    "ingredients": "Filtered Coffee",
                    "calories": 5,
                    "status": "available"
                }
            ]
        };
        const espressoIdx = menu.findIndex(c => c.id === "espresso");
        if (espressoIdx !== -1) {
            menu.splice(espressoIdx + 1, 0, filteredCategory);
        }
        else {
            menu.push(filteredCategory);
        }
        return menu;
    })(),
    // Marina
    marina: (() => {
        const menu = applyGoldenRuleLayout(createMarinaMenu());
        const specialtyIdx = menu.findIndex(c => c.id === 'specialty-coffee');
        if (specialtyIdx !== -1) {
            menu.splice(specialtyIdx, 1);
        }
        // 2. Category Deletion: "Juices"
        const juicesIdx = menu.findIndex(c => c.id === 'juices');
        if (juicesIdx !== -1) {
            menu.splice(juicesIdx, 1);
        }
        // 3. Availability Updates (Coming Soon)
        const sandwichesIdx = menu.findIndex(c => c.id === 'sandwiches');
        if (sandwichesIdx !== -1) {
            menu[sandwichesIdx].items.forEach(item => {
                item.status = 'active';
            });
        }
        const healthyBowlsIdx = menu.findIndex(c => c.id === 'fruits-and-grinds');
        if (healthyBowlsIdx !== -1) {
            menu[healthyBowlsIdx].items.forEach(item => {
                item.status = 'available';
            });
        }
        // 2. Category Deletion: "Juices" (Fix for subCategories)
        const sigTeaIdx = menu.findIndex(c => c.id === 'signature-tea');
        if (sigTeaIdx !== -1 && menu[sigTeaIdx].subCategories) {
            menu[sigTeaIdx].subCategories = menu[sigTeaIdx].subCategories.filter(sc => sc.id !== 'juices');
        }
        const filteredCategory = {
            id: "filtered-coffee-marina",
            title: "FILTERED",
            items: [
                {
                    id: "m_fil_mish_mish",
                    name: "Colombia Mish Mish",
                    price: "57",
                    image: "https://iili.io/qLf9mXt.jpg",
                    tastingNotes: "Apricot Jam, Raspberry, Lychee",
                    ingredients: "Filtered Coffee",
                    calories: 5,
                    status: 'available'
                },
                {
                    id: "m_fil_colombia_sidra",
                    name: "Colombia Sidra",
                    price: "46",
                    image: "https://iili.io/qLf9mXt.jpg",
                    tastingNotes: "Red Grapes, Watermelon, Hard Candy, Raspberry",
                    ingredients: "Filtered Coffee",
                    calories: 5,
                    status: 'available'
                },
                {
                    id: "m_fil_gesha_lime_pie",
                    name: "Colombia Gesha Key Lime Pie",
                    price: "65",
                    image: "https://iili.io/qLf9mXt.jpg",
                    tastingNotes: "Orange Blossom, Lemon Grass, Condensed Milk",
                    ingredients: "Filtered Coffee",
                    calories: 5,
                    status: 'available'
                },
                {
                    id: "m_fil_colombia_strawberry",
                    name: "Colombia Strawberry",
                    price: "57",
                    image: "https://iili.io/qLf9mXt.jpg",
                    tastingNotes: "Strawberry Jam, Honey, Milk Chocolates",
                    ingredients: "Filtered Coffee",
                    calories: 5,
                    status: 'available'
                },
                {
                    id: "m_fil_kenya_kiramara",
                    name: "Kenya Kiramara",
                    price: "46",
                    image: "https://iili.io/qLf9mXt.jpg",
                    tastingNotes: "Brown Sugar, Wild Cherry, Raisins",
                    ingredients: "Filtered Coffee",
                    calories: 5,
                    status: 'available'
                },
                {
                    id: "m_fil_ethiopia_rogicha",
                    name: "Ethiopia Rogicha",
                    price: "36",
                    image: "https://iili.io/qLf9mXt.jpg",
                    tastingNotes: "Apricot, Pear, Honey",
                    ingredients: "Filtered Coffee",
                    calories: 5,
                    status: 'available'
                },
                {
                    id: "m_fil_sweet_dreams_decaf",
                    name: "Sweet Dreams Decaf",
                    price: "38",
                    image: "https://iili.io/qLf9mXt.jpg",
                    tastingNotes: "Passion Fruit, Cheesecake, Milk Chocolate",
                    ingredients: "Filtered Coffee",
                    calories: 5,
                    status: 'available'
                }
            ]
        };
        const espressoIdx = menu.findIndex(c => c.id === 'espresso');
        if (espressoIdx !== -1) {
            menu.splice(espressoIdx + 1, 0, filteredCategory);
        }
        else {
            menu.push(filteredCategory);
        }
        // 4. Custom Marina Overrides (Remove 3 Cheese Croissant & Out of Stock Banana Pudding)
        const bakedGoodsMarinaIdx = menu.findIndex(c => c.id === 'from-our-bakery' || c.id === 'baked-goods');
        if (bakedGoodsMarinaIdx !== -1) {
            menu[bakedGoodsMarinaIdx].items = menu[bakedGoodsMarinaIdx].items.filter(i => i.id !== 'bg_3cheese' && i.id !== 'bg_marina_7');
        }
        const dessertsMarinaIdx = menu.findIndex(c => c.id === 'desserts');
        if (dessertsMarinaIdx !== -1) {
            menu[dessertsMarinaIdx] = { ...menu[dessertsMarinaIdx] }; // Shallow clone category
            menu[dessertsMarinaIdx].items = menu[dessertsMarinaIdx].items.map(i => {
                if (i.id === 'd_banana_pud') {
                    return { ...i, isSoldOut: false, status: 'active' }; // Clone item and modify status
                }
                return i;
            });
        }
        return menu;
    })(),
    // Al Bateen
    albateen: (() => {
        const menu = applyGoldenRuleLayout(createAlBateenMenu());
        const idx = menu.findIndex(c => c.id === "specialty-coffee" || c.id === "filtered" || c.title === "FILTERED");
        if (idx !== -1)
            menu.splice(idx, 1);
        // Al Bateen specific sig fix
        if (true /* if ('albateen' === 'marina' || 'albateen' === 'albateen') */) {
            const sigTeaIdx = menu.findIndex(c => c.id === 'signature-tea');
            if (sigTeaIdx !== -1 && menu[sigTeaIdx].subCategories) {
                menu[sigTeaIdx].subCategories = menu[sigTeaIdx].subCategories.filter(sc => sc.id !== 'juices');
            }
        }
        // Khalifa specific sandwich fix
        if (false /* if ('albateen' === 'khalifa') */) {
            const sandwichesIdx = menu.findIndex(c => c.id === 'sandwiches');
            if (sandwichesIdx !== -1) {
                menu[sandwichesIdx].items.forEach(item => {
                    item.status = 'active';
                });
            }
        }
        const filteredCategory = {
            id: "filtered",
            title: "FILTERED",
            items: [
                {
                    "id": "albateen_fil_1",
                    "name": "Ethiopia ROGICHA",
                    "price": "36",
                    "image": "https://iili.io/qLf9mXt.jpg",
                    "tastingNotes": "Apricot, Pear, Honey",
                    "ingredients": "Filtered Coffee",
                    "calories": 5,
                    "status": "available"
                },
                {
                    "id": "albateen_fil_2",
                    "name": "Kenya Kirimara",
                    "price": "46",
                    "image": "https://iili.io/qLf9mXt.jpg",
                    "tastingNotes": "Brown Sugar – Wild Cherry – Raisins",
                    "ingredients": "Filtered Coffee",
                    "calories": 5,
                    "status": "available"
                },
                {
                    "id": "albateen_fil_3",
                    "name": "Colombia blackberry",
                    "price": "57",
                    "image": "https://iili.io/qLf9mXt.jpg",
                    "tastingNotes": "Blackberry Soda, Cacao Nibs, Karkade",
                    "ingredients": "Filtered Coffee",
                    "calories": 5,
                    "status": "available"
                },
                {
                    "id": "albateen_fil_4",
                    "name": "Colombia - Bourbon Sidra",
                    "price": "46",
                    "image": "https://iili.io/qLf9mXt.jpg",
                    "tastingNotes": "Red Grapes – Watermelon – Hard Candy – Raspberry",
                    "ingredients": "Filtered Coffee",
                    "calories": 5,
                    "status": "available"
                },
                {
                    "id": "albateen_fil_5",
                    "name": "Colombia mish-mish",
                    "price": "57",
                    "image": "https://iili.io/qLf9mXt.jpg",
                    "tastingNotes": "Apricot Jam – Raspberry – Lychee",
                    "ingredients": "Filtered Coffee",
                    "calories": 5,
                    "status": "available"
                },
                {
                    "id": "albateen_fil_6",
                    "name": "Colombia key lime gesha",
                    "price": "65",
                    "image": "https://iili.io/qLf9mXt.jpg",
                    "tastingNotes": "Orange Blossom – Lemon Grass – Condensed Milk",
                    "ingredients": "Filtered Coffee",
                    "calories": 5,
                    "status": "available"
                },
                {
                    "id": "albateen_fil_7",
                    "name": "sweet dream decaf",
                    "price": "38",
                    "image": "https://iili.io/qLf9mXt.jpg",
                    "tastingNotes": "Passion Fruit, Cheesecake, Milk Chocolate",
                    "ingredients": "Filtered Coffee",
                    "calories": 5,
                    "status": "available"
                },
                {
                    "id": "albateen_fil_8",
                    "name": "Costa Rica Canet Chopin",
                    "price": "57",
                    "image": "https://iili.io/qLf9mXt.jpg",
                    "tastingNotes": "Cacao, Fig Compote, Honey, Cherry",
                    "ingredients": "Filtered Coffee",
                    "calories": 5,
                    "status": "active"
                }
            ]
        };
        const espressoIdx = menu.findIndex(c => c.id === "espresso");
        if (espressoIdx !== -1) {
            menu.splice(espressoIdx + 1, 0, filteredCategory);
        }
        else {
            menu.push(filteredCategory);
        }
        return menu;
    })(),
};
Object.keys(RAW_BRANCH_MENUS).forEach(branch => {
    if (branch === 'marina')
        return; // Marina handles it through BASE_MENU mapping
    if (branch === 'alain')
        return; // alain handles it through BASE_MENU mapping
    const menu = RAW_BRANCH_MENUS[branch];
    // Check if it already has it
    if (menu.find(c => c.id === 'fruits-and-grinds'))
        return;
    const baseFruits = BASE_MENU.find(c => c.id === 'fruits-and-grinds');
    if (baseFruits) {
        const copy = JSON.parse(JSON.stringify(baseFruits));
        const insertIdx = menu.findIndex(c => c.id === 'baked-goods' || c.id === 'desserts' || c.id === 'sandwiches');
        if (insertIdx !== -1) {
            menu.splice(insertIdx, 0, copy);
        }
        else {
            menu.push(copy);
        }
    }
});
(() => {
    // We need to set the highly-recommend category for every branch:
    // Sicky Date (or Sticky date), Banana, Dates & Yogurt, Matcha Cloud, Burrata Pizza, Açaí Smoothie
    // Let's find one instance of each across all menus to clone:
    const targetNames = [
        'icky date',
        'banana, dates',
        'matcha cloud',
        'burrata pizza',
        'açaí smoothie'
    ];
    let itemsFound = {};
    // First pass: scan all branches to find these objects
    Object.values(RAW_BRANCH_MENUS).forEach(branchMenu => {
        branchMenu.forEach(cat => {
            if (cat.items) {
                cat.items.forEach(item => {
                    let lowerName = item.name.toLowerCase();
                    targetNames.forEach(target => {
                        if (lowerName.includes(target) && !itemsFound[target]) {
                            itemsFound[target] = JSON.parse(JSON.stringify(item));
                        }
                    });
                    if (lowerName.includes('acai smoothie') && !itemsFound['açaí smoothie']) {
                        itemsFound['açaí smoothie'] = JSON.parse(JSON.stringify(item));
                    }
                });
            }
        });
    });
    const bestSellerItemsArray = [
        itemsFound['icky date'],
        itemsFound['banana, dates'],
        itemsFound['matcha cloud'],
        itemsFound['burrata pizza'],
        itemsFound['açaí smoothie']
    ].filter(Boolean); // just in case
    // Now force-apply this to EVERY branch's 'highly-recommend'
    Object.keys(RAW_BRANCH_MENUS).forEach(branchKey => {
        const branchMenu = RAW_BRANCH_MENUS[branchKey];
        let bestSellerCat = branchMenu.find(c => c.id === 'highly-recommend');
        // If a branch doesn't have it, we shouldn't add it unless they all have it.
        // But typically they do.
        if (bestSellerCat) {
            bestSellerCat.items = JSON.parse(JSON.stringify(bestSellerItemsArray));
            // Reset any modified statuses if needed, or leave as is
        }
    });
})();
(() => {
    // Add globally to 'desserts'
    const newDesserts = [
        {
            id: "d_1000_global",
            name: "1000 Layers( Mille Fuille)",
            ingredients: "Crispy layers of puff pastry with caramels sauce and  vanilla cream",
            price: "39.20",
            image: "https://iili.io/q2ATUt2.png"
        },
        {
            id: "d_snickers_global",
            name: "Snickers coffee bean",
            ingredients: "Rich chocolate snickers with an infusion of premium coffee beans.",
            price: "39.20",
            image: "https://iili.io/q2hTJNj.png"
        }
    ];
    Object.values(RAW_BRANCH_MENUS).forEach(branchMenu => {
        const dessertsCat = branchMenu.find(c => c.id === 'desserts');
        if (dessertsCat) {
            newDesserts.forEach(newItem => {
                if (!dessertsCat.items.some(i => i.name.toLowerCase() === newItem.name.toLowerCase() || i.name.toLowerCase().includes('mille fuille') && newItem.name.includes('Mille'))) {
                    dessertsCat.items.push(JSON.parse(JSON.stringify(newItem)));
                }
            });
        }
    });
})();
(() => {
    // Task 1: Propagate Fresh Juices from ALQANA to all EXCEPT Marina
    const alqanaMenu = RAW_BRANCH_MENUS['alqana'];
    let alqanaJuices = [];
    // find ALQANA juices
    for (const cat of alqanaMenu) {
        if (cat.items) {
            const juices = cat.items.filter(i => ['orange', 'carrot', 'watermelon', 'green apple'].includes(i.name.toLowerCase().replace(' juice', '')) ||
                ['orange juice', 'carrot juice', 'watermelon juice', 'apple juice'].includes(i.name.toLowerCase()));
            if (juices.length) {
                juices.forEach(j => {
                    if (!alqanaJuices.find(aj => aj.name === j.name))
                        alqanaJuices.push(JSON.parse(JSON.stringify(j)));
                });
            }
        }
        if (cat.subCategories) {
            for (const sub of cat.subCategories) {
                if (sub.items) {
                    const juices = sub.items.filter(i => ['orange', 'carrot', 'watermelon', 'green apple'].includes(i.name.toLowerCase().replace(' juice', '')) ||
                        ['orange juice', 'carrot juice', 'watermelon juice', 'apple juice'].includes(i.name.toLowerCase()));
                    if (juices.length) {
                        juices.forEach(j => {
                            if (!alqanaJuices.find(aj => aj.name === j.name))
                                alqanaJuices.push(JSON.parse(JSON.stringify(j)));
                        });
                    }
                }
            }
        }
    }
    // Inject into all EXCEPT "marina"
    Object.keys(RAW_BRANCH_MENUS).forEach(branchName => {
        if (branchName !== 'marina') {
            const branchMenu = RAW_BRANCH_MENUS[branchName];
            // find juices category or signature-tea -> juices
            let juicesTarget = null;
            const sigTea = branchMenu.find(c => c.id === 'signature-tea');
            if (sigTea && sigTea.subCategories) {
                juicesTarget = sigTea.subCategories.find(s => s.id === 'juices');
            }
            if (!juicesTarget) {
                juicesTarget = branchMenu.find(c => c.id === 'juices');
            }
            // fallback to cold drinks or signature drinks? The prompt says "corresponding category".
            if (juicesTarget) {
                alqanaJuices.forEach(newJuice => {
                    if (!juicesTarget.items.some(i => i.name.toLowerCase() === newJuice.name.toLowerCase())) {
                        juicesTarget.items.push(JSON.parse(JSON.stringify(newJuice)));
                    }
                });
            }
        }
    });
    // Task 2: Global Addition of "Açaí Smoothie"
    // Data Object: Since price and image are not provided, initialize this item with default/null values for price, image, and description, keeping the data schema consistent.
    const newAcai = {
        id: "sm_acai_global_new",
        name: "Açaí Smoothie",
        price: null,
        image: null,
        description: null
    };
    Object.values(RAW_BRANCH_MENUS).forEach(branchMenu => {
        // Find relevant category, e.g., Smoothies or Cold Drinks
        let smoothiesTarget = null;
        const sigTea = branchMenu.find(c => c.id === 'signature-tea');
        if (sigTea && sigTea.subCategories) {
            smoothiesTarget = sigTea.subCategories.find(s => s.id === 'smoothies');
        }
        if (!smoothiesTarget) {
            smoothiesTarget = branchMenu.find(c => c.id === 'smoothies');
        }
        if (!smoothiesTarget) {
            // fallback to a known drinks category
            smoothiesTarget = branchMenu.find(c => c.id === 'signature-drinks') || sigTea;
        }
        const categoryToInject = smoothiesTarget || branchMenu[0]; // fallback to first category if really nothing found
        if (categoryToInject) {
            if (!categoryToInject.items?.some(i => i.id === newAcai.id)) {
                if (categoryToInject.items) {
                    categoryToInject.items.push(JSON.parse(JSON.stringify(newAcai)));
                }
            }
        }
    });
})();
(() => {
    // Global Item Deletion: "Cigar {tap filter}"
    Object.values(RAW_BRANCH_MENUS).forEach(branchMenu => {
        branchMenu.forEach(cat => {
            if (cat.items) {
                cat.items = cat.items.filter(i => i.name !== "Cigar {tap filter}" && i.name !== "Cuban Cigar {tap filter}");
            }
            if (cat.subCategories) {
                cat.subCategories.forEach(sub => {
                    if (sub.items) {
                        sub.items = sub.items.filter(i => i.name !== "Cigar {tap filter}" && i.name !== "Cuban Cigar {tap filter}");
                    }
                });
            }
        });
    });
})();
(() => {
    // Task: Targeted Item Removal from "BESTSELLER"
    const targetItemName = "[INSERT ITEM NAME HERE]"; // The user can replace this if needed, or if it literally matches
    const targetBranches = ['dubai', 'alqana', 'khalifa', 'albateen']; // albateen corresponds to Al Bateen
    targetBranches.forEach(branchKey => {
        const branchMenu = RAW_BRANCH_MENUS[branchKey];
        if (branchMenu) {
            const bestsellerCat = branchMenu.find(c => c.id === 'highly-recommend' || c.title.toUpperCase().includes('BEST SELLER'));
            if (bestsellerCat && bestsellerCat.items) {
                bestsellerCat.items = bestsellerCat.items.filter(i => i.name !== targetItemName);
            }
        }
    });
})();
(() => {
    // Task: Targeted Item Removal from "BESTSELLER" for "Banana, Dates & Yogurt"
    const targetItemName = "Banana, Dates & Yogurt";
    // Checking typical branch keys. Al Bateen might be 'alBateen' or 'albateen' or 'bateen' or 'al_bateen'
    const targetBranches = ['dubai', 'alqana', 'khalifa', 'alBateen', 'albateen', 'bateen'];
    targetBranches.forEach(branchKey => {
        const branchMenu = RAW_BRANCH_MENUS[branchKey];
        if (branchMenu) {
            const bestsellerCat = branchMenu.find(c => c.id === 'highly-recommend' || (c.title && c.title.toUpperCase().includes('BEST SELLER')));
            if (bestsellerCat && bestsellerCat.items) {
                bestsellerCat.items = bestsellerCat.items.filter(i => i.name !== targetItemName);
            }
        }
    });
})();
(() => {
    // Task: Global Addition to "FILTERED" Category
    const newColdBrews = [
        {
            id: "cb_rogicha",
            name: "Cold Brew Ethiopia Rogicha",
            price: "38",
            image: "https://iili.io/B3OHMFV.jpg"
        },
        {
            id: "cb_kirimara",
            name: "Cold Brew Kenya Kirimara",
            price: "38",
            image: "https://iili.io/B3Ns6UG.jpg"
        },
        {
            id: "cb_colombia",
            name: "Cold Brew - Colombia classic",
            price: "38",
            image: "https://iili.io/C27AgUB.jpg"
        }
    ];
    Object.values(RAW_BRANCH_MENUS).forEach(branchMenu => {
        const filteredCat = branchMenu.find(c => c.title && c.title.toUpperCase() === 'FILTERED');
        if (filteredCat) {
            if (!filteredCat.items) {
                filteredCat.items = [];
            }
            newColdBrews.forEach(item => {
                if (!filteredCat.items.some(i => i.name === item.name || i.id === item.id)) {
                    filteredCat.items.push(JSON.parse(JSON.stringify(item)));
                }
            });
        }
    });
})();
(() => {
    // Step 1: Remove Mirdif redundant Cold Brew
    const mirdifMenu = RAW_BRANCH_MENUS['mirdif'];
    if (mirdifMenu) {
        const filteredCat = mirdifMenu.find(c => c.id === 'specialty-coffee' || c.title === 'FILTERED');
        if (filteredCat && filteredCat.subCategories) {
            filteredCat.subCategories = filteredCat.subCategories.filter(sub => sub.id !== 'cold-brew');
        }
    }
    // Step 2 & 3: Global EGG & MORE rename + Spelling corrections
    Object.values(RAW_BRANCH_MENUS).forEach(branchMenu => {
        branchMenu.forEach(cat => {
            // Category Navigation rename
            if (cat.id === 'eggs-more' || cat.title === 'EGG & MORE') {
                cat.title = 'Fruits, Seeds & Grains';
            }
            // Helper function to fix string fields
            const fixStrings = (obj) => {
                if (!obj)
                    return;
                ['name', 'tastingNotes', 'ingredients', 'notes', 'description', 'title'].forEach(field => {
                    if (typeof obj[field] === 'string') {
                        obj[field] = obj[field]
                            .replace(/Red grips/gi, 'Red grapes')
                            .replace(/Peacan/gi, 'Pecan')
                            .replace(/Wagyu meat/gi, 'Wagyu beef');
                    }
                });
            };
            // Fix category fields if any
            fixStrings(cat);
            // Fix items
            if (cat.items) {
                cat.items.forEach(item => fixStrings(item));
            }
            // Fix subCategory items
            if (cat.subCategories) {
                cat.subCategories.forEach(sub => {
                    fixStrings(sub);
                    if (sub.items) {
                        sub.items.forEach(item => fixStrings(item));
                    }
                });
            }
        });
    });
})();
(() => {
    // 1. Add Acaí Smoothie to Khalifa Smoothies
    const khalifaMenu = RAW_BRANCH_MENUS['khalifa'];
    if (khalifaMenu) {
        const sigTea = khalifaMenu.find(c => c.id === 'signature-tea');
        if (sigTea && sigTea.subCategories) {
            const smoothies = sigTea.subCategories.find(sub => sub.id === 'smoothies');
            if (smoothies) {
                const newItem = {
                    id: "sm_acai",
                    name: "Açaí Smoothie",
                    price: "42",
                    image: "https://iili.io/BBBfCDN.jpg",
                    description: "Acai berry, banana, strawberry, peanut butter, coconut water, oat milk, and apple juice.",
                    ingredients: "Acai berry, banana, strawberry, peanut butter, coconut water, oat milk, and apple juice.",
                    calories: 350
                };
                const existingIdx = smoothies.items.findIndex(i => i.name === 'Açaí Smoothie');
                if (existingIdx !== -1) {
                    smoothies.items[existingIdx] = { ...smoothies.items[existingIdx], ...newItem };
                }
                else {
                    smoothies.items.push(newItem);
                }
            }
        }
    }
    // 2. Filter the Juices Category (Global)
    Object.values(RAW_BRANCH_MENUS).forEach(branchMenu => {
        branchMenu.forEach(cat => {
            if (cat.id === 'juices' || cat.title?.toUpperCase() === 'JUICES') {
                if (cat.items) {
                    cat.items = cat.items.filter(i => i.name.toLowerCase().includes('orange'));
                }
            }
            if (cat.subCategories) {
                cat.subCategories.forEach(sub => {
                    if (sub.id === 'juices' || sub.title?.toUpperCase() === 'JUICES') {
                        if (sub.items) {
                            sub.items = sub.items.filter(i => i.name.toLowerCase().includes('orange'));
                        }
                    }
                });
            }
        });
    });
    // 3. Append Missing Sandwiches globally
    const newSandwiches = [
        {
            id: "sw_italian",
            name: "Cold Cut Italian",
            price: "38",
            image: "https://iili.io/qqEieVe.png",
            ingredients: "White slice bread with pesto oil, fresh mozzarella, tomato slice, tartufo salami, chorizo, baby Rocca, sun-dried tomatoes, balsamic glaze, organic olive oil.",
            calories: 580
        }
    ];
    Object.values(RAW_BRANCH_MENUS).forEach(branchMenu => {
        const swCat = branchMenu.find(c => c.id === 'sandwiches' || c.title?.toUpperCase() === 'SANDWICHES & BAGEL\'S' || c.title?.toUpperCase() === 'SANDWICHES');
        if (swCat && swCat.items) {
            newSandwiches.forEach(sw => {
                if (!swCat.items.find(i => i.name === sw.name)) {
                    swCat.items.push(JSON.parse(JSON.stringify(sw)));
                }
            });
        }
    });
})();
(() => {
    // TASK 1: Khalifa Category Renaming
    const khalifaMenu = RAW_BRANCH_MENUS['khalifa'];
    if (khalifaMenu) {
        const eggsMoreCat = khalifaMenu.find(c => c.id === 'eggs-more' || c.title === 'Fruits, Seeds & Grains');
        if (eggsMoreCat) {
            eggsMoreCat.title = 'EGG&MORE';
        }
    }
    // TASK 2: Tunacado to Sandwiches Globally
    Object.values(RAW_BRANCH_MENUS).forEach(branchMenu => {
        let bestSellers = null;
        const highlyRec = branchMenu.find(c => c.id === 'highly-recommend' || c.title === 'BEST SELLER');
        if (highlyRec)
            bestSellers = highlyRec;
        let tunacado = null;
        if (bestSellers && bestSellers.items) {
            tunacado = bestSellers.items.find(i => i.name === 'Tunacado');
        }
        if (!tunacado) {
            // Find globally if not in best seller
            for (const cat of branchMenu) {
                if (cat.items) {
                    const found = cat.items.find(i => i.name === 'Tunacado');
                    if (found)
                        tunacado = found;
                }
            }
        }
        if (tunacado) {
            let swCat = branchMenu.find(c => c.id === 'sandwiches' || c.title?.toUpperCase().includes('SANDWICHES'));
            if (swCat && swCat.items) {
                const existing = swCat.items.find(i => i.name === 'Tunacado');
                if (!existing) {
                    swCat.items.push(JSON.parse(JSON.stringify(tunacado)));
                }
            }
        }
    });
    // TASK 3: Smoothies into Signature drink
    const newAcai = {
        id: "sm_acai",
        name: "Açaí Smoothie",
        price: "42",
        image: "https://iili.io/BBBfCDN.jpg",
        description: "Acai berry, banana, strawberry, peanut butter, coconut water, oat milk, and apple juice.",
        ingredients: "Acai berry, banana, strawberry, peanut butter, coconut water, oat milk, and apple juice.",
        calories: 350,
        publishStatus: "published",
        status: "active",
        isVisible: true
    };
    Object.values(RAW_BRANCH_MENUS).forEach(branchMenu => {
        // Find smoothies globally
        const knownSmoothies = ["Strawberry Glaze Smoothie", "Blue Cloud Smoothie", "Pitaya Smoothie"];
        const matchingSmoothies = [];
        branchMenu.forEach(cat => {
            // Pull out smoothies from their old place and then hide or remove old category
            const processContainer = (container) => {
                if (container.items) {
                    knownSmoothies.forEach(name => {
                        const idx = container.items.findIndex((i) => i.name === name);
                        if (idx !== -1) {
                            matchingSmoothies.push(JSON.parse(JSON.stringify(container.items[idx])));
                            container.items.splice(idx, 1); // remove from old place
                        }
                    });
                }
            };
            processContainer(cat);
            if (cat.subCategories) {
                cat.subCategories.forEach(sub => processContainer(sub));
                // if subCategory "smoothies" is now empty, delete it
                cat.subCategories = cat.subCategories.filter(sub => sub.id !== 'smoothies' || (sub.items && sub.items.length > 0));
            }
        });
        // also remove smoothies category if it's empty
        const isSmoothieCat = (c) => c.id === 'smoothies' || c.title === 'SMOOTHIES' || c.title === 'Smoothies';
        for (let i = branchMenu.length - 1; i >= 0; i--) {
            if (isSmoothieCat(branchMenu[i])) {
                if (!branchMenu[i].items || branchMenu[i].items.length === 0) {
                    branchMenu.splice(i, 1);
                }
            }
        }
        // Add to "Signature drink"
        // Wait, there might be a "Signature drink" category or we need to add it or it's a sub of signature-tea.
        let sigTeaCat = branchMenu.find(c => c.id === 'signature-tea');
        let sigDrinkContainer = null;
        if (sigTeaCat) {
            if (sigTeaCat.subCategories) {
                sigDrinkContainer = sigTeaCat.subCategories.find(s => s.id === 'signature-drinks' || s.title?.toUpperCase() === 'SIGNATURE DRINK' || s.title === 'Signature drink');
            }
        }
        if (!sigDrinkContainer) {
            sigDrinkContainer = branchMenu.find(c => c.id === 'signature-drinks' || c.title?.toUpperCase() === 'SIGNATURE DRINK' || c.title === 'Signature drink');
        }
        if (sigDrinkContainer && sigDrinkContainer.items) {
            // Push Acai
            let acaiFound = sigDrinkContainer.items.find(i => i.name === 'Açaí Smoothie');
            if (!acaiFound) {
                sigDrinkContainer.items.push(JSON.parse(JSON.stringify(newAcai)));
            }
            else {
                Object.assign(acaiFound, newAcai);
            }
            // Push the other 3
            matchingSmoothies.forEach(sm => {
                if (!sigDrinkContainer.items.find(i => i.name === sm.name)) {
                    sigDrinkContainer.items.push(sm);
                }
            });
        }
    });
})();
(() => {
    // Ensure Tunacado is globally in Sandwiches
    let tunacadoRef = null;
    Object.values(RAW_BRANCH_MENUS).find(b => {
        for (const cat of b) {
            if (cat.items) {
                const found = cat.items.find(i => i.name === 'Tunacado');
                if (found) {
                    tunacadoRef = JSON.parse(JSON.stringify(found));
                    return true;
                }
            }
        }
        return false;
    });
    if (tunacadoRef) {
        Object.values(RAW_BRANCH_MENUS).forEach(branchMenu => {
            let swCat = branchMenu.find(c => c.id === 'sandwiches' || c.title?.toUpperCase().includes('SANDWICHES'));
            if (!swCat) {
                // Create it
                swCat = {
                    id: "sandwiches",
                    title: "SANDWICHES & BAGEL'S",
                    items: []
                };
                // Add it before desserts
                const dessertsIdx = branchMenu.findIndex(c => c.id === 'desserts');
                if (dessertsIdx !== -1) {
                    branchMenu.splice(dessertsIdx, 0, swCat);
                }
                else {
                    branchMenu.push(swCat);
                }
            }
            if (swCat.items) {
                if (!swCat.items.find(i => i.name === 'Tunacado')) {
                    swCat.items.push(JSON.parse(JSON.stringify(tunacadoRef)));
                }
            }
        });
    }
    // Ensure Acaí Smoothie is correct
})();
(() => {
    // Acaí Smoothie strictly mapped to Khalifa branch ID
    Object.keys(RAW_BRANCH_MENUS).forEach(branchId => {
        if (branchId !== 'khalifa') {
            RAW_BRANCH_MENUS[branchId].forEach(cat => {
                if (cat.items) {
                    cat.items = cat.items.filter(i => i.name !== 'Açaí Smoothie');
                }
                if (cat.subCategories) {
                    cat.subCategories.forEach(sub => {
                        if (sub.items) {
                            sub.items = sub.items.filter(i => i.name !== 'Açaí Smoothie');
                        }
                    });
                }
            });
        }
    });
    // Ensure Acaí Smoothie is in Khalifa's Signature drink
    const khalifaMenu = RAW_BRANCH_MENUS['khalifa'];
    let sigDrinkKhalifa = null;
    if (khalifaMenu) {
        const sigTea = khalifaMenu.find(c => c.id === 'signature-tea');
        if (sigTea && sigTea.subCategories) {
            sigDrinkKhalifa = sigTea.subCategories.find(s => s.id === 'signature-drinks' || s.title?.toUpperCase().includes('SIGNATURE DRINK'));
        }
        if (!sigDrinkKhalifa) {
            sigDrinkKhalifa = khalifaMenu.find(c => c.id === 'signature-drinks' || c.title?.toUpperCase().includes('SIGNATURE DRINK'));
        }
    }
    if (sigDrinkKhalifa && sigDrinkKhalifa.items) {
        if (!sigDrinkKhalifa.items.find(i => i.name === 'Açaí Smoothie')) {
            sigDrinkKhalifa.items.push({
                id: "sm_acai",
                name: "Açaí Smoothie",
                price: "42",
                image: "https://iili.io/BBBfCDN.jpg",
                ingredients: "Acai berry, banana, strawberry, peanut butter, coconut water, oat milk, and apple juice.",
                calories: 350,
                status: "available"
            });
        }
    }
    // Ensure Tunacado is also existing in BEST SELLER globally
    Object.values(RAW_BRANCH_MENUS).forEach(branchMenu => {
        const bestSeller = branchMenu.find(c => c.id === 'highly-recommend' || c.title === 'BEST SELLER');
        if (bestSeller && bestSeller.items) {
            if (!bestSeller.items.find(i => i.name === 'Tunacado')) {
                // Find tunacado
                let tunacado = null;
                branchMenu.forEach(c => {
                    if (c.items && !tunacado)
                        tunacado = c.items.find(i => i.name === 'Tunacado');
                });
                if (tunacado)
                    bestSeller.items.push(JSON.parse(JSON.stringify(tunacado)));
            }
        }
    });
})();
(() => {
    // Clear out the obsolete "Smoothies" category/subcategory
    Object.keys(RAW_BRANCH_MENUS).forEach(branchId => {
        RAW_BRANCH_MENUS[branchId].forEach(cat => {
            // If a top-level category is smoothies, and it has these items, clear it if it's just the smoothies
            if (cat.subCategories) {
                cat.subCategories = cat.subCategories.filter(s => s.id !== 'smoothies' || s.title?.toUpperCase() !== 'SMOOTHIES');
            }
        });
        RAW_BRANCH_MENUS[branchId] = RAW_BRANCH_MENUS[branchId].filter(cat => cat.id !== 'smoothies' || cat.title?.toUpperCase() !== 'SMOOTHIES');
        // Remove duplicates within 'signature-drinks'
        RAW_BRANCH_MENUS[branchId].forEach(cat => {
            const processDeDup = (container) => {
                if (container.items) {
                    const seen = new Set();
                    container.items = container.items.filter((i) => {
                        if (seen.has(i.name))
                            return false;
                        seen.add(i.name);
                        return true;
                    });
                }
            };
            processDeDup(cat);
            if (cat.subCategories)
                cat.subCategories.forEach(s => processDeDup(s));
        });
    });
})();
(() => {
    const newItems = [
        {
            id: "hb_strawberry_glaze",
            name: "Strawberry Glaze Smoothie",
            ingredients: "Almond milk, frozen strawberries, bananas, dates, maple syrup, collagen, vanilla stevia, sea moss gel, strawberry sauce, and coconut cloud cream.",
            image: "https://iili.io/qq1mS5b.jpg",
            price: "42 AED"
        },
        {
            id: "hb_blue_cloud",
            name: "Blue Cloud Smoothie",
            ingredients: "Coconut milk, pineapple, banana, avocado, vanilla stevia, collagen, peanut butter, blue spirulina, and on top coconut cloud cream.",
            image: "https://iili.io/qqE9JUX.jpg",
            price: "42 AED"
        },
        {
            id: "hb_pitaya",
            name: "Pitaya Smoothiec",
            ingredients: "Apple juice, lemon juice, pitaya, frozen pineapple, banana, and lemon electrolytes.",
            image: "https://iili.io/qqEH3rP.jpg",
            price: "42 AED"
        },
        {
            id: "hb_acai",
            name: "Açaí Smoothie",
            ingredients: "Acai berry, banana, strawberry, peanut butter, coconut water, oat milk, and apple juice.",
            image: "https://iili.io/BBBfCDN.jpg",
            price: "42 AED"
        }
    ];
    const itemNames = [...newItems.map(i => i.name), "Pitaya Smoothie"];
    const menusToFix = [BASE_MENU, ...Object.values(RAW_BRANCH_MENUS)];
    menusToFix.forEach(menu => {
        menu.forEach(cat => {
            // Skip the designated "Health Bar" category
            if (cat.title === "Health Bar")
                return;
            if (cat.items) {
                cat.items = cat.items.filter(item => !itemNames.includes(item.name));
            }
            if (cat.subCategories) {
                cat.subCategories.forEach(sub => {
                    if (sub.items) {
                        sub.items = sub.items.filter(item => !itemNames.includes(item.name));
                    }
                });
            }
        });
        // Ensure Health Bar category exactly matches the latest specs
        let healthBarIndex = menu.findIndex(c => c.title === 'Health Bar');
        if (healthBarIndex !== -1) {
            menu[healthBarIndex].items = JSON.parse(JSON.stringify(newItems));
        }
        else {
            menu.push({
                id: "health-bar",
                title: "Health Bar",
                items: JSON.parse(JSON.stringify(newItems))
            });
        }
    });
})();
(() => {
    const menusToFix = [BASE_MENU, ...Object.values(RAW_BRANCH_MENUS)];
    menusToFix.forEach(menu => {
        const swCat = menu.find(c => c.id === 'sandwiches' || c.title?.toUpperCase().includes('SANDWICHES'));
        if (swCat) {
            swCat.title = "SANDWICHES & BAGEL'S";
            // The allowed names from the prompt exactly:
            const allowedNames = ["Club Sandwich", "Brisket Blaze", "Cold Cut Italian"];
            const newItems = [];
            // Add the sandwich items if they exist
            allowedNames.forEach(name => {
                let item = null;
                if (swCat.items) {
                    item = swCat.items.find(i => i.name === name);
                }
                if (!item) {
                    // Fallback: finding it somewhere else globally
                    for (let m of menusToFix) {
                        for (let c of m) {
                            if (c.items) {
                                let found = c.items.find(i => i.name === name);
                                if (found) {
                                    item = found;
                                    break;
                                }
                            }
                        }
                        if (item)
                            break;
                    }
                }
                if (item)
                    newItems.push(JSON.parse(JSON.stringify(item)));
            });
            // Append Tunacado to the end representing OPERATION 1
            newItems.push({
                id: "sw_tuna_global",
                name: "Tunacado",
                price: "38",
                image: "https://iili.io/qqEgPdN.jpg",
                ingredients: "Toasted Brown slice bread with pesto oil, avocado, tuna mix, tomato, and jalapeños.",
                calories: 480,
                status: "available"
            });
            swCat.items = newItems;
        }
    });
})();
(() => {
    // Post-processing execution block for exact task updates:
    // 1. Target ALL branches to ensure "cold brew cinnamon" status is "active" globally
    Object.values(RAW_BRANCH_MENUS).forEach((branchMenu) => {
        branchMenu.forEach((cat) => {
            if (cat.items) {
                cat.items.forEach((item) => {
                    const processedName = item.name ? item.name.toLowerCase().replace(/\s*-\s*/g, " ") : "";
                    if (processedName === "cold brew cinnamon" || processedName === "cold brew  cinnamon") {
                        item.status = "active";
                    }
                });
            }
            if (cat.subCategories) {
                cat.subCategories.forEach((sub) => {
                    if (sub.items) {
                        sub.items.forEach((item) => {
                            const processedName = item.name ? item.name.toLowerCase().replace(/\s*-\s*/g, " ") : "";
                            if (processedName === "cold brew cinnamon" || processedName === "cold brew  cinnamon") {
                                item.status = "active";
                            }
                        });
                    }
                });
            }
        });
    });
    // 2. Marina Branch Updates: Keep only Colombia-Witch, sweet dream decaf, coconutella, and El Salvador in Marina Espresso Based.
    const marinaMenu = RAW_BRANCH_MENUS["marina"];
    if (marinaMenu) {
        const espressoCat = marinaMenu.find((c) => c.id === "espresso" || c.title === "Espresso Based" || c.title === "ESPRESSO BASED");
        if (espressoCat) {
            const allowedNames = ["colombia-witch", "sweet dream decaf", "coconutella", "el salvador"];
            if (espressoCat.beanSelection) {
                espressoCat.beanSelection = espressoCat.beanSelection.filter((b) => b.name && allowedNames.includes(b.name.toLowerCase().trim()));
            }
            // Propagate beanSelection to all items customizations
            if (espressoCat.items && espressoCat.beanSelection) {
                espressoCat.items.forEach((item) => {
                    const beanCustomization = item.customizations?.find((c) => c.id === "bean_choice");
                    if (beanCustomization) {
                        beanCustomization.options = beanCustomization.options.filter((o) => o.name && allowedNames.includes(o.name.toLowerCase().trim()));
                    }
                });
            }
        }
        // Remove individual requested smoothies from Marina:
        // 1- Pitaya Smoothiec, 2- Blue Cloud Smoothie, 3- Strawberry Glaze Smoothie
        const forbiddenMarinaSmoothies = [
            "pitaya smoothiec",
            "pitaya smoothie",
            "blue cloud smoothie",
            "strawberry glaze smoothie"
        ];
        marinaMenu.forEach((cat) => {
            if (cat.items) {
                cat.items = cat.items.filter((item) => !item.name || !forbiddenMarinaSmoothies.includes(item.name.toLowerCase().trim()));
            }
            if (cat.subCategories) {
                cat.subCategories.forEach((sub) => {
                    if (sub.items) {
                        sub.items = sub.items.filter((item) => !item.name || !forbiddenMarinaSmoothies.includes(item.name.toLowerCase().trim()));
                    }
                });
            }
        });
    }
    // 3. Khalifa City Branch Updates: From the "khalifa" branch, remove "Peanut Choco Tart", "Honey Cake", and "Tiramisu Bowl" from the DESSERTS category
    const khalifaMenu = RAW_BRANCH_MENUS["khalifa"];
    if (khalifaMenu) {
        const dessertsCat = khalifaMenu.find((c) => c.id === "desserts" || c.title?.toLowerCase() === "desserts" || c.title?.toLowerCase() === "dessert");
        if (dessertsCat && dessertsCat.items) {
            const disallowedDessertNames = ["peanut choco tart", "honey cake", "tiramisu bowl"];
            dessertsCat.items = dessertsCat.items.filter((item) => !item.name || !disallowedDessertNames.includes(item.name.toLowerCase().trim()));
        }
    }
    // 4. Al Qana Branch Updates based on user request:
    // Remove: 1- Peanut Choco Tart, 2- Tiramisu Bowl, 3- Deconstructed cheesecake, 4- Watermelon juice
    const alQanaBranchMenu = RAW_BRANCH_MENUS["alqana"];
    if (alQanaBranchMenu) {
        const dessertsCat = alQanaBranchMenu.find((c) => c.id === "desserts" || c.title?.toLowerCase() === "desserts" || c.title?.toLowerCase() === "dessert");
        if (dessertsCat && dessertsCat.items) {
            const disallowedDessertNames = [
                "peanut choco tart",
                "peanut butter chocolate tart",
                "peanut butter tart",
                "tiramisu bowl",
                "tiramisu",
                "deconstructed cheesecake"
            ];
            dessertsCat.items = dessertsCat.items.filter((item) => !item.name || !disallowedDessertNames.includes(item.name.toLowerCase().trim()));
        }
        // Remove Watermelon juice globally from Al Qana
        alQanaBranchMenu.forEach((cat) => {
            if (cat.items) {
                cat.items = cat.items.filter((item) => !item.name || !item.name.toLowerCase().includes("watermelon"));
            }
            if (cat.subCategories) {
                cat.subCategories.forEach((sub) => {
                    if (sub.items) {
                        sub.items = sub.items.filter((item) => !item.name || !item.name.toLowerCase().includes("watermelon"));
                    }
                });
            }
        });
    }
    // 5. Dubai Branch Updates based on user request:
    // Remove: 1- Tiramisu, 2- peanut butter tart, 3- watermelon juice, 4- Pitaya Smoothie, 5- costa rica v60, 6- Colombia blackberry v60
    const dubaiBranchMenu = RAW_BRANCH_MENUS["dubai"];
    if (dubaiBranchMenu) {
        const dessertsCat = dubaiBranchMenu.find((c) => c.id === "desserts" || c.title?.toLowerCase() === "desserts" || c.title?.toLowerCase() === "dessert");
        if (dessertsCat && dessertsCat.items) {
            const disallowedDessertNames = [
                "tiramisu",
                "tiramisu bowl",
                "peanut butter chocolate tart",
                "peanut butter tart",
                "peanut choco tart"
            ];
            dessertsCat.items = dessertsCat.items.filter((item) => !item.name || !disallowedDessertNames.includes(item.name.toLowerCase().trim()));
        }
        // Remove Watermelon juice, Pitaya Smoothie, Costa Rica V60, Colombia blackberry V60 globally from Dubai
        dubaiBranchMenu.forEach((cat) => {
            const filterItem = (item) => {
                if (!item.name)
                    return true;
                const nameLower = item.name.toLowerCase();
                if (nameLower.includes("watermelon"))
                    return false;
                if (nameLower.includes("pitaya"))
                    return false;
                if (nameLower.includes("costa rica"))
                    return false;
                if (nameLower.includes("blackberry"))
                    return false;
                return true;
            };
            if (cat.items) {
                cat.items = cat.items.filter(filterItem);
            }
            if (cat.subCategories) {
                cat.subCategories.forEach((sub) => {
                    if (sub.items) {
                        sub.items = sub.items.filter(filterItem);
                    }
                });
            }
        });
    }
    // === USER INTENT UPDATES: COCONUTELLA 10 AED GLOBALLY ===
    Object.values(RAW_BRANCH_MENUS).forEach((branchMenu) => {
        branchMenu.forEach((cat) => {
            if (cat.beanSelection) {
                cat.beanSelection.forEach((bean) => {
                    if (bean.name && bean.name.toLowerCase() === "coconutella") {
                        bean.price = 10;
                    }
                });
            }
            if (cat.items) {
                cat.items.forEach((item) => {
                    if (item.name && item.name.toLowerCase() === "coconutella") {
                        item.price = "10";
                    }
                    const beanCustomization = item.customizations?.find((c) => c.id === "bean_choice");
                    if (beanCustomization && beanCustomization.options) {
                        beanCustomization.options.forEach((opt) => {
                            if (opt.name && opt.name.toLowerCase() === "coconutella") {
                                opt.price = 10;
                            }
                        });
                    }
                });
            }
        });
    });
    // === USER INTENT UPDATES: KHALIFA ESPRESSO BASED BEAN ===
    const khalMenu = RAW_BRANCH_MENUS["khalifa"];
    if (khalMenu) {
        const espressoCat = khalMenu.find((c) => c.id === "espresso" || c.title?.toUpperCase().includes("ESPRESSO"));
        if (espressoCat) {
            if (espressoCat.beanSelection) {
                espressoCat.beanSelection = espressoCat.beanSelection.filter((b) => !b.name || !b.name.toLowerCase().includes("costa rica"));
                if (!espressoCat.beanSelection.some((b) => b.name?.toLowerCase() === "coconutella")) {
                    espressoCat.beanSelection.push({
                        id: "bean_coconutella",
                        name: "coconutella",
                        notes: "Coconut Cream, Milk Chocolate, Toffee Caramel",
                        price: 10,
                        isNew: true,
                        status: 'active',
                    });
                }
            }
            if (espressoCat.items) {
                espressoCat.items.forEach((item) => {
                    const beanCustomization = item.customizations?.find((c) => c.id === "bean_choice");
                    if (beanCustomization && beanCustomization.options) {
                        beanCustomization.options = beanCustomization.options.filter((o) => !o.name || !o.name.toLowerCase().includes("costa rica"));
                        if (!beanCustomization.options.some((o) => o.name?.toLowerCase() === "coconutella")) {
                            beanCustomization.options.push({
                                id: "bean_coconutella",
                                name: "coconutella",
                                price: 10,
                                description: "Coconut Cream, Milk Chocolate, Toffee Caramel",
                                status: "active",
                            });
                        }
                    }
                });
            }
        }
    }
    // === USER INTENT UPDATES: GLOBAL REMOVAL OF SPECIFIED ITEMS ===
    const globalDisallowed = (name) => {
        const nameLower = name.toLowerCase().trim();
        if (nameLower.includes("tiramisu"))
            return true;
        if (nameLower.includes("watermelon"))
            return true;
        if (nameLower.includes("pitaya"))
            return true;
        if (nameLower.includes("peanut") && nameLower.includes("tart"))
            return true;
        return false;
    };
    Object.values(RAW_BRANCH_MENUS).forEach((branchMenu) => {
        branchMenu.forEach((cat) => {
            if (cat.items) {
                cat.items = cat.items.filter((item) => !item.name || !globalDisallowed(item.name));
            }
            if (cat.subCategories) {
                cat.subCategories.forEach((sub) => {
                    if (sub.items) {
                        sub.items = sub.items.filter((item) => !item.name || !globalDisallowed(item.name));
                    }
                });
            }
        });
    });
    BASE_MENU.forEach((cat) => {
        if (cat.items) {
            cat.items = cat.items.filter((item) => !item.name || !globalDisallowed(item.name));
        }
        if (cat.subCategories) {
            cat.subCategories.forEach((sub) => {
                if (sub.items) {
                    sub.items = sub.items.filter((item) => !item.name || !globalDisallowed(item.name));
                }
            });
        }
    });
})();
// --- AI STUDIO FIX: GLOBAL CATEGORY REORDERING AND RENAMING ---
(() => {
    const desiredOrder = [
        "ESPRESSO BASED",
        "FILTERED",
        "SIGNATURE DRINKS",
        "EGGS&MORE",
        "BAKE GOODS",
        "FRUITS, SEEDS & GRAINS",
        "SWEET BREAKFAST",
        "SANDWICHES & BAGELS",
        "Green (Salad)",
        "Health Bar",
        "DESSERTS"
    ];
    Object.keys(RAW_BRANCH_MENUS).forEach(branchId => {
        let branchMenu = RAW_BRANCH_MENUS[branchId];
        // Remove completely empty categories (no items, no subcategories)
        branchMenu = branchMenu.filter(cat => {
            const hasItems = cat.items && cat.items.length > 0;
            const hasSubCats = cat.subCategories && cat.subCategories.length > 0;
            return hasItems || hasSubCats;
        });
        branchMenu.forEach(cat => {
            // 1. Specific Text Replacement
            // Locate the category currently titled "FRUITS, SEEDS & GRAINS" (or similar egg categories)
            // and update its name strictly to "EGGS&MORE".
            const eggItems = ['Tornado Chilli Egg', 'Bacon & Egg Cheese Bun', 'Big Breakfast', 'Egg Benedict', 'Avocado Toast'];
            const isEggCategory = cat.items?.some((i) => eggItems.includes(i.name)) || cat.id === 'eggs-more';
            if (isEggCategory) {
                cat.title = 'EGGS&MORE';
            }
            else if (cat.title === 'FRUIT & GRINDS' || cat.id === 'fruits-and-grinds') {
                cat.title = 'FRUITS, SEEDS & GRAINS';
            }
            else if (cat.title === 'ESPRESSO BASED' || cat.id === 'espresso') {
                cat.title = 'ESPRESSO BASED';
                // 3. Styling: Apply a white font color (not yellow) to the "ESPRESSO BASED" category
                if (cat.headerStyle) {
                    cat.headerStyle.color = '#ffffff';
                }
            }
            else if (cat.title?.toUpperCase().includes('FILTERED')) {
                cat.title = 'FILTERED';
            }
            else if (cat.title?.toUpperCase().includes('SIGNATURE')) {
                cat.title = 'SIGNATURE DRINKS';
            }
            else if (cat.title === 'SANDWICHES & BAGEL\'S' || cat.title === 'SANDWICHES & BAGELS') {
                cat.title = 'SANDWICHES & BAGELS';
            }
            else if (cat.title?.includes('Green') || cat.title?.includes('Greens')) {
                cat.title = 'Green (Salad)';
            }
            else if (cat.title?.toUpperCase() === 'HEALTH BAR') {
                cat.title = 'Health Bar';
            }
            else if (cat.title?.toUpperCase() === 'BAKE GOODS') {
                cat.title = 'BAKE GOODS';
            }
            else if (cat.title?.toUpperCase() === 'DESSERTS') {
                cat.title = 'DESSERTS';
            }
            else if (cat.title?.toUpperCase() === 'SWEET BREAKFAST') {
                cat.title = 'SWEET BREAKFAST';
            }
            // Data Validation
            const fixStrings = (obj) => {
                if (!obj)
                    return;
                ['name', 'tastingNotes', 'ingredients', 'notes', 'description', 'title'].forEach(field => {
                    if (typeof obj[field] === 'string') {
                        obj[field] = obj[field]
                            .replace(/Red grips/gi, 'Red Grapes')
                            .replace(/Red grapes/gi, 'Red Grapes') // Title case as requested "Red Grapes"
                            .replace(/Peacan/gi, 'Pecan');
                    }
                });
            };
            fixStrings(cat);
            if (cat.items)
                cat.items.forEach((item) => fixStrings(item));
            if (cat.subCategories) {
                cat.subCategories.forEach((sub) => {
                    fixStrings(sub);
                    if (sub.items)
                        sub.items.forEach((item) => fixStrings(item));
                });
            }
            // Pricing validation
            if (cat.items) {
                cat.items.forEach((item) => {
                    if (item.customizations) {
                        item.customizations.forEach((cust) => {
                            if (cust.id === 'bean_choice' && cust.options) {
                                cust.options.forEach((opt) => {
                                    if (opt.name.includes('Three Africa')) {
                                        opt.price = 0;
                                    }
                                });
                            }
                        });
                    }
                });
            }
        });
        // Reorder
        const getOrderIdx = (title) => {
            if (title === 'BEST SELLER')
                return -1;
            const idx = desiredOrder.indexOf(title);
            return idx !== -1 ? idx : 999;
        };
        RAW_BRANCH_MENUS[branchId] = branchMenu.sort((a, b) => {
            const idxA = getOrderIdx(a.title || '');
            const idxB = getOrderIdx(b.title || '');
            if (idxA !== idxB) {
                return idxA - idxB;
            }
            return 0; // maintain original relative order if both not in list
        });
    });
})();
// --- END AI STUDIO FIX ---
// --- AI STUDIO FIX: GLOBALLY UPDATE BEST SELLER ITEMS ---
(() => {
    const desiredBestSellers = [
        "Brisket Blaze",
        "Brisket Blaze",
        "Crust San Sebastian",
        "Exotic Sunrise",
        "Açaí Smoothie"
    ];
    Object.keys(RAW_BRANCH_MENUS).forEach(branchId => {
        const branchMenu = RAW_BRANCH_MENUS[branchId];
        // Find Best Seller category
        const bestSeller = branchMenu.find(c => c.id === 'highly-recommend' || c.title === 'BEST SELLER');
        if (bestSeller) {
            const newItems = [];
            // Look for the items in the rest of the menu
            desiredBestSellers.forEach(itemName => {
                let foundItem = null;
                for (const cat of branchMenu) {
                    if (cat === bestSeller)
                        continue; // Skip best seller itself
                    if (cat.items) {
                        const match = cat.items.find((i) => i.name.toLowerCase() === itemName.toLowerCase());
                        if (match)
                            foundItem = match;
                    }
                    if (!foundItem && cat.subCategories) {
                        for (const sub of cat.subCategories) {
                            if (sub.items) {
                                const match = sub.items.find((i) => i.name.toLowerCase() === itemName.toLowerCase());
                                if (match)
                                    foundItem = match;
                            }
                        }
                    }
                    if (foundItem)
                        break;
                }
                if (foundItem) {
                    // Clone it so we don't share reference
                    const cloned = JSON.parse(JSON.stringify(foundItem));
                    // make sure IDs don't collide if we insert twice
                    cloned.id = cloned.id + '_' + Math.random().toString(36).substr(2, 5);
                    newItems.push(cloned);
                }
            });
            bestSeller.items = newItems;
            bestSeller.subCategories = []; // remove any subCategories from best seller
        }
    });
})();
// --- END AI STUDIO FIX ---
exports.BRANCH_MENUS = (0, exports.sortFilteredCoffeeByPrice)(RAW_BRANCH_MENUS);
// DEFAULT EXPORT FOR BACKWARD COMPATIBILITY & TYPES
exports.MENU_DATA = BASE_MENU;
exports.BRANCH_ESPRESSO_BEANS = {
    'marina': [
        {
            "name": "Colombia-Witch",
            "notes": "Dried figs - Jaggery - Orange zest - sugarcane juice",
            "price": "+0 AED"
        },
        {
            "name": "sweet dream decaf",
            "notes": "Molasses, Dried Apricot, Pecan Nuts ",
            "price": "+0 AED"
        },
        {
            "name": "coconutella",
            "notes": "Coconut Cream, Milk Chocolate, Toffee Caramel",
            "price": "+10 AED"
        },
        {
            "name": "El Salvador",
            "notes": "Butterscotch, Almond, Dried Apricot",
            "price": "+1 AED"
        }
    ],
    'khalifa': [
        {
            "name": "Colombia witch",
            "notes": "Dried Figs, Jaggery, Orange Zest, Sugarcane Juice",
            "price": "+0 AED"
        },
        {
            "name": "sweet dream decaf",
            "notes": "Passion Fruit, Cheesecake, Milk Chocolate",
            "price": "+0 AED"
        },
        {
            "name": "coconutella",
            "notes": "Coconut Cream, Milk Chocolate, Toffee Caramel",
            "price": "+10 AED"
        }
    ],
    'albateen': [
        {
            "name": "sweet dream decaf",
            "notes": "Passion Fruit, Cheesecake, Milk Chocolate",
            "price": "+0 AED"
        },
        {
            "name": "Colombia witch",
            "notes": "Dried Figs, Jaggery, Orange Zest, Sugarcane Juice",
            "price": "+0 AED"
        },
        {
            "name": "Nicaragua",
            "notes": "Milk Chocolate, Sugar Cane, Candied Peanuts",
            "price": "+0 AED"
        },
        {
            "name": "coconutella",
            "notes": "Coconut Cream, Milk Chocolate, Toffee Caramel",
            "price": "+10 AED",
            "status": "active"
        }
    ],
    'dubai': [
        {
            "name": "Costa Rica",
            "notes": "Cacao, Fig Compote, Honey, Cherry",
            "price": "+5 AED"
        },
        {
            "name": "Colombia witch",
            "notes": "Dried Figs, Jaggery, Orange Zest, Sugarcane Juice",
            "price": "+0 AED"
        },
        {
            "name": "sweet dream decaf",
            "notes": "Passion Fruit, Cheesecake, Milk Chocolate",
            "price": "+0 AED"
        },
        {
            "name": "Nicaragua",
            "notes": "Milk Chocolate, Sugar Cane, Candied Peanuts",
            "price": "+0 AED"
        }
    ],
    'alqana': [
        {
            "name": "Colombia - Bourbon Sidra",
            "notes": "Red Grapes – Watermelon – Hard Candy – Raspberry",
            "price": "+5 AED"
        },
        {
            "name": "Costa Rica",
            "notes": "Cacao, Fig Compote, Honey, Cherry",
            "price": "+5 AED"
        },
        {
            "name": "sweet dream decaf",
            "notes": "Passion Fruit, Cheesecake, Milk Chocolate",
            "price": "+0 AED"
        },
        {
            "name": "Brazil Chocolate",
            "notes": "Chocolate Biscuit, Condensed Milk, Chestnut",
            "price": "+1 AED"
        }
    ]
};
