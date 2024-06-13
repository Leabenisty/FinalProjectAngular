import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ProductService } from '../../../Services/product.service';
import { MatIconModule } from '@angular/material/icon';


@Component({
  selector: 'app-delete-product',
  standalone: true,
  imports: [MatIconModule],
  templateUrl: './delete-product.component.html',
  styleUrl: './delete-product.component.css'
})
export class DeleteProductComponent {
  @Input() productId!: number;

  @Output() productDeleted = new EventEmitter<void>();

  constructor(private _productService: ProductService) {}

  public onDelete(): void {


    
    this. _productService.deleteProduct(this.productId).subscribe(() => {
        console.log('Customer deleted');
        this.productDeleted.emit();
      },
      error => {
        console.error('Error deleting customer:', error);
      }
    );
  }
}
