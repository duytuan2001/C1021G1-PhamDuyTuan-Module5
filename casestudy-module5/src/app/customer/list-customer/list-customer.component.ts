import {Component, OnInit} from '@angular/core';
import {CustomerDao} from '../model/CustomerDao';

@Component({
  selector: 'app-list-customer',
  templateUrl: './list-customer.component.html',
  styleUrls: ['./list-customer.component.css']
})
export class ListCustomerComponent implements OnInit {

  customers: ICustomer[] = CustomerDao.Customers;

  constructor() {
  }

  ngOnInit(): void {
  }

}
