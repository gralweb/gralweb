import React from 'react';
import { Link } from 'react-router-dom';

// Componentes
import { ASSETS_URL } from './../constans'

const Footer = ({ tema }) => {
    const fecha = new Date()

  	return (
        <footer id='app-footer' className='app-footer'>
        	<div className='app-footer-content'>
                <div id='app-footer-logo' className='app-content-logo app-logo-cat'>
                    <figure className='app-logo-img'>
                        <Link to='/portafolio'>
                            <img
                                src={ `${ ASSETS_URL }/logo/pwa/${(tema) ? 'claro' : 'oscuro'}/512x512.png` }
                                title='Gralweb'
                                alt='Logo GralWeb'
                            />
                        </Link>
                    </figure>
                </div>

                <div className='app-content-year'>
                    <p>{ fecha.getFullYear() }</p>
                    <p>&copy;</p>
                </div>
            </div>
        </footer>
	);
}

export default Footer;
