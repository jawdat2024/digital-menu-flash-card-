import { MENU_DATA } from "./constants";
const sand = MENU_DATA.find(c => c.id === "sandwiches");
console.log(JSON.stringify(sand, null, 2));
