import { contactFormValidate, contactFormValidateAlert } from './ContactFormValidate'

const procesarForm = e => {
	e.preventDefault()
	const formulario = e.currentTarget

	const datos = {
		nombre: formulario[0].value,
		apellido: formulario[1].value,
		correo: formulario[2].value,
		tlf: formulario[3].value,
		msj: formulario[4].value,
	}

	const datosValid = contactFormValidate(datos)

	if (datosValid.length) {
		contactFormValidateAlert(datosValid, formulario, datos)	
	} else {
		contactFormValidateAlert(datosValid, formulario, datos).then(resp => {
			if (resp.estado === 'mail_enviado') {
				for (let i = 0; i < formulario.length; i++) {
					formulario[i].parentElement.parentElement.classList.add('processValid')
				}

				formulario[5].parentElement.classList.remove('process')
				// Colocando el color Verde al BTN cuando los datos son correctos
				formulario[5].classList.add('processValid')

				// Intercambiando los Iconos de Send por el de Check
				formulario[5].children[0].classList.add('process')
				formulario[5].children[1].classList.add('process')

				// Delay para quitar los estilos de Validacion Correcta
				setTimeout(() => {
					for (let i = 0; i < formulario.length; i++) {
						formulario[i].parentElement.parentElement.classList.remove('focus-in-te')
						formulario[i].parentElement.parentElement.classList.remove('processValid')
						formulario[i].value = ''
					}

					// Quitando el color Verde al BTN cuando los datos son correctos
					formulario[5].classList.remove('processValid')

					// Intercambiando los Iconos de Check por el de Send
					formulario[5].children[0].classList.remove('process')
					formulario[5].children[1].classList.remove('process')
				}, 1400)

				// Quitando el Loader de envio del mensaje
				formulario.lastChild.classList.remove('process')
			} else if (resp.estado === 'err_datos') {
				if (resp.nombre === '') {
					formulario[0].parentElement.parentElement.classList.add('error')
					formulario[0].parentElement.parentElement.classList.add('focus-in-te')
				}

				if (resp.correo === '') {
					formulario[2].parentElement.parentElement.classList.add('error')
					formulario[2].parentElement.parentElement.classList.add('focus-in-te')
				}

				if (resp.msj === '') {
					formulario[4].parentElement.parentElement.classList.add('error')
					formulario[4].parentElement.parentElement.classList.add('focus-in-te')
				}

				formulario[5].parentElement.classList.remove('process')

				// Intercambiando los Iconos de Send por el de Error
				formulario[5].children[0].classList.add('process')
				formulario[5].children[2].classList.add('process')

				// Delay para quitar los estilos de Validacion Incorrecta
				setTimeout(() => {
					// Intercambiando los Iconos de Error por el de Send
					formulario[5].children[0].classList.remove('process')
					formulario[5].children[2].classList.remove('process')
				}, 1500)

				// Quitando el Loader de envio del mensaje
				formulario.lastChild.classList.remove('process')
			}
		}).catch(err => {
			console.log('error en la conexion', err)
		})
	}
}

export default procesarForm
