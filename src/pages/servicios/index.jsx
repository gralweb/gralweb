import React, { Component } from 'react';

// Componentes
import ServiciosCart from './ServiciosCart';
import FetchServicios from './FetchServicios';

class RenderServicios extends Component {

	constructor(props) {
		super(props);

		this.state = {
			scaleAnim: false,
			serviciosCarts: null
		}
	}

	LoaderApp = () => {
		return (
			<div className='app-main-loader' >
			    <div id='app-main-loader' className='app-form-btn-load process'></div>
			</div>
		);
	}

	RenderServiciosData = ( serviciosCarts, scaleAnim ) => {
		return (
			serviciosCarts.map((serv, index) => {
				return (
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
				)
			})
		)
	}

	handleUpdateServicios = () => {
		this.setState({
			scaleAnim: true,
			serviciosCarts: FetchServicios
		})
	}

	comprobarDatos = () => {
		const { serviciosCarts, scaleAnim } = this.state

		return (
			serviciosCarts ?
			<div className='app-main-cont'>
				{
					this.RenderServiciosData( serviciosCarts, scaleAnim )
				}
			</div> :
			this.LoaderApp()

		);
	}

	componentDidMount() {
		this.handleUpdateServicios()
	}

	render () {
		return (
			this.comprobarDatos()
		);
	}
}

export default RenderServicios;
