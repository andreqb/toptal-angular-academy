import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { ProductService } from "../services/product.service";
import { Product } from "../models/product";

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.scss']
})
export class EditProductComponent implements OnInit {
product: Product;
id: number;
componentTitle: string;
  constructor(private route: ActivatedRoute, private producService: ProductService) { }

  ngOnInit() {
    this.id = +this.route.snapshot.paramMap.get('id');
    if (this.id){
      this.product = this.producService.getProductById(this.id);
      this.componentTitle = 'Edit Product';
    }
    else{
      this.product = new Product(0,'','',0);
      this.componentTitle = 'Add Product';
    }
  }

  updateProduct(form){
    this.producService.updateProduct(this.id,form.value.name,form.value.description,+form.value.price)

  }

  createProduct(form){
    this.producService.createProduct(form.value.name,form.value.description,+form.value.price)

  }
}
