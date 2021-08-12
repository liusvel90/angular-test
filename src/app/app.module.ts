import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// import {RelojModule} from 'reloj';

import {RelojModule} from './../../projects/reloj/src/public-api';
import {CalendarioModule} from './../../projects/calendario/src/public-api';
import {WizardModule} from './../../projects/wizard/src/public-api';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RelojModule,
    CalendarioModule,
    WizardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
