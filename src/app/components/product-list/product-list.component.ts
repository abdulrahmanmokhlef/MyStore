import { ProductServiceService } from './../../services/product-service.service';
import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  products: Product[] = [];

  constructor(private productService: ProductServiceService) { }

  ngOnInit(): void {

    this.productService.getJSON().subscribe(res =>{
      debugger
      if(res){
        this.products = res;
      }
    });
  }

}
