import fs from 'fs';
import path from 'path';

const constantsPath = path.join(process.cwd(), 'constants.ts');
let content = fs.readFileSync(constantsPath, 'utf8');

const targetStr = `      ],
    },
    BASE_MENU.find((c) => c.id === "juices")!,
  ];
};

// Al Qana Specific Menu`;

const replacementStr = `      ],
    },
    {
      ...BASE_MENU.find((c) => c.id === "juices")!,
      items: BASE_MENU.find((c) => c.id === "juices")!.items.filter(item => item.name === "Orange" || item.id === "juice_orange"),
    },
  ];
};

// Al Qana Specific Menu`;

if (content.includes(targetStr)) {
  content = content.replace(targetStr, replacementStr);
  fs.writeFileSync(constantsPath, content, 'utf8');
  console.log('Successfully updated Khalifa Juices.');
} else {
  console.log('Target string not found in constants.ts');
}
