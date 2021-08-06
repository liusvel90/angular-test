import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RelojComponent } from './reloj.component';
import { CronometroComponent } from './components/cronometro/cronometro.component';
import { TimerComponent } from './components/timer/timer.component';
import { ClockComponent } from './components/clock/clock.component';
import * as i0 from "@angular/core";
export class RelojModule {
}
RelojModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.1.5", ngImport: i0, type: RelojModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
RelojModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "12.1.5", ngImport: i0, type: RelojModule, declarations: [RelojComponent,
        CronometroComponent,
        TimerComponent,
        ClockComponent], imports: [BrowserModule], exports: [RelojComponent,
        CronometroComponent,
        TimerComponent,
        ClockComponent] });
RelojModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "12.1.5", ngImport: i0, type: RelojModule, imports: [[
            BrowserModule
        ]] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.1.5", ngImport: i0, type: RelojModule, decorators: [{
            type: NgModule,
            args: [{
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
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVsb2oubW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vcHJvamVjdHMvcmVsb2ovc3JjL2xpYi9yZWxvai5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFFMUQsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBQ25ELE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLDhDQUE4QyxDQUFDO0FBQ25GLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxvQ0FBb0MsQ0FBQztBQUNwRSxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sb0NBQW9DLENBQUM7O0FBcUJwRSxNQUFNLE9BQU8sV0FBVzs7d0dBQVgsV0FBVzt5R0FBWCxXQUFXLGlCQWZwQixjQUFjO1FBQ2QsbUJBQW1CO1FBQ25CLGNBQWM7UUFDZCxjQUFjLGFBR2QsYUFBYSxhQUdiLGNBQWM7UUFDZCxtQkFBbUI7UUFDbkIsY0FBYztRQUNkLGNBQWM7eUdBR0wsV0FBVyxZQVZiO1lBQ1AsYUFBYTtTQUNkOzJGQVFVLFdBQVc7a0JBakJ2QixRQUFRO21CQUFDO29CQUNSLFlBQVksRUFBRTt3QkFDWixjQUFjO3dCQUNkLG1CQUFtQjt3QkFDbkIsY0FBYzt3QkFDZCxjQUFjO3FCQUNmO29CQUNELE9BQU8sRUFBRTt3QkFDUCxhQUFhO3FCQUNkO29CQUNELE9BQU8sRUFBRTt3QkFDUCxjQUFjO3dCQUNkLG1CQUFtQjt3QkFDbkIsY0FBYzt3QkFDZCxjQUFjO3FCQUNmO2lCQUNGIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEJyb3dzZXJNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9wbGF0Zm9ybS1icm93c2VyJztcblxuaW1wb3J0IHsgUmVsb2pDb21wb25lbnQgfSBmcm9tICcuL3JlbG9qLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBDcm9ub21ldHJvQ29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL2Nyb25vbWV0cm8vY3Jvbm9tZXRyby5jb21wb25lbnQnO1xuaW1wb3J0IHsgVGltZXJDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvdGltZXIvdGltZXIuY29tcG9uZW50JztcbmltcG9ydCB7IENsb2NrQ29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL2Nsb2NrL2Nsb2NrLmNvbXBvbmVudCc7XG5cblxuXG5ATmdNb2R1bGUoe1xuICBkZWNsYXJhdGlvbnM6IFtcbiAgICBSZWxvakNvbXBvbmVudCxcbiAgICBDcm9ub21ldHJvQ29tcG9uZW50LFxuICAgIFRpbWVyQ29tcG9uZW50LFxuICAgIENsb2NrQ29tcG9uZW50XG4gIF0sXG4gIGltcG9ydHM6IFtcbiAgICBCcm93c2VyTW9kdWxlXG4gIF0sXG4gIGV4cG9ydHM6IFtcbiAgICBSZWxvakNvbXBvbmVudCxcbiAgICBDcm9ub21ldHJvQ29tcG9uZW50LFxuICAgIFRpbWVyQ29tcG9uZW50LFxuICAgIENsb2NrQ29tcG9uZW50XG4gIF1cbn0pXG5leHBvcnQgY2xhc3MgUmVsb2pNb2R1bGUgeyB9XG4iXX0=