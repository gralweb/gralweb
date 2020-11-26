import React from 'react';

const RenderBiografia = () => {
  	return (
        <div className='app-main-cont'>
      		<div className='app-bio'>
                <div className='app-bio-cont-foto'>
                    <span className='icofont-robot-face app-bio-sep'></span>
                    <img className='app-bio-foto' src='http://localhost:3000/logo/face.jpg' alt='Foto George Alviarez' />
                </div>
                <div className='app-bio-cont-text'>
                    <p className='app-bio-text'>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </p>
                    <p className='app-bio-text'>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </p>
                </div>
            </div>
        </div>
  	);
}

export default RenderBiografia;
