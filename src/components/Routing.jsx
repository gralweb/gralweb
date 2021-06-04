import React from 'react'
import { Route, Redirect, Switch } from 'react-router-dom'

// Importar Componentes - Pages para hacer el Routing
import RenderPortafolio from './../pages/portafolio'
import RenderServicios from './../pages/servicios'
import RenderContactos from './../pages/contactos'
import RenderBiografia from './../pages/biografia'
import RenderPresentacion from './../pages/presentacion'

const Routing = ({ handleLocationHeader }) => (
	<Switch>
		<Redirect 
			exact
			from='/'
			to='/portafolio'
		/>
		<Route
			exact
			path='/portafolio'
			render={ () => <RenderPortafolio headerLocation={handleLocationHeader} pageTarget='1' /> }
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
		<Route
			exact
			path='/portafolio/page/:page'
			render={ 
				routeProps => (
					<RenderPortafolio
						headerLocation={ handleLocationHeader } 
						pageTarget={ routeProps.match.params.page } 
					/>
				)
			}
		/>
	</Switch>
)

export default Routing
