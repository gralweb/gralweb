import React from 'react';

const Main = props => {
	return (
		<main className="app-main">
			<div className={ "app-main-loader " + props.hiddenLoader } >
			    <div id="app-main-loader" className='app-form-btn-load process'></div>
			</div>
			<div className="app-main-cont">
				{props.children}
			</div>
		</main>
	);
}

export default Main;
