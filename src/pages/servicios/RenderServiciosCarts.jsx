import React from 'react';

// Componentes
import DevWeb from './index';

const RenderServiciosCarts = ( servicios, scaleAnim ) => {
	return (
		servicios.map((serv, index) => {
			return (
				<DevWeb
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
			)
		})
	);
}

export default RenderServiciosCarts;
