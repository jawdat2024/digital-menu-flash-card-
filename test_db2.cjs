const { initializeApp, applicationDefault } = require('firebase-admin/app');
const { getFirestore } = require('firebase-admin/firestore');
const config = require('./firebase-applet-config.json');

const app = initializeApp({
  credential: applicationDefault(),
  projectId: config.projectId,
});

const db = getFirestore(app, config.firestoreDatabaseId);

async function check() {
  const collections = await db.listCollections();
  console.log('Collections:', collections.map(c => c.id));
}
check().catch(console.error);
