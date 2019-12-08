import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {CookieService} from 'ngx-cookie-service';
import {Observable} from 'rxjs';
import {OrderItem} from '../../interface/bill/orderItem';
import {Order} from '../../interface/bill/order';
import {OrdersAwaiting} from '../../interface/bill/orders-awaiting';

@Injectable({
  providedIn: 'root'
})
export class UserBillService {
index = 0 ;
  private API_URL_BILL = 'https://fresh-food-2510.herokuapp.com/order';


  constructor(private http: HttpClient, private cookieService: CookieService) { }



  saveBill(orders: Order): Observable<OrderItem> {
    const headers = new HttpHeaders({
      Authorization: 'Bearer ' + this.cookieService.get('jwtToken')
    });
    return this.http.post<OrderItem>(`${this.API_URL_BILL}/save`, orders, {headers});
  }

  confirmPayment(id: number) {
    const headers = new HttpHeaders({
      Authorization: 'Bearer ' + this.cookieService.get('jwtToken')
    });
    return this.http.put(`${this.API_URL_BILL}/edit/${id}`, {headers});
  }

  listOrderProcessing(): Observable<OrdersAwaiting[]> {
    const headers = new HttpHeaders({
      Authorization: 'Bearer ' + this.cookieService.get('jwtToken')
    });
    return this.http.get<OrdersAwaiting[]>(`${this.API_URL_BILL}/getOrdersByStatus/Processing`, {headers});
  }

}
