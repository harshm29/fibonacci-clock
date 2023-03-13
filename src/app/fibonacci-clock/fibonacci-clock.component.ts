import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fibonacci-clock',
  templateUrl: './fibonacci-clock.component.html',
  styleUrls: ['./fibonacci-clock.component.scss'],
})
export class FibonacciClockComponent implements OnInit {
  current_time: Date = new Date();
  FibArray: number[] = [1, 1, 2, 3, 5];
  HoursArray: number[] = [0, 0, 0, 0, 0];
  MinutesArray: number[] = [0, 0, 0, 0, 0];
  colorsArray: string[] = ['', '', '', '', ''];

  ngOnInit() {
    if (localStorage.getItem('current_time') !== null) {
      this.current_time = new Date(localStorage.getItem('current_time')!);
    } else {
      this.current_time = new Date();
      localStorage.setItem('current_time', this.current_time.toString());
    }
    this.fibClock();
  }

  next() {
    const aux = this.current_time;
    aux.setMinutes(this.current_time.getMinutes() + 5);
    this.current_time = new Date(aux);
    localStorage.setItem('current_time', this.current_time.toString());
    this.fibClock();
  }

  back() {
    const aux = this.current_time;
    aux.setMinutes(this.current_time.getMinutes() - 5);
    this.current_time = new Date(aux);
    localStorage.setItem('current_time', this.current_time.toString());
    this.fibClock();
  }

  async fibClock() {
    const hours = this.current_time.getHours();
    const minutes = this.current_time.getMinutes();

    this.getHourFibArray();
    this.getMinutesFibArray();

    for (let i = 0; i < this.FibArray.length; i++) {
      if (
        this.HoursArray[i] !== 0 &&
        this.MinutesArray[i] !== 0 &&
        this.MinutesArray[i] === this.HoursArray[i]
      ) {
        this.colorsArray[i] = 'blue';
      } else if (this.HoursArray[i] !== 0 && this.MinutesArray[i] === 0) {
        this.colorsArray[i] = 'red';
      } else if (this.HoursArray[i] === 0 && this.MinutesArray[i] !== 0) {
        this.colorsArray[i] = 'green';
      } else {
        this.colorsArray[i] = '';
      }
    }
    console.log(this.colorsArray);
  }

  getHourFibArray() {
    /* If the minutes will reach 60 minutes ==> hours should be current hour + 1 */
    //if(this.current_time.getMinutes() > 57) {}
    let hours = this.current_time.getHours() % 12;
    for (let i = this.FibArray.length - 1; i >= 0; i--) {
      if (this.FibArray[i] <= hours) {
        this.HoursArray[i] = this.FibArray[i];
        hours = hours - this.FibArray[i];
      } else {
        this.HoursArray[i] = 0;
      }
    }
    console.log(this.HoursArray);
  }

  getMinutesFibArray() {
    let minutes = Math.round(this.current_time.getMinutes() / 5);

    for (let i = this.MinutesArray.length - 1; i >= 0; i--) {
      if (this.FibArray[i] <= minutes) {
        this.MinutesArray[i] = this.FibArray[i];
        minutes = minutes - this.FibArray[i];
      } else {
        this.MinutesArray[i] = 0;
      }
    }
    console.log(this.MinutesArray);
  }
}
