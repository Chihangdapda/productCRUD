import { Component, OnInit } from '@angular/core';
import {IProduct} from '../iproduct';
import {ActivatedRoute} from '@angular/router';
import {ProductService} from '../product.service';

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.scss']
})
export class ProductCreateComponent implements OnInit {
  product: IProduct = {
    id: 0,
    name: '',
    price: 0,
    status: null,
  };

  constructor(private activatedRoute: ActivatedRoute,
              private productService: ProductService) { }

  ngOnInit(): void {
  }

  // tslint:disable-next-line:typedef
  createProduct(){
    this.productService.saveProduct(this.product);
  }

}
