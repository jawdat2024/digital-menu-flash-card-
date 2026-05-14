import { BRANCH_MENUS } from "./constants";
const khalifa = BRANCH_MENUS.khalifa;
const marina = BRANCH_MENUS.marina;

const kSand = khalifa.find(c => c.id === "sandwiches");
console.log("Khalifa:", kSand?.items.map(i => i.status));

const mSand = marina.find(c => c.id === "sandwiches");
console.log("Marina:", mSand?.items.map(i => i.status));
