import React from 'react';

const HeaderBtnMenu = ({ type, menuState, eventClick }) => {
	switch(type) {
		case 'open':
			return (
				<div 
		            className={ menuState ? 'app-nav-btn-menu app-btn-menu-hidden' : 'app-nav-btn-menu' }
		            onClick={ eventClick }
		        >
		            <span className='app-btn-menu'>
		                <i className='icofont-navigation-menu'></i>
		            </span>
		        </div>
			);
		case 'close':
			return (
				<div
		            className={ menuState ? 'app-nav-btn-menu' : 'app-nav-btn-menu app-btn-menu-hidden' }
		            onClick={ eventClick } 
		        >
		            <span className='app-btn-menu'>
		                <i className='icofont-close'></i>
		            </span>
		        </div>	
			);
		default :
			return;
	}
}

export default HeaderBtnMenu;
