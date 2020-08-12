// Dependecias
import React from 'react';

// Componentes
import navUser from './HeaderNavU';
import navNormal from './HeaderNavN';

const Header = props => {
    const { headerLocation, menuOpen, onClick } = props

    return (
        <header id="app-header" className="app-header">
        	<nav className='app-header-nav'>
                <div className='app-nav-locacion'>
                    <p className='app-location-item app-logo-cat'>
                        <a href='/'>
                            <img src='http://localhost:3000/logo/gral_rojo.png' id='app-location-logo' alt='Gral'/>
                        </a>
                        <span className='app-location-sep'>|</span>
                        <span id='app-location'>{ headerLocation }</span>
                    </p>
                </div>

                <div id='app-nav-logo' className='app-content-logo app-logo-cat'>
                    <figure className='app-logo-img'>
                        <a href='/'>
                            <img src='http://localhost:3000/logo/logo_rojo.png' title='GralWeb' alt='GralWeb'/>
                        </a>
                    </figure>
                </div>

                <div 
                    className={ menuOpen ? 'app-nav-btn-menu app-btn-menu-hidden' : 'app-nav-btn-menu' }
                    onClick={ onClick }
                >
                    <span className='app-btn-menu'>
                        <i className='icofont-navigation-menu'></i>
                    </span>
                </div>

                <div
                    className={ menuOpen ? 'app-nav-btn-menu' : 'app-nav-btn-menu app-btn-menu-hidden' }
                    onClick={ onClick } 
                >
                    <span className='app-btn-menu'>
                        <i className='icofont-close'></i>
                    </span>
                </div>

                {
                    (window.sessionStorage.getItem('login_estado') === 'user_valid') ? navUser(menuOpen) : navNormal(menuOpen)
                }
            </nav>
        </header>
    );
}

export default Header;
