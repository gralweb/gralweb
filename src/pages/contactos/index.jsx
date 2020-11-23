import React from 'react';

// Componentes
import ContactFormArea from './ContactFormArea';

const ContactForm = () => {
	return (
		<div className='app-main-cont'>
			<div className='app-contac-form'>
	            <div className='app-form-title'>
	                <h1>Contactanos</h1>
	            </div>

	            <div className='app-form-cont'>
	                <form 
	                	id='app-form' className='app-form' 
	                	method='post' onSubmit={ () => null }
	                >
	                    <ContactFormArea
	                    	label='Nombre' type='text' 
	                    	required={ true } name='nombre'
	                    />

	                    <ContactFormArea
	                    	label='Apellido' type='text' 
	                    	required={ false } name='nombre' 
	                    />

	                    <ContactFormArea
	                    	label='Correo' type='text' 
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
	                        </button>
	                    </div>
	                </form>
	            </div>
	        </div>
        </div>
	);
}

export default ContactForm;
