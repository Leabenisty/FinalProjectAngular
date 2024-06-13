import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductScreenComponent } from './product-screen/product-screen.component';
import { AddProductComponent } from './add-product/add-product.component';
import { DeleteProductComponent } from './delete-product/delete-product.component';
import { UpdateProductComponent } from './update-product/update-product.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [ProductScreenComponent,
    AddProductComponent,
    DeleteProductComponent,
    UpdateProductComponent,

  ],
  imports: [
     CommonModule,FormsModule,ReactiveFormsModule
  ]
})
export class ProductModule { }
