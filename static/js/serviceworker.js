
// self.addEventListener('install', (event) => {
//     event.waitUntil(
//         caches.open('gcna-offline-access').then((cache) => {
//             return cache.addAll([
//                 '/',
//                 '/adhome',
//                 '/addIH0/',
//                 '/login/',
//                 '/login1/',
//                 '/table/',
//                 '/table001/',
//                 '/add_to_session/',
//                 '/gcna8',
//                 '/gcna9',
//                 '/gcna10',
//                 '/gcna11',
//                 '/gcna12',
//                 '/DriedA',
//                 '/DriedB',
//                 '/FloatA',
//                 '/FloatB',
//                 '/Quality',
//                 '/gcna00_1/',
//                 '/gcna00_2/',
//                 '/gcna00_3/',
//                 '/gcna00_4/',
//                 '/gcna00_5/',
//                 '/gcna00_6/',
//                 '/gcna00_7/',
//                 '/gcna00_8/',
//                 '/gcna00_9/',
//                 '/gcna00_10/',
//                 '/gcna00_11/',
//                 '/gcna00_12/',
//                 '/gcna00_13/',
//                 '/gcna00_14/',
//                 '/gcna00_15/',
//                 '/gcna00_16/',
//                 '/gcna00_17/',
//                 '/gcna00_18/',
//                 '/gcna00_19/',
//                 '/gcna00_20/',
//                 '/gcna00_21/',
//                 '/gcna00_22/',
//                 '/gcna00_23/',
//                 '/gcna00_24/',


//                 '/0gcna00_1/',
//                 '/0gcna00_2/',
//                 '/0gcna00_3/',
//                 '/0gcna00_4/',
//                 '/0gcna00_5/',
//                 '/0gcna00_6/',
//                 '/0gcna00_7/',
//                 '/0gcna00_8/',
//                 '/0gcna00_9/',
//                 '/0gcna00_10/',
//                 '/0gcna00_11/',
//                 '/0gcna00_12/',
//                 '/0gcna00_13/',
//                 '/0gcna00_14/',
//                 '/0gcna00_15/',
//                 '/0gcna00_16/',
//                 '/0gcna00_17/',
//                 '/0gcna00_18/',
//                 '/0gcna00_19/',


                
//                 '/api/DriedA/',
//                 '/api/DriedB/',
//                 '/api/FloatA/',
//                 '/api/FloatB/',
//                 '/api/Farmer/',
//                 '/api/Quaility/',


//                 '/api/visit/',
//                 '/api/In-House-Drying/',
//                 '/api/Dispatch-Of-Dried-Nutmeg/',
//                 '/api/Dispatch-Of-Green/',
//                 '/api/Cracking-Summary/',
//                 '/api/Floation-Summary/',
//                 '/api/Package-Ciontrol/',
//                 '/api/Editors/',
//                 '/api/Labour-support/',
//                 '/api/Training-support/',
//                 '/api/land-info/',
//                 '/api/Land-Tenur/',
//                 '/api/Nutmeg-Trees/',
//                 '/api/Nutmeg-Variety/',
//                 '/api/Other-Crops/',
//                 '/api/Coconut-Trees/',
//                 '/api/Citrus-Mango-Trees/',
//                 '/api/Other-Spices-Trees/',
//                 '/api/Other-Seasoning-Trees/',
//                 '/api/Other-Crops-Cultivated/',
//                 '/api/Condition/',
//                 '/api/Nutmeg-Land/',
//                 '/api/Nutmeg-Frequency/',
//                 '/api/Potential-Risks/',
//                 '/api/Road-Access/',
//                 '/api/Food-Safety-and-Quality/',
//                 '/api/Farm-Water-Source/',
//                 '/api/Farm-House/',
//                 '/api/inspector-symmary/',
//                 '/api/Policy/',


