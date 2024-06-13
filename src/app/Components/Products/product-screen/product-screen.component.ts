import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { Product } from '../../../Models/product';
import { ProductService } from '../../../Services/product.service';
import { FilterComponent } from '../../filter/filter.component';
import { DeleteProductComponent } from '../delete-product/delete-product.component';
import { UpdateProductComponent } from '../update-product/update-product.component';
import { AddProductComponent } from '../add-product/add-product.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-product-screen',
  standalone: true,
  imports: [CommonModule,FormsModule,ReactiveFormsModule,MatButtonModule, MatDividerModule, MatIconModule,FilterComponent, MatTableModule, MatPaginatorModule,DeleteProductComponent,AddProductComponent,UpdateProductComponent],
  templateUrl: './product-screen.component.html',
  styleUrl: './product-screen.component.css'
})
export class ProductScreenComponent implements AfterViewInit {

  @ViewChild(MatPaginator)
  paginator!: MatPaginator; 
  displayedColumns: string[] = ['Id', 'name', 'price','update','delete'];
  dataSource = new MatTableDataSource<Product>();

  constructor(private _productDataService: ProductService) { }
  
  ngOnInit(): void {
    this.loadProduct()
  }

  loadProduct() {
    this._productDataService.getProductsList().subscribe((customers: Product[]) => {
      this.dataSource.data = customers;
    }, (error) => {
      console.error('Error fetching data from server', error);
    })
  }

  onSearchTextChanged(searchText: string): void {

    const id = Number(searchText);
    if (!isNaN(id) && searchText.trim() !== '') {
    this._productDataService.getProductById(id).subscribe((product: Product) => {
      if (product) { this.dataSource.data = product ? [product] : []; }
    }, (error) => {
      console.error('Error fetching product by ID', error);
      this.dataSource.data = [];
    });
  } else {
      this.loadProduct();
     }
  }
  onProductDeleted(): void {
    this.loadProduct()  // טוען את רשימת הלקוחות מחדש לאחר מחיקה
  }
  onProductUpdated(): void {
    this.loadProduct()  // טוען את רשימת הלקוחות מחדש לאחר מחיקה
  }

  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
  }

  public showAddProduct = false


}



