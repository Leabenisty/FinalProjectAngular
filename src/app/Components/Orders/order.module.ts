import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrderScreenComponent } from './order-screen/order-screen.component';
import { OrderDetailComponent } from './order-detail/order-detail.component';
import { DeleteOrderComponent } from './delete-order/delete-order.component';
import { UpdateOrderComponent } from './update-order/update-order.component';
// import { AddOrderComponent } from './add-order/add-order.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table';
import { MatDividerModule } from '@angular/material/divider';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { FilterComponent } from '../filter/filter.component';
import { RouterModule } from '@angular/router';
import { routes } from '../../app.routes';



@NgModule({
  declarations: [ 
    // OrderScreenComponent,
    // OrderDetailComponent,
    // DeleteOrderComponent,
    // UpdateOrderComponent,
    // AddOrderComponent,
    // FilterComponent
  ],
  imports: [
    CommonModule,
    // ReactiveFormsModule,
    // FormsModule,
    // MatButtonModule,
    // MatDividerModule,
    // MatIconModule,
    // MatTableModule,
    // MatPaginatorModule,
    // MatPaginator,
    RouterModule.forChild(routes)
  ]
})
export class OrderModule { }
