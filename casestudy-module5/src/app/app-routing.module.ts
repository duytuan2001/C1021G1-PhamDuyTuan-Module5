import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {ListCustomerComponent} from './customer/list-customer/list-customer.component';
import {NavigationComponent} from './navigation/navigation.component';
import {CustomerRoutingModule} from './customer/customer-routing.module';
import {ListServiceComponent} from './service/list-service/list-service.component';
import {EmployeeRoutingModule} from './employee/employee-routing.module';
import {ListEmployeeComponent} from './employee/list-employee/list-employee.component';


const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: 'NavigationComponent'},
  {path: '', component: NavigationComponent},
  {path: 'customer', component: ListCustomerComponent},
  {path: 'service', component: ListServiceComponent},
  {path: 'employee', component: ListEmployeeComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes), CustomerRoutingModule, EmployeeRoutingModule],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
