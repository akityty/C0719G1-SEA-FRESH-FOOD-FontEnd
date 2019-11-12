import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {IUser} from '../interface/user.interface';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  userOnline: IUser = {email: '', password: ''};
  private readonly API_URL = 'http://localhost:8080/api';

  constructor(private http: HttpClient) { }
  getUsers(count = 10): Observable<IUser[]> {
    return this.http.get<IUser[]>(this.API_URL).pipe(
      map(response => response.filter((post, i) => i < count))
    );
  }
    getById(id: number): Observable<IUser> {
      return this.http.get<IUser>(`${this.API_URL}/${id}`);
  }

  createUser(user: Partial<IUser>): Observable<IUser> {
    return this.http.post<IUser>(this.API_URL, user);
  }
  login(email: string, password: string) {
    return this.http.get(`${this.API_URL}/checkLogin?email=${email}&&password=${password}`);
  }
}
