import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { CustomerScreenComponent } from '../Customers/customer-screen/customer-screen.component';
export interface FilterCriteria {
  id?: number;
  name?: string;
  // Add more filter criteria properties as needed
}
@Component({
  selector: 'app-filter',
  standalone: true,
  imports: [ReactiveFormsModule,CustomerScreenComponent, MatFormFieldModule, MatInputModule],
  templateUrl: './filter.component.html',
  styleUrl: './filter.component.css'
})

export class FilterComponent {
  
  @Input() placeholder: string = 'Search by ID';
  @Output() searchTextChanged = new EventEmitter<string>();
  searchControl = new FormControl('');

  constructor() {
    this.searchControl.valueChanges.subscribe(value => {
      this.searchTextChanged.emit(value ?? '');
    });
  }
}

