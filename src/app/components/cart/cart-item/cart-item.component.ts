import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from 'src/app/models/product';
import { ProductServiceService } from 'src/app/services/product-service.service';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.css']
})
export class CartItemComponent implements OnInit {
  @Input() item: Product = {id: 0, name:'', price: 0, url: '', description:'', quantity: 0};
  @Output() newItemEvent = new EventEmitter<Product>();
  @Output() removeItemEvent = new EventEmitter<number>();


  constructor(private route:Router, private productService : ProductServiceService) { }

  ngOnInit(): void {
  }

  changeQuantity(quantity: any){
    debugger
    if(quantity <= 0){
      quantity = 1;
      alert('minimum Quantity is 1')
    }

    this.item.quantity = quantity;
    this.newItemEvent.emit(this.item);
  }

  removeItemFromCart(id: number){
    this.removeItemEvent.emit(id);
  }

}
