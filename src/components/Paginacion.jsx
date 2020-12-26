import React from 'react'
import { Link } from 'react-router-dom'

const numPageCount = numPagina => {
	let arrNumPaginas = []
	for (let i = 0; i < numPagina; i++) {
		arrNumPaginas.push(1)
	}

	return arrNumPaginas
}

const ViewNumPages = ({ numPage, pageTarget, handleClick }) => {
	return (
		<Link 
			onClick={ () => handleClick() }
			to={((numPage + 1) === 1) ? '/portafolio' : `/portafolio/page/${ numPage + 1 }`}
			className={ ((numPage + 1) === pageTarget) ? 'app-paginacion-link active' : 'app-paginacion-link' }
		>
			<span>{ numPage + 1 }</span>
		</Link>
	)
}

const RenderNumPages = ({ paginas, pageTarget, handleClick }) => {
	const pages = numPageCount(paginas)

	return (
		(pages.length) ?
		pages.map((page, index) => {
			return (
				<ViewNumPages
					key={ index }
					numPage={ index }
					pageTarget={ pageTarget }
					handleClick={ handleClick }
				/>
			)
		})
		: null
	)
}

const Paginacion = ({ paginas, pageTarget, handleClick }) => {
	return (
		<div className={ (paginas > 1) ? 'app-paginacion-cont' : 'app-paginacion-cont inactivo' }>
			<div className='app-paginacion'>
				{/* Boton para Retroceder */}
				<Link
					onClick={ () => handleClick() }
					to={(pageTarget && pageTarget === 2) ? '/portafolio' : `/portafolio/page/${pageTarget - 1}`}
					className={ (!pageTarget || pageTarget === 1) ? 'app-paginacion-left inactivo' : 'app-paginacion-left'}
				>
					<span><i className='icofont-caret-left'></i></span>
				</Link>
				{/* Links para el numero de pagina */}

				<RenderNumPages paginas={ paginas } pageTarget={ pageTarget } handleClick={ handleClick } />

				{/* Boton para avanzar */}
				<Link
					onClick={ () => handleClick() }
					to={(!pageTarget) ? `/portafolio/page/2` : `/portafolio/page/${pageTarget + 1}`}
					className={ (pageTarget === paginas) ? 'app-paginacion-right inactivo' : 'app-paginacion-right'}
				>
					<span><i className='icofont-caret-right'></i></span>
				</Link>
			</div>
		</div>
	)
}

export default Paginacion
