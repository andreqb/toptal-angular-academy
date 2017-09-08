import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StoreComponent } from "./store/store.component";
import { CheckoutComponent } from "./checkout/checkout.component";
import { ConfirmComponent } from "./confirm/confirm.component";
import { UsersComponent } from "./users/users.component";
import { OrdersComponent } from "./orders/orders.component";

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'store' },
  { path: 'store', component: StoreComponent },
  { path: 'checkout', component: CheckoutComponent },
  { path: 'confirm', component: ConfirmComponent },
  { path: 'users', component: UsersComponent },
  { path: 'orders', component: OrdersComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
