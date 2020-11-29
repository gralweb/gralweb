// Dependecias
import React, { useState } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

// Components Principales
import Header from './components/header/Header';
import Main from './components/main/Main';
import Routing from './components/Routing';
import Footer from './components/footer/Footer';

// Styles
import './dependencias/icofont.min.css'
import './Gralweb.css';

const Gralweb = () => {
	const [headerLocation, setHeaderLocation] = useState('Portafolio')
	const [menuOpen, setMenuOpen] = useState(false)

	// Funciones de Handle
	const handleUpdateHeaderLocation = {
		portafolio: () => setHeaderLocation('Portafolio'),
		servicios: () => setHeaderLocation('DevWeb'),
		contactos: () => setHeaderLocation('Contactos'),
		bio: () => setHeaderLocation('Bio')
	}

	const handleClickHeader = () => {
		setMenuOpen(!menuOpen)
	}

	return (
		<section>
			<Router>

				<Header
					location={ headerLocation }
					menuOpen={ menuOpen }
					onClick={ () => handleClickHeader() }
				>
				</Header>

				<Main>
					<Routing handleLocationHeader={ handleUpdateHeaderLocation } />
				</Main>
				<Footer/>

			</Router>			
		</section>
	);	
}

export default Gralweb;
