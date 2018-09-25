import { NgModule } from '@angular/core';
import { NgReduxModule, NgRedux, DevToolsExtension } from '@angular-redux/store';

import { RootState, defaultState } from './root';
import {rootReducer } from './rootReducer';
import { environment } from '../../environments/environment';

import { NiveauActions } from './niveau/niveau.actions';
import { PuceActions } from './puce/puce.actions';

@NgModule({
	declarations: [],
	imports: [
		NgReduxModule
	],
	providers: [
		NiveauActions,
		PuceActions
	]
})
export class StoreModule {
	constructor(
		private ngRedux: NgRedux<RootState>,
		private devTools: DevToolsExtension
		){
		let enhancers = [];

		if(!environment.production){
			enhancers = [ ...enhancers, this.devTools.enhancer() ];
		}

		this.ngRedux.configureStore(
			rootReducer,
			defaultState,
			[],
			enhancers
		);
	}
}