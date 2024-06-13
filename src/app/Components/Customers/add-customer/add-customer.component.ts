import { Component } from '@angular/core';
import {  FormGroup, Validators, FormControl, ReactiveFormsModule } from '@angular/forms';
import { CustomerService } from '../../../Services/customer.service';


@Component({
  selector: 'app-add-customer',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './add-customer.component.html',
  styleUrl: './add-customer.component.css'
})
export class AddCustomerComponent {

  public addForm!: FormGroup;

  constructor(private _customerService: CustomerService) { }


  ngOnInit(): void {
    this.addForm = new FormGroup({
      "name": new FormControl("name", Validators.max(7)),
      "address": new FormControl("address", Validators.min(4)),
      "phoneNumber": new FormControl("phoneNumber", Validators.required),
      // "status": new FormControl("status", Validators.required),
    })
  }

  public save() {
    this._customerService.addCustomer(this.addForm.value).subscribe((response: any) => {
      console.log(response);
      console.log("enter", this.addForm.value);

    })
  }

}
