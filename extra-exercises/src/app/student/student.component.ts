import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {

  color = 'red';

  @Input()
  student: IStudent;

  constructor() {
  }

  ngOnInit(): void {
  }

  // ChangeMark(mark: number) {
  //   this.student.mark = mark;
  // }
}
