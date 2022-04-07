import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ListCustomerComponent} from './customer/list-customer/list-customer.component';
import {NavigationComponent} from './navigation/navigation.component';
import {UpdateCustomerComponent} from './customer/update-customer/update-customer.component';


const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'home'  },
  { path: 'home', component: NavigationComponent },
  { path: 'customer', component: ListCustomerComponent },
  { path: 'customer-update/:id', component: UpdateCustomerComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
