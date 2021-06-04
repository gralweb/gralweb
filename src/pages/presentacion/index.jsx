import React, { useState, useEffect, useCallback, useContext } from 'react'
import { ContextApp } from './../../store'

// Componentes
import LoaderApp from './../../components/LoaderApp'
import PopUpConexion from './../../components/PopUpConexion'
import RenderPresentacionData from './acciones/RenderPresentacionData'
import FetchPresentacionCartsData from './acciones/FetchPresentacionCartsData'

const RenderPresentacion = ({ nameCart }) => {
	const { store: { cart, cartImgs }, actions: { addCartImgs, addCart } } = useContext(ContextApp)

	const [ scaleAnim, setScaleAnim ] = useState(false)
	const [ conexionError, setConexionError ] = useState(false)
	const [ countErr, setCountErr ] = useState(0)
	const [ zoomOpen, setZoomOpen ] = useState(false)

	const zoomHandleOpen =() => {
		setZoomOpen(!zoomOpen)
	}

	const zoomImgList = document.querySelectorAll('.app-vista-cont-fotos .zoom')

	const loader = () => (
		(conexionError) ? 
		<PopUpConexion active={conexionError} /> :
		LoaderApp()
	)

	const fetchData = useCallback(
		() => {
			FetchPresentacionCartsData( nameCart )
			.then(data => {
				const { datos, fotos } = data
				
				const datosTrans = {}
				const fotosTrans = {}

				const transFunct = typeTrans => {
					if (typeTrans === 'fotos') {
						fotosTrans[datos.titulo] = fotos
						addCartImgs(fotosTrans)
					} else {
						datosTrans[datos.titulo] = datos
						addCart(datosTrans)
					}
				}

				// Ejecutamos para guardar los datos
				transFunct()
				// Ejecutamos para guardar las fotos
				transFunct('fotos')
			})
			.catch(err => {
				setCountErr(countErr + 1)
				setConexionError(!conexionError)
			})
		},
		[ nameCart, countErr, conexionError, addCart, addCartImgs ],
	)

	useEffect(() => {
		setScaleAnim(true)

		if (typeof cart[nameCart] !== 'object') {
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

	}, [ cart, nameCart, fetchData, zoomOpen, zoomImgList, conexionError, countErr ])

	if (typeof cart[nameCart] !== 'object' 
		||
		typeof cartImgs[nameCart] !== 'object'
	) {
		return loader()
	}

	return (
		RenderPresentacionData(
			{ datos: cart[nameCart], fotos: cartImgs[nameCart] },
			scaleAnim, zoomOpen, zoomHandleOpen
		)
	)
}

export default RenderPresentacion
