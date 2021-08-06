import { OnInit } from '@angular/core';
import * as i0 from "@angular/core";
export declare class TimerComponent implements OnInit {
    constructor();
    ngOnInit(): void;
    timerVal: string;
    tick: any;
    iniciar(e: any): void;
    pausa(): void;
    reset(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<TimerComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<TimerComponent, "rlj-timer", never, {}, {}, never, never>;
}
