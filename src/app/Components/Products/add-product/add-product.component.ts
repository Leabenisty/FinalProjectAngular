import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators, FormControl } from '@angular/forms';
import { ProductService } from '../../../Services/product.service';
import { CapitalizeFirstDirective } from '../apitalize-first.directive';


@Component({
  selector: 'app-add-product',
  standalone: true,
  imports: [ReactiveFormsModule,CapitalizeFirstDirective],
  templateUrl: './add-product.component.html',
  styleUrl: './add-product.component.css'
})
export class AddProductComponent {

  public addProductForm!: FormGroup;

  constructor(private _productService: ProductService){}


  ngOnInit(): void{
    
    this.addProductForm = new FormGroup({
      "name": new FormControl("name", Validators.max(7)),
      "price": new FormControl("price", Validators.required)
    })
  }

  public save(){
    console.log("lea");
    
    this._productService.addProduct(this.addProductForm.value).subscribe((Response: any) => {
    })
  }

}

