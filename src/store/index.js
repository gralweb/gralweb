/** This is a auto-generated file, please do not modify it */
import { initContext } from '@talpor/react-context-manager';

import { portafolioDataStore } from './portafolioData/store';
import { portafolioDataActions } from './portafolioData/actions';

const store = {
	portafolioData: portafolioDataStore,
};

const actions = {
	portafolioData: portafolioDataActions,
};

const ctx = initContext();

export { actions, ctx, store };
