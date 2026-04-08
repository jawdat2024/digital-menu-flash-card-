import fs from 'fs';
import path from 'path';

const constantsPath = path.join(process.cwd(), 'constants.ts');
let content = fs.readFileSync(constantsPath, 'utf8');

const targetStr = `          filteredHot.items = filteredHot.items.filter(item => 
            !item.name.toLowerCase().includes('cuban cigar') &&
            !item.name.toLowerCase().includes('cigar') &&
            !item.name.toLowerCase().includes('blackberry')
          );`;

const replacementStr = `          filteredHot.items = filteredHot.items.filter(item => {
            const name = item.name.toLowerCase();
            return !name.includes('cuban cigar') &&
                   !name.includes('cigar') &&
                   !name.includes('blackberry') &&
                   name !== 'ethiopia' &&
                   name !== 'sweet decaf' &&
                   name !== 'bodisha' &&
                   name !== 'rogisha' &&
                   name !== 'strawberry' &&
                   name !== 'kirimara' &&
                   name !== 'kenya kiramara {tap filter}' &&
                   name !== 'kenya kirimara [tap filter]' &&
                   name !== 'mish mish' &&
                   name !== 'costa rica' &&
                   name !== 'gesha';
          });`;

if (content.includes(targetStr)) {
  content = content.replace(targetStr, replacementStr);
  fs.writeFileSync(constantsPath, content, 'utf8');
  console.log('Successfully updated Marina FILTERED (Hot) deletion logic.');
} else {
  console.log('Target string not found in constants.ts');
}
