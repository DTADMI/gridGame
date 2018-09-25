import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgReduxModule, NgRedux } from '@angular-redux/store';

import { RouterModule } from '@angular/router';
import { routes } from './app.routes';

import { CoreModule } from './core/core.module';
import { FeaturesModule } from './features/features.module';
import { StoreModule } from './store/store.module';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FeaturesModule,
    NgReduxModule,
    RouterModule.forRoot(routes),
    CoreModule,
    StoreModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
