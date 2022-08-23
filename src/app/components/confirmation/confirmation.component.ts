import { Component, OnInit } from '@angular/core';
import { ProductServiceService } from 'src/app/services/product-service.service';

@Component({
  selector: 'app-confirmation',
  templateUrl: './confirmation.component.html',
  styleUrls: ['./confirmation.component.css']
})
export class ConfirmationComponent implements OnInit {
  total: any;
  constructor(private productService : ProductServiceService) { }

  ngOnInit(): void {
    this.total = this.productService.getCartToal();
  }

}
