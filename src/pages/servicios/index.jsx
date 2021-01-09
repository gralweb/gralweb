import React, { useState, useEffect } from 'react';

// Componentes
import LoaderApp from './../../components/LoaderApp';

import FetchServicios from './FetchServicios';
import RenderServiciosData from './RenderServiciosData';

const RenderServicios = ({ headerLocation }) => {
	const [scaleAnim, setScaleAnim] = useState(false);
	const [serviciosCarts, setServiciosCarts] = useState(null);

	useEffect(() => {
		setScaleAnim(true);

		document.title = `${document.title.slice(0, 9)} Servicios`
		headerLocation.servicios()

		setServiciosCarts(FetchServicios);
	}, [setScaleAnim, headerLocation, setServiciosCarts])

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
