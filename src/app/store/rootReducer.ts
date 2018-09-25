import { combineReducers } from 'redux';
import { RootState } from './root';

import { niveauReducer } from './niveau/niveau.reducer';
import { puceReducer } from './puce/puce.reducer';

export const rootReducer = combineReducers<RootState>({
	niveauReducer,
	puceReducer
});