import {Injectable} from '@angular/core';
import {IProduct} from './iproduct';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private products: Array<IProduct> = [
    {id: 1, name: 'Iphone', price: 17000, status: true},
    {id: 2, name: 'SamSung', price: 15000, status: true},
    {id: 3, name: 'Nokia', price: 10000, status: false},
    {id: 4, name: 'Opo', price: 5000, status: true},
  ];

  constructor() {
  }

  getAllProducts(): Array<IProduct> {
    return this.products;
  }

  getProductById(id: number): IProduct {
    return this.products.find(item => item.id === id);
  }

  editProduct(id: number, product: IProduct): void {
    let productItem = this.getProductById(id);
    productItem = product;
  }

  saveProduct(product: IProduct): void {
    product.id = this.products.length + 1;
    this.products.push(product);
  }

  deleteProduct(product: IProduct): void {
    this.products.forEach(( item, index) =>
    {
      if (item === product){
        this.products.splice(index, 1);
      }
    });
  }

}
