import { Component, OnInit, Input } from '@angular/core';
import { Product } from "../models/product";
import { Store } from '@ngrx/store';
import { INCREMENT } from '../cartActions';
import { IAppState2 } from "../store";
import { Observable } from "rxjs/Observable";
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { ProductService } from "../services/product.service";

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  closeResult: string;
  @Input() product: Array<Product>;
  constructor(private store: Store<IAppState2>, private modalService: NgbModal, private productService: ProductService ) {

  }

  ngOnInit() {
  }

  addToCart(product) {
    this.store.dispatch({ type: INCREMENT, payload: { product: product } });
  }


  open(content) {
    this.modalService.open(content).result.then((product: Product) => {
      this.productService.deleteProduct(product.id);
    }, (reason) => {
    });
  }

}
