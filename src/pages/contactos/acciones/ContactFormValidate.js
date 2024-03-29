import contactFormSend from './ContactFormSend'

const contactFormValidate = ({ nombre, correo, msj  }) => {
	const datosErr = []

	if (!nombre) {
		datosErr.push('nombre')
	}

	if (!correo) {
		
		datosErr.push('correo')

	} else if (!correo.includes('@')) {

		datosErr.push('correoInvalid')
	
	}

	if (!msj) {
		datosErr.push('mensaje')
	}

	return datosErr
}

const contactFormValidateAlert = (datosValid, area, datosSend) => {
	if (datosValid.length) {
		if (datosValid.includes('nombre')) {
			area[0].parentElement.parentElement.classList.add('error')
			area[0].parentElement.parentElement.classList.add('focus-in-te')
		}

		if (datosValid.includes('correo') || datosValid.includes('correoInvalid')) {
			area[2].parentElement.parentElement.classList.add('error')
			area[2].parentElement.parentElement.classList.add('focus-in-te')
		}

		if (datosValid.includes('mensaje')) {
			area[4].parentElement.parentElement.classList.add('error')
			area[4].parentElement.parentElement.classList.add('focus-in-te')
		}
	} else {
		area[5].parentElement.classList.add('process')
		area.lastChild.classList.add('process')
		return contactFormSend(datosSend)
	}
}

export { contactFormValidate, contactFormValidateAlert }