//                 '/view_tablet/',
//                 '/view_tablet2/',
//                 '/view_Visit/',
//                 '/edit_Visit/',
//                 '/table1/',      
//                 '/table2/',  
                
                
//                 '/view0DA/',
//                 '/view0DB/',
//                 '/view0FA/',
//                 '/view0FB/',
//                 '/view0QC/',



//                 '/viewIH0/',
//                 '/viewDISD0/',
//                 '/viewDISG0/',
//                 '/viewCRK0/',
//                 '/viewFLT0/',
//                 '/viewPKG0/',



//             ]);
//         })
//     );
// });



// self.addEventListener('fetch', (event) => {
//     event.respondWith(
//         caches.match(event.request).then((response) => {
//             return response || fetch(event.request);
//         })
//     );
// });



// 'api/Mace_Dispatched/',
// 'api/Mace_Purchase/',
// 'api/Dispatch_Of_Dried_Nutmeg_Rec/',
// 'api/Cracking_Extraction_Summary/',
// 'api/Dispatch_Of_Green_Nutmeg_Rec/',
// 'api/Mace_Dispatched_Rec/',
// "add_Dispatch_Of_Green_Nutmeg_Rec/",
// "add_Dispatch_Of_Dried_Nutmeg_Rec/",
// "add_Mace_Dispatched/", 
// "add_Mace_Purchase/",
// "view_Dispatch_Of_Green_Nutmeg_Rec/",
// "view_Dispatch_Of_Dried_Nutmeg_Rec/",
// "view_Mace_Dispatched/",
// "view_Mace_Purchase/",
// "add_Mace_Dispatched_Rec/",
// "view_Mace_Dispatched_Rec/", views.view_Mace_Dispatched_Rec, name="view_Mace_Dispatched_Rec"),

// 'api/Vehicle_Inspection/',
// 'api/Final_Weight_Inspection/',
// 'api/Final_Weight_Inspection_fields/',






// self.addEventListener('install', (event) => {
//     event.waitUntil(
//         caches.open('gcna-offline-access').then((cache) => {
//             return cache.addAll([
//                 // Add URLs to assets you want to cache
//                 // ...
//                 '/',
//               '/Signin/',
//               '/table001/',
//               '/addIH0/',
//               '/add_Mace_Purchase/',
//               '/add_Mace_Dispatched/',
//               '/add_Mace_Dispatched_Rec/',
//               '/add_Final_Weigtht_Inspection/',
//               '/add_Vehicle_Inspection/',
//               '/addDISD0/',
//               '/add_Dispatch_Of_Dried_Nutmeg_Rec/',
//               '/addDISG0/',
//               '/add_Dispatch_Of_Green_Nutmeg_Rec/',
//               '/addCRK0/',
//               '/addFLT0/',
//               '/addPKG0/',
//               '/viewIH0/',
//               '/view_Mace_Purchase/',
//               '/view_Mace_Dispatched/',
//               '/view_Mace_Dispatched_Rec/',
//               '/view_Final_Weigtht_Inspection/',
//               '/view_Vehicle_Inspection/',
//               '/viewDISD0/',
//               '/view_Dispatch_Of_Dried_Nutmeg_Rec/',
//               '/viewDISG0/',
//               '/view_Dispatch_Of_Green_Nutmeg_Rec/',
//               '/viewCRK0/',
//               '/viewFLT0/',
//               '/viewPKG0/',



              
              
//                 // '/Signin/',
//                 // '/adhome',
//                 // '/addIH0/',
//                 // '/addDISD0/',
//                 // '/addDISG0/',
//                 // '/addCRK0/',
//                 // '/addFLT0/',
//                 // '/addPKG0/',
//                 // '/view_Mace_Purchase/',
//                 // '/view_Mace_Dispatched/',
//                 // '/view_Mace_Dispatched_Rec/',
//                 // '/view_Final_Weigtht_Inspection/',




