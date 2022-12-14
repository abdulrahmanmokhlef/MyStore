import { Product } from 'src/app/models/product';
import { Component, OnInit } from '@angular/core';
import { ProductServiceService } from 'src/app/services/product-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  cartItems: Product[] = [];
  total: number = 0;
  
  shippingDetails: any={
    fullName: null,
    address: null,
    cardNum: null
  };

  invalidName = false;
  invalidAddress = false;

  constructor(private router: Router, private productService : ProductServiceService) { }
  
  ngOnInit(): void {
    debugger
    this.cartItems = this.productService.getCartItems();
    this.calculateTotal(this.cartItems);
  }

  calculateTotal(items: Product[]){
    this.total = 0;
    items.forEach(i => {
      this.total += i.price * i.quantity;
    })
  }

  validateName(event:any){
    debugger
    if(event.length < 3)
      this.invalidName =true
    else
      this.invalidName = false  
  }

  validateAddress(event:any){
    if(event.length < 6)
      this.invalidAddress =true
    else
      this.invalidAddress = false  
  }

  
  changeItem(newItem: Product) {
    debugger
    // this.cartItems.map(i => {
    //   if(i.id == newItem.id)
    //     i.quantity = newItem.quantity
    // })

    this.productService.addItemToCart(newItem);
    this.cartItems = this.productService.getCartItems();
    this.calculateTotal(this.cartItems);

  }

  removeItemFromCart(id: number){
    debugger
    this.productService.removeItemFromCart(id);
    this.cartItems = this.productService.getCartItems();
    this.calculateTotal(this.cartItems);

    alert('Item removed from card.')
  }

  onSubmit(){
    debugger

    this.productService.submitCart(this.total);

    this.router.navigate(['/confirmation' ]);

  }
}
