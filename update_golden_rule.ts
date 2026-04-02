import fs from 'fs';

let content = fs.readFileSync('constants.ts', 'utf-8');

const oldSection = `  // 5. Eggs & More
  const breakfastItems = extractAll(c => ['healthy-bowls', 'fruits-grains', 'fruits-gangs', 'eggs-more', 'breakfast', 'healthy-bar', 'salads', 'greens', 'green-salad'].includes(c.id));
  if (breakfastItems.length > 0) {
    newMenu.push({
      id: 'breakfast-mains',
      title: 'Eggs & More',
      headerStyle: {
        background: 'linear-gradient(to right, #ffffff, #bfdbfe)',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        textShadow: '0 0 15px rgba(191, 219, 254, 0.4)'
      },
      items: [],
      subCategories: breakfastItems
    });
  }`;

const newSection = `  // 5. Healthy Bowls
  const healthyBowls = extractAll(c => ['healthy-bowls', 'fruits-grains', 'fruits-gangs'].includes(c.id));
  if (healthyBowls.length > 0) {
    // Merge items if multiple categories exist
    const allItems = healthyBowls.flatMap(c => c.items || []);
    // Deduplicate by id
    const uniqueItems = Array.from(new Map(allItems.map(item => [item.id, item])).values());
    newMenu.push({
      id: 'healthy-bowls',
      title: 'Healthy Bowls',
      items: uniqueItems
    });
  }

  // 5.5 Eggs & More
  const eggsMore = extractAll(c => ['eggs-more', 'breakfast'].includes(c.id));
  if (eggsMore.length > 0) {
    const allItems = eggsMore.flatMap(c => c.items || []);
    const uniqueItems = Array.from(new Map(allItems.map(item => [item.id, item])).values());
    newMenu.push({
      id: 'eggs-more',
      title: 'Eggs & More',
      headerStyle: {
        background: 'linear-gradient(to right, #ffffff, #bfdbfe)',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        textShadow: '0 0 15px rgba(191, 219, 254, 0.4)'
      },
      items: uniqueItems
    });
  }

  // 5.6 Salads & Greens
  const salads = extractAll(c => ['salads', 'greens', 'green-salad'].includes(c.id));
  if (salads.length > 0) {
    const allItems = salads.flatMap(c => c.items || []);
    const uniqueItems = Array.from(new Map(allItems.map(item => [item.id, item])).values());
    newMenu.push({
      id: 'salads',
      title: 'Salads & Greens',
      items: uniqueItems
    });
  }
  
  // 5.7 Healthy Bar (Smoothies)
  const healthyBar = extractAll(c => ['healthy-bar'].includes(c.id));
  if (healthyBar.length > 0) {
    const allItems = healthyBar.flatMap(c => c.items || []);
    const uniqueItems = Array.from(new Map(allItems.map(item => [item.id, item])).values());
    newMenu.push({
      id: 'healthy-bar',
      title: 'Healthy Bar',
      items: uniqueItems
    });
  }`;

content = content.replace(oldSection, newSection);
fs.writeFileSync('constants.ts', content, 'utf-8');
console.log("Updated applyGoldenRuleLayout");
