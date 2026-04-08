const createKhalifaMenu = (): MenuCategory[] => {
  // Helper to find item in BASE_MENU
  const findItem = (catId: string, itemId: string) => {
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
      name: "Nicaragua",
      notes: "Dark chocolate, Roasted hazelnut, Caramel",
      price: 0,
      isNew: false,
    },

    {
      id: "bean_colombia_strawberry",
      name: "Colombia - Strawberry",
      notes: "Strawberry Jam, Honey, Milk Chocolates",
      price: 5,
      isNew: true,
      status: "Available",
    },
    {
      id: "bean_colombia_decaf",
      name: "Colombia Sweet Dreams (Decaf)",
      notes: "Passion fruit cheesecake, Milk chocolate, Molasses",
      price: 0,
      isNew: false,
      isDecaf: true,
    },
  ];

  khalifaEspresso.beanSelection = khalifaBeans;
  khalifaEspresso.description = "";

  khalifaEspresso.items.forEach((item: any) => {
    const beanCustomization = item.customizations?.find(
      (c: any) => c.id === "bean_choice",
    );
    if (beanCustomization) {
      beanCustomization.options = khalifaBeans.map((b: any) => ({
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
          id: "fil_mish_mish",
          name: "Mish Mish",
          tastingNotes: "Apricot jam, raspberry, lychee",
          price: "57",
          image: "https://iili.io/qLf9mXt.jpg",
          ingredients: "Pour-over brewing method",
          calories: 5,
          status: "Available",
        },
        {
          id: "fil_kenya_kirimara",
          name: "Kenya KIRIMARA",
          tastingNotes: "Brown sugar, wild cherry, raisins",
          price: "46",
          image: "https://iili.io/qLf9mXt.jpg",
          ingredients: "Pour-over brewing method",
          calories: 5,
          status: "Available",
        },
        {
          id: "fil_blackberry",
          name: "Blackberry {tap filter}",
          tastingNotes: "Blackberry soda, cacao nibs, karkade",
          price: "57",
          image: "https://iili.io/qLf9mXt.jpg",
          ingredients: "Pour-over brewing method",
          calories: 5,
          status: "Available",
        },
        {
          id: "fil_ethiopia",
          name: "Ethiopia",
          tastingNotes: "Apricot, pear, honey",
          price: "36",
          image: "https://iili.io/qLf9mXt.jpg",
          ingredients: "Pour-over brewing method",
          calories: 5,
          status: "Available",
        },
        {
          id: "fil_colombia_sweet_decaf",
          name: "Colombia Sweet Decaf",
          tastingNotes: "Passion fruit cheesecake, milk chocolate, molasses",
          price: "36",
          image: "https://iili.io/qLf9mXt.jpg",
          ingredients: "Pour-over brewing method",
          calories: 5,
          status: "Available",
        },
        {
          id: "fil_colombia_gesha",
          name: "Colombia Gesha",
          tastingNotes: "Orange blossom, lemon grass, condensed milk",
          price: "65",
          image: "https://iili.io/qLf9mXt.jpg",
          ingredients: "Pour-over brewing method",
          calories: 5,
          status: "Available",
        },
      ],
    },
    {
      id: "desserts",
      title: "Desserts",
      items: [
        {
          ...findItem("desserts", "d_crepe_rolls")!,
          status: "Coming Soon" as const,
        },
        findItem("desserts", "d_aseeda")!,
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
        findItem("desserts", "d_san_seb")!,
        {
          id: "d_tiramisu",
          name: "Tiramisu Bowl",
          price: "39.20",
          image: "https://iili.io/qnnTv0G.png",
          ingredients: "Classic Italian dessert with coffee",
          calories: 400,
        },
        findItem("desserts", "d_vanilla_pud")!,
        findItem("desserts", "d_banana_pud")!,
        findItem("desserts", "STICKY DATE")!,
        findItem("desserts", "d_choc_chip")!,
      ].filter(Boolean),
    },
    {
      id: "healthy-bowls",
      title: "FRUITS SEEDS & GRAINS.",
      items: [
        findItem("healthy-bowls", "bw1")!,
        findItem("healthy-bowls", "bw5")!,
        findItem("healthy-bowls", "bw2")!,
        findItem("healthy-bowls", "bw3")!,
        findItem("healthy-bowls", "bw4")!,
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
          ingredients:
            "Joe's bread, pesto mayo, tuna mix, tomato slice, avocado slice.",
          calories: 480,
        },
        {
          id: "sw_club",
          name: "Club Sandwich",
          price: "38",
          image: "https://iili.io/qqEPTpS.jpg",
          ingredients:
            "White sliced bread, chipotle mayo, cheddar, lettuce, gherkins, tomato, bacon, smoked turkey, homemade chips.",
          calories: 600,
        },
        {
          id: "sw_brisket",
          name: "Brisket Blaze",
          price: "45",
          image: "https://iili.io/qqERigt.jpg",
          ingredients:
            "Toasted brown sliced bread stacked with smoked brisket, aged white cheddar, Dijon mayo, tangy relish, and finished with a perfectly burnt matured white cheddar cheese for added flavor.",
          calories: 650,
        },
      ],
    },
    {
      id: "baked-goods",
      title: "Baked Goods",
      items: [
        findItem("from-our-bakery", "fob_turkey")!,
        findItem("from-our-bakery", "fob_zaatar")!,
        findItem("from-our-bakery", "fob_burrata")!,
        findItem("from-our-bakery", "fob_almond")!,
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
        findItem("from-our-bakery", "fob_choc")!,
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
          ingredients:
            "Brioche bun with crispy bacon, scrambled egg, cheddar cheese, kimchi ketchup.",
          calories: 550,
        },
        {
          id: "egg_avo",
          name: "Avocado Toast",
          price: "45",
          image: "https://iili.io/qqGqaMg.jpg",
          ingredients:
            "Sourdough with smashed avocado, whipped feta, Pico de Gallo, pine nuts, parmesan, coriander, dill leaves, mix sesame seeds, lime wedges, chili flakes, dukka, and poached egg.",
          calories: 380,
        },
        {
          id: "egg_ben",
          name: "Eggs Benedict",
          price: "46",
          image: "https://iili.io/qqGfw3x.jpg",
          ingredients:
            "English muffins with cream cheese, tomato sauce, smoky bacon, poached eggs, miso hollandaise, chives.",
          calories: 450,
        },
        {
          id: "egg_truffle",
          name: "Scrambled Truffle Eggs",
          price: "54",
          image: "https://iili.io/qqGqpDP.jpg",
          ingredients:
            "Creamy scrambled eggs on brioche slice with truffle mayo, truffle oil, and shaved black truffle.",
          calories: 420,
        },
        {
          id: "egg_aussie",
          name: "Aussie Benedict",
          price: "58",
          image: "https://iili.io/qqMpPzG.png",
          ingredients:
            "brioche bun with white barbecue sauce, pulled beef, 2 poached eggs, miso hollandaise, crispy onions & spring roll, chives.",
          calories: 580,
        },
        {
          id: "egg_cro",
          name: "Egg & Avo Croissant",
          price: "38",
          image: "https://iili.io/qqXARp9.jpg",
          ingredients:
            "Plain croissant, cream cheese mix, smashed avocado, tomato sauce, poached eggs sprinkled with pumpkin seeds and mix sesame seeds.",
          calories: 490,
        },
      ],
    },
    {
      id: "signature-drinks",
      title: "Signature drink",
      items: [
        findItem("signature-drinks", "sig7")!,
        findItem("signature-drinks", "sig2")!,
        findItem("signature-drinks", "sig5")!,
        findItem("signature-drinks", "sig6")!,
        findItem("signature-drinks", "sig3")!,
        findItem("signature-drinks", "sig8")!,
        findItem("signature-drinks", "sig_green_tea")!,
        {
          ...findItem("signature-drinks", "sig_eg")!,
          name: "Earl Grey Tea",
          image: "https://iili.io/qqX7BhF.jpg",
        },
        findItem("signature-drinks", "sig_espresso_shake")!,
        findItem("signature-drinks", "sig_baby_shark")!,
        findItem("signature-drinks", "sig_matcha_shake")!,
        {
          id: "sig_rush_hour",
          name: "Rush Hour",
          price: "33",
          image: "https://iili.io/q2urMyF.jpg",
          ingredients: "Signature drink",
          calories: 10,
          status: "Available",
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
          ingredients:
            "Acai berry, banana, strawberry, peanut butter, coconut water, oat milk, and apple juice.",
          calories: 280,
        },
        {
          id: "sm_straw",
          name: "Strawberry Glaze Smoothie",
          price: "42",
          image: "https://iili.io/qq1mS5b.jpg",
          ingredients:
            "Almond milk, frozen strawberries, bananas, dates, maple syrup, collagen, vanilla stevia, sea moss gel, strawberry sauce, and coconut cloud cream.",
          calories: 260,
        },
        {
          id: "sm_coc",
          name: "Blue Cloud Smoothie",
          price: "42",
          image: "https://iili.io/qqE9JUX.jpg",
          ingredients:
            "Coconut milk, pineapple, banana, avocado, vanilla stevia, collagen, peanut butter, blue spirulina, and on top coconut cloud cream.",
          calories: 300,
        },
        {
          id: "sm_pit",
          name: "Pitaya Smoothie",
          price: "42",
          image: "https://iili.io/qqEH3rP.jpg",
          ingredients:
            "Apple juice, lemon juice, pitaya, frozen pineapple, banana, and lemon electrolytes.",
          calories: 270,
        },
      ],
    },
    {
      ...BASE_MENU.find((c) => c.id === "juices")!,
      items: BASE_MENU.find((c) => c.id === "juices")!.items.filter(item => item.name === "Orange" || item.id === "juice_orange"),
    },
  ];
};

// Al Qana Specific Menu
