import fs from 'fs';

const content = fs.readFileSync('constants.ts', 'utf-8');

const updates = {
  'ALQANA': {
    'Yemen Sharqi Haraaz': 10,
    'Amazonic Soul': 1
  },
  'AL BATEEN': {
    'Colombia - Strawberry': 5,
    'Brazil Chocolate': 1
  },
  'KHALIFA CITY': {
    'Coconutella': 5,
    'Yemen Sharqi Haraaz': 10,
    'Brazil Amazonic Soul': 1
  },
  'DUBAI MIRDIF': {
    'Kenya Gichatha': 1,
    'Coconutella': 5
  },
  'MARINA': {
    'Coconutella': 5,
    'Brazil Amazonic Soul': 1
  }
};

const branchMap = {
  'ALQANA': 'alQanaBeans',
  'AL BATEEN': 'alBateenBeans',
  'KHALIFA CITY': 'khalifaBeans',
  'DUBAI MIRDIF': 'mirdifBeans',
  'MARINA': 'marinaBeans'
};

let newContent = content;
const missingBeans = [];

for (const [branch, beans] of Object.entries(updates)) {
    const arrayName = branchMap[branch];
    const regex = new RegExp(`const ${arrayName} = \\s*\\[([\\s\\S]*?)\\];`);
    const match = newContent.match(regex);
    if (match) {
        let arrayContent = match[1];
        for (const [beanName, price] of Object.entries(beans)) {
            let exactRegex = new RegExp(`(name:\\s*['"]${beanName}['"][\\s\\S]*?price:\\s*)(\\d+)`, 'i');
            if (exactRegex.test(arrayContent)) {
                arrayContent = arrayContent.replace(exactRegex, `$1${price}`);
            } else {
                // Try partial match, but be careful
                // e.g. "Amazonic Soul" should match "Brazil Amazonic Soul"
                // "Yemen Sharqi Haraaz" should match "Yemen Sharqi"
                let found = false;
                
                // Let's manually map the known variations
                const variations = {
                    'Amazonic Soul': ['Brazil Amazonic Soul'],
                    'Yemen Sharqi Haraaz': ['Yemen Sharqi']
                };
                
                if (variations[beanName]) {
                    for (const v of variations[beanName]) {
                        let vRegex = new RegExp(`(name:\\s*['"]${v}['"][\\s\\S]*?price:\\s*)(\\d+)`, 'i');
                        if (vRegex.test(arrayContent)) {
                            arrayContent = arrayContent.replace(vRegex, `$1${price}`);
                            found = true;
                            break;
                        }
                    }
                }
                
                if (!found) {
                    missingBeans.push({ branch, beanName });
                }
            }
        }
        newContent = newContent.replace(regex, `const ${arrayName} = [\n${arrayContent}\n  ];`);
    } else {
        console.log(`Could not find array ${arrayName} for branch ${branch}`);
    }
}

fs.writeFileSync('constants.ts', newContent, 'utf-8');
console.log("Missing beans:", missingBeans);
