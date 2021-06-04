import { API_URL_SUSCRIPCION } from './../../constans'

const newLetterSend = ({ correo }) => (
	fetch(API_URL_SUSCRIPCION, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/x-www-form-urlencoded'
			},
			body: `email=${correo}`
		}
	)
	.then(resp => (
		resp.json()
	))
)

export default newLetterSend
