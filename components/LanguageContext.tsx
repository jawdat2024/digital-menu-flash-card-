import React, { createContext, useContext, useState, useEffect } from 'react';

type Language = 'en' | 'ar';

interface LanguageContextType {
  language: Language;
  toggleLanguage: () => void;
  t: (key: string) => string;
  isRtl: boolean;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const TRANSLATIONS: Record<Language, Record<string, string>> = {
  en: {
    // UI General
    'CARTEL': 'CARTEL',
    'A NEW FREQUENCY': 'A NEW FREQUENCY',
    'HOT LINE FEEDBACK': 'HOT LINE FEEDBACK',
    'Scan to follow our journey': 'Scan to follow our journey',
    'Scan to follow our journey.': 'Scan to follow our journey.',
    'Follow our journey.': 'Follow our journey.',
    'Follow us on Instagram': 'Follow us on Instagram',
    'Search': 'Search',
    'Search...': 'Search...',
    'No items found': 'No items found',
    'New Additions': 'New Additions',
    'THE UNIQUE': 'THE UNIQUE',
    'NEW': 'NEW',
    'Available Soon': 'Available Soon',
    'Sold Out': 'Sold Out',
    'Unavailable': 'Unavailable',
    'EST. 2024 • ABU DHABI • DUBAI': 'EST. 2024 • ABU DHABI • DUBAI',
    'Sync Menu': 'Sync Menu',
    'Phone:': 'Phone:',
    'admin access': 'Admin Access',
    'Back to Menu': 'Back to Menu',
    'Select a location below to view our offline-first synced digital menu boards.': 'Select a location below to view our offline-first synced digital menu boards.',
    'Choose Location': 'Choose Location',
    'Available Beans': 'Available Beans',
    'Espresso Bean Selection': 'Espresso Bean Selection',
    'Select Bean Option': 'Select Bean Option',
    'All premium single origin coffees are dynamically updated.': 'All premium single origin coffees are dynamically updated.',
    'Customer Name': 'Customer Name',
    'Phone Number': 'Phone Number',
    'Branch Location': 'Branch Location',
    'Feedback Category': 'Feedback Category',
    'Comments': 'Comments',
    'Upload Image': 'Upload Image',
    'Feedback submitted successfully!': 'Feedback submitted successfully!',
    'Submit Feedback': 'Submit Feedback',
    'Cancel': 'Cancel',
    'Back': 'Back',

    // Branch Names
    'CARTEL Al Ain': 'CARTEL Al Ain',
    'CARTEL Khalifa City': 'CARTEL Khalifa City',
    'CARTEL Al Qana': 'CARTEL Al Qana',
    'CARTEL Al Bateen': 'CARTEL Al Bateen',
    'CARTEL Marina': 'CARTEL Marina',
    'CARTEL Dubai Mirdif': 'CARTEL Dubai Mirdif',
    'AL AIN': 'AL AIN',
    'KHALIFA CITY': 'KHALIFA CITY',
    'AL QANA': 'AL QANA',
    'AL BATEEN': 'AL BATEEN',
    'MARINA': 'MARINA',
    'DUBAI MIRDIF': 'DUBAI MIRDIF',

    // Category Titles
    'ESPRESSO BASED': 'ESPRESSO BASED',
    'FILTER COFFEE': 'FILTER COFFEE',
    'SIGNATURE DRINKS': 'SIGNATURE DRINKS',
    'COLD COFFEE': 'COLD COFFEE',
    'DESSERTS': 'DESSERTS',
    'Dessert': 'DESSERT',
    'Desserts': 'DESSERTS',
    'BAKED GOODS': 'BAKED GOODS',
    'Baked Goods': 'BAKED GOODS',
    'SANDWICHES': 'SANDWICHES',
    'Sandwiches': 'SANDWICHES',
    'SIGNATURE TEA': 'SIGNATURE TEA',
    'HOT COFFEE': 'HOT COFFEE',
    'BEST SELLER': 'BEST SELLER',
    'HIGHLY RECOMMEND': 'HIGHLY RECOMMEND',
    'JUICES': 'JUICES',
    'FRUITS, SEEDS & GRAINS': 'FRUITS, SEEDS & GRAINS',
    'EGGS & MORE': 'EGGS & MORE',
    'TEA': 'TEA',
    'HEALTHY BOWLS': 'HEALTHY BOWLS',
    'COLD DRINKS': 'COLD DRINKS',
    'HOT DRINKS': 'HOT DRINKS',

    // Menu Item Names
    'Espresso': 'Espresso',
    'Double Espresso': 'Double Espresso',
    'Americano': 'Americano',
    'Glow Espresso': 'Glow Espresso',
    'Piccolo': 'Piccolo',
    'Cortado': 'Cortado',
    'Flat White': 'Flat White',
    'Cappuccino': 'Cappuccino',
    'Latte': 'Latte',
    'Spanish Latte': 'Spanish Latte',
    'Saffron Latte': 'Saffron Latte',
    'Aeropress': 'Aeropress',
    'V60': 'V60',
    'Chemex': 'Chemex',
    'Kalita': 'Kalita',
    'Cold Brew': 'Cold Brew',
    'Still Water': 'Still Water',
    'Sparkling Water': 'Sparkling Water',
    'Overnight Oat': 'Overnight Oat',
    'Overnight Oats': 'Overnight Oats',
    'Apple Cinnamon': 'Apple Cinnamon',
    'Exotic Sunrise': 'Exotic Sunrise',
    'CHIA PUDDING': 'Chia Pudding',
    'Pure Açaí Bowl': 'Pure Açaí Bowl',
    'Pure Acai Bowl': 'Pure Acai Bowl',
    'Apple Cinnamon Muesli': 'Apple Cinnamon Muesli',
    'Cold Cut Italian': 'Cold Cut Italian',
    'Tanzanian Hot Chocolate': 'Tanzanian Hot Chocolate',
    'Matcha Cloud': 'Matcha Cloud',
    'Pink Cloud Matcha': 'Pink Cloud Matcha',
    'Blue Cloud Matcha': 'Blue Cloud Matcha',
    'Deconstructed Cheesecake': 'Deconstructed Cheesecake',
    'Crust San Sebastian': 'Crust San Sebastian',
    'San Sebastian': 'San Sebastian',
    'Crepe Rolls': 'Crepe Rolls',
    'Raspberry Madeleine (1 Piece)': 'Raspberry Madeleine (1 Piece)',
    'Chocolate Chip Cookie': 'Chocolate Chip Cookie',
    'Aseeda': 'Aseeda',
    'Vanilla Pudding': 'Vanilla Pudding',
    'Banana Pudding': 'Banana Pudding',
    '1000 Layers( Mille Fuille)': '1000 Layers (Mille Feuille)',
    '1000 Layers (Mille Fuille)': '1000 Layers (Mille Feuille)',
    'Sicky Date ': 'Sticky Date Pudding',
    'Sticky Date': 'Sticky Date Pudding',
    'Chocolate Fudge Cookie': 'Chocolate Fudge Cookie',
    'Colombia - Bourbon Sidra': 'Colombia - Bourbon Sidra',
    'Costa Rica - Canet Chopin': 'Costa Rica - Canet Chopin',
    'Kenya Kirimara': 'Kenya Kirimara',
    'Colombia Mish Mish': 'Colombia Mish Mish',
    'Panamá Cordillera Gesha': 'Panamá Cordillera Gesha',
    'Colombia Sweet Dreams (Decaf)': 'Colombia Sweet Dreams (Decaf)',
    'Sweet Dreams Decaf': 'Sweet Dreams Decaf',
    'sweet dream decaf': 'Sweet Dreams Decaf',
    'Ethiopia Cold Brew': 'Ethiopia Cold Brew',
    'Tunacado': 'Tunacado',
    'Halloumi Sandwich': 'Halloumi Sandwich',
    'Turkey & Cheese Croissant': 'Turkey & Cheese Croissant',
    'Almond Croissant': 'Almond Croissant',
    'Pistachio Croissant': 'Pistachio Croissant',
    'Cheese Croissant': 'Cheese Croissant',
    'Butter Croissant': 'Butter Croissant',
    'Flat Croissant': 'Flat Croissant',
    'Truffle Cheese': 'Truffle Cheese',
    'Pesto Caprese': 'Pesto Caprese',
    'Beef Bresaola': 'Beef Bresaola',
    'Avocado Toast': 'Avocado Toast',
    'Eggs Benedict': 'Eggs Benedict',
    'Scrambled Truffle Eggs': 'Scrambled Truffle Eggs',
    'Egg & Avo Croissant': 'Egg & Avo Croissant',
    'Big Breakfast': 'Big Breakfast',
    'Aussie Benedict': 'Aussie Benedict',
    'Turkish Egg': 'Turkish Egg',
    'French Toast': 'French Toast',
    'Caesar-style Salad': 'Caesar-style Salad',
    'Açaí Smoothie': 'Açaí Smoothie',
    'Pitaya Smoothie': 'Pitaya Smoothie',
    'Blue Cloud Smoothie': 'Blue Cloud Smoothie',
    'Strawberry Glaze Smoothie': 'Strawberry Glaze Smoothie',
    'Tuna Melt': 'Tuna Melt',
    'Bacon & Egg Cheese Bun': 'Bacon & Egg Cheese Bun',
    'Latino Blend': 'Latino Blend',
    'Colombia-Witch': 'Colombia-Witch',
    'coconutella': 'Coconutella',
    'Nicaragua': 'Nicaragua',
    'San Sebastián': 'San Sebastián',
    'Peach Iced Tea': 'Peach Iced Tea',
    'Hibiscus Tea': 'Hibiscus Tea',
    'English Breakfast Tea': 'English Breakfast Tea',
    'Earl Grey Tea': 'Earl Grey Tea',
    'Green Tea Matcha': 'Green Tea Matcha',
    'Jasmine Green Tea': 'Jasmine Green Tea',
    'Chamomile Tea': 'Chamomile Tea'
  },
  ar: {
    // UI General
    'CARTEL': 'كارتيل',
    'A NEW FREQUENCY': 'تردد جديد للقهوة المختصة',
    'HOT LINE FEEDBACK': 'آراء واقتراحات العملاء',
    'Scan to follow our journey': 'امسح الرمز لمتابعة رحلتنا المشتركة',
    'Scan to follow our journey.': 'امسح الرمز لمتابعة رحلتنا المشتركة.',
    'Follow our journey.': 'تابع رحلتنا عبر الإنترنت.',
    'Follow us on Instagram': 'تابعنا على إنستغرام',
    'Search': 'البحث',
    'Search...': 'ابحث عن مشروبك أو مأكولاتك...',
    'No items found': 'عذراً، لم نجد أي تطابق لبحثك.',
    'New Additions': 'أحدث الإضافات الشهية',
    'THE UNIQUE': 'مشروب فريد وخاص',
    'NEW': 'جديد',
    'Available Soon': 'متوفر قريباً جداً',
    'Sold Out': 'نفذت الكمية بالكامل',
    'Unavailable': 'غير متوفر مؤقتاً',
    'EST. 2024 • ABU DHABI • DUBAI': 'تأسست ٢٠٢٤ • أبوظبي • دبي',
    'Sync Menu': 'تحديث ومزامنة القائمة',
    'Phone:': 'الهاتف المباشر:',
    'admin access': 'دخول المشرفين والمذيعين',
    'Back to Menu': 'العودة إلى القائمة الرئيسية',
    'Select a location below to view our offline-first synced digital menu boards.': 'يرجى اختيار الفرع لعرض قائمة المشروبات والمأكولات المتوفرة بالمزامنة الفورية.',
    'Choose Location': 'اختر موقع الفرع المفضل',
    'Available Beans': 'أنواع حبوب البن المتاحة اليوم',
    'Espresso Bean Selection': 'خيارات بن الإسبريسو الفاخر',
    'Select Bean Option': 'اختر نوع بن الإسبريسو المفضل لديك',
    'All premium single origin coffees are dynamically updated.': 'جميع خيارات البن الفاخرة أحادية المصدر يتم تحديثها ومزامنتها على الفور.',
    'Customer Name': 'اسم العميل الموقر',
    'Phone Number': 'رقم الهاتف المباشر',
    'Branch Location': 'موقع الفرع الحالي',
    'Feedback Category': 'تصنيف الملاحظات والآراء',
    'Comments': 'التعليقات والمقترحات الإضافية',
    'Upload Image': 'إرفاق صورة اختيارية',
    'Feedback submitted successfully!': 'شكراً لك! تم إرسال ملاحظاتك بنجاح وسرعة.',
    'Submit Feedback': 'إرسال الآراء والمقترحات',
    'Cancel': 'إلغاء الأمر',
    'Back': 'العودة للخلف',

    // Branch Names
    'CARTEL Al Ain': 'العين كارتيل',
    'CARTEL Khalifa City': 'مدينة خليفة كارتيل',
    'CARTEL Al Qana': 'القناة كارتيل',
    'CARTEL Al Bateen': 'البطين كارتيل',
    'CARTEL Marina': 'مارينا كارتيل',
    'CARTEL Dubai Mirdif': 'مردف دبي كارتيل',
    'AL AIN': 'فرع العين',
    'KHALIFA CITY': 'فرع مدينة خليفة',
    'AL QANA': 'فرع القناة',
    'AL BATEEN': 'فرع البطين الكلاسيكي',
    'MARINA': 'فرع مارينا الفاخر',
    'DUBAI MIRDIF': 'فرع مردف دبي العائلي',

    // Category Titles
    'ESPRESSO BASED': 'مشروبات إسبريسو فاخرة',
    'FILTER COFFEE': 'تفطير وقهوة فلتر فاخرة',
    'SIGNATURE DRINKS': 'مشروبات كارتيل الخاصة',
    'COLD COFFEE': 'مشروبات القهوة الباردة',
    'DESSERTS': 'تشكيلة الحلويات الفاخرة',
    'Dessert': 'الحلويات الفاخرة',
    'Desserts': 'تشكيلة الحلويات الفاخرة',
    'BAKED GOODS': 'المخبوزات والكرواسون الطازج',
    'Baked Goods': 'المخبوزات والكرواسون الطازج',
    'SANDWICHES': 'ساندويتشات ومأكولات خفيفة',
    'Sandwiches': 'ساندويتشات ومأكولات خفيفة',
    'SIGNATURE TEA': 'أصناف الشاي والقهوة الخاصة',
    'HOT COFFEE': 'مشروبات القهوة الساخنة',
    'BEST SELLER': 'الأكثر مبيعاً ورواجاً',
    'HIGHLY RECOMMEND': 'نوصي به بشدة وجدارة',
    'JUICES': 'عصائر طازجة ومنعشة',
    'FRUITS, SEEDS & GRAINS': 'أطباق فواكه وبذور طاقة وحبوب صحية',
    'EGGS & MORE': 'أطباق بيض مخفوقة ومأكولات صباحية',
    'TEA': 'مستخلصات شاي كلاسيكية',
    'HEALTHY BOWLS': 'أوعية طاقة صحية ومنعشة',
    'COLD DRINKS': 'مشروبات كارتيل الباردة',
    'HOT DRINKS': 'مشروبات كارتيل الساخنة',

    // Menu Item Names
    'Espresso': 'إسبريسو مركز دافئ',
    'Double Espresso': 'إسبريسو دبل مركز',
    'Americano': 'قهوة أمريكانو كلاسيكية',
    'Glow Espresso': 'جلو إسبريسو المنعش',
    'Piccolo': 'بيكولو لاتيه صغير حميم',
    'Cortado': 'كورتادو غني متوازن',
    'Flat White': 'فلات وايت كريمي رائع',
    'Cappuccino': 'كابتشينو برغوة دافئة',
    'Latte': 'لاتيه كارتيل الكلاسيكي دافئ',
    'Spanish Latte': 'سبانش لاتيه حلو مميز',
    'Saffron Latte': 'لاتيه الزعفران الفاخر العطري',
    'Aeropress': 'إيروبريس مستخلص بدقة',
    'V60': 'V60 قهوة منقطة فاخرة',
    'Chemex': 'كيمكس نقاوة فائقة في التصفية',
    'Kalita': 'كاليتا قهوة مستخلصة بعناية',
    'Cold Brew': 'كولد برو محضر بتقطير بارد طويل',
    'Still Water': 'مياه معدنية نقية مستوردة',
    'Sparkling Water': 'مياه فوارة منعشة فوارة',
    'Overnight Oat': 'شوفان التوت والمكسرات محضر ليلة كاملة',
    'Overnight Oats': 'شوفان التوت والمكسرات محضر ليلة كاملة',
    'Apple Cinnamon': 'شوفان التفاح والقرفة العطرة واللذيذة',
    'Exotic Sunrise': 'إكزوتك سانرايز بالفواكه المنعشة والزبادي',
    'CHIA PUDDING': 'بودنغ بذور الشيا الغني بالبروتين والفاكهة',
    'Pure Açaí Bowl': 'وعاء الآساي الصافي الغني بمقرمشة الغرنولا',
    'Pure Acai Bowl': 'وعاء الآساي الصافي الغني بمقرمشة الغرنولا',
    'Apple Cinnamon Muesli': 'مويسلي التفاح الطبيعي والقرفة المقرمشة',
    'Cold Cut Italian': 'ساندويتش كلد كات إيطالي فاخر بالأجبان',
    'Tanzanian Hot Chocolate': 'شوكولاتة تنزانيا الساخنة غنية بالنكهة',
    'Matcha Cloud': 'ماتشا كلاود بسحابة الكريمة المخفوقة الفاخرة',
    'Pink Cloud Matcha': 'ماتشا الوردية سحابة من رغوة الفراولة الكثيفة',
    'Blue Cloud Matcha': 'ماتشا الزرقاء سحابة من الفانيليا ومسحوق البلوفلاور',
    'Deconstructed Cheesecake': 'تشيز كيك مفكك مبهر بكريمة غنية وتوت',
    'Crust San Sebastian': 'تشيز كيك سان سيباستيان الكلاسيكية المخبوزة',
    'San Sebastian': 'سان سيباستيان تشيز كيك كريمية مخبوزة',
    'Crepe Rolls': 'لفائف كريب مقرمشة بصلصة الكاكاو واللوز',
    'Raspberry Madeleine (1 Piece)': 'كعكة مادلين بالتوت والزبدة الفاخرة (قطعة)',
    'Chocolate Chip Cookie': 'كوكيز بقطع الشوكولاتة الداكنة والمحلاة',
    'Aseeda': 'عصيدة كارتيل التقليدية بلمسة فاخرة حديثة',
    'Vanilla Pudding': 'بودنغ الفانيليا الغني بقطع الويفر المقرمشة',
    'Banana Pudding': 'بودنغ الموز الطازج بقطع الكسترد الناعمة',
    '1000 Layers( Mille Fuille)': 'ميل فوي كارتيل الفاخر (١٠٠٠ طبقة مقرمشة)',
    '1000 Layers (Mille Fuille)': 'ميل فوي كارتيل الفاخر (١٠٠٠ طبقة مقرمشة)',
    'Sicky Date ': 'بودنغ التمر اللذيذ بصلصة التوفي الدافئة',
    'Sticky Date': 'بودنغ التمر اللذيذ بصلصة التوفي الدافئة',
    'Chocolate Fudge Cookie': 'كوكيز الشوكولاتة فودج الفاخر والمذوب',
    'Colombia - Bourbon Sidra': 'قهوة كولومبيا - بوربون سيدرا الفاخرة المفلترة',
    'Costa Rica - Canet Chopin': 'كوتساريكا - كانيت شوبان بنكهات الباتيسري والكرز',
    'Kenya Kirimara': 'قهوة كينيا كيريمارا بنكهة الفواكه وتناسق مذهل',
    'Colombia Mish Mish': 'مشمش كولومبيا - نكهة مشمش وتوت عليق وليتشي ساحر',
    'Panamá Cordillera Gesha': 'بنما كورديليرا غيشا - خلاصة الياسمين والفاكهة الأرقى عالمياً',
    'Colombia Sweet Dreams (Decaf)': 'كولومبيا سويت دريمز الخالية من الكافيين بأمان',
    'Sweet Dreams Decaf': 'سويت دريمز الخالية تماماً من الكافيين وبنكهة جبارة',
    'sweet dream decaf': 'سويت دريمز الخالية تماماً من الكافيين وبنكهة جبارة',
    'Ethiopia Cold Brew': 'كولد برو إثيوبيا بلمسة باردة وحموضة فاكهية رائعة',
    'Tunacado': 'توناكادو ساندويتش - خبز مسطح مقرمش مليء بالتونة والأفوكادو',
    'Halloumi Sandwich': 'ساندويتش جبنة الحلومي المشوية بصلصة البيستو والطماطم المجففة',
    'Turkey & Cheese Croissant': 'كرواسون الديك الرومي المدخن وجبن الإيمنتال الفاخر',
    'Almond Croissant': 'كرواسون اللوز المخبوز بوزة اللوز المقرمشة والسكر النقي',
    'Pistachio Croissant': 'كرواسون الفستق بحشوة زبدة الفستق المحمص الغنية',
    'Cheese Croissant': 'كرواسون جبنة غني بدسم وخفة الكرووسان الفرنسي',
    'Butter Croissant': 'كرواسون الزبدة الكلاسيكي المقرمش والمطبوخ بعناية',
    'Flat Croissant': 'كرواسون فلات المفرود بلمسة حديثة غنية',
    'Truffle Cheese': 'ساندويتش جبن الترافل المذاب بالفطر البري والزبدة',
    'Pesto Caprese': 'ساندويتش البيستو كابريزي وموتزاريلا إيطالية وطماطم طازجة',
    'Beef Bresaola': 'ساندويتش بريزاولا لحم البقر الفاخر بجبن البارميزان والجرجير',
    'Avocado Toast': 'توست الأفوكادو المتبل مع البيض المسلوق وبذور القرع',
    'Eggs Benedict': 'بيض بنديكت الشهير على خبز البريوش بصلصة الهولنديز الفاخرة',
    'Scrambled Truffle Eggs': 'بيض مخفوق دسم بصلصة التيراميسو والترافل الأسود الفاخر',
    'Egg & Avo Croissant': 'كرواسون البيض المخفوق والشرائح الطازجة للأفوكادو',
    'Big Breakfast': 'طبق الفطور الكبير الشامل - بيض ولحوم وأجبان ومخبوزات دافئة',
    'Aussie Benedict': 'بنديكت الأسترالي بصلصة الهولنديز المدخنة على طريقة ملبورن',
    'Turkish Egg': 'البيض التركي بزبادي الأوريغانو دافئ والزبدة الحارة والشبت المحضر',
    'French Toast': 'فرنش توست كارتيل بالكراميل المكرمل وحبات التوت الطازجة',
    'Caesar-style Salad': 'سلطة سيزر الكلاسيكية بالدجاج المشوي والخبز المحمص الشهي',
    'Açaí Smoothie': 'سموذي الآساي الطبيعي الممزوج بحليب اللوز والموز والتوت',
    'Pitaya Smoothie': 'سموذي دراجون فروت (البيتيا) المنعشة والفراولة والزبادي',
    'Blue Cloud Smoothie': 'سموذي السحابة الزرقاء بالفانيليا والكولاجين وخلاصة الأناناس',
    'Strawberry Glaze Smoothie': 'سموذي الفراولة اللذيذ الممزوج برغوة الكريمة الكثيفة',
    'Tuna Melt': 'تونة ميلت ساندويتش الساخنة بالتونة والجبن الشيدر العتيق',
    'Bacon & Egg Cheese Bun': 'بيض مقلي ولحم مقدد مقرمش بجبن الشيدر في خبز البريوش الذهبي',
    'Latino Blend': 'لاتينو بليند إسبريسو غني بنكهات الكاكاو السلس والكراميل الدافئ',
    'Colombia-Witch': 'كولومبيا ويتش بنكهات السكر البني والبرتقال وتين مجفف لذيذ',
    'coconutella': 'كوكونتيلا دسمة وحلوة بجوز الهند المكرمل والكاكاو والكراميل',
    'Nicaragua': 'نيكاراغوا أحادية المصدر بنكهات حلاوة قصب السكر ومناسبة للإسبريسو الحليبي',
    'San Sebastián': 'تشيز كيك سان سيباستيان المخبوزة بكريمة مخملية مذهلة',
    'Peach Iced Tea': 'شاي مثلج بالخوخ الطبيعي المنعش وخلاصة الفاكهة الطازجة',
    'Hibiscus Tea': 'مشروب الكركديه المركز اللذيذ وخرطوم المياه الفوارة مثلج',
    'English Breakfast Tea': 'شاي الفطور الإنجليزي التقليدي المعتق بعبق بريطاني رائع',
    'Earl Grey Tea': 'شاي إيرل غراي اللذيذ المتبل بالبرغموت العطري',
    'Green Tea Matcha': 'ماتشا يابانية عضوية نقية للشاي الأخضر المنعش والفاخر',
    'Jasmine Green Tea': 'شاي أخضر نقي بالياسمين العطري المريح والمهدئ للأعصاب',
    'Chamomile Tea': 'مشروب البابونج الطبيعي الدافئ المريح للأعصاب الخالي من الكافيين'
  }
};

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('cartel_lang');
      if (saved === 'ar' || saved === 'en') return saved;
    }
    return 'en';
  });

  useEffect(() => {
    if (typeof window !== 'undefined') {
      localStorage.setItem('cartel_lang', language);
    }
    
    // Set layout direction and lang attributes on html/body tags
    const htmlEl = document.documentElement;
    const bodyEl = document.body;
    
    if (language === 'ar') {
      htmlEl.setAttribute('dir', 'rtl');
      htmlEl.setAttribute('lang', 'ar');
      bodyEl.setAttribute('dir', 'rtl');
      bodyEl.classList.add('rtl-arabic');
      bodyEl.style.fontFamily = '"Inter", "Cairo", system-ui, sans-serif';
    } else {
      htmlEl.setAttribute('dir', 'ltr');
      htmlEl.setAttribute('lang', 'en');
      bodyEl.setAttribute('dir', 'ltr');
      bodyEl.classList.remove('rtl-arabic');
      bodyEl.style.fontFamily = '"Inter", ui-sans-serif, system-ui, sans-serif';
    }
  }, [language]);

  const toggleLanguage = () => {
    setLanguage(prev => (prev === 'en' ? 'ar' : 'en'));
  };

  const t = (key: string): string => {
    if (!key) return '';
    const cleanKey = key.trim();
    
    // Check main direct translation
    if (TRANSLATIONS[language][cleanKey] !== undefined) {
      return TRANSLATIONS[language][cleanKey];
    }

    // Try lowering or matching ignore case
    const lowerKey = cleanKey.toLowerCase();
    const dictionary = TRANSLATIONS[language];
    
    // Let's check for case insensitive matches
    for (const dictKey in dictionary) {
      if (dictKey.toLowerCase() === lowerKey) {
        return dictionary[dictKey];
      }
    }

    // Let's support partial or dynamically translated ingredient lists if they come as descriptions/notes
    if (language === 'ar' && cleanKey.includes(',')) {
      const parts = cleanKey.split(',').map(p => p.trim());
      const translatedParts = parts.map(part => {
        for (const dictKey in dictionary) {
          if (dictKey.toLowerCase() === part.toLowerCase()) {
            return dictionary[dictKey];
          }
        }
        return part;
      });
      return translatedParts.join(' ⁃ ');
    }

    if (language === 'ar' && cleanKey.includes(' - ')) {
      const parts = cleanKey.split(' - ').map(p => p.trim());
      const translatedParts = parts.map(part => {
        for (const dictKey in dictionary) {
          if (dictKey.toLowerCase() === part.toLowerCase()) {
            return dictionary[dictKey];
          }
        }
        return part;
      });
      return translatedParts.join(' ⁃ ');
    }

    return cleanKey;
  };

  const isRtl = language === 'ar';

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, t, isRtl }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
