import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {CustomerService} from '../service/customer.service';
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-details-customer',
  templateUrl: './details-customer.component.html',
  styleUrls: ['./details-customer.component.css']
})
export class DetailsCustomerComponent implements OnInit {

  customer: ICustomer;

  constructor(public dialogRef: MatDialogRef<DetailsCustomerComponent>,
              @Inject(MAT_DIALOG_DATA) public data: any,
              private customerService: CustomerService,
              private snackBar: MatSnackBar) {
  }

  ngOnInit(): void {
    this.customer = this.data.data1;
  }

  deleteCustomer() {
    this.customerService.getDeleteCustomer(this.customer.id).subscribe(data => {
      this.dialogRef.close();
      this.snackBar.open('Delete Successfully!', 'OK');
    });
  }
}
