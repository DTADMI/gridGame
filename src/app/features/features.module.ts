import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; // <-- NgModel lives here
import { RouterModule } from '@angular/router';
import { SharedModule } from '../components/shared.module';

import { PucesFeatureComponent } from './puces-feature/puces-feature.component';

const components = [
	PucesFeatureComponent
];

@NgModule({
	declarations: [ ...components ],
	imports: [
		CommonModule,
		FormsModule,
		SharedModule,
		RouterModule
	],
	exports: [ ...components, SharedModule ],
	providers: []
})
export class FeaturesModule { }