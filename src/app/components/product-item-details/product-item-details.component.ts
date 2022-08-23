import { Product } from 'src/app/models/product';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductServiceService } from 'src/app/services/product-service.service';

@Component({
  selector: 'app-product-item-details',
  templateUrl: './product-item-details.component.html',
  styleUrls: ['./product-item-details.component.css']
})
export class ProductItemDetailsComponent implements OnInit {
  id: any;
  products: Product[] = [];
  product: any;
  constructor(private route: ActivatedRoute, private productService : ProductServiceService) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');

    this.productService.getJSON().subscribe(res=>{
      debugger
      this.products = res;

      this.product = this.products.find(i => i.id == this.id);  
    });
    
     
  }


}
