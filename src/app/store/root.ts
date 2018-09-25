import { defaultNiveauState } from './niveau/niveau.reducer';
import { defaultPuceState } from './puce/puce.reducer';

import { Niveau } from '../core/models/niveau';
import { Puce } from '../core/models/puce';

export interface NiveauState{
	niveau: Niveau;
}

export interface PuceState{
	puces: Puce[];
}

export interface RootState {
	niveauReducer: NiveauState;
	puceReducer: PuceState;
}

export const defaultState: RootState = {
	niveauReducer: defaultNiveauState,
	puceReducer: defaultPuceState
}
