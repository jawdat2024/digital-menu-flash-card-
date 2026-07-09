const { BRANCH_MENUS } = require('./constants.cjs');
for (const [branchId, menu] of Object.entries(BRANCH_MENUS)) {
  const desserts = menu.find(c => c.id === 'desserts' || c.title?.toLowerCase() === 'dessert' || c.title?.toLowerCase() === 'desserts');
  if (desserts) {
    console.log(`Branch ${branchId} - First dessert: ${desserts.items[0]?.name}`);
  }
}
