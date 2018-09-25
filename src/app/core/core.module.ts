import { NgModule } from '@angular/core';

import { HttpClientModule } from '@angular/common/http';

import { PuceService } from './puce/puce.service';

@NgModule({
	declarations: [],
	imports: [ HttpClientModule ],
	exports: [],
	providers: [ PuceService]
})
export class CoreModule {}