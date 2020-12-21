import React, { useState, useEffect } from 'react'

// Componentes
import LoaderApp from './../../components/LoaderApp'
import PopUpConexion from './../../components/PopUpConexion'
import FetchPortafolioCarts from './FetchPortafolioCarts'
import RenderPortafolioData from './RenderPortafolioData'

const RenderPortafolio = ({ headerLocation }) => {
	const [ scaleAnim, setScaleAnim ] = useState(false)
	const [ portafolioData, setPortafolioData ] = useState(null)
	const [ conexionError, setConexionError ] = useState(false)
	const [ countErr, setCountErr ] = useState(0)

	const loader = () => {
		return (
			(conexionError) ? 
			<PopUpConexion active={conexionError} /> :
			LoaderApp()
		)
	}

	const fetchData = () => {
		FetchPortafolioCarts().then(r => {
			const { datos } = r
			
			setPortafolioData(datos)
		}).catch(r => {
			setCountErr(countErr + 1)
			setConexionError(!conexionError)
		})
	}

	useEffect(() => {
		setScaleAnim(true)
		
		headerLocation.portafolio()

		if ( portafolioData === null ) {
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

	}, [ setScaleAnim, headerLocation, portafolioData, setPortafolioData, setConexionError, conexionError, countErr, setCountErr ])

	return (
		portafolioData ?
		<div className='app-main-cont'>
			{
				RenderPortafolioData( portafolioData, scaleAnim )
			}
		</div> :
		loader()
	)
}

export default RenderPortafolio
