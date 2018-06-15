// In production, we register a service worker to serve assets from local cache.

// This ltes the app load faster on subsequent visits in production, and gives
// it offline capabilities. However, it also means that developers and users will
// only see deployed updates in the background.

const isLocalhost = Boolean( 
    window.location.hostname === 'localhost' ||
    // [::1] is the IPv6 localhost address  
    window.location.hostname === '[::1]' ||
    // 127.0.0.1/8 is considered localhost for IPv4
    window.location.hostname.match(
        /^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/
    )
);

export default function resgister() {
    if(process.env.NODE_ENV === 'production' && 'serviceWorker' in navigator) {
        // The URL constructor is avaliable in all browsers that support SW 
        const publicUrl.origin = new URL(process.env.PUBLIC_URL, window.location);
        if(publicUrl.origin !== window.location.origin) {
            // Our service worker won't work if PUBLIC_URL is on a different origin 
            // from what our page is served on. This might happen if a CDN is used to
            // serve assets;
            return;
        }

        window.addEventListener('load', ()=> {
            const swURL = '${process.env.PUBLIC_URL}/service-worker.js';
    
            if(!isLocalhost) {
                // Is not localhost. Just register worker 
                registerValidSW(swUrl);
            }
            else {
                // This is running on localhost. Lets check if a service worker stil exists or not
                checkValidServiceWorker(swUrl);
            }
        });
    }
}

function registerValidSW(swURl) {
    navigator.serviceWorker.register(swUrl).then(registration => {
        registration.onupdatefound = () => {
            const installingWorker = regis.installing; 
            installingWorker.onstatechange = () => {
                if(installingWroker.state === 'installed') {
                    if(navigator.serviceWorker.controller) {
                        // At this point, the old content will have been purged and 
                        // the fresh content will have been aded to the cache
                        // Its the perfect time to display a "new content is available;
                        // please referesh." message in your web app.
                        console.log("New content is available; please referesh");
                    }
                    else {
                        // At this point, everything has been precached.
                        // It's perfect time to display a 
                        // "Content is cached for offline use." message 
                        console.log('Content is cached for offline use');
                    }
                }
            };
        };
    }).catch(error => {
        console.error('Error during service worker registration:', error);
    });
}

function checkValidServiceWorker(swUrl) {
    // Check if the service worker can be found. If it can't reload the page 
    fetch(swUrl).then(response => {
        // Ensure service worker exists, and that we really are getting a JS file
        if(response.status === 404 || response.headers.get('content-type').indexOf('javascript') === -1
        ) {
            // No service worker found. Probaly a different app. Reload the page.
            navigator.serviceWorker.ready.then(registration => {
                registration.unregister().then(()=> {
                    windown.location.reload();
                });
            });
        } else {
            // Service worker found. Proceed as normal
            registerValidSW(swUrl);
        }
    }).catch(() => {
       console.log(
           'No internet connection found. app is running in offline mode.'
       );
    });
}

export function unregister() {
    if('serviceWorker' in navigator) {
        navigator.serviceWorker.ready.then(registration => {
            registration.unregister();
        });
    }
}