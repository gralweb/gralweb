import React, { useState, useEffect } from 'react';

// Componentes
import PortafolioCart from './PortafolioCart';
import FetchPortafolioCarts from './FetchPortafolioCarts';

const RenderPortafolio = () => {
	const [ scaleAnim, setScaleAnim ] = useState(false);
	const [ portafolioData, setPortafolioData ] = useState(null);

	useEffect(() => {
		setScaleAnim(true)
	}, [ setScaleAnim ]);

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

export default RenderPortafolio;
