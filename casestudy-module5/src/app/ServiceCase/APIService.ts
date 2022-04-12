import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})

export class APIService {
  private readonly API_URL = 'http://localhost:8080/customer/api/v1';


  constructor(private http: HttpClient) {
  }

  getList() {
    return this.http.get<ICustomer[]>(this.API_URL);
  }
}
