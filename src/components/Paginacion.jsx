import React from 'react'
import { Link } from 'react-router-dom'

const numPageCount = numPagina => {
	let arrNumPaginas = []
	for (let i = 0; i < numPagina; i++) {
		arrNumPaginas.push(1)
	}

	return arrNumPaginas
}

const ViewNumPages = ({ numPage, pageTarget }) => (
	<Link 
		to={((numPage + 1) === 1) ? '/portafolio' : `/portafolio/page/${ numPage + 1 }`}
		className={ `app-paginacion-link ${((numPage + 1) === pageTarget) ? 'active' : ''}` }
	>
		<span>{ numPage + 1 }</span>
	</Link>
)

const RenderNumPages = ({ paginas, pageTarget }) => {
	const pages = numPageCount(paginas)

	return (
		(pages.length) ?
		pages.map((page, index) => (
			<ViewNumPages
				key={ index }
				numPage={ index }
				pageTarget={ pageTarget }
			/>
		))
		: null
	)
}

const Paginacion = ({ paginas, pageTarget }) => (
	<div className={ `app-paginacion-cont ${(paginas > 1) ? '' : 'inactivo'}` }>
		<div className='app-paginacion'>
			{/* Boton para Retroceder */}
			<Link
				to={(pageTarget && pageTarget === 2) ? '/portafolio' : `/portafolio/page/${pageTarget - 1}`}
				className={`app-paginacion-left ${(!pageTarget || pageTarget === 1) ? 'inactivo' : ''}`}
			>
				<span><i className='icofont-caret-left'></i></span>
			</Link>
			{/* Links para el numero de pagina */}

			<RenderNumPages 
				paginas={ paginas }
				pageTarget={ pageTarget }
			/>

			{/* Boton para avanzar */}
			<Link
				to={(!pageTarget) ? `/portafolio/page/2` : `/portafolio/page/${pageTarget + 1}`}
				className={`app-paginacion-right ${(pageTarget === paginas) ? 'inactivo' : ''}`}
			>
				<span><i className='icofont-caret-right'></i></span>
			</Link>
		</div>
	</div>
)

export default Paginacion