import React from 'react'

const PopUpConexion = ({ active, locacion }) => {
	const message = 'Error en la Conexión al Servidor'
	
	return (
		(locacion && (locacion === 'contactos')) ?
		<div className={ `app-popup-err ${(active) ? 'active' : ''}` }>
			<p>{ message }</p>
		</div>
	:
		<div className='app-main-loader'>
			<div className={ `app-popup-err ${(active) ? 'active' : ''}` }>
				<p>{ message }</p>
				<p><span><i className='icofont-crying'></i></span></p>
			</div>
		</div>
	)
}

export default PopUpConexion
