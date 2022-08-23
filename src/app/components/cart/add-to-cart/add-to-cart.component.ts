import { ProductServiceService } from '../../../services/product-service.service';
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from 'src/app/models/product';

@Component({
  selector: 'app-add-to-cart',
  templateUrl: './add-to-cart.component.html',
  styleUrls: ['./add-to-cart.component.css']
})
export class AddToCartComponent implements OnInit {
  @Input() product: Product = {id: 0, name:'', price: 0, url: '', description:'', quantity: 0};
  
  availableQuantity: number[] = [1,2,3,4,5,6,7];
  quantity: number = 1;

  constructor(private productService : ProductServiceService) { }

  ngOnInit(): void {
    
  }

  addToCart(){
    debugger
    this.product.quantity = this.quantity;
    this.productService.addItemToCart(this.product);
    alert('Added to cart');
  }

}
