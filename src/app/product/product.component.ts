import { Component, OnInit, Input } from '@angular/core';
import { Product } from "../models/product";
import { Store } from '@ngrx/store';
import { INCREMENT, DECREMENT, RESET } from '../cart';
import { IAppState } from "../store";
import { Observable } from "rxjs/Observable";

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
@Input() product: Array<Product>;
counter: Observable<number>;
	constructor(private store: Store<IAppState>){
		this.counter = store.select('counter');
	}

  ngOnInit() {
  }

  addToCart(product){
    this.store.dispatch({ type: INCREMENT });
  }
}
