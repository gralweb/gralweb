// Dependecias
import React, { useState } from 'react'
import { BrowserRouter as Router } from 'react-router-dom'

// Components Principales
import Header from './components/header/Header'
import Main from './components/main/Main'
import Routing from './components/Routing'
import Footer from './components/footer/Footer'
// Float BTN
import FloatBtnContent from './components/floatBtn/FloatBtnContent'
import FloatBtn from './components/floatBtn/FloatBtn'

// Styles
import './dependencias/icofont.min.css'
import './Gralweb.css'

const Gralweb = () => {
	const [headerLocation, setHeaderLocation] = useState('Portafolio')
	const [menuOpen, setMenuOpen] = useState(false)
	const [themeClaro, setTheme] = useState(true)
	const [newLetters, setNewLetters] = useState(false)

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

	const handleTheme = () => {
		setTheme(!themeClaro)
	}

	const handleNewLetters = () => {
		setNewLetters(!newLetters)
		console.log('handleNewLetters')
	}

	return (
		<section>
			<Router>

				<Header
					location={ headerLocation }
					menuOpen={ menuOpen }
					onClick={ () => handleClickHeader() }
					tema={ themeClaro }
				>
				</Header>

				<Main>
					<Routing handleLocationHeader={ handleUpdateHeaderLocation } />
				</Main>

				<FloatBtnContent>
					<FloatBtn type='theme' tema={ themeClaro } handleClick={ handleTheme } />
					<FloatBtn type='newLetters' tema={ themeClaro } handleClick={ handleNewLetters } />	
				</FloatBtnContent>

				<Footer/>

			</Router>			
		</section>
	)	
}

export default Gralweb
