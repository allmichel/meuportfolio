var staticCacheName = "pwa_dice";

const filesToCache = [
    'custom.css',
    'main.js',
    'assets/certificados/Allan Michel Rocha dos Santos - Curso Bootstrap5_ crie uma landing page responsiva - Alura_page-0001.jpg',
    'assets/certificados/certificados_js.jpg',
    'assets/certificados/certificados_requisitos.jpg',
    'assets/certificados/git.jpg',
    'assets/certificados/python.jpg',
    'assets/certificados/scrum.jpg'
];
 
self.addEventListener("install", function (e) {
	e.waitUntil(
		caches.open(staticCacheName).then(function (cache) {
			// return cache.addAll(["/"]);
			console.log('ios');
			return cache.addAll(filesToCache);
		})
	);
});
 
self.addEventListener("fetch", function (event) {
	console.log(event.request.url);
 
	event.respondWith(
		caches.match(event.request).then(function (response) {
			return response || fetch(event.request);
		})
	);
});