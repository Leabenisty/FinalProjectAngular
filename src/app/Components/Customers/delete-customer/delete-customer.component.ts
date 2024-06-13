import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CustomerService } from '../../../Services/customer.service';
import { CustomerScreenComponent } from '../customer-screen/customer-screen.component';

import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-delete-customer',
  standalone: true,
  imports: [ MatIconModule],
  templateUrl: './delete-customer.component.html',
  styleUrl: './delete-customer.component.css'
})
export class DeleteCustomerComponent {

  @Input() customerId!: number;

  @Output() customerDeleted = new EventEmitter<void>();

  constructor(private _customerService: CustomerService) {}


 public onDelete(): void {

    console.log("id",this.customerId);
    
    this._customerService.deleteCustomer(this.customerId).subscribe(() => {
        console.log('Customer deleted');
        this.customerDeleted.emit();
      },
      error => {
        console.error('Error deleting customer:', error);
      }
    );
  }

}
