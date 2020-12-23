import React from 'react'

const theme_claro = 'app-float-btn-theme-claro'
const theme_oscuro = 'app-float-btn-theme-oscuro'

const FloatBtnCont = ({ theme, handleClickBtn, children }) => {
	return (
		<div onClick= { () => handleClickBtn() }
			className={ `app-float-btn-cont ${(theme) ? 'app-float-btn-cont-claro' : 'app-float-btn-cont-oscuro' }` }
		>
			{
				children
			}
		</div>
	)
}

const FloatBtn = ({ type, tema, handleClick }) => {
	switch(type) {
		case 'theme':
			return (
				<FloatBtnCont handleClickBtn={ handleClick } theme={ tema } >
					<div 
						className={ `app-float-btn-theme ${(tema) ? theme_claro : theme_oscuro}` }
					>
						<div className='app-float-btn-theme-circle'></div>
					</div>
				</FloatBtnCont>
			)
		case 'newLetters':
			return (
				<FloatBtnCont handleClickBtn={ handleClick } theme={ tema } >
					<div
						className='app-float-btn-newLetters'
					>
						<span><i className='icofont-notification'></i></span>
					</div>
				</FloatBtnCont>
			)
		default :
			return (
				<FloatBtnCont handleClickBtn={ handleClick } >
					<h1 >Float Btn Theme</h1>
				</FloatBtnCont>
			)
	}
}

export default FloatBtn
