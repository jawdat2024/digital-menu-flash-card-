import fs from 'fs';
import path from 'path';

const constantsPath = path.join(process.cwd(), 'constants.ts');
let content = fs.readFileSync(constantsPath, 'utf8');

const targetStr = `      }
    }
    return menu;
  })(),`;

const replacementStr = `      }
      if (specialty.subCategories) {
        specialty.subCategories = specialty.subCategories.filter(sc => sc.id !== 'filtered-hot');
      }
    }
    return menu;
  })(),`;

if (content.includes(targetStr)) {
  content = content.replace(targetStr, replacementStr);
  fs.writeFileSync(constantsPath, content, 'utf8');
  console.log('Successfully removed FILTERED (Hot) category from Marina branch.');
} else {
  console.log('Target string not found in constants.ts');
}
