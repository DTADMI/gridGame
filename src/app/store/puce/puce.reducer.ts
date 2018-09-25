import { PuceState } from '../root';

import { PUCE } from './puce.actions';

export const defaultPuceState: PuceState = {
	puces: []
};

export function puceReducer(state: PuceState = defaultPuceState, action){
	switch (action.type) {
		case PUCE.GET_PUCES:
			return { puces : action.puces };
		case PUCE.SELECT_PUCE:{
			return { 
				puces : [ ...action.puces ].map(puce => {
					if(puce.id === action.puce.id){
						puce.selected = !puce.selected;
					}
					return puce;
				}) 
			};
		}
		default:
			return state;
	}
}