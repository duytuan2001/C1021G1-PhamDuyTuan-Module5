import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ListCustomerComponent} from '../customer/list-customer/list-customer.component';
import {CreateCustomerComponent} from '../customer/create-customer/create-customer.component';
import {ListEmployeeComponent} from './list-employee/list-employee.component';

const routes: Routes = [
  {path: 'employee', component: ListEmployeeComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmployeeRoutingModule { }
