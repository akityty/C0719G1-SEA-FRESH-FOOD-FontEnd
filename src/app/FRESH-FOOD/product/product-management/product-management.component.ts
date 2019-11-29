import {Component, OnInit} from '@angular/core';
import {ProductServiceService} from '../../service/product/product-service.service';
import {Product} from '../../interface/product/product';

@Component({
  selector: 'app-product-management',
  templateUrl: './product-management.component.html',
  styleUrls: ['./product-management.component.css']
})
export class ProductManagementComponent implements OnInit {
  products: Product[];

  constructor(private productService: ProductServiceService) {
  }

  ngOnInit() {
    this.productService.listProduct().subscribe(next => {
        this.products = next;
      },
      error => {
        console.log(error);
      }
    );
  }

}
