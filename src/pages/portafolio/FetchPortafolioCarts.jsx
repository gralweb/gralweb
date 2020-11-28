import {  API_URL_CARTS  } from './../../components/constans';

const FetchPortafolioCarts = () => {
	return (
		fetch( API_URL_CARTS ).then( dataCrud => {
			return dataCrud.json()
		})
	);
}

export default FetchPortafolioCarts;
