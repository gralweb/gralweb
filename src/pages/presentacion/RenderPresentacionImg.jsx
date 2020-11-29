import React from 'react';

// Componentes
import { ASSETS_URL } from './../../components/constans'

const RenderPresentacionImg = ( fotos, titulo, scaleAnim ) => {
	return (
		fotos.map((img, index) => {
			return (
				<div key={ index } className={ `app-cont-item app-vista ${ scaleAnim } ` }>
			        <figure className='app-item-img app-vista-foto'>
			            <img src={ `${ ASSETS_URL }/assets/${ img.foto }` } alt={ titulo } />
			        </figure>
			        <figcaption className='app-vista-zoom'>
			            <div className='app-zoom'>
			                <i className='icofont-optic'></i>
			            </div>
			        </figcaption>
			    </div>
			)
		})
	);
}

export default RenderPresentacionImg;
