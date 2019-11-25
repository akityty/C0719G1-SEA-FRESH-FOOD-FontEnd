import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Product} from '../../interface/product/product';
import {CookieService} from 'ngx-cookie-service';


@Injectable({
  providedIn: 'root'
})
export class ProductServiceService {
  private API_URL = 'http://localhost:8080/product/';


  constructor(private http: HttpClient, private cookieService: CookieService) {
  }

  listProduct(): Observable<Product[]> {
   return  this.http.get<Product[]>(`${this.API_URL}home`);
  }
  createProduct(product: Product): Observable<Product> {
    const headers = new HttpHeaders({
      Authorization: 'Bearer ' + this.cookieService.get('jwtToken')
    });
    return this.http.post<Product>(`${this.API_URL}add`, product,{headers});
  }
}


