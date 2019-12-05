import {Component, OnInit} from '@angular/core';
import {ProductServiceService} from '../../service/product/product-service.service';
import {ActivatedRoute, ParamMap, Router} from '@angular/router';
import {UserBillService} from '../../service/bill/user-bill.service';
import {Subscription} from 'rxjs';
import {Product} from '../../interface/product/product';
import {Bill} from '../../interface/bill/bill';
import {Order} from '../../interface/bill/order';

@Component({
  selector: 'app-shop-cart',
  templateUrl: './shop-cart.component.html',
  styleUrls: ['./shop-cart.component.css']
})
export class ShopCartComponent implements OnInit {
  sub: Subscription;
  product: Product;
  products: Product[];
  quantity = 1;
  total: number;
  bill: Bill = {bill: []};
  order: Order;

  constructor(private productService: ProductServiceService,
              private activatedRoute: ActivatedRoute,
              private  router: Router,
              private  userBillService: UserBillService) {
  }

  ngOnInit() {
    this.sub = this.activatedRoute.paramMap.subscribe((paramMap: ParamMap) => {
      const id = paramMap.get('id');
      this.productService.detailProduct(id).subscribe(next => {
        this.product = next;
        this.totalMoney(this.quantity);
      }, error => {
        console.log(error);
      });
    });
  }

  totalMoney(value) {
    this.quantity = value;
    this.total = value * this.product.price;
  }
}
