// Dependecias
import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';

// Components Principales
import Header from './components/header/Header';
import Main from './components/main/Main';
import Footer from './components/footer/Footer';

// Componentes - Pages
// Portafolio Page
import FetchPortafolioCarts from './pages/portafolio/FetchPortafolioCarts';
import RenderPortafolioCarts from './pages/portafolio/RenderPortafolioCarts';

// DevWeb Page
import FetchServicios from './pages/servicios/FetchServicios';
import RenderServiciosCarts from './pages/servicios/RenderServiciosCarts';

// Contactos Page
import ContactForm from './pages/contactos/index'

// Bio Page
import RenderBiografiaData from './pages/biografia/index';

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
			// portafolioCarts: null,
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

	handleUpdateServicios = () => {
		this.setState({
			scaleAnim: true,
			serviciosCarts: FetchServicios
		})
	}

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
	RenderPortafolio = (Carts, scaleAnim) => {
		return (
			Carts ?
			<div className='app-main-cont'>
				{
					RenderPortafolioCarts( Carts, scaleAnim )
				}
			</div> :
			this.LoaderApp()
		);
	}

	RenderServicios = (Carts, scaleAnim) => {
		return (
			Carts ?
			<div className='app-main-cont'>
				{
					RenderServiciosCarts( Carts, scaleAnim )
				}
			</div> :
			this.LoaderApp()
		);
	}

	RenderBiografia = () => {
		return (
			<div className='app-main-cont'>
				{
					RenderBiografiaData()
				}
			</div>
		);
	}

	componentDidMount() {
		FetchPortafolioCarts()
	// 	this.handleUpdateServicios()
	}

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

						<div className={ menuOpen ? 'app-nav-menu opened' : 'app-nav-menu' } >
				            <ul className='app-menu-list'>
				                <li className='app-list-item' onClick={ () => this.handleClickHeader() }>
				                    <Link to='/'>Portafolio</Link>
				                </li>
				                <li className='app-list-item' onClick={ () => this.handleClickHeader() }>
				                    <Link to='/services'>Desarrollo Web</Link>
				                </li>
				                <li className='app-list-item' onClick={ () => this.handleClickHeader() }>
				                    <Link to='/contactos'>Contactos</Link>
				                </li>
				                <li className='app-list-item' onClick={ () => this.handleClickHeader() }>
				                    <Link to='/bio'>Bio</Link>
				                </li>
				            </ul>
				        </div>

					</Header>

					<Main>
						<Switch>
							<Route
								exact
								path='/'
								render={ () => this.RenderPortafolio(portafolioCarts, scaleAnim) }
							/>
							<Route
								exact
								path='/services'
								render={ () => this.RenderServicios(serviciosCarts, scaleAnim) }
							/>
							<Route
								exact
								path='/contactos'
								render={ () => ContactForm() }
							/>
							<Route
								exact
								path='/bio'
								render={ () => this.RenderBiografia() }
							/>
							<Route
								exact
								path='/portafolio/:name'
								render={ () => <h1> Ficha Descriptiva </h1> }
							/>

						</Switch>
					</Main>
					
				</Router>
			
				<Footer/>
			</section>
		);
	}
}

export default Gralweb;
