import { Component, OnInit, Input } from '@angular/core';
import { IAppState2 } from "../store";
import { Observable } from "rxjs/Observable";
import { Store } from "@ngrx/store";
import { Product } from "../models/product";
import {FormsModule } from '@angular/forms'



@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss']
})
export class CheckoutComponent implements OnInit {

products: Observable<Array<Product>>;
	constructor(private store: Store<any>){
		this.products = store.select((a) => { 
      return a.order.products;});
  }

shipping: string ="Shipping Address";
billing: string = "Billing Address";
  
submitOrder(form){
  console.log(form.value)
}
  
  

  ngOnInit() {
  }

}
