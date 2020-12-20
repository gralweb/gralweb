import React, { useState, useEffect } from 'react'

// Componentes
import ContactFormArea from './ContactFormArea'
import procesarForm from './acciones/ContactProcesarForm'

const RenderContactos = ({ headerLocation }) => {
	const [scaleAnim, setScaleAnim] = useState(false)

	useEffect(() => {
		setScaleAnim(true)

        headerLocation.contactos()
    }, [headerLocation])

	return (
		<div className='app-main-cont'>
			<div className={ scaleAnim ? 'app-contac-form app-cont-item-scale' : 'app-contac-form' }>
	            <div className='app-form-title'>
	                <h1>Contactanos</h1>
	            </div>

	            <div className='app-form-cont'>
	                <form 
	                	id='app-form' className='app-form' 
	                	method='post' onSubmit={ e => procesarForm(e) }
	                >
	                    <ContactFormArea
	                    	label='Nombre' type='text' 
	                    	required={ true } name='nombre'
	                    />

	                    <ContactFormArea
	                    	label='Apellido' type='tlf' 
	                    	required={ false } name='nombre' 
	                    />

	                    <ContactFormArea
	                    	label='Correo' type='email' 
	                    	required={ true } name='email' 
	                    />

	                    <ContactFormArea
	                    	label='Teléfono' type='tel' 
	                    	required={ false } name='tlf' 
	                    />

	                    <ContactFormArea
	                    	label='Deja tu mensaje' type='textArea' 
	                    	required={ true } name='mensaje' 
	                    />

	                    <div className='app-form-btn-load'>
	                        <button type='submit' className='app-form-btn'>
	                            <i id='app-form-send' className='icofont-send-mail'></i>
	                            <i id='app-form-check' className='icofont-check'></i>
	                            <i id='app-form-error' className='icofont-close'></i>
	                        </button>
	                    </div>

	                    <div className='app-form-btn-loader'></div>
	                </form>
	            </div>
	        </div>
        </div>
	);
}

export default RenderContactos;
