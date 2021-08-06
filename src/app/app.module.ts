import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import {RelojModule} from 'reloj';

// './../../projects/cards/src/public-api';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RelojModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
