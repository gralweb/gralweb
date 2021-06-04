import React from 'react'

// Componentes
import PortafolioCart from './PortafolioCart'

const RenderPortafolioData = ( portafolioData, scaleAnim ) => (
	portafolioData.map((cart, index) => (
		<PortafolioCart
			key={ cart.id }
			titulo={ cart.titulo }
			img={ cart.foto }
			scaleAnim={ scaleAnim ? 'app-cont-item-scale' : null }
		/>
	))
)

export default RenderPortafolioData
