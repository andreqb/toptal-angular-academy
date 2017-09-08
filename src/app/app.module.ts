import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductsComponent } from './products/products.component';
import { StoreComponent } from './store/store.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { ProductComponent } from './product/product.component';
import { AddressComponent } from './address/address.component';
import { ConfirmComponent } from './confirm/confirm.component';
import { StoreModule } from '@ngrx/store';
import { cartReducer } from './cart';

@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    StoreComponent,
    CheckoutComponent,
    ProductComponent,
    AddressComponent,
    ConfirmComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.provideStore({ counter: cartReducer })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
