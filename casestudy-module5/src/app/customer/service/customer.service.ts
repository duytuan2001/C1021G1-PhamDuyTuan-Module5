import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  private readonly URL = 'http://localhost:3000/CustomerList';
  private readonly CT_URL = 'http://localhost:3000/CustomerType';

  // tslint:disable-next-line:variable-name
  constructor(private _http: HttpClient) {
  }


  getCustomerList() { // Display List Customer
    return this._http.get<ICustomer[]>(this.URL);
  }

  getAddCustomer(data) { // Add Customer
    return this._http.post<ICustomer[]>(`${this.URL}`, data);
  }

  getCustomerById(id) { // findById Customer
    return this._http.get<ICustomer>(`${this.URL}/${id}`);
  }

  getUpdateCustomer(idCustomer: number, value: ICustomer) {
    return this._http.put(`${this.URL}` + idCustomer, value);
  }

  getDeleteCustomer(id) { // Delete Customer
    return this._http.delete<ICustomer[]>(`${this.URL}/${id}`);
  }

  findByName(nameSearch: string) { // Search By Name Customer
    return this._http.get<ICustomer[]>(this.URL + '?name_like=' + nameSearch);
  }

  getCustomerTypeList() { // Display List CustomerType
    return this._http.get<ICustomerType[]>(`${this.CT_URL}`);
  }
}
