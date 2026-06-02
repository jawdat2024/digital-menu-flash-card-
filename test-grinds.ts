import { BRANCH_MENUS } from './constants';

for (const [branchId, menu] of Object.entries(BRANCH_MENUS)) {
  const grinds = menu.find(c => c.title === "FRUIT & GRINDS");
  if (grinds) {
    const itemNames = grinds.items.map(i => i.name);
    console.log(`Branch ${branchId} FRUIT & GRINDS items: ` + itemNames.join(', '));
  } else {
    console.log(`Branch ${branchId} missing FRUIT & GRINDS!`);
  }
}
