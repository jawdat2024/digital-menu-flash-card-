const { initializeApp } = require('firebase-admin/app');
const { getFirestore } = require('firebase-admin/firestore');
const config = require('./firebase-applet-config.json');

const app = initializeApp({
  projectId: config.projectId,
});

const db = getFirestore(app, config.firestoreDatabaseId);

async function check() {
  const collections = await db.listCollections();
  console.log('Collections:', collections.map(c => c.id));
  
  for (const c of collections) {
    const snap = await c.limit(1).get();
    if (!snap.empty) {
      console.log(`Doc in ${c.id}:`, snap.docs[0].id, snap.docs[0].data());
    }
  }
}
check();
