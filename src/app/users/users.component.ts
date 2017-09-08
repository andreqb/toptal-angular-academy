import { Component, OnInit, Input } from '@angular/core';
import { User } from "../models/user";
import { Address } from "../models/address"

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
users: Array<User> = new Array<User>();
  constructor() { }

  ngOnInit() {
    let address1 = new Address("101 Main st", "12", "Split", "Dalmatia", "122341" );
    let address2 = new Address("101 Main st", "12", "Pula", "Dalmatia", "122341" );
    this.users.push(new User ('Mike', 'Jones', address1, address2 ));
    this.users.push(new User ('Sean', 'Glaze',  address2, address1));
  }
}
