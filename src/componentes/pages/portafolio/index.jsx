import React from 'react';

const Portafolio = props => {
    const { scaleAnim, img, titulo } = props

    return (
        <div className={'app-cont-item ' +  scaleAnim}>
            <figure className='app-item-img'>
                <img src={ 'http://localhost:3000/assets/' + img } title={ titulo } alt={ titulo } />
            </figure>

            <figcaption className='app-item-text'>
                <p>
                    { titulo }
                </p>
                <p>
                    <a href={ 'portafolio/' + titulo }>view</a>
                </p>
            </figcaption>
        </div>
    );
}

export default Portafolio;
