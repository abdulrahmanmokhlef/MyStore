import { Product } from 'src/app/models/product';
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit {
  @Input() product: Product = {id: 0, name:'', price: 0, url: '', description:'', quantity: 0};
  
  constructor(private router: Router) { }

  ngOnInit(): void {
  
  }

  viewProductDetails(){
    this.router.navigate(['/product-details/'+ this.product.id ]);
  }

}
