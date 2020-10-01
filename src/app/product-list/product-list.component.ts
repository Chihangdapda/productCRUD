import { Component, OnInit } from '@angular/core';
import {IProduct} from '../iproduct';
import {ProductService} from '../product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {
  listProducts: Array<IProduct> ;

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.listProducts = this.productService.getAllProducts();
  }

}
