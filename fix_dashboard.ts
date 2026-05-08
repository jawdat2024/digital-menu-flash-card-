import fs from 'fs';

let adminContent = fs.readFileSync('components/AdminDashboard.tsx', 'utf8');

// Modify syncChanges in AdminDashboard
adminContent = adminContent.replace(
`  const syncChanges = () => {
    if (selectedBranchId) {
      const storageKey = \`cartel_inventory_\${selectedBranchId}\`;
      localStorage.setItem(storageKey, JSON.stringify(items));
      window.dispatchEvent(new Event('menu-updated'));
      setHasUnsavedChanges(false);
      setIsSaved(true);
      setToastMessage('All changes synced');
      setTimeout(() => {
        setIsSaved(false);
        setTimeout(() => setToastMessage(''), 300);
      }, 3000);
    }
  };`,
`  const syncChanges = () => {
    if (selectedBranchId) {
      const storageKey = \`cartel_inventory_\${selectedBranchId}\`;
      localStorage.setItem(storageKey, JSON.stringify(items));
      window.dispatchEvent(new Event('menu-updated'));
      window.dispatchEvent(new StorageEvent('storage', { key: storageKey }));
      setHasUnsavedChanges(false);
      setIsSaved(true);
      setToastMessage('All changes synced');
      setTimeout(() => {
        setIsSaved(false);
        setTimeout(() => setToastMessage(''), 300);
      }, 3000);
    }
  };`);

// Update sync button in AdminDashboard header to spin and match exactly what was requested, although they asked for it in global nav bar too.
adminContent = adminContent.replace(
`                 <button 
                    onClick={loadInventory}
                    className="flex items-center justify-center p-2.5 rounded-full border border-neutral-700 hover:bg-neutral-800 text-neutral-300 transition-colors"
                    title="Sync / Refresh from Source"
                 >`,
`                 <button 
                    onClick={() => {
                        loadInventory();
                        const btn = document.getElementById('admin-sync-btn');
                        if (btn) {
                             btn.classList.add('animate-spin');
                             setTimeout(() => btn.classList.remove('animate-spin'), 500);
                        }
                    }}
                    id="admin-sync-btn"
                    className="flex items-center justify-center p-2.5 rounded-full border border-neutral-700 hover:bg-neutral-800 text-neutral-300 transition-colors"
                    title="Sync / Refresh from Source"
                 >`);
                 
fs.writeFileSync('components/AdminDashboard.tsx', adminContent);
