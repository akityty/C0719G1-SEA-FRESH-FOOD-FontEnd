import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Product} from '../../interface/product/product';
import {CookieService} from 'ngx-cookie-service';
import {Category} from '../../interface/product/category';
import {Provider} from '../../interface/product/provider';


@Injectable({
  providedIn: 'root'
})
export class ProductServiceService {
  private API_URL = 'http://localhost:8080/product';


  constructor(private http: HttpClient, private cookieService: CookieService) {
  }

  listProduct(): Observable<Product[]> {
    return this.http.get<Product[]>(`${this.API_URL}/home`);
  }

  listCategory(): Observable<Category[]> {
    const headers = new HttpHeaders({
      Authorization: 'Bearer ' + this.cookieService.get('jwtToken')
    });
    return this.http.get<Category[]>(`${this.API_URL}/category`, {headers});
  }

  listProvider(): Observable<Provider[]> {
    const headers = new HttpHeaders({
      Authorization: 'Bearer ' + this.cookieService.get('jwtToken')
    });
    return this.http.get<Provider[]>(`${this.API_URL}/provider`, {headers});
  }

  createProduct(product: Product): Observable<Product> {
    const headers = new HttpHeaders({
      Authorization: 'Bearer ' + this.cookieService.get('jwtToken')
    });
    return this.http.post<Product>(`${this.API_URL}/add`, product, {headers});
  }
}


