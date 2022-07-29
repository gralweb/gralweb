import { useState, useEffect, useCallback, useContext } from 'react'
import { ContextApp } from './../../store'

// Componentes
import LoaderApp from './../../components/LoaderApp'
import RenderPresentacionData from './acciones/RenderPresentacionData'
import FetchPresentacionCartsData from './acciones/FetchPresentacionCartsData'

const RenderPresentacion = ({ titleCart }) => {
	const { store: { cart, cartImgs }, actions: { addCartImgs, addCart } } = useContext(ContextApp)

	const [ scaleAnim, setScaleAnim ] = useState(false)
	const [ zoomOpen, setZoomOpen ] = useState(false)

	const zoomHandleOpen =() => {
		setZoomOpen(!zoomOpen)
	}

	const zoomImgList = document.querySelectorAll('.app-vista-cont-fotos .zoom')

	const fetchData = useCallback(() => {
		const data = FetchPresentacionCartsData( titleCart )
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
	},
		[ titleCart, addCart, addCartImgs ],
	)

	useEffect(() => {
		setScaleAnim(true)

		if (typeof cart[titleCart] !== 'object') {
			fetchData()
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

	}, [ cart, titleCart, fetchData, zoomOpen, zoomImgList ])

	if (typeof cart[titleCart] !== 'object' 
		||
		typeof cartImgs[titleCart] !== 'object'
	) {
		return LoaderApp()
	}

	return (
		RenderPresentacionData(
			{ datos: cart[titleCart], fotos: cartImgs[titleCart] },
			scaleAnim, zoomOpen, zoomHandleOpen
		)
	)
}

export default RenderPresentacion
