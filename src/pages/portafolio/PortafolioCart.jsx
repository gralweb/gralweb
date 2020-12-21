import React from 'react'
import { Link } from 'react-router-dom'

// Componentes
import { ASSETS_URL } from './../../components/constans'

const PortafolioCart = ({ scaleAnim, img, titulo }) => {
    return (
        <div className={ `app-cont-item ${ scaleAnim }` }>
            <figure className='app-item-img'>
                <img src={ `${ ASSETS_URL }/assets/${ img }` } title={ titulo } alt={ titulo } />
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
    )
}

export default PortafolioCart
