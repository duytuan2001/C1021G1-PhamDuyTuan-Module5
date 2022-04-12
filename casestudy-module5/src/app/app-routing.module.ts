import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {ListCustomerComponent} from './customer/list-customer/list-customer.component';
import {NavigationComponent} from './navigation/navigation.component';


const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: ''},
  {path: '', component: NavigationComponent},
  {path: 'customer', component: ListCustomerComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
