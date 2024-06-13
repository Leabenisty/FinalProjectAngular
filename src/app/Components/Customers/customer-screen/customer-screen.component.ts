import { AfterViewInit, Component, ViewChild } from '@angular/core';

import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';

import { Customer } from '../../../Models/customer';
import { CustomerService } from '../../../Services/customer.service';
import { FilterComponent } from '../../filter/filter.component';
import { ModeStatusPipe } from '../mode-status.pipe';
import { DeleteCustomerComponent } from '../delete-customer/delete-customer.component';
import { UpdateCustomerComponent } from '../update-customer/update-customer.component';
import { AddCustomerComponent } from '../add-customer/add-customer.component';
import { FormGroup } from '@angular/forms';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-customer-screen',
  standalone: true,
  imports: [CommonModule,MatButtonModule, MatDividerModule, MatIconModule,ModeStatusPipe, MatTableModule, MatPaginatorModule,FilterComponent,DeleteCustomerComponent,UpdateCustomerComponent,AddCustomerComponent],
  templateUrl: './customer-screen.component.html',
  styleUrl: './customer-screen.component.css'
})


export class CustomerScreenComponent implements AfterViewInit {

  public showAddCustomer = false;

  @ViewChild(MatPaginator)
  paginator!: MatPaginator;
  displayedColumns: string[] = ['id', 'name', 'address', 'phoneNumber', 'status', 'update', 'delete'];
  dataSource = new MatTableDataSource<Customer>();

  constructor(private _customerDataService: CustomerService) { }


  ngOnInit(): void {
    this.loadCustomers()
  }

  loadCustomers() {
    this._customerDataService.getCustomersList().subscribe((customers: Customer[]) => {
      console.log(customers);
      
      this.dataSource.data = this.sortCustomers(customers);;
    }, (error) => {
      console.error('Error fetching data from server', error);
    })
  }
  sortCustomers(customers: Customer[]): Customer[] {
    return customers.sort((a, b) => {
      if (a.status === 'Active' && b.status !== 'Active') {
        return -1;
      } else if (a.status !== 'Active' && b.status === 'Active') {
        return 1;
      }
      return 0;
    });
  }
  onSearchTextChanged(searchText: string) {
    const id = Number(searchText);
    if (!isNaN(id) && searchText.trim() !== '') {
      this._customerDataService.getCustomerById(id).subscribe((customer: Customer | null) => {
        if (customer) { this.dataSource.data = customer ? [customer] : []; }
      }, (error) => {
        console.error('Error fetching customer by ID', error);
        this.dataSource.data = [];
      });
    } else {
      this.loadCustomers();
    }
  }
  onCustomerDeleted(): void {
    this.loadCustomers()  // טוען את רשימת הלקוחות מחדש לאחר מחיקה
  }
  onCustomerUpdated() {
    debugger
    this.loadCustomers();
  }
  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
  }



}
