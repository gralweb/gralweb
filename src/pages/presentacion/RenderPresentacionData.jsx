import React from 'react';

// Componentes
import RenderPresentacionImg from './RenderPresentacionImg';

const RenderPresentacionData = ({ datos, fotos }, scaleAnimBoolean) => {
	const { titulo, descripcion } = datos
	const scaleAnim = scaleAnimBoolean ? 'app-cont-item-scale' : null

	return (
		<div className='app-main-cont'>
			<div className='app-vista-cont-fotos'>
			    {
			    	RenderPresentacionImg( fotos, titulo, scaleAnim )
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
