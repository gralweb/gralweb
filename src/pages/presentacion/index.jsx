import React, { useState, useEffect, useCallback } from 'react'

// Componentes
import LoaderApp from './../../components/LoaderApp'
import PopUpConexion from './../../components/PopUpConexion'
import RenderPresentacionData from './RenderPresentacionData'
import FetchPresentacionCartsData from './FetchPresentacionCartsData'

const RenderPresentacion = ({ nameCart }) => {
	const [ scaleAnim, setScaleAnim ] = useState(false)
	const [ presentacionCartsData, setPresentacionCartsData ] = useState(null)
	const [ conexionError, setConexionError ] = useState(false)
	const [ countErr, setCountErr ] = useState(0)
	const [ zoomOpen, setZoomOpen ] = useState(false)

	const zoomHandleOpen =() => {
		setZoomOpen(!zoomOpen)
	}

	const zoomImgList = document.querySelectorAll('.app-vista-cont-fotos .zoom')

	const loader = () => {
		return (
			(conexionError) ? 
			<PopUpConexion active={conexionError} /> :
			LoaderApp()
		)
	}

	const fetchData = useCallback(
		() => {
			FetchPresentacionCartsData( nameCart ).then(datos => {
 				setPresentacionCartsData(datos)
			}).catch(err => {
				setCountErr(countErr + 1)
				setConexionError(!conexionError)
			})
		},
		[ nameCart, countErr, conexionError ],
	)

	useEffect(() => {
		setScaleAnim(true)

		if (presentacionCartsData === null) {
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

		if (zoomOpen) {
			document.querySelector('body').classList.add('zoom')
		} else {
			if (zoomImgList) {
				for (let i = 0; i < zoomImgList.length; i++) {
					zoomImgList[i].classList.remove('zoom')
				}
			}
			document.querySelector('body').classList.remove('zoom')
		}

	}, [ setScaleAnim, presentacionCartsData, nameCart, fetchData, setPresentacionCartsData, zoomOpen, zoomImgList, setConexionError, conexionError, countErr, setCountErr ])

	return (
		presentacionCartsData ?
		RenderPresentacionData(presentacionCartsData, scaleAnim, zoomOpen, zoomHandleOpen)
		:
		loader()
	)
}

export default RenderPresentacion
