import React from 'react'

// Componentes
import ServiciosCart from './ServiciosCart'

const RenderServiciosData = ( serviciosCarts, scaleAnim ) => (
	serviciosCarts.map((serv, index) => (
		<ServiciosCart
			scaleAnim={ scaleAnim ? 'app-cont-item-scale' : null }
			key={ serv.plan }
			plan={ serv.plan }
			estilo={ serv.estilo }
			precio={ serv.precio }
			serUno={ serv.ser_1 }
			serDos={ serv.ser_2 }
			serTres={ serv.ser_3 }
			serCuatro={ serv.ser_4 }
			serCinco={ serv.ser_5}
		/>
	))
)

export default RenderServiciosData
