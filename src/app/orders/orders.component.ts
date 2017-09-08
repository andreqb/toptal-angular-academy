import { Component, OnInit } from '@angular/core';
import { Order } from "../models/order";
import { Product } from "../models/product";
import { User } from "../models/user";
import { Address } from "../models/address";

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss']
})
export class OrdersComponent implements OnInit {
orders: Array<Order> = new Array<Order>();
  constructor() { }

  displayedOrer: Order;

  ngOnInit() {

    var products = new Array<Product>();
    let address1 = new Address("101 Main st", "12", "Split", "Dalmatia", "122341" );
    let address2 = new Address("101 Main st", "12", "Pula", "Dalmatia", "122341" );
    products.push(new Product ('product 1', 'product description', 1.23));
    products.push(new Product ('product 2', 'product description', 4.56));
    products.push(new Product ('product 3', 'product description', 7.89));
    
    this.orders.push(new Order(new User ('Mike', 'Jones', address1, address2), products, 1));

    this.orders.push(new Order(new User ('Sean', 'Glaze', address2, address2), products, 2));

    this.orders.push(new Order(new User ('Will', 'Pratt', address1, address1), products, 3));

    this.orders.push(new Order(new User ('John', 'Parks', address2, address1), products, 4));

  }

  

}
