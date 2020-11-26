import React from 'react';
import { Link } from 'react-router-dom';

const HeaderNav = ( { menuState, eventClick } ) => {
	return (
        <div className={ menuState ? 'app-nav-menu opened' : 'app-nav-menu' } >
            <ul className='app-menu-list'>
                <li className='app-list-item' onClick={ eventClick }>
                    <Link to='/'>Portafolio</Link>
                </li>
                <li className='app-list-item' onClick={ eventClick }>
                    <Link to='/services'>Desarrollo Web</Link>
                </li>
                <li className='app-list-item' onClick={ eventClick }>
                    <Link to='/contactos'>Contactos</Link>
                </li>
                <li className='app-list-item' onClick={ eventClick }>
                    <Link to='/bio'>Bio</Link>
                </li>
            </ul>
        </div>
	);
}

export default HeaderNav;
