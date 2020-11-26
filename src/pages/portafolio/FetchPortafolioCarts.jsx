import React from 'react';
// import { ctx } from './../../store';

import { API_REST_URL } from './../../components/constans';

const FetchPortafolioCarts = () => {
	fetch(API_REST_URL).then(dataCrud => {
		return dataCrud.json()
	})
}

export default FetchPortafolioCarts;
