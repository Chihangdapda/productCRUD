import { Component, OnInit } from '@angular/core';
import {Subscription} from 'rxjs';
import {IProduct} from '../iproduct';
import {ProductService} from '../product.service';
import {ActivatedRoute, ParamMap, Router} from '@angular/router';

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.scss']
})
export class ProductEditComponent implements OnInit {
  sub: Subscription;
  id: number;
  product: IProduct = {
    id: 0,
    name: '',
    price: 0,
    status: true
  };

  constructor(private productService: ProductService,
              private router: Router,
              private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.sub = this.activatedRoute.paramMap.subscribe((paramMap: ParamMap) =>{
      this.id = +paramMap.get('id');
      this.product = this.productService.getProductById(this.id);
    });
  }

  upDateProduct(): void{
    this.productService.editProduct(this.id, this.product);
  }

}
