import React from 'react'

// Componentes
import { ASSETS_URL } from './../../../components/constans';
import RenderPresentacionImg from './RenderPresentacionImg'

const RenderPresentacionData = ({ datos, fotos }, scaleAnimBoolean, zoomOpen, zoomHandleOpen) => {
	const { titulo, extracto } = datos
	const scaleAnim = scaleAnimBoolean ? 'app-cont-item-scale' : null
	document.title = `${document.title.slice(0, 9)} ${titulo}`

	return (
		<div className='app-main-cont'>
			<div className={ `app-vista-cont-zoom ${(zoomOpen) ? 'zoom' : ''}` }>
				<div className={ `app-zoom-foto ${scaleAnim} ${(zoomOpen) ? 'zoom' : ''}` }>
					<img
						src={`${ASSETS_URL}/logo/pwa/oscuro/512x512.png`} 
						alt={titulo} title={titulo} 
					/>
				</div>

				<div className={`app-zoom-cont-close-btn ${scaleAnim}`} onClick={ () => zoomHandleOpen() }>
					<span className='app-btn-menu app-btn-menu-dark'>
						<i className='icofont-close'></i>
					</span>
				</div>
			</div>

			<div className='app-vista-cont-fotos'>
				{
					RenderPresentacionImg( fotos, titulo, scaleAnim, zoomHandleOpen )
				}
			</div>

			<div className='app-vista-cont-titulo'>
				<h2>
					{
						titulo
					}
				</h2>
			</div>

			<div className={`app-vista-cont-texto ${scaleAnim}`}>
				<p>
					{
						extracto
					}
				</p>
			</div>
		</div>
	)
}

export default RenderPresentacionData
