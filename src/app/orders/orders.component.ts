import { Component, OnInit } from '@angular/core';
import { Order } from "../models/order";
import { Product } from "../models/product";
import { User } from "../models/user";
import { Address } from "../models/address";
import { ProductService } from "../services/product.service";

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss']
})
export class OrdersComponent implements OnInit {
  orders: Array<Order> = new Array<Order>();
  constructor(private productsService: ProductService) { }

  displayedOrer: Order;

  ngOnInit() {
    let address1 = new Address("101 Main st", "12", "Split", "Dalmatia", "122341");
    let address2 = new Address("101 Main st", "12", "Pula", "Dalmatia", "122341");


    this.productsService.getProducts().subscribe(result => {
      this.orders.push(new Order(new User('Mike', 'Jones', address1, address2), result, 1));

      this.orders.push(new Order(new User('Sean', 'Glaze', address2, address2), result, 2));

      this.orders.push(new Order(new User('Will', 'Pratt', address1, address1), result, 3));

      this.orders.push(new Order(new User('John', 'Parks', address2, address1), result, 4));
    });



  }



}
