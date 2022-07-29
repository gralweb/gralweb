import React from 'react'

// Componentes
import PresentacionImg from './PresentacionImg'

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
