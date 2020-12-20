const AppCacheDev = 'gralweb_dev-v1'
const AppCachePages = 'gralweb_Pages-v1'
const AppCacheImg = 'gralweb_Img-v1'

const ObjCachesDev = [
    '/static/js/2.0551e411.chunk.js',
    '/static/js/2.0551e411.chunk.js.LICENSE.txt',
    '/static/js/main.d5218a43.chunk.js',
    '/static/js/runtime-main.733f0a18.js',
    '/static/css/main.16015a36.chunk.css',
    '/static/media/icofont.50a4ab76.woff2',
    '/static/media/icofont.f6ab04ae.woff'
]

const ObjCachesPages = [
    '/portafolio',
    '/contactos',
    '/services',
    '/bio',
    '/index.html'
]

const ObjCachesImg = [
    '/logo/gral_rojo.png',
    '/logo/face.jpg',
    '/logo/pwa/24x24.png',
    '/logo/pwa/512x512.png'
]

this.addEventListener('install', event => {
    event.waitUntil(
        caches.open(AppCacheDev).then(cache => {
            cache.addAll(ObjCachesDev)
        })
    )
})

this.addEventListener('install', event => {
    event.waitUntil(
        caches.open(AppCachePages).then(cache => {
            cache.addAll(ObjCachesPages)
        })
    )
})

this.addEventListener('install', event => {
    event.waitUntil(
        caches.open(AppCacheImg).then(cache => {
            cache.addAll(ObjCachesImg)
        })
    )
})

this.addEventListener('fetch', event => {
    // if (!navigator.onLine) {
        event.respondWith(
            caches.match(event.request).then(resp => {
                if (resp) {
                    return resp
                } else {
                    return fetch(event.request)
                }
            })
        )
    // }
})
