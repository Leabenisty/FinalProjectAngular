import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormControl, FormGroup, Validators , ReactiveFormsModule } from '@angular/forms';
import { ProductService } from '../../../Services/product.service';
import { Product } from '../../../Models/product';
import { MatIconModule } from '@angular/material/icon';


@Component({
  selector: 'app-update-product',
  standalone: true,
  imports: [MatIconModule, ReactiveFormsModule],
  templateUrl: './update-product.component.html',
  styleUrl: './update-product.component.css'
})
export class UpdateProductComponent {
  
  public updateForm !: FormGroup
  @Input() product!: Product;
  @Output() ProductUpdated= new EventEmitter<void>();

  constructor(private _productService: ProductService) { }

  ngOnInit(): void {
    this.updateForm = new FormGroup({
      "name": new FormControl("name", Validators.max(7)),
      "address": new FormControl("address", Validators.min(4)),
      "phoneNumber": new FormControl("phoneNumber", Validators.required),
    })
  }

  public onUpdate(): void {

    
    this. _productService.updateProduct(this.product.id,this.updateForm.value).subscribe((response: any) => {
        console.log('Customer Updated');
        this.ProductUpdated.emit();
      },
      error => {
        console.error('Error Updating customer:', error);
      }
    );
  }
}
