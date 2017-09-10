import { Component, OnInit } from '@angular/core';
import { Product } from "../models/product";
import { IAppState2 } from "../store";
import { Observable } from "rxjs/Observable";
import { Store } from "@ngrx/store";
import { ProductService } from "../services/product.service";

@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.scss']
})
export class StoreComponent implements OnInit {
  productsWanted: Observable<Array<Product>>;
  products: Array<Product> = new Array<Product>();

  constructor(private store: Store<any>, private productsService: ProductService) {
    this.productsWanted = store.select((a) => {
      console.log(a.order.products);
      return a.order.products;
    });
    //this.productsWanted = store.select('order');
  }



  ngOnInit() {
    this.productsService.getProducts().subscribe(result => {
      this.products = result;
    });
  }

}
