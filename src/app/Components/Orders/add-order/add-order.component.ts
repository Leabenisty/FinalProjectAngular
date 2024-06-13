import { Component, Input, OnInit } from '@angular/core';
// import { Product, ProductsService } from './products.service';
// import { OrderService } from './order.service';

@Component({
  selector: 'app-add-order',
  standalone: true,
  templateUrl: './add-order.component.html',
  styleUrls: ['./add-order.component.css'],
})
 export class AddOrderComponent  {
//   @Input() customerId!: number;
//   products: Product[] = [];

//   constructor(private productsService: ProductsService, private orderService: OrderService) { }

//   ngOnInit(): void {
//     this.productsService.getProducts().subscribe(products => {
//       this.products = products.map(product => ({ ...product, selected: false, quantity: 1 }));
//     });
//   }

//   submitOrder(): void {
//     if (!this.customerId) {
//       console.error('Customer ID is required');
//       return;
//     }

//     const selectedProducts = this.products
//       .filter(product => product.selected)
//       .map(product => ({ productId: product.id, quantity: product.quantity }));

//     const order = {
//       customerId: this.customerId,
//       products: selectedProducts
//     };

//     this.orderService.addOrder(order).subscribe(response => {
//       console.log('Order submitted successfully', response);
//     }, error => {
//       console.error('Error submitting order', error);
//     });
//   }
 }
