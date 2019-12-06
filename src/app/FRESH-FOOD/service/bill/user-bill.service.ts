import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {CookieService} from 'ngx-cookie-service';
import {Observable} from 'rxjs';
import {OrderItem} from '../../interface/bill/orderItem';
import {Order} from '../../interface/bill/order';

@Injectable({
  providedIn: 'root'
})
export class UserBillService {

  private API_URL_BILL = 'http://localhost:8080/order';

  constructor(private http: HttpClient, private cookieService: CookieService) { }

  // getBill(): Observable<UserBill> {
  //   const headers = new HttpHeaders({
  //     Authorization: 'Bearer ' + this.cookieService.get('jwtToken')
  //   });
  //   return this.http.get<UserBill>(`${this.API_URL_BILL}/list`, {headers});
  // }

  saveBill(orders: Order): Observable<OrderItem> {
    const headers = new HttpHeaders({
      Authorization: 'Bearer ' + this.cookieService.get('jwtToken')
    });
    return this.http.post<OrderItem>(`${this.API_URL_BILL}/save`, orders, {headers});
  }

  // deleteBill(): Observable<UserBill> {
  //   const headers = new HttpHeaders({
  //     Authorization: 'Bearer ' + this.cookieService.get('jwtToken')
  //   });
  //   return this.http.get<UserBill>(`${this.API_URL_BILL}/delete`, {headers});
  // }
}
