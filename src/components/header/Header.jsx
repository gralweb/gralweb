// Dependecias
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

// Componentes
import HeaderBtnMenu from './HeaderBtnMenu';
import HeaderNav from './HeaderNav';

import { ASSETS_URL } from './../constans'

const Header = ({ location, tema, menuOpen, onClick }) => {
    const tagbody = document.querySelector('body')

    const handleTemaBody = () => {
        if (tagbody) {
            if (tema) {
                tagbody.classList.add('claro')
                tagbody.classList.remove('oscuro')
            } else {
                tagbody.classList.add('oscuro')
                tagbody.classList.remove('claro')
            }
        }
    }

    useEffect(() => {
       handleTemaBody()
    }, [handleTemaBody])


    return (
        <header id='app-header' className='app-header'>
        	<nav className='app-header-nav'>

                <div className='app-nav-locacion'>
                    <p className='app-location-item app-logo-cat'>
                        <Link to='/portafolio'>
                            <img 
                                src={ `${ASSETS_URL}/logo/gral_${(tema) ? 'claro' : 'oscuro'}.png` }
                                id='app-location-logo' alt='Gral'
                            />
                        </Link>
                        <span className='app-location-sep'>|</span>
                        <span id='app-location'>{ location }</span>
                    </p>
                </div>

                <div id='app-nav-logo' className='app-content-logo app-logo-cat'>
                    <figure className='app-logo-img'>
                        <Link to='/portafolio'>
                            <img 
                                src={ `${ASSETS_URL}/logo/pwa/${(tema) ? 'claro' : 'oscuro'}/512x512.png` }
                                title='GralWeb' alt='GralWeb'
                            />
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
