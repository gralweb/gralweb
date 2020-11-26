import React from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';

// Importar Componentes - Pages para hacer el Routing
import RenderPortafolio from './../pages/portafolio';
import RenderServicios from './../pages/servicios';
import RenderContactos from './../pages/contactos';
import RenderBiografia from './../pages/biografia';

const Routing = () => {
	return (
		<Switch>
			<Redirect 
				exact
				from='/'
				to='/portafolio'
			/>
			<Route
				exact
				path='/portafolio'
				component={RenderPortafolio}
			/>
			<Route
				exact
				path='/services'
				component={RenderServicios}
			/>
			<Route
				exact
				path='/contactos'
				component={RenderContactos}
			/>
			<Route
				exact
				path='/bio'
				component={RenderBiografia}
			/>
			<Route
				exact
				path='/portafolio/:name'
				render={ routeProps => console.log(routeProps.match.params) }
			/>
		</Switch>
	);
}

export default Routing;
