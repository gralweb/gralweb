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
// New Letters
// import NewLetter from './components/newLetter/NewLetter'

// Styles
import './dependencias/icofont.min.css'
import './dependencias/Gralweb.css'
// Themes
import './dependencias/themeClaro.css'
import './dependencias/themeOscuro.css'

const Gralweb = () => {
	const [headerLocation, setHeaderLocation] = useState('Portafolio')
	const [menuOpen, setMenuOpen] = useState(false)
	const [themeClaro, setTheme] = useState((localStorage.getItem('theme') !== null) ? JSON.parse(localStorage.getItem('theme')) : true)
	// const [newLettersOpen, setNewLettersOpen] = useState(false)

	// Funciones de Handle
	const handleUpdateHeaderLocation = {
		portafolio: () => setHeaderLocation('Portafolio'),
		servicios: () => setHeaderLocation('DevWeb'),
		contactos: () => setHeaderLocation('Contactos'),
		bio: () => setHeaderLocation('Bío')
	}

	const handleClickHeader = () => {
		setMenuOpen(!menuOpen)
	}

	const handleTheme = () => {
		localStorage.setItem('theme', JSON.stringify(!themeClaro))
		setTheme(!themeClaro)
	}

	// const handleNewLetters = () => {
	// 	setNewLettersOpen(!newLettersOpen)
	// }

	return (
		<section>
			<Router>

				<Header
					location={ headerLocation }
					menuOpen={ menuOpen }
					tema={ themeClaro }
					onClick={ () => handleClickHeader() }
				>
				</Header>

				<Main>
					<Routing handleLocationHeader={ handleUpdateHeaderLocation } />
				</Main>

				<FloatBtnContent>
					<FloatBtn type='theme' handleClick={ handleTheme } titulo='Cambiar Tema' />
					{/*<FloatBtn type='newLetters' handleClick={ handleNewLetters } />	*/}
				</FloatBtnContent>

				{/*<NewLetter newLettersOpen={ newLettersOpen } />*/}

				<Footer tema={ themeClaro } />

			</Router>			
		</section>
	)	
}

export default Gralweb
