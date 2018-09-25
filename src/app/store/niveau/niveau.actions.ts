import { Injectable } from '@angular/core';
import { NgRedux } from '@angular-redux/store';
import { RootState } from '../root';
import { Subscription } from 'rxjs';

import { NiveauService } from '../../core/niveau/niveau.service';
import { Niveau } from '../../core/models/niveau';
import { Puce } from '../../core/models/puce';

export const NIVEAU = {
	GENERATE_NIVEAU: 'NIVEAU_GET_NIVEAU',
	NEXT_NIVEAU: 'NIVEAU_NEXT_NIVEAU',
	PREVIOUS_NIVEAU: 'NIVEAU_PREVIOUS_NIVEAU',
	SELECT_PUCE: 'NIVEAU_SELECT_PUCE'
}

@Injectable()
export class NiveauActions{
	constructor(
		private ngRedux: NgRedux<RootState>,
		private niveauService: NiveauService
		){}

	generateNiveau = (level: number): Subscription => {
		return this.niveauService.getNiveau(level).subscribe((niveau: Niveau) => {
			this.ngRedux.dispatch({
				type: NIVEAU.GENERATE_NIVEAU,
				niveau
			});
		});
	}

	nextNiveau = (niveau: Niveau) => {
		this.ngRedux.dispatch({
			type: NIVEAU.NEXT_NIVEAU,
			niveau
		});
	}

	previousNiveau = (niveau: Niveau) => {
		this.ngRedux.dispatch({
			type: NIVEAU.PREVIOUS_NIVEAU,
			niveau
		});
	}

	selectPuce = (puce: Puce) => {
		this.ngRedux.dispatch({
			type: NIVEAU.SELECT_PUCE,
			puce
		});
	}
}