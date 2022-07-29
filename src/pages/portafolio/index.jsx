import React, { useState, useEffect, useCallback, useContext } from 'react'
import { ContextApp } from './../../store'

// Componentes
import LoaderApp from './../../components/LoaderApp'
import Paginacion from './../../components/Paginacion'
import FetchPortafolioCarts from './acciones/FetchPortafolioCarts'
import RenderPortafolioData from './acciones/RenderPortafolioData'

const RenderPortafolio = ({ headerLocation, pageTarget }) => {
	const { store: { carts, numPages }, actions: { addCarts, addNumPages } } = useContext(ContextApp)

	const [ scaleAnim, setScaleAnim ] = useState(false)

	const fetchData = useCallback(() => {
		const data = FetchPortafolioCarts()
		let transfData = {}

		transfData[parseInt(pageTarget)] = data

		addCarts(transfData)
		// addNumPages(parseInt(pages))
	},
		[pageTarget, addCarts]
	)

	useEffect(() => {
		setScaleAnim(true)

		document.title = `${document.title.slice(0, 9)} Portafolio`
		headerLocation.portafolio()

		if ( typeof carts[parseInt(pageTarget)] !== 'object' ) {
			fetchData()
		}

	}, [ headerLocation, carts, fetchData, pageTarget ])

	if ( typeof carts[parseInt(pageTarget)] !== 'object' ) {
		return (
			LoaderApp()
		)
	}

	return (
		<div className='app-main-cont'>
			{
				RenderPortafolioData( carts[parseInt(pageTarget)], scaleAnim )
			}

			<Paginacion 
				paginas={numPages}
				pageTarget={parseInt(pageTarget)}
			/>
		</div>
	)
}

export default RenderPortafolio
