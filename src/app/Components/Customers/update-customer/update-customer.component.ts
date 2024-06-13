import { Component, EventEmitter, Input, Output, SimpleChanges } from '@angular/core';
import { FormControl, FormGroup, Validators , ReactiveFormsModule, FormBuilder, FormsModule} from '@angular/forms';
import { CustomerService } from '../../../Services/customer.service';
import { MatIconModule } from '@angular/material/icon';
import { Customer } from '../../../Models/customer';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';

@Component({
  selector: 'app-update-customer',
  standalone: true,
  imports: [MatIconModule, FormsModule, MatButtonModule,MatDividerModule, MatIconModule,ReactiveFormsModule,CommonModule],
  templateUrl: './update-customer.component.html',
  styleUrl: './update-customer.component.css'
})
export class UpdateCustomerComponent {

  // public updateForm !: FormGroup
  // @Input() customer!: Customer;
  // @Output() customerDeleted = new EventEmitter<void>();

  // constructor(private _customerService: CustomerService) { }

  // ngOnInit(): void {
  //   this.updateForm = new FormGroup({
  //     "name": new FormControl("name", Validators.max(7)),
  //     "address": new FormControl("address", Validators.min(4)),
  //     "phoneNumber": new FormControl("phoneNumber", Validators.required),
  //   })
  // }

  // public onUpdate(): void {

  //   console.log("id",this.customer.id);
    
  //   this._customerService.updateCustomer(this.customer.id,this.updateForm.value).subscribe((response: any) => {
  //       console.log('Customer Updated');
  //       this.customerDeleted.emit();
  //     },
  //     error => {
  //       console.error('Error Updating customer:', error);
  //     }
  //   );
  // }

  @Input() customer!: Customer;
  @Output() customerUpdated = new EventEmitter<Customer>();
  updateForm!: FormGroup;
  isEditMode: boolean = false;

  constructor(private fb: FormBuilder, private customerService: CustomerService) {
    this.updateForm = this.fb.group({
      name: ['', [Validators.required, Validators.maxLength(7)]],
      address: ['', [Validators.required, Validators.minLength(4)]],
      phoneNumber: ['', [Validators.required, Validators.pattern(/^[0-9]{10}$/)]]
    });
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['customer'] && this.customer) {
      this.updateForm.patchValue({
        name: this.customer.name,
        address: this.customer.address,
        phoneNumber: this.customer.phoneNumber
      });
    }
  }

  toggleEdit(): void {
    this.isEditMode = !this.isEditMode;
    if (this.isEditMode) {
      this.updateForm.reset({
        name: this.customer?.name || '',
        address: this.customer?.address || '',
        phoneNumber: this.customer?.phoneNumber || ''
      });
    }
  }

  onUpdate(): void {
    if (this.updateForm.valid) {
      const updatedCustomer = {
        id: this.customer.id,
        ...this.updateForm.value
      };
      if (this.customer && typeof this.customer.id === 'number')
      this.customerService.updateCustomer(this.customer.id, updatedCustomer).subscribe(response => {
        this.customerUpdated.emit(response);
        this.isEditMode = false;
      }, error => {
        // Handle error
      });
    }
  }
}
