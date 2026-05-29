import { MENU_DATA } from './constants.ts';
const remaining = [...JSON.parse(JSON.stringify(MENU_DATA))];

const eggsMore = remaining.findIndex(c => c.id === 'eggs-more');
console.log("Index of eggs-more initially:", eggsMore);
