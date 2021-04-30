import React, { useState, useEffect, useCallback, useContext } from 'react'
import { ContextApp } from './../../store'

// Componentes
import LoaderApp from './../../components/LoaderApp'
import Paginacion from './../../components/Paginacion'
import PopUpConexion from './../../components/PopUpConexion'
import FetchPortafolioCarts from './FetchPortafolioCarts'
import RenderPortafolioData from './RenderPortafolioData'

const RenderPortafolio = ({ headerLocation, pageTarget }) => {
	const { store, actions } = useContext(ContextApp)

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

	// const restoreDataCarts = () => {
	// 	setPortafolioData(null)
	// }

	const fetchData = useCallback(
		() => {
			FetchPortafolioCarts(parseInt(pageTarget)).then(r => {
				const { datos, pages, estado } = r

				if (estado && estado === 'conexion_fallo') {
					setCountErr(countErr + 1)
					setConexionError(!conexionError)
				} else if (datos) {
					actions.addCarts(datos)
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

		if ( store.carts.length < 1 ) {
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
	}, [ headerLocation, store, fetchData, conexionError, countErr ])

	if ( store.carts.length < 1 ) {
		return (
			loader()
		)
	}

	return (
		<div className='app-main-cont'>
			{
				RenderPortafolioData( store.carts, scaleAnim )
			}

			<Paginacion 
				paginas={store.numPages}
				pageTarget={parseInt(pageTarget)}
				// handleClick={restoreDataCarts} 
			/>
		</div>
	)
}

export default RenderPortafolio
