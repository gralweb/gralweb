import React, { useState, useEffect } from 'react';

// Componentes
import LoaderApp from './../../components/LoaderApp';
import FetchPortafolioCarts from './FetchPortafolioCarts';
import RenderPortafolioData from './RenderPortafolioData';

const RenderPortafolio = ({ headerLocation }) => {
	const [ scaleAnim, setScaleAnim ] = useState(false);
	const [ portafolioData, setPortafolioData ] = useState(null);

	useEffect(() => {
		setScaleAnim(true)
		
		headerLocation.portafolio()

		if ( portafolioData === null ) {
			FetchPortafolioCarts().then(r => {
				const { datos } = r
				
				setPortafolioData(datos)
			})
		}

	}, [ setScaleAnim, headerLocation, portafolioData, setPortafolioData ]);

	return (
		portafolioData ?
		<div className='app-main-cont'>
			{
				RenderPortafolioData( portafolioData, scaleAnim )
			}
		</div> :
		LoaderApp()
	);
}

export default RenderPortafolio;
