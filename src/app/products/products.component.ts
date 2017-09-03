import { Component, OnInit } from '@angular/core';
import { Product } from '../models/product';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  constructor() { }

  products: Array<Product> = new Array<Product>();

  ngOnInit() {
    this.products.push(new Product ('product 1', 'product description', 1.23));
    this.products.push(new Product ('product 2', 'product description', 4.56));
    this.products.push(new Product ('product 3', 'product description', 7.89));
  }

}