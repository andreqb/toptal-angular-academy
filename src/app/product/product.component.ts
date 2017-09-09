import { Component, OnInit, Input } from '@angular/core';
import { Product } from "../models/product";
import { Store } from '@ngrx/store';
import { INCREMENT } from '../cartActions';
import { IAppState2 } from "../store";
import { Observable } from "rxjs/Observable";

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
@Input() product: Array<Product>;
	constructor(private store: Store<IAppState2>){

	}

  ngOnInit() {
  }

  addToCart(product){
    this.store.dispatch({ type: INCREMENT, payload: { product:product } });
  }
}
