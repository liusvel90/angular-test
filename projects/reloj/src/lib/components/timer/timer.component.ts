import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'rlj-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.css']
})


export class TimerComponent implements OnInit {
  constructor() { }

  ngOnInit(): void {}

  timerVal: string = '00:00:00';
  tick: any = null

  iniciar(e:any) {
    this.timerVal = e
    
    let partes: any = this.timerVal.split(':')

    let duration: any = Math.floor(partes[0])*3600 + Math.floor(partes[1])*60 + Math.floor(partes[2])
    
    let timer: any = duration 
    let hora: any
    let minutes: any
    let seconds: any

    if (e == '00:00:00'){alert('Seleccione el tiempo'); return}

    this.tick = setInterval(() => {

      hora    = Math.floor(timer/3600);
      minutes = Math.floor((timer-(hora*3600)) / 60);
      seconds = Math.floor(timer % 60);

      hora    = hora < 10 ? "0" + hora : hora ;
      minutes = minutes < 10 ? "0" + minutes : minutes;
      seconds = seconds < 10 ? "0" + seconds : seconds;

      this.timerVal = hora + ":" + minutes + ":" + seconds;

      timer --
      if (timer < 0) {
        // timer = duration;
        this.timerVal = '00:00:00';
        this.reset()
        alert('Se acabo el tipo !!!')
      }
    }, 1000)

  }

  pausa(){
    clearInterval(this.tick);
    this.tick = null
  }

  reset(){
    clearInterval(this.tick);
    this.timerVal = '00:00:00';
    this.tick = null    
  }


}