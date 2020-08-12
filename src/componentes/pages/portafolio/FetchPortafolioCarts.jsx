import { API_REST_URL } from './../../constans';

function FetchPortafolioCarts () {
	return (
		fetch(API_REST_URL)
		.then(res => {
			const data = res.json()
			return data;
		}).then(datos => {
			return datos;
		})
	)
}

export default FetchPortafolioCarts;
