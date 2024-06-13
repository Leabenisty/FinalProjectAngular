import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { Order } from '../../../Models/order';
import { OrderService } from '../../../Services/order.service';
import { FilterComponent, FilterCriteria } from '../../filter/filter.component';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { OrderDetailComponent } from '../order-detail/order-detail.component';
import { DeleteOrderComponent } from '../delete-order/delete-order.component';
import { UpdateOrderComponent } from '../update-order/update-order.component';
// import { AddOrderComponent } from '../add-order/add-order.component';

export interface OrderFilter extends FilterCriteria {
  // Define specific filter criteria for orders if needed
}
@Component({
    selector: 'app-order-screen',
    standalone: true,
    templateUrl: './order-screen.component.html',
    styleUrl: './order-screen.component.css',
    imports: [CommonModule,ReactiveFormsModule, MatTableModule, MatPaginatorModule,UpdateOrderComponent,DeleteOrderComponent,FilterComponent,DeleteOrderComponent]
    
})
export class OrderScreenComponent implements AfterViewInit{
customerId: number = 0; 

  @ViewChild(MatPaginator)
  paginator!: MatPaginator; 
  displayedColumns: string[] = ['orderId','customerId','customerName', 'address', 'phoneNumber','price','actions'];
  dataSource = new MatTableDataSource<Order>();
  orders: any[] = [];

  // filters: FilterCriteria[] = [
  //   { label: 'Order ID', placeholder: 'Order ID', control: new FormControl('') },
  //   { label: 'Customer ID', placeholder: 'Customer ID', control: new FormControl('') }
  // ];
  orderFilter: OrderFilter = {}; // Initialize with empty filter criteria


  // Method to handle filter changes
  
  constructor(private _orderDataService: OrderService, private router: Router) { }
  
  ngOnInit(): void {
   this.loadOrders()
  }
  loadOrders() {
    this._orderDataService.getOrdersList().subscribe((customers: Order[]) => {
      this.dataSource.data = customers;
    }, (error) => {
      console.error('Error fetching data from server', error);
    })
  }
 
 
  onSearchTextChanged(searchText: string): void {
    if (searchText) {
      this. _orderDataService.getOrderById(+searchText).subscribe(order => {
       this.dataSource.data = order ? [order] : [];
     
      }, error => {
        console.error('Error fetching order by ID', error);
        this.dataSource.data = [];
      });
    } else {
      this.loadOrders();
    }
  }
  onCustomerSearchTextChanged(searchText: string): void {
    if (searchText) {
      this._orderDataService.getOrdersList().subscribe((orders: Order[]) => {
        this.dataSource.data = orders.filter(order => order.customerId === +searchText);
      }, error => {
        console.error('Error fetching orders by customer ID', error);
        this.dataSource.data = [];
      });
    } else {
      this.loadOrders();
    }
  }
  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
  }

  public showAddOrder = false
}

