import React, { useState, useEffect, useCallback, useContext } from 'react'
import { ContextApp } from './../../store'

// Componentes
import LoaderApp from './../../components/LoaderApp'
import Paginacion from './../../components/Paginacion'
import PopUpConexion from './../../components/PopUpConexion'
import FetchPortafolioCarts from './FetchPortafolioCarts'
import RenderPortafolioData from './RenderPortafolioData'

const RenderPortafolio = ({ headerLocation, pageTarget }) => {
	const { store: { carts, numPages }, actions } = useContext(ContextApp)

	const [ scaleAnim, setScaleAnim ] = useState(false)
	const [ conexionError, setConexionError ] = useState(false)
	const [ countErr, setCountErr ] = useState(0)

	const loader = () => {
		return (
			(conexionError) ? 
			<PopUpConexion active={conexionError} /> :
			LoaderApp()
		)
	}

	const fetchData = useCallback(
		() => {
			FetchPortafolioCarts(parseInt(pageTarget)).then(r => {
				const { datos, pages, estado } = r

				if (estado && estado === 'conexion_fallo') {
					setCountErr(countErr + 1)
					setConexionError(!conexionError)
				} else if (datos) {
					let transfData = {}

					transfData[parseInt(pageTarget)] = datos

					actions.addCarts(transfData)
					actions.addNumPages(parseInt(pages))
				}
			
			}).catch(r => {
				setCountErr(countErr + 1)
				setConexionError(!conexionError)
			})
		},
		[ actions, pageTarget, countErr, conexionError ],
	)

	useEffect(() => {
		setScaleAnim(true)

		document.title = `${document.title.slice(0, 9)} Portafolio`
		headerLocation.portafolio()

		if ( typeof carts[parseInt(pageTarget)] !== 'object' ) {
			if (countErr < 3) {
				fetchData()
			}
		}

		if (conexionError && (countErr === 2)) {
			setTimeout(() => {
				fetchData()
				setCountErr(0)
			}, 30000)
		}
	}, [ headerLocation, carts, fetchData, conexionError, countErr, pageTarget ])

	if ( typeof carts[parseInt(pageTarget)] !== 'object' ) {
		return (
			loader()
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
				// handleClick={restoreDataCarts} 
			/>
		</div>
	)
}

export default RenderPortafolio
