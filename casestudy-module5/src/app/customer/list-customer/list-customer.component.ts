import {Component, OnInit} from '@angular/core';
import {APIService} from '../../ServiceCase/APIService';

@Component({
  selector: 'app-list-customer',
  templateUrl: './list-customer.component.html',
  styleUrls: ['./list-customer.component.css']
})

export class ListCustomerComponent implements OnInit {

  customers: ICustomer[];

  constructor(private apiService: APIService) {
  }

  ngOnInit(): void {
    this.apiService.getList().subscribe(data => {
      this.customers = data;
    }, error => {
      console.log('Co loi xay ra');
    });
  }
}
