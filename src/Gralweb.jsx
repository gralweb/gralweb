// Dependecias
import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

// Components Principales
import Header from './components/header/Header';
import Main from './components/main/Main';
import Routing from './components/Routing';
import Footer from './components/footer/Footer';

// Componentes - Pages
// Portafolio Page
// import FetchPortafolioCarts from './pages/portafolio/FetchPortafolioCarts';
// import RenderPortafolioCarts from './pages/portafolio/RenderPortafolioCarts';

// DevWeb Page
// import FetchServicios from './pages/servicios/FetchServicios';
// import RenderServiciosCarts from './pages/servicios/RenderServiciosCarts';

// Contactos Page
// import ContactForm from './pages/contactos'

// Bio Page
// import RenderBiografiaData from './pages/biografia';

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

	// Funciones de Handle
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

	// handleUpdatePortafolio = () => {
		// FetchPortafolioCarts()

		// if (this.state.portafolioCarts === null) {
		// 	const fetching = FetchPortafolioCarts()

		// 	fetching.then(r => {
		// 		const { datos } = r 

		// 		this.setState({
		// 			scaleAnim: true,
		// 			portafolioCarts: datos
		// 		})
		// 	})			
		// } else {
		// 	return;
		// }
	// }

	// Funciones de Render
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

	// RenderBiografia = () => {
	// 	return (
	// 		<div className='app-main-cont'>
	// 			{
	// 				RenderBiografiaData()
	// 			}
	// 		</div>
	// 	);
	// }

	// componentDidMount() {
		// FetchPortafolioCarts()
		// this.handleUpdateServicios()
	// }

	render () {
		const { 
			portafolioCarts,
			serviciosCarts,
			scaleAnim,
			headerLocation,
			menuOpen } = this.state

		return (
			<section>
				<Router>

					<Header
						headerLocation={ headerLocation }
						menuOpen={ menuOpen }
						onClick={ () => this.handleClickHeader() }
					>
					</Header>

					<Main>
						<Routing />
					</Main>
					<Footer/>

				</Router>			
			</section>
		);
	}
}

export default Gralweb;
