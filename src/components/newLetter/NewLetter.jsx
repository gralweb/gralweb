import React, { useState, useEffect, useCallback } from 'react'

// Componentes
import PopUpConexion from './../PopUpConexion'
import newLetterValidate from './acciones/newLetterValidate'

const NewLetter = ({ newLettersOpen }) => {
	const [ conexionError, setConexionError ] = useState(false)

	const PopUp = () => (
		(conexionError) ? <PopUpConexion active={conexionError} locacion='contactos' /> : null
	)

	const handleStateConexion = useCallback(
		() => {
			setConexionError(!conexionError)
		},
		[ setConexionError, conexionError ],
	)

	useEffect(() => {
        if (conexionError) {
			setTimeout(() => {
				handleStateConexion()
			}, 2000)
        }
    }, [ conexionError, handleStateConexion ])

	return (
		<div className={ `app-new-letter-cont ${(newLettersOpen) ? 'open' : ''}` }>
			{
				PopUp()
			}

			<div className='app-new-letter-msj'>
				<p>
					Suscríbete con tu correo electrónico y recibe las últimas novedades de gralweb.com
				</p>
			</div>

			<form 
				className='app-new-letter-form'
				method='post'
				onSubmit={ e => newLetterValidate(e, handleStateConexion) }
			>
				<div className='app-new-letter-input'>
					<input type='email' placeholder='Correo' />
				</div>

				<div className='app-new-letter-btn'>
					<button type='submit'>
						<i id='app-new-letter-send' className='icofont-send-mail'></i>
					</button>
				</div>

				<div className='app-new-letter-loader-cont'>
					<div className='app-new-letter-loader'></div>

					<div className='app-new-letter-check'>
						<i id='app-new-letter-check' className='icofont-check'></i>
                        <i id='app-new-letter-error' className='icofont-close'></i>
					</div>
				</div>

				<div className='app-new-letter-err-email'>
					<p>
						Ingresa un correo válido
					</p>
				</div>
			</form>
		</div>
	)
}

export default NewLetter
