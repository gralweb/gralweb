import { contactFormValidate, contactFormValidateAlert } from './ContactFormValidate'

const procesarForm = (e, handleConexion) => {
	e.preventDefault()
	const formulario = e.currentTarget

	const datos = {
		nombre: formulario[0].value,
		apellido: formulario[1].value,
		correo: formulario[2].value,
		tlf: formulario[3].value,
		msj: formulario[4].value,
	}

	const api_params = {
		from_name: `Gralweb - Contact - ${datos.nombre}`,
		to_name: "Gralweb",
		message: datos.msj,
		reply_to: datos.correo,
	}

	const datosValid = contactFormValidate(datos)

	if (datosValid.length) {
		contactFormValidateAlert(datosValid, formulario, api_params)	
	} else {
		contactFormValidateAlert(datosValid, formulario, api_params).then(resp => {
			if (resp === 200) {
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
			} else {
				handleConexion()
				formulario[5].parentElement.classList.remove('process')
				formulario.lastChild.classList.remove('process')
			}
		})
	}
}

export default procesarForm
