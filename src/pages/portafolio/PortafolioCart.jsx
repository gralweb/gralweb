import React from 'react';
import { Link } from 'react-router-dom';

const PortafolioCart = ({ scaleAnim, img, titulo }) => {
    return (
        <div className={ `app-cont-item ${ scaleAnim }` }>
            <figure className='app-item-img'>
                <img src={ `http://localhost:3000/assets/${ img }` } title={ titulo } alt={ titulo } />
            </figure>

            <figcaption className='app-item-text'>
                <p>
                    { titulo }
                </p>
                <p>
                    <Link to={ `portafolio/${ titulo }` }>view</Link>
                </p>
            </figcaption>
        </div>
    );
}

export default PortafolioCart;
