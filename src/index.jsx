import React from 'react';
import ReactDOM from 'react-dom';
// Importando fuentes personalizadas
import './dependencias/textFonts.css';

import './index.css';
import Gralweb from './Gralweb';
// import sW from './sW';

// Importacion del Store - State Manager
import { GralwebProvider } from './store'

ReactDOM.render(
	<GralwebProvider>
		<Gralweb />
	</GralwebProvider>,
	document.getElementById('root')
);

// Iniciando el service Worker
// sW();
