import { API_URL_PRESENTACION } from './../../components/constans';

const FetchPresentacionCartsData = ( nameCart ) => {
	return (	
		fetch( `${ API_URL_PRESENTACION }?titulo=${ nameCart } ` ).then( dataCrud => {
			return dataCrud.json();
		})
	);
}

export default FetchPresentacionCartsData;
