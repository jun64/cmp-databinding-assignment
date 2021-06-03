import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {
  constructor() { }

  counter: number = 0;
  intervalId: NodeJS.Timeout;
  numbersList = [];

  @Output() intervalFired = new EventEmitter<number>();

  ngOnInit(): void {
    
  }

  onStart(){
    this.intervalId = setInterval(() => {
      this.intervalFired.emit(this.counter + 1);
      this.counter++;
    }, 1000);
  }

  onStop(){
    clearInterval(this.intervalId);
  }

}
