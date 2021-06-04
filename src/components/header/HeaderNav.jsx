import React from 'react'
import { Link } from 'react-router-dom'

const HeaderNav = ( { menuState, eventClick } ) => (
    <div className={ `app-nav-menu ${menuState ? 'opened' : ''}` } >
        <ul className='app-menu-list'>
            <li className='app-list-item' onClick={ eventClick }>
                <Link to='/portafolio'>Portafolio</Link>
            </li>
            <li className='app-list-item' onClick={ eventClick }>
                <Link to='/services'>Desarrollo Web</Link>
            </li>
            <li className='app-list-item' onClick={ eventClick }>
                <Link to='/contactos'>Contactos</Link>
            </li>
            <li className='app-list-item' onClick={ eventClick }>
                <Link to='/bio'>Bío</Link>
            </li>
        </ul>
    </div>
)

export default HeaderNav
