import {Component, OnInit} from '@angular/core';
import {Product} from '../../interface/product/product';
import {ProductServiceService} from '../../service/product/product-service.service';
import {UserService} from '../../service/user/user.service';
import {CookieService} from 'ngx-cookie-service';
import {Bill} from '../../interface/bill/bill';

@Component({
  selector: 'app-list-product',
  templateUrl: './list-product.component.html',
  styleUrls: ['./list-product.component.css']
})
export class ListProductComponent implements OnInit {
  products: Product[];
  bill: Bill;
  carts: string[];

  constructor(private productService: ProductServiceService,
              private userService: UserService,
              private cookieService: CookieService,
  ) {
  }

  ngOnInit() {
    this.userService.userOnline.userName = this.cookieService.get('username');
    this.userService.userOnline.accessToKen = this.cookieService.get('jwtToken');
    this.productService.listProduct().subscribe(next => {
        this.products = next;
      },
      error => {
        console.log(error);
      }
    );


  }

  saveCart(product: Product) {
    this.cookieService.set('carts', String(this.carts.push(product.id.toString())));
    console.log(this.cookieService.get('carts'));
  }
}
