// Dependecias
import React, { Component } from 'react';

// Components Principales
import Header from './componentes/header/Header';
import Main from './componentes/main/Main';
import Footer from './componentes/footer/Footer';

// Componentes - Pages
// Portafolio Page
// import FetchPortafolioCarts from './componentes/pages/portafolio/FetchPortafolioCarts';
// import RenderPortafolioCarts from './componentes/pages/portafolio/RenderPortafolioCarts';

// DevWeb Page
// import FetchServicios from './componentes/pages/servicios/FetchServicios';
// import RenderServiciosCarts from './componentes/pages/servicios/RenderServiciosCarts';

// Contactos Page
import ContactForm from './componentes/pages/contactos/index'

// Bio Page
// import RenderBiografiaData from './componentes/pages/biografia/index';

// Styles
import './dependencias/icofont.min.css'
import './Gralweb.css';

class Gralweb extends Component {

	constructor(props) {
		super(props);

		this.state = {
			headerLocation: 'Portafolio',
			menuOpen: false,
			scaleAnim: false,
			portafolioCarts: null,
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

	handleClickHeader = () => {
		this.setState({
			menuOpen: !this.state.menuOpen
		})
	}

	handleUpdateHeaderLocation = locacion => {
		this.setState({
			headerLocation: locacion
		})
	}

	// handleUpdateServicios = () => {
	// 	this.setState({
	// 		scaleAnim: true,
	// 		serviciosCarts: FetchServicios
	// 	})
	// }

	// RenderServicios = (Carts, scaleAnim) => {
	// 	return (
	// 		Carts ?
	// 		<div className='app-main-cont'>
	// 			{
	// 				RenderServiciosCarts( Carts, scaleAnim )
	// 			}
	// 		</div> :
	// 		this.LoaderApp()
	// 	);
	// }

	// handleUpdatePortafolio = () => {
	// 	if (this.state.portafolioCarts === null) {
	// 		const fetching = FetchPortafolioCarts()

	// 		fetching.then(r => {
	// 			const { datos } = r 

	// 			this.setState({
	// 				scaleAnim: true,
	// 				portafolioCarts: datos
	// 			})
	// 		})			
	// 	} else {
	// 		return;
	// 	}
	// }

	// RenderPortafolio = (Carts, scaleAnim) => {
	// 	return (
	// 		Carts ?
	// 		<div className='app-main-cont'>
	// 			{
	// 				RenderPortafolioCarts( Carts, scaleAnim )
	// 			}
	// 		</div> :
	// 		this.LoaderApp()
	// 	);
	// }

	// RenderBiografia = () => {
	// 	return (
	// 		<div className='app-main-cont'>
	// 			{
	// 				RenderBiografiaData()
	// 			}
	// 		</div>
	// 	);
	// }

	componentDidMount() {
		// this.handleUpdateCarts()
		setTimeout(() => {
			// this.handleUpdateServicios()
			this.handleUpdateHeaderLocation('Contactos')
		}, 500)
	}

	// this.RenderPortafolio(portafolioCarts, scaleAnim)
	// this.RenderServicios(serviciosCarts, scaleAnim)
	// this.RenderBiografia()

	render () {
		const { serviciosCarts, scaleAnim, headerLocation, menuOpen } = this.state

		return (
			<section>
				<Header
						headerLocation={ headerLocation }
						menuOpen={ menuOpen }
						onClick={ () => this.handleClickHeader() }
				/>

				<Main>
					{ 
						ContactForm()
					}
				</Main>
			
				<Footer/>
			</section>
		);
	}
}

export default Gralweb;
