import React from 'react'

const FloatBtnCont = ({ handleClickBtn, children, titulo }) => {
	return (
		<div onClick= { () => handleClickBtn() }
			className='app-float-btn-cont'
			title={titulo}
		>
			{
				children
			}
		</div>
	)
}

const FloatBtn = ({ type, handleClick, titulo }) => {
	switch(type) {
		case 'theme':
			return (
				<FloatBtnCont handleClickBtn={ handleClick } titulo={titulo} >
					<div className='app-float-btn-theme'>
						<div className='app-float-btn-theme-circle'></div>
					</div>
				</FloatBtnCont>
			)
		case 'newLetters':
			return (
				<FloatBtnCont handleClickBtn={ handleClick } titulo={titulo} >
					<div
						className='app-float-btn-newLetters'
					>
						<span><i className='icofont-notification'></i></span>
					</div>
				</FloatBtnCont>
			)
		default :
			return (
				<FloatBtnCont handleClickBtn={ handleClick } titulo={titulo} >
					<div className='app-float-btn-theme' >
						<div className='app-float-btn-theme-circle'></div>
					</div>
				</FloatBtnCont>
			)
	}
}

export default FloatBtn
