import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { RelojComponent } from './reloj.component';
import { CronometroComponent } from './components/cronometro/cronometro.component';
import { TimerComponent } from './components/timer/timer.component';
import { ClockComponent } from './components/clock/clock.component';



@NgModule({
  declarations: [
    RelojComponent,
    CronometroComponent,
    TimerComponent,
    ClockComponent
  ],
  imports: [
    BrowserModule
  ],
  exports: [
    RelojComponent,
    CronometroComponent,
    TimerComponent,
    ClockComponent
  ]
})
export class RelojModule { }
