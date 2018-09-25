import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NiveauComponent } from './niveau/niveau.component';
import { PuceComponent } from './puce/puce.component';

const components = [
	NiveauComponent,
	PuceComponent
];

@NgModule({
	declarations: [ ...components ],
	imports: [ CommonModule ],
	exports: [ ...components ],
	providers: []
})
export class SharedModule{}