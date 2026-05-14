import { BRANCH_MENUS } from "./constants";
for (const [branch, menu] of Object.entries(BRANCH_MENUS)) {
  const sand = menu.find(c => c.id === "sandwiches");
  console.log(`${branch}:`, sand?.items.map(i => i.status));
}
