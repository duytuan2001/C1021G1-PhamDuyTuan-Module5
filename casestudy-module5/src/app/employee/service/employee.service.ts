import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  private readonly URL = 'http://localhost:3000/EmployeeList';
  private readonly P_URL = 'http://localhost:3000/position';
  private readonly D_URL = 'http://localhost:3000/division';

  // tslint:disable-next-line:variable-name
  constructor(private _http: HttpClient) { }

  getEmployeeList() { // Display List Customer
    return this._http.get<IEmployee[]>(this.URL);
  }

}
