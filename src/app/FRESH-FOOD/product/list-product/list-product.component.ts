import {Component, OnInit} from '@angular/core';
import {Product} from '../../interface/product/product';
import {ProductServiceService} from '../../service/product/product-service.service';
import {UserService} from '../../service/user/user.service';
import {CookieService} from 'ngx-cookie-service';
import {OrderItem} from '../../interface/bill/orderItem';

@Component({
  selector: 'app-list-product',
  templateUrl: './list-product.component.html',
  styleUrls: ['./list-product.component.css']
})
export class ListProductComponent implements OnInit {
  products: Product[];
  bill: OrderItem;
  carts: Product[];

  constructor(private productService: ProductServiceService,
              private userService: UserService,
              private cookieService: CookieService,) {
  }

  ngOnInit() {
    this.userService.userOnline.username = this.cookieService.get('username');
    this.userService.userOnline.accessToken = this.cookieService.get('jwtToken');
    this.productService.listProduct().subscribe(next => {
        this.products = next;
      },
      error => {
        console.log(error);
      }
    );


  }

  saveCart(product: Product) {
    console.log(product);
    // @ts-ignore
    this.cookieService.set('carts', this.carts.push(product));
  }
}
