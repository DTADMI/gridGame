import { NiveauState } from '../root';

import { NIVEAU } from './niveau.actions';

export const defaultNiveauState: NiveauState = {
	niveau: {
		puces:  [],
		level: 1,
		nombreMaxPuces: 1,
		nombrePucesACliquer: 1,
		couleurRecherchee: "blue",
		pret: false,
		hauteur: 50,
		largeur: 50,
		size: 10,
	  	tableau: [[]]
	}
};

export function niveauReducer(state: NiveauState = defaultNiveauState, action){
	switch (action.type) {

		case NIVEAU.GENERATE_NIVEAU:
			return { niveau : action.niveau };
		case NIVEAU.NEXT_NIVEAU:
			return { niveau : action.niveau };
		case NIVEAU.PREVIOUS_NIVEAU:
			return { niveau : action.niveau };
		case NIVEAU.SELECT_PUCE:{
			return { 
				niveau : [ action.niveau ].map(puce => {
					if(puce.full && puce.id === action.puce.id){
						puce.selected = !puce.selected;
						if(puce.couleur == action.niveau.couleurRecherchee){
							puce.found = !puce.found;
						}
					}
					return puce;
				}) 
			};
		}
		default:
			return state;
	}
}