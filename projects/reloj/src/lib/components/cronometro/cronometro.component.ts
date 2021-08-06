import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'rlj-cronometro',
  templateUrl: './cronometro.component.html',
  styleUrls: ['./cronometro.component.css']
})
export class CronometroComponent implements OnInit {
  constructor() { }

  ngOnInit(): void {
  }

  display:string = '00 : 00 : 00 : 00'
  horas:string = '00'
  minutos: string = '00'
  segundos: string = '00'
  milisegundos: string = '00'

  tick: number = 0
  timer: any

  iniciar(){
    
    clearInterval(this.timer);
    this.timer = setInterval(() => {
      this.tick += 10;

      let dateTimer: any = new Date(this.tick);

      this.display = ('0'+dateTimer.getUTCHours()).slice(-2) + ' : '+
      ('0'+dateTimer.getUTCMinutes()).slice(-2)+' : '+
      ('0'+dateTimer.getUTCSeconds()).slice(-2)+' : '+
      ('0'+dateTimer.getUTCMilliseconds()).slice(-3,-1);
    }, 10);
  }

  parar() {
    clearInterval(this.timer);
    this.timer = null
  }

  reset(){
    setInterval(this.timer)
    this.tick = 0;
    this.display = '00 : 00 : 00 : 00'
  }

}
