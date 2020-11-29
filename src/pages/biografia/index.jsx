import React, { useState, useEffect } from 'react';

// Componentes
import { ASSETS_URL } from './../../components/constans'

const RenderBiografia = ({ headerLocation }) => {
    const [animationLoad, setAnimationLoad] = useState(false)

    useEffect(() => {
        setAnimationLoad(true)

        headerLocation.bio()
    }, [headerLocation])

  	return (
        <div className='app-main-cont'>
      		<div className='app-bio'>
                <div className={ animationLoad ? 'app-bio-cont-foto app-bio-cont-foto-anim' : 'app-bio-cont-foto'}>
                    <span className='icofont-robot-face app-bio-sep'></span>
                    <img className='app-bio-foto' src={ `${ ASSETS_URL }/logo/face.jpg` } alt='Foto George Alviarez' />
                </div>
                
                <div className={ animationLoad ? 'app-bio-cont-text app-bio-cont-text-anim' : 'app-bio-cont-text'}>
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
