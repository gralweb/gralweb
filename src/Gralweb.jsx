// Dependecias
import React, { Component } from 'react';

// Components Principales
import Header from './componentes/header/Header';
import Main from './componentes/main/Main';
import Footer from './componentes/footer/Footer';

// Componentes - Pages
// Portafolio Page
import FetchPortafolioCarts from './componentes/pages/portafolio/FetchPortafolioCarts';
import RenderPortafolioCarts from './componentes/pages/portafolio/RenderPortafolioCarts';

// Styles
import './dependencias/icofont.min.css'
import './Gralweb.css';

class Gralweb extends Component {

	constructor(props) {
		super(props);

		this.state = {
			headerLocation: 'Portafolio',
			scaleAnim: false,
			portafolioCarts: null,
			menuOpen: false
		}
	}

	LoaderApp = () => {
		return (
			<div className='app-main-loader' >
			    <div id='app-main-loader' className='app-form-btn-load process'></div>
			</div>
		)
	}

	handleClickHeader = () => {
		this.setState({
			menuOpen: !this.state.menuOpen
		})
	}

	handleUpdateCarts = () => {
		if (this.state.portafolioCarts === null) {
			const fetching = FetchPortafolioCarts()

			fetching.then(r => {
				const { datos } = r 

				this.setState({
					scaleAnim: true,
					portafolioCarts: datos
				})
			})			
		} else {
			return;
		}
	}

	RenderPortafolio = (Carts, scaleAnim) => {
		return (
			Carts ?
			<div className='app-main-cont'>
				{
					RenderPortafolioCarts( Carts, scaleAnim )
				}
			</div> :
			this.LoaderApp()
		)
	}

	componentDidMount() {
		this.handleUpdateCarts()
	}

	render () {
		const { portafolioCarts, scaleAnim, headerLocation, menuOpen } = this.state

		return (
			<section>
				<Header
						headerLocation={ headerLocation }
						menuOpen={ menuOpen }
						onClick={ () => this.handleClickHeader() }
				/>

				<Main>
					{
						this.RenderPortafolio(portafolioCarts, scaleAnim)
					}
				</Main>
			
				<Footer/>
			</section>
		);
	}
}

export default Gralweb;
