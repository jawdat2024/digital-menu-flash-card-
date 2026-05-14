import { BRANCH_MENUS } from "./constants";
[ 'alqana', 'khalifa', 'albateen' ].forEach(branch => {
  const menu = BRANCH_MENUS[branch].find(c => c.id === "desserts");
  console.log(branch, menu?.items.map(i => i.id));
});
