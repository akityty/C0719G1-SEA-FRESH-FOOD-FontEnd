import {Component, OnInit} from '@angular/core';
import {Subscription} from 'rxjs';
import {Product} from '../../interface/product/product';
import {ProductServiceService} from '../../service/product/product-service.service';
import {ActivatedRoute, ParamMap, Router} from '@angular/router';
import {UserBillService} from '../../service/bill/user-bill.service';
import {Bill} from '../../interface/bill/bill';
import {Order} from '../../interface/bill/order';

@Component({
  selector: 'app-buy-now',
  templateUrl: './buy-now.component.html',
  styleUrls: ['./buy-now.component.css']
})
export class BuyNowComponent implements OnInit {
  sub: Subscription;
  product: Product;
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

  createOdrder() {
    this.order = {idProduct: this.product.id, quantity: this.quantity};
    this.bill.bill.push(this.order);
  }

  totalMoney(value) {
    this.quantity = value;
    this.total = value * this.product.price;
  }


  pay() {
    this.createOdrder();
    console.log(this.bill);
    // this.userBillService.saveBill();
  }

  bachToHome() {
    this.router.navigate(['listProduct']);

  }
}
