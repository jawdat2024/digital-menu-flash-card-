import fs from 'fs';

let storeContent = fs.readFileSync('store/menuStore.ts', 'utf8');

// Replace channel definition
storeContent = storeContent.replace(
  "const channel = new BroadcastChannel('cartel-realtime-menu');",
  "export const syncChannel = new BroadcastChannel('cartel_global_sync');"
);

// Replace channel to syncChannel
storeContent = storeContent.replace(/channel\.postMessage/g, 'syncChannel.postMessage');

// Remove current internal listener
storeContent = storeContent.replace(
`  // Listen to cross-tab updates
  channel.onmessage = (event) => {
    if (event.data.type === 'SYNC_STATE' && get().branchId === event.data.branchId) {
      set({ entities: event.data.entities, ids: event.data.ids });
    }
  };`,
  `// Listener removed from here to be placed inside App.tsx per instructions`
);

// Add setItems support for exactly what the user requested
storeContent = storeContent.replace(
  "receiveBroadcast: (entities: Record<string, MenuItemEntity>, ids: string[]) => void;",
  "receiveBroadcast: (entities: Record<string, MenuItemEntity>, ids: string[]) => void;\n  setItems: (data: any) => void;"
);

storeContent = storeContent.replace(
  "receiveBroadcast: (entities, ids) => set({ entities, ids }),",
  "receiveBroadcast: (entities, ids) => set({ entities, ids }),\n    setItems: (data) => set({ entities: data.entities, ids: data.ids }),"
);

fs.writeFileSync('store/menuStore.ts', storeContent);

// Add useEffect to App.tsx
let appContent = fs.readFileSync('App.tsx', 'utf8');

// I will find the top of App component to add the empty dependency array useEffect.
appContent = appContent.replace(
`const App: React.FC = () => {
  const [isAdminMode, setIsAdminMode] = useState(false);`,
  `const App: React.FC = () => {
  const [isAdminMode, setIsAdminMode] = useState(false);

  // --- Real-Time Sync Listener ---
  useEffect(() => {
    const syncChannel = new BroadcastChannel('cartel_global_sync');
    syncChannel.onmessage = (event) => {
      console.log("Broadcast received:", event.data);
      if (event.data && event.data.type === 'SYNC_STATE') {
         const currentBranch = useMenuStore.getState().branchId;
         // Ensure the broadcast is for the active branch currently being viewed
         if (currentBranch && event.data.branchId === currentBranch) {
            useMenuStore.getState().setItems(event.data);
         }
      }
    };
    return () => {
      syncChannel.close();
    };
  }, []);`
);

fs.writeFileSync('App.tsx', appContent);
