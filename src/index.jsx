import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Gralweb from './Gralweb';
// import sW from './sW';

// Importacion del Store - State Manager
// import { ContextProvider } from '@talpor/react-context-manager';
// import { actions, context, store } from './store';

	// <ContextProvider actions={  actions } store={ store } context={ context } >
	// </ContextProvider>,
ReactDOM.render(
	<Gralweb />,
	document.getElementById('root')
);

// Iniciando el service Worker
// sW();
