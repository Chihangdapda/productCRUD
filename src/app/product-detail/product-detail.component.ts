import { Component, OnInit } from '@angular/core';
import {Subscription} from 'rxjs';
import {IProduct} from '../iproduct';
import {ProductService} from '../product.service';
import {ActivatedRoute, ParamMap} from '@angular/router';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {
  sub: Subscription;
  product: IProduct;
  constructor(private productService: ProductService,
              private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.sub = this.activatedRoute.paramMap.subscribe((paramMap: ParamMap) =>{
      const id = +paramMap.get('id');
      this.product = this.productService.getProductById(id);
    });
  }
}
