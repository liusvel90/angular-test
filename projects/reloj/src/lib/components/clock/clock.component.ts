import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'rlj-clock',
  templateUrl: './clock.component.html',
  styleUrls: ['./clock.component.css']
})
export class ClockComponent implements OnInit {

  constructor() { }

  reloj: number = Date.now();

  ngOnInit(): void {
    setInterval(()=> {
      this.reloj = Date.now();
    }, 1000);
  }

}
