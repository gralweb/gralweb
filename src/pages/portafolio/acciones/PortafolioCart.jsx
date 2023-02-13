import React from 'react'
import { Link } from 'react-router-dom'

// Componentes
import { ASSETS_URL } from './../../../components/constans'

const PortafolioCart = ({ scaleAnim, img, titulo, url }) => (
    <div className={ `app-cont-item ${ scaleAnim }` }>
        <figure className='app-item-img'>
            <img src={ img } title={ titulo } alt={ titulo } />
        </figure>

        <figcaption className='app-item-text'>
            <p>
                { titulo }
            </p>
            <p>
                <a href={url} target="blank">view</a>
            </p>
        </figcaption>
    </div>
)

export default PortafolioCart
