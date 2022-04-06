import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit {

  totalCal: any;

  number1: number;

  number2: number;

  constructor() { }

  ngOnInit(): void {
  }
  click(value) {
    switch (value) {
      case 'add':
        this.totalCal = this.number1 + this.number2;
        break;
      case 'sub':
        this.totalCal = this.number1 - this.number2;
        break;
      case 'mul':
        this.totalCal = this.number1 * this.number2;
        break;
      case 'div':
        if (this.number2 !== 0) {
          this.totalCal = this.number1 / this.number2;
          break;
        } else {
          this.totalCal = 'Không được chia cho số không';
          break;
        }
      default :
        this.totalCal = 0;
    }
  }

  addNumber1(value: string) {
    this.number1 = Number(value);
  }

  addNumber2(value: string) {
    this.number2 = Number(value);
  }
}
