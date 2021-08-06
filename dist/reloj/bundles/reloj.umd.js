(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/platform-browser'), require('@angular/common')) :
    typeof define === 'function' && define.amd ? define('reloj', ['exports', '@angular/core', '@angular/platform-browser', '@angular/common'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global.reloj = {}, global.ng.core, global.ng.platformBrowser, global.ng.common));
}(this, (function (exports, i0, platformBrowser, i1) { 'use strict';

    function _interopNamespace(e) {
        if (e && e.__esModule) return e;
        var n = Object.create(null);
        if (e) {
            Object.keys(e).forEach(function (k) {
                if (k !== 'default') {
                    var d = Object.getOwnPropertyDescriptor(e, k);
                    Object.defineProperty(n, k, d.get ? d : {
                        enumerable: true,
                        get: function () {
                            return e[k];
                        }
                    });
                }
            });
        }
        n['default'] = e;
        return Object.freeze(n);
    }

    var i0__namespace = /*#__PURE__*/_interopNamespace(i0);
    var i1__namespace = /*#__PURE__*/_interopNamespace(i1);

    var RelojService = /** @class */ (function () {
        function RelojService() {
        }
        return RelojService;
    }());
    RelojService.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.1.5", ngImport: i0__namespace, type: RelojService, deps: [], target: i0__namespace.ɵɵFactoryTarget.Injectable });
    RelojService.ɵprov = i0__namespace.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.1.5", ngImport: i0__namespace, type: RelojService, providedIn: 'root' });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.1.5", ngImport: i0__namespace, type: RelojService, decorators: [{
                type: i0.Injectable,
                args: [{
                        providedIn: 'root'
                    }]
            }], ctorParameters: function () { return []; } });

    var RelojComponent = /** @class */ (function () {
        function RelojComponent() {
        }
        RelojComponent.prototype.ngOnInit = function () {
        };
        return RelojComponent;
    }());
    RelojComponent.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.1.5", ngImport: i0__namespace, type: RelojComponent, deps: [], target: i0__namespace.ɵɵFactoryTarget.Component });
    RelojComponent.ɵcmp = i0__namespace.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.1.5", type: RelojComponent, selector: "rlj-reloj", ngImport: i0__namespace, template: "\n    <p>\n      reloj works!\n    </p>\n  ", isInline: true });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.1.5", ngImport: i0__namespace, type: RelojComponent, decorators: [{
                type: i0.Component,
                args: [{
                        selector: 'rlj-reloj',
                        template: "\n    <p>\n      reloj works!\n    </p>\n  ",
                        styles: []
                    }]
            }], ctorParameters: function () { return []; } });

    var CronometroComponent = /** @class */ (function () {
        function CronometroComponent() {
            this.display = '00 : 00 : 00 : 00';
            this.horas = '00';
            this.minutos = '00';
            this.segundos = '00';
            this.milisegundos = '00';
            this.tick = 0;
        }
        CronometroComponent.prototype.ngOnInit = function () {
        };
        CronometroComponent.prototype.iniciar = function () {
            var _this = this;
            clearInterval(this.timer);
            this.timer = setInterval(function () {
                _this.tick += 10;
                var dateTimer = new Date(_this.tick);
                _this.display = ('0' + dateTimer.getUTCHours()).slice(-2) + ' : ' +
                    ('0' + dateTimer.getUTCMinutes()).slice(-2) + ' : ' +
                    ('0' + dateTimer.getUTCSeconds()).slice(-2) + ' : ' +
                    ('0' + dateTimer.getUTCMilliseconds()).slice(-3, -1);
                // this.horas = ('0'+dateTimer.getUTCHours()).slice(-2);
                // this.minutos = ('0'+dateTimer.getUTCMinutes()).slice(-2);
                // this.segundos = ('0'+dateTimer.getUTCSeconds()).slice(-2);
                // this.milisegundos = dateTimer.getUTCMilliseconds();
            }, 10);
        };
        CronometroComponent.prototype.parar = function () {
            // watch.style.color = "red";
            // this.tick = 0;
            clearInterval(this.timer);
            this.timer = null;
        };
        CronometroComponent.prototype.reset = function () {
            setInterval(this.timer);
            this.tick = 0;
            this.display = '00 : 00 : 00 : 00';
        };
        return CronometroComponent;
    }());
    CronometroComponent.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.1.5", ngImport: i0__namespace, type: CronometroComponent, deps: [], target: i0__namespace.ɵɵFactoryTarget.Component });
    CronometroComponent.ɵcmp = i0__namespace.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.1.5", type: CronometroComponent, selector: "rlj-cronometro", ngImport: i0__namespace, template: "<div class=\"cronometro\">\n  <div id=\"display\">\n  \t<span>{{display}}</span>  \t\n  </div>\n  <ul id=\"buttons\">\n    <li><button (click)=\"timer==null?iniciar():parar()\">{{timer==null?'Iniciar':'Parar'}}</button></li>\n    <!-- <li><button (click)=\"parar()\">Parar</button></li> -->\n    <li><button (click)=\"reset()\">Reset</button></li>\n  </ul>\n</div>", styles: ["@font-face{font-family:\"Share Tech Mono\";font-style:normal;font-weight:400;src:url(https://fonts.gstatic.com/s/sharetechmono/v10/J7aHnp1uDWRBEqV98dVQztYldFcLowEF.woff2) format(\"woff2\");unicode-range:U+0000-00FF,U+0131,U+0152-0153,U+02BB-02BC,U+02C6,U+02DA,U+02DC,U+2000-206F,U+2074,U+20AC,U+2122,U+2191,U+2193,U+2212,U+2215,U+FEFF,U+FFFD}body{display:flex;align-items:center;justify-content:center;background:#f2f4f6}.cronometro{width:340px;padding:8px;background:#2d2a35e8;box-shadow:0 10px 20px #4040400d;border:1px solid rgb(64 64 64 / 5%);border-radius:20px}#display{font-size:35px;text-align:center;font-family:\"Share Tech Mono\";color:#daf6ff;text-shadow:0 0 20px rgb(9 242 17),0 0 20px rgb(10 175 230 / 0%)}ul#buttons{list-style:none;display:flex;align-items:center;justify-content:center;padding:0;margin-bottom:0}ul#buttons button{background:#0f62fe;border:1px solid;width:100px;color:#fff;font-size:18px;text-align:left;display:block;padding:10px 0 10px 20px;cursor:pointer}\n"] });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.1.5", ngImport: i0__namespace, type: CronometroComponent, decorators: [{
                type: i0.Component,
                args: [{
                        selector: 'rlj-cronometro',
                        templateUrl: './cronometro.component.html',
                        styleUrls: ['./cronometro.component.css']
                    }]
            }], ctorParameters: function () { return []; } });

    var TimerComponent = /** @class */ (function () {
        function TimerComponent() {
            this.timerVal = '00:00:00';
            this.tick = null;
        }
        TimerComponent.prototype.ngOnInit = function () { };
        TimerComponent.prototype.iniciar = function (e) {
            var _this = this;
            this.timerVal = e;
            var partes = this.timerVal.split(':');
            var duration = Math.floor(partes[0]) * 3600 + Math.floor(partes[1]) * 60 + Math.floor(partes[2]);
            var timer = duration;
            var hora;
            var minutes;
            var seconds;
            if (e == '00:00:00') {
                alert('Seleccione el tiempo');
                return;
            }
            this.tick = setInterval(function () {
                hora = Math.floor(timer / 3600);
                minutes = Math.floor((timer - (hora * 3600)) / 60);
                seconds = Math.floor(timer % 60);
                hora = hora < 10 ? "0" + hora : hora;
                minutes = minutes < 10 ? "0" + minutes : minutes;
                seconds = seconds < 10 ? "0" + seconds : seconds;
                _this.timerVal = hora + ":" + minutes + ":" + seconds;
                timer--;
                if (timer < 0) {
                    // timer = duration;
                    _this.timerVal = '00:00:00';
                    _this.reset();
                    alert('Se acabo el tipo !!!');
                }
            }, 1000);
        };
        TimerComponent.prototype.pausa = function () {
            clearInterval(this.tick);
            this.tick = null;
        };
        TimerComponent.prototype.reset = function () {
            clearInterval(this.tick);
            this.timerVal = '00:00:00';
            this.tick = null;
        };
        return TimerComponent;
    }());
    TimerComponent.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.1.5", ngImport: i0__namespace, type: TimerComponent, deps: [], target: i0__namespace.ɵɵFactoryTarget.Component });
    TimerComponent.ɵcmp = i0__namespace.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.1.5", type: TimerComponent, selector: "rlj-timer", ngImport: i0__namespace, template: "<div>\n\t<input type=\"time\" id=\"appt\" name=\"appt\"\n\tstep=\"1\" [value]=\"timerVal\" #timerElement required>\n\n\t<ul id=\"buttons\">\n\t\t<!-- <li><button (click)=\"iniciar(timerElement.value)\" >Iniciar</button></li> -->\n\t\t<li><button (click)=\"tick==null?iniciar(timerElement.value):pausa()\">{{tick==null?'Iniciar':'Pausa'}}</button></li>\n\t\t<li><button (click)=\"reset()\">Reset</button></li>\n\t</ul>\n</div>", styles: ["div{display:flex}input{margin:17px 0}ul#buttons{list-style:none;display:flex;align-items:center;justify-content:center;padding:0}ul#buttons button{background:#0f62fe;border:1px solid;width:100px;color:#fff;font-size:18px;text-align:left;display:block;padding:10px 0 10px 20px;cursor:pointer}\n"] });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.1.5", ngImport: i0__namespace, type: TimerComponent, decorators: [{
                type: i0.Component,
                args: [{
                        selector: 'rlj-timer',
                        templateUrl: './timer.component.html',
                        styleUrls: ['./timer.component.css']
                    }]
            }], ctorParameters: function () { return []; } });

    var ClockComponent = /** @class */ (function () {
        function ClockComponent() {
            this.reloj = Date.now();
        }
        ClockComponent.prototype.ngOnInit = function () {
            var _this = this;
            setInterval(function () {
                _this.reloj = Date.now();
            }, 1000);
        };
        return ClockComponent;
    }());
    ClockComponent.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.1.5", ngImport: i0__namespace, type: ClockComponent, deps: [], target: i0__namespace.ɵɵFactoryTarget.Component });
    ClockComponent.ɵcmp = i0__namespace.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.1.5", type: ClockComponent, selector: "rlj-clock", ngImport: i0__namespace, template: "<div class=\"reloj\">\n\t<span>{{reloj|date:'hh:mm:ss a'}}</span>\n</div>\n", styles: [".reloj{width:220px;font-size:35px;text-align:center;font-family:\"Share Tech Mono\";color:#daf6ff;background:#2d2a35e8;text-shadow:0 0 20px rgb(9 242 17),0 0 20px rgb(10 175 230 / 0%);border-radius:5px}\n"], pipes: { "date": i1__namespace.DatePipe } });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.1.5", ngImport: i0__namespace, type: ClockComponent, decorators: [{
                type: i0.Component,
                args: [{
                        selector: 'rlj-clock',
                        templateUrl: './clock.component.html',
                        styleUrls: ['./clock.component.css']
                    }]
            }], ctorParameters: function () { return []; } });

    var RelojModule = /** @class */ (function () {
        function RelojModule() {
        }
        return RelojModule;
    }());
    RelojModule.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.1.5", ngImport: i0__namespace, type: RelojModule, deps: [], target: i0__namespace.ɵɵFactoryTarget.NgModule });
    RelojModule.ɵmod = i0__namespace.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "12.1.5", ngImport: i0__namespace, type: RelojModule, declarations: [RelojComponent,
            CronometroComponent,
            TimerComponent,
            ClockComponent], imports: [platformBrowser.BrowserModule], exports: [RelojComponent,
            CronometroComponent,
            TimerComponent,
            ClockComponent] });
    RelojModule.ɵinj = i0__namespace.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "12.1.5", ngImport: i0__namespace, type: RelojModule, imports: [[
                platformBrowser.BrowserModule
            ]] });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.1.5", ngImport: i0__namespace, type: RelojModule, decorators: [{
                type: i0.NgModule,
                args: [{
                        declarations: [
                            RelojComponent,
                            CronometroComponent,
                            TimerComponent,
                            ClockComponent
                        ],
                        imports: [
                            platformBrowser.BrowserModule
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

    exports.ClockComponent = ClockComponent;
    exports.CronometroComponent = CronometroComponent;
    exports.RelojComponent = RelojComponent;
    exports.RelojModule = RelojModule;
    exports.RelojService = RelojService;
    exports.TimerComponent = TimerComponent;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=reloj.umd.js.map
