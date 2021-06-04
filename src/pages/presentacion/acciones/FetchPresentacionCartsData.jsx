import { API_URL_PRESENTACION } from './../../../components/constans'

const FetchPresentacionCartsData = nameCart => (	
	fetch( `${ API_URL_PRESENTACION }?titulo=${ nameCart }` )
	.then( dataCrud => (
		dataCrud.json()
	))
)

export default FetchPresentacionCartsData
