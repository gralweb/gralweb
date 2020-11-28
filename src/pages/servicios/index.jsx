import React, { useState, useEffect } from 'react';

// Componentes
import LoaderApp from './../../components/LoaderApp';

import FetchServicios from './FetchServicios';
import RenderServiciosData from './RenderServiciosData';

const RenderServicios = () => {
	const [scaleAnim, setScaleAnim] = useState(false);
	const [serviciosCarts, setServiciosCarts] = useState(null);

	useEffect(() => {
		setScaleAnim(true);
		setServiciosCarts(FetchServicios);
	}, [setScaleAnim, setServiciosCarts])

	return (
		serviciosCarts ?
		<div className='app-main-cont'>
			{
				RenderServiciosData( serviciosCarts, scaleAnim )
			}
		</div> :
		LoaderApp()
	);
}

export default RenderServicios;
