import React from 'react';
import { Link } from 'react-router-dom';

// Componentes
import { ASSETS_URL } from './../constans'

const logoNormal = () => {
    return (
        <Link to='/portafolio'>
            <img
                src={ `${ ASSETS_URL }/logo/logo_rojo.png ` }
                title='Gralweb'
                alt='Logo GralWeb'
            />
        </Link>
    );
}

const logoExit = () => {
    return (
        <img
            src={ `${ ASSETS_URL }/logo/logo_rojo.png ` }
            title='Logout'
            alt='Gralweb'
            onClick={ () => console.log('test') }
        />
    );
}

const Footer = () => {
  	return (
        <footer id='app-footer' className='app-footer'>
        	<div className='app-footer-content'>
                <div id='app-footer-logo' className='app-content-logo app-logo-cat'>
                    <figure className='app-logo-img'>
                        {
                            (window.sessionStorage.getItem('login_estado') === 'user_valid') ?
                            logoExit() :
                            logoNormal()
                        }
                    </figure>
                </div>

                <div className='app-content-year'>
                    <p>2020</p>
                    <p>&copy;</p>
                </div>
            </div>
        </footer>
	);
}

export default Footer;
