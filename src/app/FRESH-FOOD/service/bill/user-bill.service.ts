import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {CookieService} from 'ngx-cookie-service';
import {Observable} from 'rxjs';
import {Bill} from '../../interface/bill/bill';

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

  saveBill(bill: Bill): Observable<Bill> {
    const headers = new HttpHeaders({
      Authorization: 'Bearer ' + this.cookieService.get('jwtToken')
    });
    return this.http.post<Bill>(`${this.API_URL_BILL}/save`, bill, {headers});
  }

  // deleteBill(): Observable<UserBill> {
  //   const headers = new HttpHeaders({
  //     Authorization: 'Bearer ' + this.cookieService.get('jwtToken')
  //   });
  //   return this.http.get<UserBill>(`${this.API_URL_BILL}/delete`, {headers});
  // }
}
