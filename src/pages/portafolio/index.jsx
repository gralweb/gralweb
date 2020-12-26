import React, { useState, useEffect } from 'react'

// Componentes
import LoaderApp from './../../components/LoaderApp'
import Paginacion from './../../components/Paginacion'
import PopUpConexion from './../../components/PopUpConexion'
import FetchPortafolioCarts from './FetchPortafolioCarts'
import RenderPortafolioData from './RenderPortafolioData'

const RenderPortafolio = ({ headerLocation, pageTarget }) => {
	const [ scaleAnim, setScaleAnim ] = useState(false)
	const [ portafolioData, setPortafolioData ] = useState(null)
	const [ conexionError, setConexionError ] = useState(false)
	const [ countErr, setCountErr ] = useState(0)
	const [ numPages, setNumPages ] = useState(null)

	const loader = () => {
		return (
			(conexionError) ? 
			<PopUpConexion active={conexionError} /> :
			LoaderApp()
		)
	}

	const restoreDataCarts = () => {
		setPortafolioData(null)
	}

	const fetchData = () => {
		FetchPortafolioCarts(parseInt(pageTarget)).then(r => {
			const { datos, pages } = r
			
			setPortafolioData(datos)
			setNumPages(parseInt(pages))
		}).catch(r => {
			setCountErr(countErr + 1)
			setConexionError(!conexionError)
		})
	}

	useEffect(() => {
		setScaleAnim(true)
		headerLocation.portafolio()

		if ( portafolioData === null) {
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
	}, [ setScaleAnim, headerLocation, portafolioData, setPortafolioData, setConexionError, conexionError, countErr, setCountErr, numPages, setNumPages ])

	return (
		portafolioData ?
		<div className='app-main-cont'>
			{
				RenderPortafolioData( portafolioData, scaleAnim )
			}

			<Paginacion paginas={numPages} pageTarget={parseInt(pageTarget)} handleClick={restoreDataCarts} />
		</div> :
		loader()
	)
}

export default RenderPortafolio
