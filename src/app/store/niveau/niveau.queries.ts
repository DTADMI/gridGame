import { RootState } from '../root';

export function generateNiveau(state: RootState){
	return state.niveauReducer.niveau;
};

export function nextNiveau(state: RootState){
	return state.niveauReducer.niveau;
};

export function previousNiveau(state: RootState){
	return state.niveauReducer.niveau;
};