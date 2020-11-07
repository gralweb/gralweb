import React from 'react';

const Portafolio = (props) => {
    return (
        <div className={'app-cont-item ' +  props.scaleAnim}>
            <figure className="app-item-img">
                <img src={ 'http://localhost:3000/assets/' + props.img } title={props.titulo} alt={props.titulo} />
            </figure>

            <figcaption className="app-item-text">
                <p>
                    {props.titulo}
                </p>
                <p>
                    <a href={'portafolio/' + props.titulo}>ver <i className="icofont-long-arrow-right"></i></a>
                </p>
            </figcaption>
        </div>
    );
}

export default Portafolio;
