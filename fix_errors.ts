import fs from 'fs';

// --- Fix App.tsx price error ---
let appContent = fs.readFileSync('App.tsx', 'utf8');

appContent = appContent.replace(
`    menuSource.forEach(cat => {
      cat.items.forEach(item => initialItems.push({
        ...item,
        sku: \`SKU-\${item.id.toUpperCase()}\`,
        category: cat.title,
        isVisible: item.isVisible !== false,
        status: item.status ? item.status.toString().toLowerCase().replace(' ', '_') as any : (['sold_out', 'out_of_stock'].includes(item.status as any) ? 'sold_out' : 'available'),
        publishStatus: 'published'
      }));
      if (cat.subCategories) {
        cat.subCategories.forEach(sub => {
          sub.items.forEach(item => initialItems.push({
            ...item,
            sku: \`SKU-\${item.id.toUpperCase()}\`,
            category: sub.title,
            isVisible: item.isVisible !== false,
            status: item.status ? item.status.toString().toLowerCase().replace(' ', '_') as any : (['sold_out', 'out_of_stock'].includes(item.status as any) ? 'sold_out' : 'available'),
            publishStatus: 'published'
          }));
        });
      }
    });`,
`    menuSource.forEach(cat => {
      cat.items.forEach(item => initialItems.push({
        ...item,
        sku: \`SKU-\${item.id.toUpperCase()}\`,
        category: cat.title,
        price: parseFloat(item.price.replace(/[^0-9.]/g, '')) || 0,
        isVisible: item.isVisible !== false,
        status: item.status ? item.status.toString().toLowerCase().replace(' ', '_') as any : (['sold_out', 'out_of_stock'].includes(item.status as any) ? 'sold_out' : 'available'),
        publishStatus: 'published'
      }));
      if (cat.subCategories) {
        cat.subCategories.forEach(sub => {
          sub.items.forEach(item => initialItems.push({
            ...item,
            sku: \`SKU-\${item.id.toUpperCase()}\`,
            category: sub.title,
            price: parseFloat(item.price.replace(/[^0-9.]/g, '')) || 0,
            isVisible: item.isVisible !== false,
            status: item.status ? item.status.toString().toLowerCase().replace(' ', '_') as any : (['sold_out', 'out_of_stock'].includes(item.status as any) ? 'sold_out' : 'available'),
            publishStatus: 'published'
          }));
        });
      }
    });`);

fs.writeFileSync('App.tsx', appContent);

// --- Fix AdminDashboard.tsx ---
let adminContent = fs.readFileSync('components/AdminDashboard.tsx', 'utf8');

// 1. Fix duplicate imports
adminContent = adminContent.replace(
`import { useMenuStore, MenuItemEntity } from '../store/menuStore';
import { AdminProductRow } from './AdminProductRow';
import { useMenuStore, MenuItemEntity } from '../store/menuStore';
import { AdminProductRow } from './AdminProductRow';`,
`import { useMenuStore, MenuItemEntity } from '../store/menuStore';
import { AdminProductRow } from './AdminProductRow';`);

// 2. Remove old table code completely
// Note: It looks like my previous replace strategy failed to remove the massive item mapping.
// Let's do a strict regex to find tbody block and replace it
adminContent = adminContent.replace(/<tbody className="divide-y divide-neutral-800">[\s\S]*?<\/tbody>/g, 
`<tbody className="divide-y divide-neutral-800">
                      {filteredItems.map((item) => (
                        <AdminProductRow key={item.id} productId={item.id} />
                      ))}
                    </tbody>`);

// 3. Remove isEditPriceModalOpen references
adminContent = adminContent.replace(/        \{\/\* Edit Price Modal \*\/\}[\s\S]*?        \{\/\* Add Item Modal \*\/\}/g, `        {/* Add Item Modal */}`);

// Double check if Edit Price Modal was removed. Sometimes the regex doesn't catch it if the tags were slightly different.
// So let's clear out the blocks strictly.
const editModalRegex = /\{isEditPriceModalOpen && \([\s\S]*?\)\}/g;
adminContent = adminContent.replace(editModalRegex, '');

fs.writeFileSync('components/AdminDashboard.tsx', adminContent);
