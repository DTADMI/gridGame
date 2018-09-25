import { Routes } from '@angular/router';

import { PucesFeatureComponent } from './features/puces-feature/puces-feature.component';

export const routes: Routes = [
	{
		path: 'puces',
		component: PucesFeatureComponent
	},
	{
		path: '',
		redirectTo: '/puces',
		pathMatch: 'full'
	},
	{
		path: '**',
		redirectTo: '/puces'
	}
]