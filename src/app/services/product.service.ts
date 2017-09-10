import { Injectable } from '@angular/core';
import { Product } from "../models/product";
import { Observable } from "rxjs/Observable";
import 'rxjs/add/observable/from';

@Injectable()
export class ProductService {
  products: Array<Product> = new Array<Product>();
  constructor() {
    this.products.push(new Product(1, 'product 1', 'product description', 1.23));
    this.products.push(new Product(2, 'product 2', 'product description', 4.56));
    this.products.push(new Product(3, 'product 3', 'product description', 7.89));
  }

  getProducts() : Observable<Array<Product>>{
    return Observable.from([this.products]);
  }

  getProductById(id: number): Product{
    return this.products.find(p => p.id === id);
  }

  updateProduct(id: number, name: string, description: string, price: number){
    console.log('id:' + id + ' name:' + name + ' description:' + description + 'price:' + price)
  }

}
