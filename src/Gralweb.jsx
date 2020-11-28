// Dependecias
import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

// Components Principales
import Header from './components/header/Header';
import Main from './components/main/Main';
import Routing from './components/Routing';
import Footer from './components/footer/Footer';

// Styles
import './dependencias/icofont.min.css'
import './Gralweb.css';

class Gralweb extends Component {

	constructor(props) {
		super(props);

		this.state = {
			headerLocation: 'Portafolio',
			menuOpen: false
		}
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

	render () {
		const { headerLocation, menuOpen } = this.state

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
						<Routing handleLocationHeader={ () => this.handleUpdateHeaderLocation() } />
					</Main>
					<Footer/>

				</Router>			
			</section>
		);
	}
}

export default Gralweb;
