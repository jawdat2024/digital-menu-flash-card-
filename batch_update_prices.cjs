const admin = require('firebase-admin');

// ----------------------------------------------------------------------
// CONFIGURATION & SCHEMA SETUP
// ----------------------------------------------------------------------

// 1. Point to your downloaded service account key JSON file
// const serviceAccount = require('./serviceAccountKey.json');

// 2. Set this to false ONLY when you are ready to execute the writes to Firestore
const DRY_RUN = true; 

// 3. The name of the Firestore collection containing your branch menus
// Adjust this to match your actual collection name (e.g., 'branches', 'locations', 'menus')
const COLLECTION_NAME = 'branches'; 

// 4. The document field containing the nested menu array
// If the menu is stored at the root of the document, leave this as null.
// For example, if your document looks like { categories: [...] }, set to 'categories'.
const MENU_FIELD_NAME = 'categories'; 

// ----------------------------------------------------------------------
// INITIALIZATION
// ----------------------------------------------------------------------

/* 
// Uncomment and initialize with your service account credentials for production
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});
*/

// For the sake of standard environment defaults if running directly on a GCP server:
if (!admin.apps.length) {
    admin.initializeApp();
}

const db = admin.firestore();

// ----------------------------------------------------------------------
// BUSINESS LOGIC & PRICING RULES
// ----------------------------------------------------------------------

function isGeshaException(itemName) {
    if (!itemName) return false;
    return itemName.toLowerCase().includes("gesha");
}

function processMenu(menuArray, branchId) {
    let hasChanges = false;
    
    // Helper function to process an array of items
    function processItems(items, categoryIdentifier) {
        if (!Array.isArray(items)) return;
        
        const catUpper = (categoryIdentifier || "").toUpperCase();
        const isEspressoBased = catUpper.includes("ESPRESSO");
        const isFiltered = catUpper.includes("FILTER");
        
        items.forEach(item => {
            if (!item) return;

            let needsUpdate = false;

            if (isEspressoBased) {
                needsUpdate = true;
            } else if (isFiltered) {
                if (isGeshaException(item.name)) {
                    console.log(`[DRY_RUN: ${DRY_RUN}] [${branchId}] 🚫 SKIPPED Gesha Exception -> Category: "${categoryIdentifier}", Item: "${item.name}", Current Price: ${item.price}`);
                    needsUpdate = false;
                } else {
                    needsUpdate = true;
                }
            }
            
            // Apply the update if needed
            if (needsUpdate) {
                let oldPrice = item.price;
                let newPrice;
                
                if (typeof item.price === 'number') {
                    newPrice = item.price + 1;
                } else if (typeof item.price === 'string') {
                    const numericMatch = item.price.match(/[\d.]+/);
                    if (numericMatch) {
                        const num = parseFloat(numericMatch[0]) + 1;
                        newPrice = item.price.replace(/[\d.]+/, num.toString());
                    } else {
                        console.log(`[DRY_RUN: ${DRY_RUN}] [${branchId}] ⚠️ WARNING: Could not parse price for "${item.name}": ${item.price}`);
                        return;
                    }
                } else {
                    return;
                }
                
                console.log(`[DRY_RUN: ${DRY_RUN}] [${branchId}] ✅ UPDATING -> Category: "${categoryIdentifier}", Item: "${item.name}", Price: ${oldPrice} -> ${newPrice}`);
                item.price = newPrice;
                hasChanges = true;
            }
        });
    }

    // Helper function to process nested category structure
    function processCategories(categories) {
        if (!Array.isArray(categories)) return;
        
        categories.forEach(cat => {
            const catIdentifier = cat.title || cat.name || cat.id || "Unknown";
            
            if (cat.items) {
                processItems(cat.items, catIdentifier);
            }
            if (cat.subCategories) {
                processCategories(cat.subCategories);
            }
        });
    }

    if (menuArray.length > 0) {
        if (menuArray[0].items || menuArray[0].subCategories) {
            // Nested category structure
            processCategories(menuArray);
        } else {
            // Flat item structure (normalized)
            menuArray.forEach(item => {
                const catTitle = item.category || (item.categories && item.categories[0]) || "";
                processItems([item], catTitle);
            });
        }
    }
    
    return hasChanges;
}

// ----------------------------------------------------------------------
// BATCH EXECUTION
// ----------------------------------------------------------------------

async function executeBatchUpdate() {
    console.log(`====================================================`);
    console.log(`STARTING BATCH UPDATE SCRIPT`);
    console.log(`DRY_RUN MODE: ${DRY_RUN ? 'ENABLED (No database writes)' : 'DISABLED (Will write to database!)'}`);
    console.log(`====================================================`);

    try {
        const snapshot = await db.collection(COLLECTION_NAME).get();
        
        if (snapshot.empty) {
            console.log(`No documents found in collection: ${COLLECTION_NAME}`);
            return;
        }

        const batch = db.batch();
        let totalUpdates = 0;

        snapshot.forEach(doc => {
            const data = doc.data();
            const branchId = doc.id;
            
            // IF YOUR DATA IS STORED AS A MAP OF BRANCHES IN A SINGLE DOCUMENT:
            // e.g. { marina: [...], dubai: [...] }
            // You will need to iterate over Object.keys(data) instead of treating the document as a single branch.
            // Assuming one document = one branch with a nested array in MENU_FIELD_NAME:
            const menuArray = MENU_FIELD_NAME ? data[MENU_FIELD_NAME] : data;
            
            if (!menuArray || !Array.isArray(menuArray)) {
                console.log(`[${branchId}] Skipped: No valid menu array found in field "${MENU_FIELD_NAME}".`);
                return;
            }

            const updatedMenuArray = JSON.parse(JSON.stringify(menuArray));
            const hasChanges = processMenu(updatedMenuArray, branchId);
            
            if (hasChanges) {
                totalUpdates++;
                if (!DRY_RUN) {
                    const docRef = db.collection(COLLECTION_NAME).doc(branchId);
                    const updatePayload = MENU_FIELD_NAME 
                        ? { [MENU_FIELD_NAME]: updatedMenuArray } 
                        : updatedMenuArray;
                    
                    batch.update(docRef, updatePayload);
                }
            } else {
                console.log(`[${branchId}] No items matched the pricing rules. Skipping document update.`);
            }
        });

        if (totalUpdates > 0) {
            console.log(`\nPrepared updates for ${totalUpdates} branch documents.`);
            if (!DRY_RUN) {
                console.log('Committing batch to Firestore...');
                await batch.commit();
                console.log('✅ Batch update committed successfully.');
            } else {
                console.log('DRY_RUN is TRUE. Skipping batch commit.');
                console.log('Set DRY_RUN = false and run again to execute the updates.');
            }
        } else {
            console.log('\nNo documents needed updates.');
        }

    } catch (error) {
        console.error('❌ Error during batch update:', error);
    }
}

executeBatchUpdate();
