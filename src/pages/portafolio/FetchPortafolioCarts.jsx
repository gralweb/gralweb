import {  API_URL_CARTS  } from './../../components/constans';

const FetchPortafolioCarts = page => {
	const url = (page) ? `${API_URL_CARTS}?p=${page}` : API_URL_CARTS
	return (
		fetch(url).then( dataCrud => {
			return dataCrud.json()
		})
	);
}

export default FetchPortafolioCarts;
