import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HeaderComponent} from './header/header.component';
import {FooterComponent} from './footer/footer.component';
import {NavigationComponent} from './navigation/navigation.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {ListCustomerComponent} from './customer/list-customer/list-customer.component';
import { HttpClientModule} from '@angular/common/http';
import {NgxPaginationModule} from 'ngx-pagination';
import {CreateCustomerComponent} from './customer/create-customer/create-customer.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatDialogModule} from '@angular/material/dialog';
import { DetailsCustomerComponent } from './customer/details-customer/details-customer.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatNativeDateModule} from '@angular/material/core';
import {MatInputModule} from '@angular/material/input';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { DeleteCustomerComponent } from './customer/delete-customer/delete-customer.component';
import {ListEmployeeComponent} from './employee/list-employee/list-employee.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    NavigationComponent,
    ListCustomerComponent,
    CreateCustomerComponent,
    DetailsCustomerComponent,
    DeleteCustomerComponent,
    ListEmployeeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgxPaginationModule,
    MatDialogModule,
    BrowserAnimationsModule,
    Ng2SearchPipeModule,
    MatFormFieldModule,
    MatNativeDateModule,
    MatInputModule,
    MatSnackBarModule,
    MatDatepickerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
