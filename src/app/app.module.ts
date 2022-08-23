import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { ProductItemDetailsComponent } from './components/product-item-details/product-item-details.component';
import { ProductItemComponent } from './components/product-item/product-item.component';
import { CartComponent } from './components/cart/cart.component';
import { ConfirmationComponent } from './components/confirmation/confirmation.component';
import { HeaderComponent } from './layout/header/header.component';
import { FooterComponent } from './layout/footer/footer.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {HttpClientModule} from '@angular/common/http';
import { FormsModule, NgForm, NgModel } from '@angular/forms';
import { AddToCartComponent } from './components/cart/add-to-cart/add-to-cart.component';
import { CartItemComponent } from './components/cart/cart-item/cart-item.component';
import { NumbersOnlyDirective } from './directives/numbers-only.directive';

@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    ProductItemDetailsComponent,
    ProductItemComponent,
    CartComponent,
    ConfirmationComponent,
    HeaderComponent,
    FooterComponent,
    AddToCartComponent,
    CartItemComponent,
    NumbersOnlyDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
