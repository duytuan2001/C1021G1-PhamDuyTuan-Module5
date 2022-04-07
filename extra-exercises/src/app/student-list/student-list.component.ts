import {Component, OnInit} from '@angular/core';
import {StudentDto} from '../studentdto/StudentDto';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent implements OnInit {

  students: IStudent[] = StudentDto.students;

  colorRow = '';

  constructor() {
  }

  ngOnInit(): void {
  }

  changeColor(value: string){
    this.colorRow = value;
  }

  getDetail(value: any) {
  }
}
