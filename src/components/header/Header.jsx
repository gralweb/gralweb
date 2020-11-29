// Dependecias
import React from 'react';
import { Link } from 'react-router-dom';

// Componentes
import HeaderBtnMenu from './HeaderBtnMenu';
import HeaderNav from './HeaderNav';

import { ASSETS_URL } from './../constans'

const Header = ({ location, menuOpen, onClick }) => {
    return (
        <header id="app-header" className="app-header">
        	<nav className='app-header-nav'>

                <div className='app-nav-locacion'>
                    <p className='app-location-item app-logo-cat'>
                        <Link to='/portafolio'>
                            <img src={ `${ ASSETS_URL }/logo/gral_rojo.png` } id='app-location-logo' alt='Gral'/>
                        </Link>
                        <span className='app-location-sep'>|</span>
                        <span id='app-location'>{ location }</span>
                    </p>
                </div>

                <div id='app-nav-logo' className='app-content-logo app-logo-cat'>
                    <figure className='app-logo-img'>
                        <Link to='/portafolio'>
                            <img src={ `${ ASSETS_URL }/logo/logo_rojo.png` } title='GralWeb' alt='GralWeb'/>
                        </Link>
                    </figure>
                </div>
                
                <HeaderBtnMenu menuState={ menuOpen } eventClick={ onClick } type='open' />

                <HeaderBtnMenu menuState={ menuOpen } eventClick={ onClick } type='close' />

                <HeaderNav menuState={ menuOpen } eventClick={ onClick } />

            </nav>
        </header>
    );
}

export default Header;
