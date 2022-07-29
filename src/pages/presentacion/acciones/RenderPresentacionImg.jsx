import React from 'react'

// Componentes
import { ASSETS_URL } from './../../../components/constans'

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

const PresentacionImg = ({ scaleAnim, img, titulo, handleZoom }) => (
	<div
		className={`app-cont-item app-vista ${ scaleAnim }`}
		onClick={ e => presentacionImgZoom(e.currentTarget, handleZoom) }
	>

		<figure className='app-item-img app-vista-foto'>
			<img src={ `${ ASSETS_URL }/assets/${ img }` } alt={ titulo } title={ titulo } />
		</figure>
		<figcaption className='app-vista-zoom'>
			<div className='app-zoom'>
				<i className='icofont-optic'></i>
			</div>
		</figcaption>
	</div>
)

const RenderPresentacionImg = ( fotos, titulo, scaleAnim, handleOpenZoom ) => (
	fotos.map((img, index) => (
		<PresentacionImg 
			key={ index }
			scaleAnim={ scaleAnim }
			img={ img }
			titulo={ titulo }
			handleZoom={ handleOpenZoom }
		/>
	))
)

export default RenderPresentacionImg
