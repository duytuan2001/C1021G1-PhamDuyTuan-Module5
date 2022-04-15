import {Component, OnInit} from '@angular/core';
import {EmployeeService} from '../service/employee.service';


@Component({
  selector: 'app-list-employee',
  templateUrl: './list-employee.component.html',
  styleUrls: ['./list-employee.component.css']
})
export class ListEmployeeComponent implements OnInit {
  p: number = 1;

  employees: IEmployee[];
  searchName: any;

  constructor(private employeeService: EmployeeService) {
  }

  ngOnInit(): void {
    this.employeeService.getEmployeeList().subscribe(data => {
      this.employees = data;
    });
  }

}
