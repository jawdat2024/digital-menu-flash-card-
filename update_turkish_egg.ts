import fs from 'fs';

let content = fs.readFileSync('constants.ts', 'utf-8');

const oldIngredients = "homemade tomato jam, poached eggs, mint pesto, chilly butter served with 2 slices of toasted zaatar sourdough.";
const newIngredients = "mint labneh, homemade tomato jam, poached eggs, mint pesto, chilli butter served with 2 slices of toasted zaatar sourdough.";

content = content.split(oldIngredients).join(newIngredients);

fs.writeFileSync('constants.ts', content, 'utf-8');
console.log("Updated Turkish Egg description");
