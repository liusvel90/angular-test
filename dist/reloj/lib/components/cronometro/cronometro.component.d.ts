import { OnInit } from '@angular/core';
import * as i0 from "@angular/core";
export declare class CronometroComponent implements OnInit {
    constructor();
    ngOnInit(): void;
    display: string;
    horas: string;
    minutos: string;
    segundos: string;
    milisegundos: string;
    tick: number;
    timer: any;
    iniciar(): void;
    parar(): void;
    reset(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<CronometroComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<CronometroComponent, "rlj-cronometro", never, {}, {}, never, never>;
}
