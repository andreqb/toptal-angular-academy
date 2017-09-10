import { Component, OnInit, Input } from '@angular/core';
import {FormsModule } from '@angular/forms'

@Component({
  selector: 'app-address',
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.scss']
})
export class AddressComponent implements OnInit {
@Input() addressType: string;
  constructor() { }

  ngOnInit() {
  }

}
