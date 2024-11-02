const modelNamesSection1 = ['Worker', 'Farmer', 'DriedA', 'DriedB', 'FloatA', 'FloatB', 'Quality', 'visit', 'In-House-Drying', 'Dispatch-Of-Dried-Nutmeg', 'Dispatch-Of-Green', 'Cracking-Summary', 'Floation-Summary', 'Package-Control', 'Editors', 'Labour-support', 'Training-support', 'land-info', 'Land-Tenure', 'Nutmeg-Trees', 'Nutmeg-Variety', 'Other-Crops', 'Coconut-Trees', 'Citrus-Mango-Trees', 'Other-Spices-Trees', 'Other-Seasoning-Trees', 'Other-Crops-Cultivated', 'Condition', 'Nutmeg-Land', 'Nutmeg-Frequency', 'Potential-Risks', 'Road-Access', 'Food-Safety-and-Quality', 'Farm-Water-Source', 'Farm-House', 'inspector-summary', 'Policy','Sanitation-A','Sanitation-B','Sanitation-C','Cracking_Schedule','Assorting_Log', 'Extractor_Log', 'Fumigation_Log','Shelves','W_Shelves','M_Shelves','W_Shelves_Dried','M_Shelves_Dried','Vehicle_Inspection','Final_Weight_Inspection','Final_Weight_Inspection_fields','Dispatch_Of_Dried_Nutmeg_Rec','Dispatch_Of_Green_Nutmeg_Rec','Cracking_Extraction_Summary'];

// Function to check if the database already exists and is filled
async function checkIfDatabaseExists(dbName) {
    return new Promise((resolve, reject) => {
        const request = indexedDB.open(dbName);
        
        request.onsuccess = function(event) {
            const db = event.target.result;
            const transaction = db.transaction(db.objectStoreNames[0], 'readonly');
            const objectStore = transaction.objectStore(db.objectStoreNames[0]);
            const countRequest = objectStore.count();

            countRequest.onsuccess = function() {
                db.close();
                resolve(countRequest.result > 0);  // True if records exist, false otherwise
            };

            countRequest.onerror = function() {
                db.close();
                reject(new Error(`Error counting entries in ${dbName}`));
            };
        };

        request.onerror = function() {
            reject(new Error(`Error checking existence of database ${dbName}`));
        };

        request.onupgradeneeded = function(event) {
            event.target.result.close();
            resolve(false);  // Database is empty if it needs upgrading
        };
    });
}

async function better_transferIndexedDBData() {
    const dbName = 'GCNA';
    const dbExists = await checkIfDatabaseExists(dbName);
    
    if (dbExists) {
        console.log('Database already exists and has data.');
        return;
    }
    
    const request = indexedDB.open(dbName, 2);

    return new Promise((resolve, reject) => {
        request.onerror = function(event) {
            console.error('Error opening IndexedDB:', event.target.error);
            reject(new Error('Error opening IndexedDB'));
        };

        request.onsuccess = function(event) {
            const db = event.target.result;
            const transactionPromises = [];

            modelNamesSection1.forEach(function(modelName) {
                try {
                    if (db.objectStoreNames.contains(modelName)) {
                        const transaction = db.transaction(modelName, 'readonly');
                        const objectStore = transaction.objectStore(modelName);
                        const getRequest = objectStore.getAll();

                        getRequest.onsuccess = function(event) {
                            const data = event.target.result;
                            data.forEach(function(item) {
                                transactionPromises.push(better_sendDataToDjango(item, modelName));
                            });
                        };
                    } else {
                        console.warn(`Object store "${modelName}" not found in IndexedDB.`);
                    }
                } catch (error) {
                    console.error(`Error processing object store "${modelName}":`, error);
                }
            });

            Promise.all(transactionPromises)
                .then(() => {
                    resolve();
                })
                .catch(error => {
                    reject(error);
                });
        };
    });
}

function better_sendDataToDjango(item, modelName) {
    return new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest();
        xhr.open('POST', '/check-and-add/', true);
        xhr.setRequestHeader('Content-Type', 'application/json');
        xhr.onreadystatechange = function() {
            if (xhr.readyState === XMLHttpRequest.DONE) {
                if (xhr.status === 200) {
                    console.log('Entry added successfully for model:', modelName);
                    resolve();
                } else {
                    console.error('Error adding entry for model:', modelName, xhr.statusText);
                    reject(new Error(`Error adding entry for model: ${modelName}, Status: ${xhr.status}, Message: ${xhr.statusText}`));
                }
            }
        };
        xhr.send(JSON.stringify({model: modelName, data: item}));
    });
}

// Run the function to check and fill database
better_transferIndexedDBData()
    .then(() => {
        console.log('Data transfer completed successfully.');
    })
    .catch(error => {
        console.error('Error in data transfer:', error);
    });
