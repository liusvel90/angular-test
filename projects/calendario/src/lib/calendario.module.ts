import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CalendarioComponent } from './calendario.component';



@NgModule({
  declarations: [
    CalendarioComponent
  ],
  imports: [
    BrowserModule
  ],
  exports: [
    CalendarioComponent
  ]
})
export class CalendarioModule { }
