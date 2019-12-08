import {Component, OnInit} from '@angular/core';
import {UserBillService} from '../../service/bill/user-bill.service';
import {Order} from '../../interface/bill/order';
import {OrdersAwaiting} from '../../interface/bill/orders-awaiting';

@Component({
  selector: 'app-management-list-order',
  templateUrl: './management-list-order.component.html',
  styleUrls: ['./management-list-order.component.css']
})
export class ManagementListOrderComponent implements OnInit {
  listOrder: OrdersAwaiting[];
  check = false;

  constructor(private userBillService: UserBillService) {
  }

  ngOnInit() {
    this.userBillService.listOrderProcessing().subscribe(next => {
      this.listOrder = next;
    }, error => {
      console.log(error);
    });
  }

  payAll(id: number) {
    console.log(id);
    this.userBillService.confirmPayment(id).subscribe(next => {
      this.check = true;
    }, error => {
      this.check = false;
    });
  }
}