//                 // '/login/',
//                 // '/login1/',
//                 // '/table/',
//                 // '/table001/',
//                 // '/add_to_session/',
//                 // '/DriedA',
//                 // '/DriedB',
//                 // '/FloatA',
//                 // '/FloatB',
//                 // '/Quality',
//                 // '/Signin/',


                
//                 '/api/DriedA/',
//                 '/api/DriedB/',
//                 '/api/FloatA/',
//                 '/api/FloatB/',
//                 '/api/Farmer/',
//                 '/api/Quaility/',


//                 // '/api/visit/',
//                 '/api/In-House-Drying/',
//                 '/api/Dispatch-Of-Dried-Nutmeg/',
//                 '/api/Dispatch-Of-Green/',
//                 '/api/Cracking-Summary/',
//                 '/api/Floation-Summary/',
//                 '/api/Package-Ciontrol/',
//                 '/api/Editors/',
//                 '/api/Labour-support/',
//                 '/api/Training-support/',
//                 '/api/Policy/',



//                 // '/table1/',      
//                 // '/table2/',  
                
                
//                 // '/view0DA/',
//                 // '/view0DB/',
//                 // '/view0FA/',
//                 // '/view0FB/',
//                 // '/view0QC/',


//                 // '/viewIH0/',
//                 // '/viewDISD0/',
//                 // '/viewDISG0/',
//                 // '/viewCRK0/',
//                 // '/viewFLT0/',
//                 // '/viewPKG0/',
//                  // ...
//             ]).then(() => {
//                 // Once all resources are cached, post a message to all clients
//                 self.clients.matchAll().then(clients => {
//                     clients.forEach(client => client.postMessage('Caching complete!'));
//                 });
//             });
//         })
//     );
// });

// self.addEventListener('fetch', (event) => {
//     event.respondWith(
//         // Try to fetch from the network first
//         fetch(event.request).catch(() => {
//             // If the fetch fails (e.g., due to no network), try to get it from the cache
//             return caches.match(event.request);
//         })
//     );
// });





// USE THE ONE ABOVE



// self.addEventListener('install', (event) => {
//     event.waitUntil(
//         caches.open('gcna-offline-access').then((cache) => {
//             return cache.addAll([
//                 '/',
//                 '/Signin/',
//                 '/table001/',
//                 '/addIH0/',
//                 '/add_Mace_Purchase/',
//                 '/add_Mace_Dispatched/',
//                 '/add_Mace_Dispatched_Rec/',
//                 '/add_Final_Weigtht_Inspection/',
//                 '/add_Vehicle_Inspection/',
//                 '/addDISD0/',
//                 '/add_Dispatch_Of_Dried_Nutmeg_Rec/',
//                 '/addDISG0/',
//                 '/add_Dispatch_Of_Green_Nutmeg_Rec/',
//                 '/addCRK0/',
//                 '/addFLT0/',
//                 '/addPKG0/',
//                 '/viewIH0/',
//                 '/view_Mace_Purchase/',
//                 '/view_Mace_Dispatched/',
//                 '/view_Mace_Dispatched_Rec/',
//                 '/view_Final_Weigtht_Inspection/',
//                 '/view_Vehicle_Inspection/',
//                 '/viewDISD0/',
//                 '/view_Dispatch_Of_Dried_Nutmeg_Rec/',
//                 '/viewDISG0/',
//                 '/view_Dispatch_Of_Green_Nutmeg_Rec/',
//                 '/viewCRK0/',
//                 '/viewFLT0/',
//                 '/viewPKG0/',
//                 '/api/DriedA/',
//                 '/api/DriedB/',
//                 '/api/FloatA/',
//                 '/api/FloatB/',
//                 '/api/Farmer/',
//                 '/api/Quaility/',
//                 '/api/In-House-Drying/',
//                 '/api/Dispatch-Of-Dried-Nutmeg/',
//                 '/api/Dispatch-Of-Green/',
//                 '/api/Cracking-Summary/',
//                 '/api/Floation-Summary/',
//                 '/api/Package-Ciontrol/',
//                 '/api/Editors/',
//                 '/api/Labour-support/',
//                 '/api/Training-support/',
//                 '/api/Policy/'
//             ]).then(() => {
//                 self.clients.matchAll().then(clients => {
//                     clients.forEach(client => client.postMessage('Caching complete!'));
//                 });
//             });
//         })
//     );
// });

