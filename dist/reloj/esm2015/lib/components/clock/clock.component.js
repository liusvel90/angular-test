import { Component } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
export class ClockComponent {
    constructor() {
        this.reloj = Date.now();
    }
    ngOnInit() {
        setInterval(() => {
            this.reloj = Date.now();
        }, 1000);
    }
}
ClockComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.1.5", ngImport: i0, type: ClockComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
ClockComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.1.5", type: ClockComponent, selector: "rlj-clock", ngImport: i0, template: "<div class=\"reloj\">\n\t<span>{{reloj|date:'hh:mm:ss a'}}</span>\n</div>\n", styles: [".reloj{width:220px;font-size:35px;text-align:center;font-family:\"Share Tech Mono\";color:#daf6ff;background:#2d2a35e8;text-shadow:0 0 20px rgb(9 242 17),0 0 20px rgb(10 175 230 / 0%);border-radius:5px}\n"], pipes: { "date": i1.DatePipe } });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.1.5", ngImport: i0, type: ClockComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'rlj-clock',
                    templateUrl: './clock.component.html',
                    styleUrls: ['./clock.component.css']
                }]
        }], ctorParameters: function () { return []; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2xvY2suY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvcmVsb2ovc3JjL2xpYi9jb21wb25lbnRzL2Nsb2NrL2Nsb2NrLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL3JlbG9qL3NyYy9saWIvY29tcG9uZW50cy9jbG9jay9jbG9jay5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFVLE1BQU0sZUFBZSxDQUFDOzs7QUFPbEQsTUFBTSxPQUFPLGNBQWM7SUFFekI7UUFFQSxVQUFLLEdBQVcsSUFBSSxDQUFDLEdBQUcsRUFBRSxDQUFDO0lBRlgsQ0FBQztJQUlqQixRQUFRO1FBQ04sV0FBVyxDQUFDLEdBQUUsRUFBRTtZQUNkLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLEdBQUcsRUFBRSxDQUFDO1FBQzFCLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQztJQUNYLENBQUM7OzJHQVZVLGNBQWM7K0ZBQWQsY0FBYyxpRENQM0IsNkVBR0E7MkZESWEsY0FBYztrQkFMMUIsU0FBUzttQkFBQztvQkFDVCxRQUFRLEVBQUUsV0FBVztvQkFDckIsV0FBVyxFQUFFLHdCQUF3QjtvQkFDckMsU0FBUyxFQUFFLENBQUMsdUJBQXVCLENBQUM7aUJBQ3JDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAncmxqLWNsb2NrJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2Nsb2NrLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vY2xvY2suY29tcG9uZW50LmNzcyddXG59KVxuZXhwb3J0IGNsYXNzIENsb2NrQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuICBjb25zdHJ1Y3RvcigpIHsgfVxuXG4gIHJlbG9qOiBudW1iZXIgPSBEYXRlLm5vdygpO1xuXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIHNldEludGVydmFsKCgpPT4ge1xuICAgICAgdGhpcy5yZWxvaiA9IERhdGUubm93KCk7XG4gICAgfSwgMTAwMCk7XG4gIH1cblxufVxuIiwiPGRpdiBjbGFzcz1cInJlbG9qXCI+XG5cdDxzcGFuPnt7cmVsb2p8ZGF0ZTonaGg6bW06c3MgYSd9fTwvc3Bhbj5cbjwvZGl2PlxuIl19