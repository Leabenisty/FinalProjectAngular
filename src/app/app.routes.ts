<<<<<<< HEAD
import { RouterModule, Routes } from '@angular/router';
import { CustomerScreenComponent } from './Components/Customers/customer-screen/customer-screen.component';
import { OrderScreenComponent } from './Components/Orders/order-screen/order-screen.component';
import { ProductScreenComponent } from './Components/Products/product-screen/product-screen.component';
import { OrderDetailComponent } from './Components/Orders/order-detail/order-detail.component';
import { NgModule } from '@angular/core';
// import { AddOrderComponent } from './Components/Orders/add-order/add-order.component';

export const routes: Routes = [
    {path:'' , redirectTo: "" , pathMatch:"full" },
    {path:'products',component: ProductScreenComponent},
    { path: 'orders', loadChildren: () => import('./Components/Orders/order.module').then(m => m.OrderModule) },
    // {path:'orders',component: OrderScreenComponent},
    {path: 'order/:id', component: OrderDetailComponent },
    // {path: 'add-order', component: AddOrderComponent },
    {path:'customers',component: CustomerScreenComponent}

];
    

    @NgModule({
        imports: [RouterModule.forRoot(routes)],
        exports: [RouterModule]
      })
      export class AppRoutingModule { }
=======
import { Routes } from '@angular/router';

export const routes: Routes = [];
>>>>>>> origin/master
