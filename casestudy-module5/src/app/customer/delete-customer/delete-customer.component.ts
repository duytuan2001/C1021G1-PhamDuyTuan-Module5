import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {CustomerService} from '../service/customer.service';
import {MatSnackBar} from '@angular/material/snack-bar';
import {Router} from '@angular/router';

@Component({
  selector: 'app-delete-customer',
  templateUrl: './delete-customer.component.html',
  styleUrls: ['./delete-customer.component.css']
})
export class DeleteCustomerComponent implements OnInit {

  customer: ICustomer;


  constructor(public dialogRef: MatDialogRef<DeleteCustomerComponent>,
              @Inject(MAT_DIALOG_DATA) public data: any,
              private customerService: CustomerService,
              private snackBar: MatSnackBar,
              private router: Router) {
  }

  ngOnInit(): void {
    this.customer = this.data.data1;
  }

  deleteCustomer() {
    this.customerService.getDeleteCustomer(this.customer.id).subscribe(() => {
      },
      () => {
        this.snackBar.open('Delete Faild!', 'OK');
      },
      () => {
        this.dialogRef.close();
        this.snackBar.open('Delete Successfully!', 'OK');
        this.router.navigateByUrl('customer');
      });
  }
}
