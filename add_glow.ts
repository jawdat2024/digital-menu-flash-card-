import fs from 'fs';

let content = fs.readFileSync('constants.ts', 'utf-8');

const glowStyle = `headerStyle: {
        background: 'linear-gradient(to right, #ffffff, #bfdbfe)',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        textShadow: '0 0 15px rgba(191, 219, 254, 0.4)'
      },`;

// Replace title: 'Eggs & More', with title: 'Eggs & More', \n headerStyle: ...
content = content.replace(/title:\s*'Eggs & More',/g, `title: 'Eggs & More',\n      ${glowStyle}`);

fs.writeFileSync('constants.ts', content, 'utf-8');
console.log("Added glow style");
