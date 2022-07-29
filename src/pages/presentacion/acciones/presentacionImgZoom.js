const presentacionImgZoom = (img, handleZoom) => {
	handleZoom()

	const zoomClase = 'zoom'
	const zoomElement = document.querySelectorAll(`.${zoomClase}`)
	const zoomContent = document.querySelector('.app-zoom-foto img').attributes.src
	const imgSrcValue = img.children[0].children[0].attributes.src.value

	if (zoomElement) {
		for (let i = 0; i < zoomElement.length; i++) {
			zoomElement[i].classList.remove(zoomClase)
		}
	}
	zoomContent.value = imgSrcValue
}

export default presentacionImgZoom