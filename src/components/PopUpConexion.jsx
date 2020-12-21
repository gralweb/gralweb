import React from 'react'

const PopUpConexion = ({ active, locacion }) => {
	return (
		(locacion && (locacion === 'contactos')) ?
			<div className={ (active) ? 'app-popup-err active' : 'app-popup-err' }>
				<p>Error en la Conexión al Servidor</p>
			</div>
		:
			<div className='app-main-loader'>
				<div className={ (active) ? 'app-popup-err active' : 'app-popup-err' }>
					<p>Error en la Conexión al Servidor</p>
					<p><span><i className='icofont-crying'></i></span></p>
				</div>
			</div>
	)
}

export default PopUpConexion
