import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Gralweb from './Gralweb';
import * as serviceWorker from './serviceWorker';

// Importacion del Store - State Manager
import { ContextProvider } from '@talpor/react-context-manager';
import { actions, ctx, store } from './store';

ReactDOM.render(
	<ContextProvider actions={actions} store={store} context={ctx} >
		<Gralweb />
	</ContextProvider>,
	document.getElementById('root')
);

console.log(ctx);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
