import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-color',
  templateUrl: './color.component.html',
  styleUrls: ['./color.component.css']
})
export class ColorComponent implements OnInit {

  color: string;

  constructor() {
  }

  ngOnInit(): void {
  }
  // click(value) {
  //   this.color = value.target.style.color;
  // }
  click($event: MouseEvent) {
    this.color = $event.target.value;
  }
}
