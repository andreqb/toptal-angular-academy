import { Component, OnInit, Input } from '@angular/core';
import { User } from "../models/user";

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
users: Array<User> = new Array<User>();
  constructor() { }

  ngOnInit() {
    this.users = new Array<User>(); 
    this.users.push(new User ('Mike', 'Jones'));
    this.users.push(new User ('Sean', 'Glaze'));
  }
}
