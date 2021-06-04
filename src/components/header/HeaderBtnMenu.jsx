import React from 'react'

const HeaderBtnMenu = ({ type, menuState, eventClick }) => {
	if (type === 'open') {
		return (
			<div 
				className={ `app-nav-btn-menu ${menuState ? 'app-btn-menu-hidden' : ''}` }
				onClick={ eventClick }
			>
				<span className='app-btn-menu'>
					<i className='icofont-navigation-menu'></i>
				</span>
			</div>
		)
	} else {
		return (
			<div
				className={ `app-nav-btn-menu ${menuState ? '' : 'app-btn-menu-hidden'}` }
				onClick={ eventClick }
			>
				<span className='app-btn-menu'>
					<i className='icofont-close'></i>
				</span>
			</div>
		)
	}
}

export default HeaderBtnMenu
