import { BRANCH_MENUS, MENU_DATA } from "./constants";

let count = 0;
let healthyBarCount = 0;

const scanMenu = (menu: any, id: string) => {
  menu.forEach((cat: any) => {
    if (cat.items) {
      cat.items.forEach((item: any) => {
        if (item.name.toLowerCase().includes("pitaya")) {
          count++;
          if (cat.title === "Health Bar") healthyBarCount++;
          else console.log(`Found outside Health Bar: ${id} -> ${cat.title} -> ${item.name}`);
        }
      });
    }
    if (cat.subCategories) {
      cat.subCategories.forEach((sub: any) => {
        if (sub.items) {
          sub.items.forEach((item: any) => {
            if (item.name.toLowerCase().includes("pitaya")) {
              count++;
              if (cat.title === "Health Bar") healthyBarCount++;
              else console.log(`Found outside Health Bar: ${id} -> ${cat.title} -> ${sub.title} -> ${item.name}`);
            }
          });
        }
      });
    }
  });
};

Object.entries(BRANCH_MENUS).forEach(([branch, menu]) => {
  scanMenu(menu, branch);
});
scanMenu(MENU_DATA, "BASE_MENU");

console.log(`Total Pitaya found: ${count}`);
console.log(`Total in Health Bar: ${healthyBarCount}`);

