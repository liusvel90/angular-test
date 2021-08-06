import * as i0 from '@angular/core';
import { Injectable, Component, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import * as i1 from '@angular/common';

class RelojService {
    constructor() { }
}
RelojService.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.1.5", ngImport: i0, type: RelojService, deps: [], target: i0.ɵɵFactoryTarget.Injectable });
RelojService.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.1.5", ngImport: i0, type: RelojService, providedIn: 'root' });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.1.5", ngImport: i0, type: RelojService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root'
                }]
        }], ctorParameters: function () { return []; } });

class RelojComponent {
    constructor() { }
    ngOnInit() {
    }
}
RelojComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.1.5", ngImport: i0, type: RelojComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
RelojComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.1.5", type: RelojComponent, selector: "rlj-reloj", ngImport: i0, template: `
    <p>
      reloj works!
    </p>
  `, isInline: true });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.1.5", ngImport: i0, type: RelojComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'rlj-reloj',
                    template: `
    <p>
      reloj works!
    </p>
  `,
                    styles: []
                }]
        }], ctorParameters: function () { return []; } });

class CronometroComponent {
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

class TimerComponent {
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

class ClockComponent {
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

class RelojModule {
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

/*
 * Public API Surface of reloj
 */

/**
 * Generated bundle index. Do not edit.
 */

export { ClockComponent, CronometroComponent, RelojComponent, RelojModule, RelojService, TimerComponent };
//# sourceMappingURL=reloj.js.map
