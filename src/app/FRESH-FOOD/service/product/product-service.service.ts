import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Product} from '../../interface/product/product';


@Injectable({
  providedIn: 'root'
})
export class ProductServiceService {
  private API_URL = 'http://localhost:8080/product/';


  constructor(private http: HttpClient) {
  }

  listProduct(): Observable<Product[]> {
   return  this.http.get<Product[]>(`${this.API_URL}home`);
  }
  createProduct(product: Product): Observable<Product> {
    return this.http.post<Product>(`${this.API_URL}add`, product);
  }
}


