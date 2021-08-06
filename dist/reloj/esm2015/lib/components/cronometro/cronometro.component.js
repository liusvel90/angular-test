import { Component } from '@angular/core';
import * as i0 from "@angular/core";
export class CronometroComponent {
    constructor() {
        this.display = '00 : 00 : 00 : 00';
        this.horas = '00';
        this.minutos = '00';
        this.segundos = '00';
        this.milisegundos = '00';
        this.tick = 0;
    }
    ngOnInit() {
    }
    iniciar() {
        clearInterval(this.timer);
        this.timer = setInterval(() => {
            this.tick += 10;
            let dateTimer = new Date(this.tick);
            this.display = ('0' + dateTimer.getUTCHours()).slice(-2) + ' : ' +
                ('0' + dateTimer.getUTCMinutes()).slice(-2) + ' : ' +
                ('0' + dateTimer.getUTCSeconds()).slice(-2) + ' : ' +
                ('0' + dateTimer.getUTCMilliseconds()).slice(-3, -1);
            // this.horas = ('0'+dateTimer.getUTCHours()).slice(-2);
            // this.minutos = ('0'+dateTimer.getUTCMinutes()).slice(-2);
            // this.segundos = ('0'+dateTimer.getUTCSeconds()).slice(-2);
            // this.milisegundos = dateTimer.getUTCMilliseconds();
        }, 10);
    }
    parar() {
        // watch.style.color = "red";
        // this.tick = 0;
        clearInterval(this.timer);
        this.timer = null;
    }
    reset() {
        setInterval(this.timer);
        this.tick = 0;
        this.display = '00 : 00 : 00 : 00';
    }
}
CronometroComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.1.5", ngImport: i0, type: CronometroComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
CronometroComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.1.5", type: CronometroComponent, selector: "rlj-cronometro", ngImport: i0, template: "<div class=\"cronometro\">\n  <div id=\"display\">\n  \t<span>{{display}}</span>  \t\n  </div>\n  <ul id=\"buttons\">\n    <li><button (click)=\"timer==null?iniciar():parar()\">{{timer==null?'Iniciar':'Parar'}}</button></li>\n    <!-- <li><button (click)=\"parar()\">Parar</button></li> -->\n    <li><button (click)=\"reset()\">Reset</button></li>\n  </ul>\n</div>", styles: ["@font-face{font-family:\"Share Tech Mono\";font-style:normal;font-weight:400;src:url(https://fonts.gstatic.com/s/sharetechmono/v10/J7aHnp1uDWRBEqV98dVQztYldFcLowEF.woff2) format(\"woff2\");unicode-range:U+0000-00FF,U+0131,U+0152-0153,U+02BB-02BC,U+02C6,U+02DA,U+02DC,U+2000-206F,U+2074,U+20AC,U+2122,U+2191,U+2193,U+2212,U+2215,U+FEFF,U+FFFD}body{display:flex;align-items:center;justify-content:center;background:#f2f4f6}.cronometro{width:340px;padding:8px;background:#2d2a35e8;box-shadow:0 10px 20px #4040400d;border:1px solid rgb(64 64 64 / 5%);border-radius:20px}#display{font-size:35px;text-align:center;font-family:\"Share Tech Mono\";color:#daf6ff;text-shadow:0 0 20px rgb(9 242 17),0 0 20px rgb(10 175 230 / 0%)}ul#buttons{list-style:none;display:flex;align-items:center;justify-content:center;padding:0;margin-bottom:0}ul#buttons button{background:#0f62fe;border:1px solid;width:100px;color:#fff;font-size:18px;text-align:left;display:block;padding:10px 0 10px 20px;cursor:pointer}\n"] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.1.5", ngImport: i0, type: CronometroComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'rlj-cronometro',
                    templateUrl: './cronometro.component.html',
                    styleUrls: ['./cronometro.component.css']
                }]
        }], ctorParameters: function () { return []; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3Jvbm9tZXRyby5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9yZWxvai9zcmMvbGliL2NvbXBvbmVudHMvY3Jvbm9tZXRyby9jcm9ub21ldHJvLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL3JlbG9qL3NyYy9saWIvY29tcG9uZW50cy9jcm9ub21ldHJvL2Nyb25vbWV0cm8uY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxNQUFNLGVBQWUsQ0FBQzs7QUFPbEQsTUFBTSxPQUFPLG1CQUFtQjtJQUM5QjtRQUtBLFlBQU8sR0FBVSxtQkFBbUIsQ0FBQTtRQUNwQyxVQUFLLEdBQVUsSUFBSSxDQUFBO1FBQ25CLFlBQU8sR0FBVyxJQUFJLENBQUE7UUFDdEIsYUFBUSxHQUFXLElBQUksQ0FBQTtRQUN2QixpQkFBWSxHQUFXLElBQUksQ0FBQTtRQUUzQixTQUFJLEdBQVcsQ0FBQyxDQUFBO0lBWEEsQ0FBQztJQUVqQixRQUFRO0lBQ1IsQ0FBQztJQVdELE9BQU87UUFFTCxhQUFhLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQzFCLElBQUksQ0FBQyxLQUFLLEdBQUcsV0FBVyxDQUFDLEdBQUcsRUFBRTtZQUM1QixJQUFJLENBQUMsSUFBSSxJQUFJLEVBQUUsQ0FBQztZQUVoQixJQUFJLFNBQVMsR0FBUSxJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7WUFFekMsSUFBSSxDQUFDLE9BQU8sR0FBRyxDQUFDLEdBQUcsR0FBQyxTQUFTLENBQUMsV0FBVyxFQUFFLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxLQUFLO2dCQUMvQyxDQUFDLEdBQUcsR0FBQyxTQUFTLENBQUMsYUFBYSxFQUFFLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBQyxLQUFLO2dCQUMvQyxDQUFDLEdBQUcsR0FBQyxTQUFTLENBQUMsYUFBYSxFQUFFLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBQyxLQUFLO2dCQUMvQyxDQUFDLEdBQUcsR0FBQyxTQUFTLENBQUMsa0JBQWtCLEVBQUUsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsRUFBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBRWpFLHdEQUF3RDtZQUN4RCw0REFBNEQ7WUFDNUQsNkRBQTZEO1lBQzdELHNEQUFzRDtRQUN4RCxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUM7SUFDVCxDQUFDO0lBRUQsS0FBSztRQUNILDZCQUE2QjtRQUM3QixpQkFBaUI7UUFFakIsYUFBYSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUMxQixJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQTtJQUNuQixDQUFDO0lBRUQsS0FBSztRQUNILFdBQVcsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUE7UUFDdkIsSUFBSSxDQUFDLElBQUksR0FBRyxDQUFDLENBQUM7UUFDZCxJQUFJLENBQUMsT0FBTyxHQUFHLG1CQUFtQixDQUFBO0lBQ3BDLENBQUM7O2dIQS9DVSxtQkFBbUI7b0dBQW5CLG1CQUFtQixzRENQaEMsOFdBU007MkZERk8sbUJBQW1CO2tCQUwvQixTQUFTO21CQUFDO29CQUNULFFBQVEsRUFBRSxnQkFBZ0I7b0JBQzFCLFdBQVcsRUFBRSw2QkFBNkI7b0JBQzFDLFNBQVMsRUFBRSxDQUFDLDRCQUE0QixDQUFDO2lCQUMxQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3Jsai1jcm9ub21ldHJvJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2Nyb25vbWV0cm8uY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9jcm9ub21ldHJvLmNvbXBvbmVudC5jc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBDcm9ub21ldHJvQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgY29uc3RydWN0b3IoKSB7IH1cblxuICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgfVxuXG4gIGRpc3BsYXk6c3RyaW5nID0gJzAwIDogMDAgOiAwMCA6IDAwJ1xuICBob3JhczpzdHJpbmcgPSAnMDAnXG4gIG1pbnV0b3M6IHN0cmluZyA9ICcwMCdcbiAgc2VndW5kb3M6IHN0cmluZyA9ICcwMCdcbiAgbWlsaXNlZ3VuZG9zOiBzdHJpbmcgPSAnMDAnXG5cbiAgdGljazogbnVtYmVyID0gMFxuICB0aW1lcjogYW55XG5cbiAgaW5pY2lhcigpe1xuICAgIFxuICAgIGNsZWFySW50ZXJ2YWwodGhpcy50aW1lcik7XG4gICAgdGhpcy50aW1lciA9IHNldEludGVydmFsKCgpID0+IHtcbiAgICAgIHRoaXMudGljayArPSAxMDtcblxuICAgICAgbGV0IGRhdGVUaW1lcjogYW55ID0gbmV3IERhdGUodGhpcy50aWNrKTtcblxuICAgICAgdGhpcy5kaXNwbGF5ID0gKCcwJytkYXRlVGltZXIuZ2V0VVRDSG91cnMoKSkuc2xpY2UoLTIpICsgJyA6ICcrXG4gICAgICAgICAgICAgICAgICAgICAoJzAnK2RhdGVUaW1lci5nZXRVVENNaW51dGVzKCkpLnNsaWNlKC0yKSsnIDogJytcbiAgICAgICAgICAgICAgICAgICAgICgnMCcrZGF0ZVRpbWVyLmdldFVUQ1NlY29uZHMoKSkuc2xpY2UoLTIpKycgOiAnK1xuICAgICAgICAgICAgICAgICAgICAgKCcwJytkYXRlVGltZXIuZ2V0VVRDTWlsbGlzZWNvbmRzKCkpLnNsaWNlKC0zLC0xKTtcblxuICAgICAgLy8gdGhpcy5ob3JhcyA9ICgnMCcrZGF0ZVRpbWVyLmdldFVUQ0hvdXJzKCkpLnNsaWNlKC0yKTtcbiAgICAgIC8vIHRoaXMubWludXRvcyA9ICgnMCcrZGF0ZVRpbWVyLmdldFVUQ01pbnV0ZXMoKSkuc2xpY2UoLTIpO1xuICAgICAgLy8gdGhpcy5zZWd1bmRvcyA9ICgnMCcrZGF0ZVRpbWVyLmdldFVUQ1NlY29uZHMoKSkuc2xpY2UoLTIpO1xuICAgICAgLy8gdGhpcy5taWxpc2VndW5kb3MgPSBkYXRlVGltZXIuZ2V0VVRDTWlsbGlzZWNvbmRzKCk7XG4gICAgfSwgMTApO1xuICB9XG5cbiAgcGFyYXIoKSB7XG4gICAgLy8gd2F0Y2guc3R5bGUuY29sb3IgPSBcInJlZFwiO1xuICAgIC8vIHRoaXMudGljayA9IDA7XG5cbiAgICBjbGVhckludGVydmFsKHRoaXMudGltZXIpO1xuICAgIHRoaXMudGltZXIgPSBudWxsXG4gIH1cblxuICByZXNldCgpe1xuICAgIHNldEludGVydmFsKHRoaXMudGltZXIpXG4gICAgdGhpcy50aWNrID0gMDtcbiAgICB0aGlzLmRpc3BsYXkgPSAnMDAgOiAwMCA6IDAwIDogMDAnXG4gIH1cblxufVxuIiwiPGRpdiBjbGFzcz1cImNyb25vbWV0cm9cIj5cbiAgPGRpdiBpZD1cImRpc3BsYXlcIj5cbiAgXHQ8c3Bhbj57e2Rpc3BsYXl9fTwvc3Bhbj4gIFx0XG4gIDwvZGl2PlxuICA8dWwgaWQ9XCJidXR0b25zXCI+XG4gICAgPGxpPjxidXR0b24gKGNsaWNrKT1cInRpbWVyPT1udWxsP2luaWNpYXIoKTpwYXJhcigpXCI+e3t0aW1lcj09bnVsbD8nSW5pY2lhcic6J1BhcmFyJ319PC9idXR0b24+PC9saT5cbiAgICA8IS0tIDxsaT48YnV0dG9uIChjbGljayk9XCJwYXJhcigpXCI+UGFyYXI8L2J1dHRvbj48L2xpPiAtLT5cbiAgICA8bGk+PGJ1dHRvbiAoY2xpY2spPVwicmVzZXQoKVwiPlJlc2V0PC9idXR0b24+PC9saT5cbiAgPC91bD5cbjwvZGl2PiJdfQ==