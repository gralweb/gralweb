import React from 'react';

const renderPresentacionImg = propsImg {
	return (
		propsImg.fotos.map((img, index) => {
			<div key={index} className="app-cont-item app-vista">
		        <figure className="app-item-img app-vista-foto">
		            <img src={ "localhost:3000/assets/" + img.foto } alt={ propsImg.titulo } />
		        </figure>
		        <figcaption className="app-vista-zoom">
		            <div className="app-zoom">
		                <i className="icofont-optic"></i>
		            </div>
		        </figcaption>
		    </div>
		});
	);
}

const Presentacion = props => {
	return (
		<div>
			<div className="app-vista-cont-zoom">
			    <div className="app-zoom-foto">
			        <img src='' />
			    </div>
			</div>

			<div className="app-vista-cont-fotos">
			    { renderPresentacionImg(props) }
			</div>

			<div className="app-vista-cont-texto">
			    <p>
			        { props.descripcion }
			    </p>
			</div>
		</div>
	);
}

export default Presentacion;
