// Dependecias
import React from 'react';

// Components

// Assets

const Header = props => {
  return (
    <header id="app-header" className="app-header">
    	<nav className='app-header-nav'>
            <div className='app-nav-locacion'>
                <p className='app-location-item' >
                    <img src='http://localhost:3000/logo/gral_rojo.png' id='app-location-logo' alt='Gral'/>
                    <span className='app-location-sep'>|</span>
                    <span id='app-location'>{props.headerLocation}</span>
                </p>
            </div>

            <div id='app-nav-logo' className='app-content-logo'>
                <figure className='app-logo-img'>
                    <a href='/'>
                        <img src='http://localhost:3000/logo/logo_rojo.png' title='GralWeb' alt='GralWeb'/>
                    </a>
                </figure>
            </div>

            <div id='app-nav-btn-abrir' className='app-nav-btn-menu'>
                <span className='app-btn-menu'>
                    <i className='icofont-navigation-menu'></i>
                </span>
            </div>

            <div id='app-nav-btn-cerrar' className='app-nav-btn-menu'>
                <span className='app-btn-menu'>
                    <i className='icofont-close'></i>
                </span>
            </div>

            {/*{(window.sessionStorage.getItem("login_estado") === "user_valid" && window.sessionStorage.getItem("login_estado") != null) ? app_header_nav_admin() : app_header_nav()}*/}
        </nav>
    </header>
  );
}

export default Header;
