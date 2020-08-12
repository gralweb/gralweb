import React from 'react';

const navNormal = menuOpen => {
	return (
		<div className={ menuOpen ? 'app-nav-menu opened' : 'app-nav-menu' } >
            <ul className='app-menu-list'>
                <li className='app-list-item'>
                    <a href='/'>Portafolio</a>
                </li>
                <li className='app-list-item'>
                    <a href='/services'>Desarrollo Web</a>
                </li>
                <li className='app-list-item'>
                    <a href='/contactos'>Contactos</a>
                </li>
                <li className='app-list-item'>
                    <a href='/bio'>Bio</a>
                </li>
            </ul>
        </div>
	)	
}

export default navNormal;