// self.addEventListener('fetch', (event) => {
//     const requestURL = new URL(event.request.url);
    
//     // Check if it's the home page
//     if (requestURL.href === 'https://gcnafarmerform-production.up.railway.app/') {
//         // Run the provided JavaScript for the home page
//         event.waitUntil(
//             self.clients.matchAll().then(clients => {
//                 clients.forEach(client => {
//                     client.postMessage({ action: 'run-indexedDB-code' });
//                 });
//             })
//         );
//     }

//     event.respondWith(
//         caches.match(event.request).then(cachedResponse => {
//             return fetch(event.request).then(networkResponse => {
//                 if (!networkResponse || networkResponse.status !== 200 || networkResponse.type !== 'basic') {
//                     return cachedResponse || networkResponse;
//                 }

//                 // If response is different from the cached version, update the cache
//                 if (cachedResponse) {
//                     const cachedText = cachedResponse.clone().text();
//                     const networkText = networkResponse.clone().text();

//                     return Promise.all([cachedText, networkText]).then(([cachedContent, networkContent]) => {
//                         if (cachedContent !== networkContent) {
//                             caches.open('gcna-offline-access').then(cache => {
//                                 cache.put(event.request, networkResponse.clone());
//                             });
//                         }
//                         return networkResponse;
//                     });
//                 } else {
//                     caches.open('gcna-offline-access').then(cache => {
//                         cache.put(event.request, networkResponse.clone());
//                     });
//                     return networkResponse;
//                 }
//             }).catch(() => {
//                 return cachedResponse;
//             });
//         })
//     );
// });











// self.addEventListener('install', (event) => {
//     event.waitUntil(
//         caches.open('gcna-offline-access').then((cache) => {
//             return cache.addAll([
//                 // Add URLs to assets you want to cache
//                 '/',
//                 '/adhome',
//                 '/addIH0/',
//                 '/addDISD0/',
//                 '/addDISG0/',
//                 '/addCRK0/',
//                 '/addFLT0/',
//                 '/addPKG0/',
//                 '/add_Mace_Purchase/',
//                 '/add_Mace_Dispatched/',
//                 '/add_Mace_Dispatched_Rec/',
//                 '/add_Final_Weigtht_Inspection/',
//                 '/add_Vehicle_Inspection/',
//                 '/view_Mace_Purchase/',
//                 '/view_Mace_Dispatched/',
//                 '/view_Mace_Dispatched_Rec/',
//                 '/view_Final_Weigtht_Inspection/',
//                 '/login/',
//                 '/login1/',
//                 '/table/',
//                 '/table001/',
//                 '/add_to_session/',
//                 '/DriedA',
//                 '/DriedB',
//                 '/FloatA',
//                 '/FloatB',
//                 '/Quality',
//                 '/Signin/',
//                 '/api/DriedA/',
//                 '/api/DriedB/',
//                 '/api/FloatA/',
//                 '/api/FloatB/',
//                 '/api/Farmer/',
//                 '/api/Quaility/',
//                 '/api/visit/',
//                 '/api/In-House-Drying/',
//                 '/api/Dispatch-Of-Dried-Nutmeg/',
//                 '/api/Dispatch-Of-Green/',
//                 '/api/Cracking-Summary/',
//                 '/api/Floation-Summary/',
//                 '/api/Package-Ciontrol/',
//                 '/api/Editors/',
//                 '/api/Labour-support/',
//                 '/api/Training-support/',
//                 '/api/Policy/',
//                 '/table1/',
//                 '/table2/',
//                 '/view0DA/',
//                 '/view0DB/',
//                 '/view0FA/',
//                 '/view0FB/',
//                 '/view0QC/',
//                 '/viewIH0/',
//                 '/viewDISD0/',
//                 '/viewDISG0/',
//                 '/viewCRK0/',
//                 '/viewFLT0/',
//                 '/viewPKG0/',
//                 // Add more static URLs as needed
//             ]).then(() => {
//                 // Once all resources are cached, post a message to all clients
//                 self.clients.matchAll().then(clients => {
//                     clients.forEach(client => client.postMessage('Caching complete!'));
//                 });
//             });
//         })
//     );
// });

