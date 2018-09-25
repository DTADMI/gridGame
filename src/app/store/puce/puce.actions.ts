import { Injectable } from '@angular/core';
import { NgRedux } from '@angular-redux/store';
import { RootState } from '../root';
import { Subscription } from 'rxjs';

import { PuceService } from '../../core/puce/puce.service';
import { Puce } from '../../core/models/puce';

export const PUCE = {
	GET_PUCES: 'PUCE_GET_PUCES',
	SELECT_PUCE: 'PUCE_SELECT_PUCE'
}

@Injectable()
export class PuceActions{
	constructor(
		private ngRedux: NgRedux<RootState>,
		private puceService: PuceService
		){}

	getPuces = (): Subscription => {
		return this.puceService.getPuces().subscribe((puces: Puce[]) => {
			this.ngRedux.dispatch({
				type: PUCE.GET_PUCES,
				puces
			});
		});
	}

	selectPuce = (puce: Puce) => {
		this.ngRedux.dispatch({
			type: PUCE.SELECT_PUCE,
			puce
		});
	}
}