import React from 'react';

// Componentes
import PortafolioCart from './PortafolioCart';

const RenderPortafolioData = ( portafolioData, scaleAnim ) => {
	return (
		portafolioData.map((cart, index) => {
			return (
				<PortafolioCart
					key={ cart.id }
					titulo={ cart.titulo }
					img={ cart.foto }
					scaleAnim={ scaleAnim ? 'app-cont-item-scale' : null }
				/>
			)
		})
	);
}

export default RenderPortafolioData;