// self.addEventListener('fetch', (event) => {
//     // Check if the request is for an API (dynamic) or static resource
//     const isDynamicRequest = (request) => {
//         return request.url.includes('/api/');
//     };

//     event.respondWith(
//         (async () => {
//             try {
//                 // For dynamic requests, fetch from the network first
//                 if (isDynamicRequest(event.request)) {
//                     const networkResponse = await fetch(event.request);
//                     // Optionally update the cache with the new response
//                     const cache = await caches.open('gcna-offline-access');
//                     cache.put(event.request, networkResponse.clone());
//                     return networkResponse;
//                 } else {
//                     // For static requests, try the cache first
//                     const cachedResponse = await caches.match(event.request);
//                     return cachedResponse || fetch(event.request);
//                 }
//             } catch (error) {
//                 // If fetch fails, fall back to the cache for dynamic requests
//                 if (isDynamicRequest(event.request)) {
//                     return caches.match(event.request);
//                 }
//                 // For other requests, you can choose to return an error page or handle differently
//             }
//         })()
//     );
// });























// self.addEventListener('install', (event) => {
//     event.waitUntil(
//         caches.open('gcna-offline-access').then((cache) => {
//             return cache.addAll([
//                 '/',
//                 '/adhome',
//                 '/addIH0/',
//                 '/login/',
//                 '/login1/',
//                 '/table/',
//                 '/table001/',
//                 '/add_to_session/',
//                 '/gcna8',
//                 '/gcna9',
//                 '/gcna10',
//                 '/gcna11',
//                 '/gcna12',
//                 '/DriedA',
//                 '/DriedB',
//                 '/FloatA',
//                 '/FloatB',
//                 '/Quality',
//                 '/gcna00_1/',
//                 '/gcna00_2/',
//                 '/gcna00_3/',
//                 '/gcna00_4/',
//                 '/gcna00_5/',
//                 '/gcna00_6/',
//                 '/gcna00_7/',
//                 '/gcna00_8/',
//                 '/gcna00_9/',
//                 '/gcna00_10/',
//                 '/gcna00_11/',
//                 '/gcna00_12/',
//                 '/gcna00_13/',
//                 '/gcna00_14/',
//                 '/gcna00_15/',
//                 '/gcna00_16/',
//                 '/gcna00_17/',
//                 '/gcna00_18/',
//                 '/gcna00_19/',
//                 '/gcna00_20/',
//                 '/gcna00_21/',
//                 '/gcna00_22/',
//                 '/gcna00_23/',
//                 '/gcna00_24/',


//                 '/0gcna00_1/',
//                 '/0gcna00_2/',
//                 '/0gcna00_3/',
//                 '/0gcna00_4/',
//                 '/0gcna00_5/',
//                 '/0gcna00_6/',
//                 '/0gcna00_7/',
//                 '/0gcna00_8/',
//                 '/0gcna00_9/',
//                 '/0gcna00_10/',
//                 '/0gcna00_11/',
//                 '/0gcna00_12/',
//                 '/0gcna00_13/',
//                 '/0gcna00_14/',
//                 '/0gcna00_15/',
//                 '/0gcna00_16/',
//                 '/0gcna00_17/',
//                 '/0gcna00_18/',
//                 '/0gcna00_19/',


                
//                 '/api/DriedA/',
//                 '/api/DriedB/',
//                 '/api/FloatA/',
//                 '/api/FloatB/',
//                 '/api/Farmer/',
//                 '/api/Quaility/',


