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
			}).catch(r => {
				let datos = [{"id":"9","titulo":"tapagas","foto":"8.jpg"},{"id":"8","titulo":"samurai","foto":"7.jpg"},{"id":"7","titulo":"anonymous","foto":"9.jpg"},{"id":"6","titulo":"masters","foto":"5.png"}]
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
