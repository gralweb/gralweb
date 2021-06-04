import { API_URL_CONTACTOS } from './../../../components/constans'

const contactFormSend = ({ nombre, apellido, correo, tlf, msj }) => (
	fetch(
		API_URL_CONTACTOS,
		{
			method: 'POST',
			headers: {
				'Content-Type': 'application/x-www-form-urlencoded'
			},
			body: `nombre=${ nombre }&apellido=${ apellido }&correo=${ correo }&tlf=${ tlf }&msj=${ msj }`
		}
	).then(resp => (
		resp.json()
	))
)

export default contactFormSend