//                 '/api/visit/',
//                 '/api/In-House-Drying/',
//                 '/api/Dispatch-Of-Dried-Nutmeg/',
//                 '/api/Dispatch-Of-Green/',
//                 '/api/Cracking-Summary/',
//                 '/api/Floation-Summary/',
//                 '/api/Package-Ciontrol/',
//                 '/api/Editors/',
//                 '/api/Labour-support/',
//                 '/api/Training-support/',
//                 '/api/land-info/',
//                 '/api/Land-Tenur/',
//                 '/api/Nutmeg-Trees/',
//                 '/api/Nutmeg-Variety/',
//                 '/api/Other-Crops/',
//                 '/api/Coconut-Trees/',
//                 '/api/Citrus-Mango-Trees/',
//                 '/api/Other-Spices-Trees/',
//                 '/api/Other-Seasoning-Trees/',
//                 '/api/Other-Crops-Cultivated/',
//                 '/api/Condition/',
//                 '/api/Nutmeg-Land/',
//                 '/api/Nutmeg-Frequency/',
//                 '/api/Potential-Risks/',
//                 '/api/Road-Access/',
//                 '/api/Food-Safety-and-Quality/',
//                 '/api/Farm-Water-Source/',
//                 '/api/Farm-House/',
//                 '/api/inspector-symmary/',
//                 '/api/Policy/',


//                 '/view_tablet/',
//                 '/view_tablet2/',
//                 '/view_Visit/',
//                 '/edit_Visit/',
//                 '/table1/',      
//                 '/table2/',  
                
                
//                 '/view0DA/',
//                 '/view0DB/',
//                 '/view0FA/',
//                 '/view0FB/',
//                 '/view0QC/',

//                  'api/Sanitation-A/',
//                  'api/Sanitation-B/',
//                  'api/Sanitation-C/',
//                  'api/Cracking_Schedule/',
//                  'api/Assorting_Log/',
//                  'api/Extractor_Log/',
//                  'api/Fumigation_Log/',
//                  'api/Shelves/',

//                 '/viewIH0/',
//                 '/viewDISD0/',
//                 '/viewDISG0/',
//                 '/viewCRK0/',
//                 '/viewFLT0/',
//                 '/viewPKG0/',
//             ]).then(() => {
//                 // Once all resources are cached, post a message to all clients
//                 self.clients.matchAll().then(clients => {
//                     clients.forEach(client => client.postMessage('Caching complete!'));
//                 });
//             });
//         })
//     );
// });

// self.addEventListener('fetch', (event) => {
//     event.respondWith(
//         // Try to fetch from the network first
//         fetch(event.request).catch(() => {
//             // If the fetch fails (e.g., due to no network), try to get it from the cache
//             return caches.match(event.request);
//         })
//     );
// });





