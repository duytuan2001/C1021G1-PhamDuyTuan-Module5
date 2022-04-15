import {Component, OnInit} from '@angular/core';
import {AbstractControl, FormControl, FormGroup, Validators} from '@angular/forms';
import {CustomerService} from '../service/customer.service';
import {ActivatedRoute, Router} from '@angular/router';
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-create-customer',
  templateUrl: './create-customer.component.html',
  styleUrls: ['./create-customer.component.css']
})

export class CreateCustomerComponent implements OnInit {

  customerList: ICustomer[];
  customerType: ICustomerType[];
  customerId: number;
  check: boolean;
  checkIdCard: boolean;
  firstCode: string;
  firstIdCard: string;
  inValid: boolean = null;

  customerForm = new FormGroup({
    id: new FormControl(''),
    code: new FormControl('', [Validators.required, Validators.pattern('^(KH-)([0-9]{4})$')]),
    name: new FormControl('', [Validators.required, Validators.minLength(3)]),
    birthday: new FormControl('', [Validators.required, this.checkAge]),
    gender: new FormControl('', Validators.required),
    idCard: new FormControl('', [Validators.required, Validators.pattern('^[0-9]{9}$')]),
    phone: new FormControl('', [Validators.required, Validators.pattern('^(0?)(3[2-9]|5[6|8|9]|7[0|6-9]|8[0-6|8|9]|9[0-4|6-9])[0-9]{7}$')]),
    email: new FormControl('', [Validators.required, Validators.email]),
    address: new FormControl('', [Validators.required, Validators.minLength(5)]),
    customerType: new FormControl('', Validators.required),
  });

  constructor(private customerService: CustomerService,
              private route: ActivatedRoute,
              private router: Router,
              private snackBar: MatSnackBar) {
  }

  ngOnInit(): void {
    this.customerTypeList();
    console.log(this.customerType);
    this.customerId = Number(this.route.snapshot.paramMap.get('id'));
    this.checkForm();
  }


  public customerTypeList() {
    this.customerService.getCustomerTypeList().subscribe(data => {
      this.customerType = data;
    });
  }

  private checkForm() {
    if (this.customerId > 0) {
      this.customerService.getCustomerById(this.customerId).subscribe(data => {
        this.customerForm.setValue(data);
        // tslint:disable-next-line:max-line-length
        this.customerForm.get('gender').setValue(this.customerForm.get('gender').value ? 'Nam' : (this.customerForm.get('gender').value != null ? 'Nữ' : 'LGBT'));
      }, error => {
        this.snackBar.open('Error!', 'OK!');
      });
    }
  }


  checkAge(dayOfBirth: AbstractControl) {
    const birth = new Date(dayOfBirth.value);
    const birthDay = Date.now() - birth.getTime() - 86400000;
    const time = new Date(birthDay);
    const age = time.getUTCFullYear() - 1970;
    if (age < 18) {
      return {ageEro: true};
    }
    return null;
  }

  saveCustomer() {
    if (!this.customerForm.invalid) {
      this.inValid = false;
      if (this.customerId > 0) {
        this.customerService.getUpdateCustomer(this.customerId, this.customerForm.value).subscribe(() => {

          },
          error => {
            this.snackBar.open('Update Customer Failed', 'OK!');
          },
          () => {
            this.snackBar.open('Update Customer Successfully', 'OK!');
          });
      } else {
        this.customerService.getAddCustomer(this.customerForm.value).subscribe(() => {
          },
          error => {
            this.snackBar.open('Add new Customer Failed', 'OK!');
          },
          () => {
            this.snackBar.open('Add new Customer Successfully', 'OK!');
          }
        );
      }
      this.router.navigateByUrl('customer');
    } else {
      this.inValid = true;
    }
  }
}
