import { Component, Input, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.css']
})
export class CartItemComponent implements OnInit {
  @Input() item: Product = {id: 0, name:'', price: 0, url: '', description:'', quantity: 0};

  constructor() { }

  ngOnInit(): void {
  }

}
