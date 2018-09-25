import { RootState } from '../root';

export function getPuces(state: RootState){
	return state.puceReducer.puces;
};

export function countPuces(state: RootState){
	return state.puceReducer.puces.filter(puce => puce.found).length;
}