import { Component, OnInit } from '@angular/core';
import { Product } from "../models/product";
import { IAppState2 } from "../store";
import { Observable } from "rxjs/Observable";
import { Store } from "@ngrx/store";

@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.scss']
})
export class StoreComponent implements OnInit {
productsWanted: Observable<Array<Product>>;
	constructor(private store: Store<any>){
		this.productsWanted = store.select((a) => { 
      console.log(a.order.products); 
      return a.order.products;});
//this.productsWanted = store.select('order');
	}

  products: Array<Product> = new Array<Product>();
  
  ngOnInit() {
    this.products.push(new Product ('product 1', 'product description', 1.23));
    this.products.push(new Product ('product 2', 'product description', 4.56));
    this.products.push(new Product ('product 3', 'product description', 7.89));
  }

}