// self.addEventListener('install', (event) => {
//     event.waitUntil(
//         caches.open('gcna-offline-access').then((cache) => {
//             return cache.addAll([
//                 '/',
//                 '/Signin/',
//                 '/table001/',
//                 '/addIH0/',
//                 '/add_Mace_Purchase/',
//                 '/add_Mace_Dispatched/',
//                 '/add_Mace_Dispatched_Rec/',
//                 '/add_Final_Weigtht_Inspection/',
//                 '/add_Vehicle_Inspection/',
//                 '/addDISD0/',
//                 '/add_Dispatch_Of_Dried_Nutmeg_Rec/',
//                 '/addDISG0/',
//                 '/add_Dispatch_Of_Green_Nutmeg_Rec/',
//                 '/addCRK0/',
//                 '/addFLT0/',
//                 '/addPKG0/',
//                 '/viewIH0/',
//                 '/view_Mace_Purchase/',
//                 '/view_Mace_Dispatched/',
//                 '/view_Mace_Dispatched_Rec/',
//                 '/view_Final_Weigtht_Inspection/',
//                 '/view_Vehicle_Inspection/',
//                 '/viewDISD0/',
//                 '/view_Dispatch_Of_Dried_Nutmeg_Rec/',
//                 '/viewDISG0/',
//                 '/view_Dispatch_Of_Green_Nutmeg_Rec/',
//                 '/viewCRK0/',
//                 '/viewFLT0/',
//                 '/viewPKG0/',
//                 '/api/DriedA/',
//                 '/api/DriedB/',
//                 '/api/FloatA/',
//                 '/api/FloatB/',
//                 '/api/Farmer/',
//                 '/api/Quaility/',
//                 '/api/In-House-Drying/',
//                 '/api/Dispatch-Of-Dried-Nutmeg/',
//                 '/api/Dispatch-Of-Green/',
//                 '/api/Cracking-Summary/',
//                 '/api/Floation-Summary/',
//                 '/api/Package-Ciontrol/',
//                 '/api/Editors/',
//                 '/api/Labour-support/',
//                 '/api/Training-support/',
//                 '/api/Policy/'
//             ]).then(() => {
//                 // Notify all clients that caching is complete
//                 self.clients.matchAll().then(clients => {
//                     clients.forEach(client => client.postMessage('Caching complete!'));
//                 });
//             });
//         })
//     );
// });

// self.addEventListener('fetch', (event) => {
//     event.respondWith(
//         fetch(event.request).catch(() => {
//             return caches.match(event.request);
//         })
//     );
// });
















const CACHE_NAME = 'gcna-offline-access-v2'; // Change the version number here

console.log('Triggered');

self.addEventListener('install', (event) => {
    event.waitUntil(
        caches.open(CACHE_NAME).then((cache) => {
            return cache.addAll([
                '/',
                '/gcna00_1/',
                '/gcna00_2/',
                '/gcna00_3/',
                '/gcna00_4/',
                '/gcna00_5/',
                '/gcna00_6/',
                '/gcna00_7/',
                '/gcna00_8/',
                '/gcna00_9/',
                '/gcna00_10/',
                '/gcna00_11/',
                '/gcna00_12/',
                '/gcna00_13/',
                '/gcna00_14/',
                '/gcna00_15/',
                '/gcna00_16/',
                '/gcna00_17/',
                '/gcna00_18/',
                '/gcna00_19/',
                '/gcna00_20/',
                '/gcna00_21/',
                '/gcna00_22/',
                '/gcna00_23/',
                '/gcna00_24/',
                '/Signin/',  
                '/table1/',
                '/table001/',
                '/table/',    
                '/view_Visit/',
                '/view_tablet/',
                '/view_tablet2/'
            ]).then(() => {
                // Once all resources are cached, post a message to all clients
                self.clients.matchAll().then(clients => {
                    clients.forEach(client => client.postMessage('Caching complete!'));
                });
            });
        })
    );
});

self.addEventListener('activate', (event) => {
    const cacheWhitelist = [CACHE_NAME];
    event.waitUntil(
        caches.keys().then((cacheNames) => {
            return Promise.all(
                cacheNames.map((cacheName) => {
                    if (!cacheWhitelist.includes(cacheName)) {
                        console.log(`Deleting old cache: ${cacheName}`);
                        return caches.delete(cacheName);
                    }
                })
            );
        }).then(() => {
            return self.clients.claim();
        })
    );
});

self.addEventListener('fetch', (event) => {
    event.respondWith(
        caches.match(event.request).then((cachedResponse) => {
            const fetchPromise = fetch(event.request).then((networkResponse) => {
                return caches.open(CACHE_NAME).then((cache) => {
                    cache.put(event.request, networkResponse.clone());
                    return networkResponse;
                });
            }).catch(() => {
                // If the fetch fails (e.g., due to no network), return the cached response if available
                return cachedResponse;
            });
            // Return the cached response immediately if available, otherwise wait for the network response
            return cachedResponse || fetchPromise;
        })
    );
});
