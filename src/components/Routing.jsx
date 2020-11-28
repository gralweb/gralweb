import React from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';

// Importar Componentes - Pages para hacer el Routing
import RenderPortafolio from './../pages/portafolio';
import RenderServicios from './../pages/servicios';
import RenderContactos from './../pages/contactos';
import RenderBiografia from './../pages/biografia';
import RenderPresentacion from './../pages/presentacion';

const Routing = ({ handleLocationHeader }) => {
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
				render={ () => <RenderPortafolio headerLocation={ handleLocationHeader } /> }
			/>
			<Route
				exact
				path='/services'
				render={ () => <RenderServicios headerLocation={ handleLocationHeader } /> }
			/>
			<Route
				exact
				path='/contactos'
				render={ () => <RenderContactos headerLocation={ handleLocationHeader } /> }
			/>
			<Route
				exact
				path='/bio'
				render={ () => <RenderBiografia headerLocation={ handleLocationHeader } /> }
			/>
			<Route
				exact
				path='/portafolio/:name'
				render={ routeProps => <RenderPresentacion nameCart={ routeProps.match.params.name } /> }
			/>
		</Switch>
	);
}

export default Routing;
