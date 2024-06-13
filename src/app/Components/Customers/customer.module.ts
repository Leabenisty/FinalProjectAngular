import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomerScreenComponent } from './customer-screen/customer-screen.component';
import { AddCustomerComponent } from './add-customer/add-customer.component';
import { DeleteCustomerComponent } from './delete-customer/delete-customer.component';
import { UpdateCustomerComponent } from './update-customer/update-customer.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FilterComponent } from '../filter/filter.component';



@NgModule({
  declarations: [CustomerScreenComponent,
    AddCustomerComponent,
    DeleteCustomerComponent,
    UpdateCustomerComponent,
    FilterComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class CustomerModule { }
