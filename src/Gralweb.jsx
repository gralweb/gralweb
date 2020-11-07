// Dependecias
import React, { Component } from 'react';

// Components Principales
import Header from './componentes/header/Header';
import Main from './componentes/Main';
import Footer from './componentes/footer/Footer';

// Componentes - Pages
import FetchPortafolioCarts from './componentes/pages/portafolio/FetchPortafolioCarts';
import RenderPortafolioCarts from './componentes/pages/portafolio/RenderPortafolioCarts';

// Styles
import './dependencias/icofont.min.css'
import './Gralweb.css';

class Gralweb extends Component {

	constructor(props) {
		super(props);

		this.state = {
			headerLocation: "Portafolio",
			scaleAnim: false,
			hiddenLoader: false,
			portafolioCarts: []
		}
	}

	componentDidMount() {
		setTimeout(() => {
			this.setState({
				hiddenLoader: true,
				scaleAnim: true,
				portafolioCarts: FetchPortafolioCarts()
			});
		}, 500);
	}

	render () {
		return (
			<section>
				<Header headerLocation={ this.state.headerLocation } />

				<Main hiddenLoader={ this.state.hiddenLoader ? 'process' : null } >
					{
						this.state.hiddenLoader
						&&
						RenderPortafolioCarts(this.state.portafolioCarts, this.state.scaleAnim)
					}
				</Main>
			
				<Footer/>
			</section>
		);
	}
}

export default Gralweb;
