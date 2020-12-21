import React, { useState, useEffect } from 'react'

// Componentes
import PopUpConexion from './../../components/PopUpConexion'
import ContactFormArea from './ContactFormArea'
import procesarForm from './acciones/ContactProcesarForm'

const RenderContactos = ({ headerLocation }) => {
	const [scaleAnim, setScaleAnim] = useState(false)
	const [ conexionError, setConexionError ] = useState(false)

	const PopUp = () => {
		return (
			(conexionError) ? <PopUpConexion active={conexionError} locacion='contactos' /> : null
		)
	}

	const handleStateConexion = () => {
		setConexionError(!conexionError)
	}

	useEffect(() => {
		setScaleAnim(true)

        headerLocation.contactos()

        if (conexionError) {
        	setTimeout(() => {
				handleStateConexion()
			}, 2000)
        }

    }, [ headerLocation, conexionError ])

	return (
		<div className='app-main-cont'>
			{
				PopUp()
			}
			<div className={ scaleAnim ? 'app-contac-form app-cont-item-scale' : 'app-contac-form' }>
	            <div className='app-form-title'>
	                <h1>Contáctanos</h1>
	            </div>

	            <div className='app-form-cont'>
	                <form 
	                	id='app-form' className='app-form' 
	                	method='post' onSubmit={ e => procesarForm(e, handleStateConexion) }
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
