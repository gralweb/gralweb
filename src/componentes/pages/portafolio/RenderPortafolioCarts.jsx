import React from 'react';

// Componentes
import Portafolio from './index';

const RenderPortafolioCarts = ( carts, scaleAnim ) => {
	return (
		carts.map((cart, index) => {
			return (
				<Portafolio
					key={ cart.id }
					titulo={ cart.titulo }
					img={ cart.foto }
					scaleAnim={ scaleAnim ? 'app-cont-item-scale' : null }
				/>
			)
		})
	);
}

export default RenderPortafolioCarts;
