import { Component } from '@angular/core';
import * as i0 from "@angular/core";
export class TimerComponent {
    constructor() {
        this.timerVal = '00:00:00';
        this.tick = null;
    }
    ngOnInit() { }
    iniciar(e) {
        this.timerVal = e;
        let partes = this.timerVal.split(':');
        let duration = Math.floor(partes[0]) * 3600 + Math.floor(partes[1]) * 60 + Math.floor(partes[2]);
        let timer = duration;
        let hora;
        let minutes;
        let seconds;
        if (e == '00:00:00') {
            alert('Seleccione el tiempo');
            return;
        }
        this.tick = setInterval(() => {
            hora = Math.floor(timer / 3600);
            minutes = Math.floor((timer - (hora * 3600)) / 60);
            seconds = Math.floor(timer % 60);
            hora = hora < 10 ? "0" + hora : hora;
            minutes = minutes < 10 ? "0" + minutes : minutes;
            seconds = seconds < 10 ? "0" + seconds : seconds;
            this.timerVal = hora + ":" + minutes + ":" + seconds;
            timer--;
            if (timer < 0) {
                // timer = duration;
                this.timerVal = '00:00:00';
                this.reset();
                alert('Se acabo el tipo !!!');
            }
        }, 1000);
    }
    pausa() {
        clearInterval(this.tick);
        this.tick = null;
    }
    reset() {
        clearInterval(this.tick);
        this.timerVal = '00:00:00';
        this.tick = null;
    }
}
TimerComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.1.5", ngImport: i0, type: TimerComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
TimerComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.1.5", type: TimerComponent, selector: "rlj-timer", ngImport: i0, template: "<div>\n\t<input type=\"time\" id=\"appt\" name=\"appt\"\n\tstep=\"1\" [value]=\"timerVal\" #timerElement required>\n\n\t<ul id=\"buttons\">\n\t\t<!-- <li><button (click)=\"iniciar(timerElement.value)\" >Iniciar</button></li> -->\n\t\t<li><button (click)=\"tick==null?iniciar(timerElement.value):pausa()\">{{tick==null?'Iniciar':'Pausa'}}</button></li>\n\t\t<li><button (click)=\"reset()\">Reset</button></li>\n\t</ul>\n</div>", styles: ["div{display:flex}input{margin:17px 0}ul#buttons{list-style:none;display:flex;align-items:center;justify-content:center;padding:0}ul#buttons button{background:#0f62fe;border:1px solid;width:100px;color:#fff;font-size:18px;text-align:left;display:block;padding:10px 0 10px 20px;cursor:pointer}\n"] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.1.5", ngImport: i0, type: TimerComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'rlj-timer',
                    templateUrl: './timer.component.html',
                    styleUrls: ['./timer.component.css']
                }]
        }], ctorParameters: function () { return []; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGltZXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvcmVsb2ovc3JjL2xpYi9jb21wb25lbnRzL3RpbWVyL3RpbWVyLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL3JlbG9qL3NyYy9saWIvY29tcG9uZW50cy90aW1lci90aW1lci5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFVLE1BQU0sZUFBZSxDQUFDOztBQVNsRCxNQUFNLE9BQU8sY0FBYztJQUN6QjtRQUlBLGFBQVEsR0FBVyxVQUFVLENBQUM7UUFDOUIsU0FBSSxHQUFRLElBQUksQ0FBQTtJQUxBLENBQUM7SUFFakIsUUFBUSxLQUFVLENBQUM7SUFLbkIsT0FBTyxDQUFDLENBQUs7UUFDWCxJQUFJLENBQUMsUUFBUSxHQUFHLENBQUMsQ0FBQTtRQUVqQixJQUFJLE1BQU0sR0FBUSxJQUFJLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQTtRQUUxQyxJQUFJLFFBQVEsR0FBUSxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFDLElBQUksR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFDLEVBQUUsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFBO1FBRWpHLElBQUksS0FBSyxHQUFRLFFBQVEsQ0FBQTtRQUN6QixJQUFJLElBQVMsQ0FBQTtRQUNiLElBQUksT0FBWSxDQUFBO1FBQ2hCLElBQUksT0FBWSxDQUFBO1FBRWhCLElBQUksQ0FBQyxJQUFJLFVBQVUsRUFBQztZQUFDLEtBQUssQ0FBQyxzQkFBc0IsQ0FBQyxDQUFDO1lBQUMsT0FBTTtTQUFDO1FBRTNELElBQUksQ0FBQyxJQUFJLEdBQUcsV0FBVyxDQUFDLEdBQUcsRUFBRTtZQUUzQixJQUFJLEdBQU0sSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLEdBQUMsSUFBSSxDQUFDLENBQUM7WUFDakMsT0FBTyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxLQUFLLEdBQUMsQ0FBQyxJQUFJLEdBQUMsSUFBSSxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQztZQUMvQyxPQUFPLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLEdBQUcsRUFBRSxDQUFDLENBQUM7WUFFakMsSUFBSSxHQUFNLElBQUksR0FBRyxFQUFFLENBQUMsQ0FBQyxDQUFDLEdBQUcsR0FBRyxJQUFJLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBRTtZQUN6QyxPQUFPLEdBQUcsT0FBTyxHQUFHLEVBQUUsQ0FBQyxDQUFDLENBQUMsR0FBRyxHQUFHLE9BQU8sQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDO1lBQ2pELE9BQU8sR0FBRyxPQUFPLEdBQUcsRUFBRSxDQUFDLENBQUMsQ0FBQyxHQUFHLEdBQUcsT0FBTyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUM7WUFFakQsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLEdBQUcsR0FBRyxHQUFHLE9BQU8sR0FBRyxHQUFHLEdBQUcsT0FBTyxDQUFDO1lBRXJELEtBQUssRUFBRyxDQUFBO1lBQ1IsSUFBSSxLQUFLLEdBQUcsQ0FBQyxFQUFFO2dCQUNiLG9CQUFvQjtnQkFDcEIsSUFBSSxDQUFDLFFBQVEsR0FBRyxVQUFVLENBQUM7Z0JBQzNCLElBQUksQ0FBQyxLQUFLLEVBQUUsQ0FBQTtnQkFDWixLQUFLLENBQUMsc0JBQXNCLENBQUMsQ0FBQTthQUM5QjtRQUNILENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQTtJQUVWLENBQUM7SUFFRCxLQUFLO1FBQ0gsYUFBYSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUN6QixJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQTtJQUNsQixDQUFDO0lBRUQsS0FBSztRQUNILGFBQWEsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDekIsSUFBSSxDQUFDLFFBQVEsR0FBRyxVQUFVLENBQUM7UUFDM0IsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUE7SUFDbEIsQ0FBQzs7MkdBdERVLGNBQWM7K0ZBQWQsY0FBYyxpRENUM0IsMmFBU007MkZEQU8sY0FBYztrQkFQMUIsU0FBUzttQkFBQztvQkFDVCxRQUFRLEVBQUUsV0FBVztvQkFDckIsV0FBVyxFQUFFLHdCQUF3QjtvQkFDckMsU0FBUyxFQUFFLENBQUMsdUJBQXVCLENBQUM7aUJBQ3JDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAncmxqLXRpbWVyJyxcbiAgdGVtcGxhdGVVcmw6ICcuL3RpbWVyLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vdGltZXIuY29tcG9uZW50LmNzcyddXG59KVxuXG5cbmV4cG9ydCBjbGFzcyBUaW1lckNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIGNvbnN0cnVjdG9yKCkgeyB9XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7fVxuXG4gIHRpbWVyVmFsOiBzdHJpbmcgPSAnMDA6MDA6MDAnO1xuICB0aWNrOiBhbnkgPSBudWxsXG5cbiAgaW5pY2lhcihlOmFueSkge1xuICAgIHRoaXMudGltZXJWYWwgPSBlXG4gICAgXG4gICAgbGV0IHBhcnRlczogYW55ID0gdGhpcy50aW1lclZhbC5zcGxpdCgnOicpXG5cbiAgICBsZXQgZHVyYXRpb246IGFueSA9IE1hdGguZmxvb3IocGFydGVzWzBdKSozNjAwICsgTWF0aC5mbG9vcihwYXJ0ZXNbMV0pKjYwICsgTWF0aC5mbG9vcihwYXJ0ZXNbMl0pXG4gICAgXG4gICAgbGV0IHRpbWVyOiBhbnkgPSBkdXJhdGlvbiBcbiAgICBsZXQgaG9yYTogYW55XG4gICAgbGV0IG1pbnV0ZXM6IGFueVxuICAgIGxldCBzZWNvbmRzOiBhbnlcblxuICAgIGlmIChlID09ICcwMDowMDowMCcpe2FsZXJ0KCdTZWxlY2Npb25lIGVsIHRpZW1wbycpOyByZXR1cm59XG5cbiAgICB0aGlzLnRpY2sgPSBzZXRJbnRlcnZhbCgoKSA9PiB7XG5cbiAgICAgIGhvcmEgICAgPSBNYXRoLmZsb29yKHRpbWVyLzM2MDApO1xuICAgICAgbWludXRlcyA9IE1hdGguZmxvb3IoKHRpbWVyLShob3JhKjM2MDApKSAvIDYwKTtcbiAgICAgIHNlY29uZHMgPSBNYXRoLmZsb29yKHRpbWVyICUgNjApO1xuXG4gICAgICBob3JhICAgID0gaG9yYSA8IDEwID8gXCIwXCIgKyBob3JhIDogaG9yYSA7XG4gICAgICBtaW51dGVzID0gbWludXRlcyA8IDEwID8gXCIwXCIgKyBtaW51dGVzIDogbWludXRlcztcbiAgICAgIHNlY29uZHMgPSBzZWNvbmRzIDwgMTAgPyBcIjBcIiArIHNlY29uZHMgOiBzZWNvbmRzO1xuXG4gICAgICB0aGlzLnRpbWVyVmFsID0gaG9yYSArIFwiOlwiICsgbWludXRlcyArIFwiOlwiICsgc2Vjb25kcztcblxuICAgICAgdGltZXIgLS1cbiAgICAgIGlmICh0aW1lciA8IDApIHtcbiAgICAgICAgLy8gdGltZXIgPSBkdXJhdGlvbjtcbiAgICAgICAgdGhpcy50aW1lclZhbCA9ICcwMDowMDowMCc7XG4gICAgICAgIHRoaXMucmVzZXQoKVxuICAgICAgICBhbGVydCgnU2UgYWNhYm8gZWwgdGlwbyAhISEnKVxuICAgICAgfVxuICAgIH0sIDEwMDApXG5cbiAgfVxuXG4gIHBhdXNhKCl7XG4gICAgY2xlYXJJbnRlcnZhbCh0aGlzLnRpY2spO1xuICAgIHRoaXMudGljayA9IG51bGxcbiAgfVxuXG4gIHJlc2V0KCl7XG4gICAgY2xlYXJJbnRlcnZhbCh0aGlzLnRpY2spO1xuICAgIHRoaXMudGltZXJWYWwgPSAnMDA6MDA6MDAnO1xuICAgIHRoaXMudGljayA9IG51bGwgICAgXG4gIH1cblxuXG59IiwiPGRpdj5cblx0PGlucHV0IHR5cGU9XCJ0aW1lXCIgaWQ9XCJhcHB0XCIgbmFtZT1cImFwcHRcIlxuXHRzdGVwPVwiMVwiIFt2YWx1ZV09XCJ0aW1lclZhbFwiICN0aW1lckVsZW1lbnQgcmVxdWlyZWQ+XG5cblx0PHVsIGlkPVwiYnV0dG9uc1wiPlxuXHRcdDwhLS0gPGxpPjxidXR0b24gKGNsaWNrKT1cImluaWNpYXIodGltZXJFbGVtZW50LnZhbHVlKVwiID5JbmljaWFyPC9idXR0b24+PC9saT4gLS0+XG5cdFx0PGxpPjxidXR0b24gKGNsaWNrKT1cInRpY2s9PW51bGw/aW5pY2lhcih0aW1lckVsZW1lbnQudmFsdWUpOnBhdXNhKClcIj57e3RpY2s9PW51bGw/J0luaWNpYXInOidQYXVzYSd9fTwvYnV0dG9uPjwvbGk+XG5cdFx0PGxpPjxidXR0b24gKGNsaWNrKT1cInJlc2V0KClcIj5SZXNldDwvYnV0dG9uPjwvbGk+XG5cdDwvdWw+XG48L2Rpdj4iXX0=