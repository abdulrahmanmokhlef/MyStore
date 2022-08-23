import { Product } from 'src/app/models/product';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductServiceService {
  
  constructor(private http: HttpClient) { }

  public getJSON(): Observable<any> {
    return this.http.get("./assets/data.json");
  }

  addItemToCart(item: Product){
    debugger
    let cartItems: Product[] = [];

    let items = localStorage.getItem('cartItems'); 
    if(items)
      cartItems = JSON.parse(items);
      
    let index = cartItems.findIndex(i => i.id == item.id);
    if(index == -1)
      cartItems.push(item);
    else
      cartItems.map(i =>{ i.quantity = item.quantity})

      localStorage.setItem('cartItems', JSON.stringify(cartItems));
 
  }
    
  getCartItems(){
    let cartItems: Product[] = [];

    let items = localStorage.getItem('cartItems'); 
    if(items)
      cartItems = JSON.parse(items);

      return cartItems; 
  }

  submitCart(total: any){
    localStorage.removeItem('cartItems');
    localStorage.setItem('cartTtotal', total);
  }

  getCartToal(){
    let total = localStorage.getItem('cartTtotal'); 

    if(total)
      return total; 

    return;
  }


}
