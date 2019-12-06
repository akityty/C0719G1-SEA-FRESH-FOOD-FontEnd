import {Component, OnDestroy, OnInit} from '@angular/core';
import {ProductServiceService} from '../../service/product/product-service.service';
import {ActivatedRoute, ParamMap, Router} from '@angular/router';
import {UserBillService} from '../../service/bill/user-bill.service';
import {Subscription} from 'rxjs';
import {Product} from '../../interface/product/product';
import {OrderItem} from '../../interface/bill/orderItem';
import {Order} from '../../interface/bill/order';

@Component({
  selector: 'app-shop-cart',
  templateUrl: './shop-cart.component.html',
  styleUrls: ['./shop-cart.component.css']
})
export class ShopCartComponent implements OnInit, OnDestroy {
  carts: Product[] = [];


  constructor(private productService: ProductServiceService,
              private activatedRoute: ActivatedRoute,
              private  router: Router,
              private  userBillService: UserBillService) {
  }

  ngOnDestroy() {
    window.localStorage.setItem('carts', JSON.stringify(this.carts));
  }

  ngOnInit() {
    this.carts = JSON.parse(window.localStorage.getItem('carts'));
    console.log(this.carts);
  }

  delete(value) {
    this.carts.splice(value, 1);
  }
  backToHome() {
    this.router.navigate(['listProduct']);
  }
}
