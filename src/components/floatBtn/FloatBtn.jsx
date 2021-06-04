import React from 'react'

const FloatBtnCont = ({ handleClickBtn, children, titulo }) => (
	<div 
		onClick= { () => handleClickBtn() }
		className='app-float-btn-cont'
		title={titulo}
	>
		{
			children
		}
	</div>
)

const FloatBtn = ({ type, handleClick, titulo }) => (
	<FloatBtnCont handleClickBtn={ handleClick } titulo={titulo} >
		<div className={ `${(type === 'theme') ? 'app-float-btn-theme' : 'app-float-btn-newLetters' }` }>
			{
				(type === 'theme') ?
				<div className='app-float-btn-theme-circle'></div> :
				<span><i className='icofont-notification'></i></span>
			}
		</div>
	</FloatBtnCont>
)

export default FloatBtn
