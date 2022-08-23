import { ConfirmationComponent } from './components/confirmation/confirmation.component';
import { ProductItemDetailsComponent } from './components/product-item-details/product-item-details.component';
import { CartComponent } from './components/cart/cart.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: '', component: ProductListComponent},
  {path: 'product-list', component: ProductListComponent},
  {path: 'product-details/:id', component: ProductItemDetailsComponent},
  {path: 'cart', component: CartComponent},
  {path: 'confirmation', component: ConfirmationComponent},

  {path: '**', component: ProductListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
