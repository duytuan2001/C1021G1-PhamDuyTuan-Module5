import {Component, OnInit} from '@angular/core';

import {CustomerService} from '../service/customer.service';
import {DeleteCustomerComponent} from '../delete-customer/delete-customer.component';
import {MatDialog} from '@angular/material/dialog';
import {DetailsCustomerComponent} from '../details-customer/details-customer.component';

@Component({
  selector: 'app-list-customer',
  templateUrl: './list-customer.component.html',
  styleUrls: ['./list-customer.component.css']
})

export class ListCustomerComponent implements OnInit {

  p: number = 1;

  customers: ICustomer[];
  searchName: any;

  constructor(private customerService: CustomerService,
              public dialog: MatDialog) {
  }

  ngOnInit() {
    this.customerService.getCustomerList().subscribe(data => {
      this.customers = data;
    }, error => {});
    this.p = 1;
  }

  openDeleteDialog(id) {
    this.customerService.getCustomerById(id).subscribe(data => {
      const dialogRef = this.dialog.open(DeleteCustomerComponent, {
        width: '780px',
        data: {data1: data}
      });
      dialogRef.afterClosed().subscribe(result => {
        this.ngOnInit();
      });
    });
  }

  openDetailsDialog(id) {
    this.customerService.getCustomerById(id).subscribe(data => {
      const dialogRef = this.dialog.open(DetailsCustomerComponent, {
        width: '780px',
        data: {data1: data}
      });
      dialogRef.afterClosed().subscribe(result => {
        this.ngOnInit();
      });
    });
  }

  searchByName(value) {
    this.customerService.findByName(value).subscribe(data => {
      this.customers = data;
    });
  }
}
