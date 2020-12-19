import { useState, useEffect } from 'react';

// Componentes
import LoaderApp from './../../components/LoaderApp';
import RenderPresentacionData from './RenderPresentacionData';
import FetchPresentacionCartsData from './FetchPresentacionCartsData';

const RenderPresentacion = ({ nameCart }) => {
	const [ scaleAnim, setScaleAnim ] = useState(false)
	const [ presentacionCartsData, setPresentacionCartsData ] = useState(null)

	const [ zoomOpen, setZoomOpen ] = useState(false)

	const zoomHandleOpen =() => {
		setZoomOpen(!zoomOpen)
	}

	const zoomImgList = document.querySelectorAll('.app-vista-cont-fotos .zoom')

	useEffect(() => {
		setScaleAnim(true)

		if (presentacionCartsData === null) {
			FetchPresentacionCartsData( nameCart ).then(datos => {
	 			setPresentacionCartsData(datos)
			})
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

	}, [ setScaleAnim, presentacionCartsData, nameCart, setPresentacionCartsData, zoomOpen, zoomImgList ])

	return (
		presentacionCartsData ?
		RenderPresentacionData(presentacionCartsData, scaleAnim, zoomOpen, zoomHandleOpen)
		:
		LoaderApp()
	);
}

export default RenderPresentacion;
