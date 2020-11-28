import { useState, useEffect } from 'react';

// Componentes
import LoaderApp from './../../components/LoaderApp';
import RenderPresentacionData from './RenderPresentacionData';
import FetchPresentacionCartsData from './FetchPresentacionCartsData';

const RenderPresentacion = ({ nameCart }) => {
	const [ scaleAnim, setScaleAnim ] = useState(false);
	const [ presentacionCartsData, setPresentacionCartsData ] = useState(null);

	useEffect(() => {
		setScaleAnim(true)

		if (presentacionCartsData === null) {
			FetchPresentacionCartsData( nameCart ).then(r => {
	 			setPresentacionCartsData(r)
			})
		}

	}, [ presentacionCartsData, nameCart, setPresentacionCartsData ])

	return (
		presentacionCartsData ?
		RenderPresentacionData(presentacionCartsData, scaleAnim) :
		LoaderApp()
	);
}

export default RenderPresentacion;
