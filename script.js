// LIGHTBOX FUNKTIONALITÄT

const lightbox = document.createElement('div')
lightbox.id = 'lightbox'
document.body.appendChild(lightbox)

// ÖFFNEN BILDER LINKS
const lbbilderL = document.querySelectorAll('.lbildL')
lbbilderL.forEach(image => {
 image.addEventListener('click', e => {
 	lightbox.classList.add('aktiv')
 	const img = document.createElement('img')
 	img.src = image.src
 	while (lightbox.firstChild) {
 		lightbox.removeChild(lightbox.firstChild)
 	}
 	lightbox.appendChild(img)
 })
})

// ÖFFNEN BILDER RECHTS
const lbbilderR = document.querySelectorAll('.lbildR')
lbbilderR.forEach(image => {
 image.addEventListener('click', e => {
 	lightbox.classList.add('aktiv')
 	const img = document.createElement('img')
 	img.src = image.src
 	while (lightbox.firstChild) {
 		lightbox.removeChild(lightbox.firstChild)
 	}
 	lightbox.appendChild(img)
 })
})

// SCHLIEßEN -> AUS LISTE ENTFERNEN
lightbox.addEventListener('click',e => {
//	if (e.target !== e.currentTarget) return
	lightbox.classList.remove('aktiv')
}
	)