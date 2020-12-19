import React from 'react';

// Componentes
// import { ASSETS_URL } from './../../components/constans';
import RenderPresentacionImg from './RenderPresentacionImg';

const RenderPresentacionData = ({ datos, fotos }, scaleAnimBoolean, zoomOpen, zoomHandleOpen) => {
	const { titulo, descripcion } = datos
	const scaleAnim = scaleAnimBoolean ? 'app-cont-item-scale' : null

	return (
		<div className='app-main-cont'>
			<div className={ (zoomOpen) ? `app-vista-cont-zoom zoom` : 'app-vista-cont-zoom' }>
				<div className={ (zoomOpen) ? `app-zoom-foto zoom` : 'app-zoom-foto' }>
	                <img src='' alt='zoom' />
	            </div>

	            <div className='app-zoom-cont-close-btn' onClick={ () => zoomHandleOpen() }>
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

			<div className='app-vista-cont-texto'>
			    <p>
			        {
			        	descripcion
			        }
			    </p>
			</div>
		</div>
	);
}

export default RenderPresentacionData;
