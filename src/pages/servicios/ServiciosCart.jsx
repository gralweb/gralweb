import React from 'react';

const ServiciosCart = props => {
	const { scaleAnim, plan, estilo, precio } = props
	const { serUno, serDos, serTres, serCuatro, serCinco } = props

	return (
		<div className={ `app-cont-item app-serv-item ${scaleAnim}` }>
            <figure className='app-item-serv-title'>
                <p>{ plan }</p>
            </figure>
            <figcaption className={ `app-item-serv-cont ${estilo}` }>
                <ul>
                    <li className='app-serv-precio'><i className='icofont-dollar'></i><span>{ precio }</span></li>
                    <li><i className='icofont-check-alt'></i> <span> { serUno }</span></li>
                    <li><i className='icofont-check-alt'></i> <span> { serDos }</span></li>
                    <li><i className='icofont-check-alt'></i> <span> { serTres }</span></li>
                    <li><i className='icofont-check-alt'></i> <span> { serCuatro }</span></li>
                    <li className='app-serv-last'><i className='icofont-check-alt'></i> <span> { serCinco }</span></li>
                </ul>
            </figcaption>
        </div>
	);
}

export default ServiciosCart;
