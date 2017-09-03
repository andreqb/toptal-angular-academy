import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StoreComponent } from "./store/store.component";
import { CheckoutComponent } from "./checkout/checkout.component";

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'store' },
  { path: 'store', component: StoreComponent },
  { path: 'checkout', component: CheckoutComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
