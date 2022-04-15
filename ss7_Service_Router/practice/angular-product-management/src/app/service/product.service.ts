import {Injectable} from '@angular/core';
import {Product} from '../model/product';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  URL = 'http://localhost:3000/ProductList';

  // tslint:disable-next-line:variable-name
  constructor(private _http: HttpClient) {
  }


  getProductList() {
    return this._http.get<Product[]>(this.URL);
  }

  createProduct(id: number) {
    return this._http.get<Product[]>( `${this.URL}/${id}`);
  }

  findById(id) {
    return this._http.get<Product>( `${this.URL}/${id}`);
  }

  updateProduct(id: number, data: Product) {

  }

  deleteProduct(id) {
    return this._http.delete<Product[]>( `${this.URL}/${id}`);
  }
}
