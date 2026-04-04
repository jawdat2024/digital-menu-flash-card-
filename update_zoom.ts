import fs from 'fs';
import path from 'path';

const files = [
  'components/FlipCard.tsx',
  'components/SmoothieCard.tsx',
  'components/MenuItemCard.tsx'
];

files.forEach(file => {
  const filePath = path.join(process.cwd(), file);
  if (fs.existsSync(filePath)) {
    let content = fs.readFileSync(filePath, 'utf8');
    // The prompt mentions both 20% and scale(1.1) in the text, but 20% zoom mathematically means scale(1.2).
    // We will update it to scale(1.2) to accurately reflect the 20% requirement.
    content = content.replace(/scale\(1\.1\)/g, 'scale(1.2)');
    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`Updated ${file}`);
  }
});
