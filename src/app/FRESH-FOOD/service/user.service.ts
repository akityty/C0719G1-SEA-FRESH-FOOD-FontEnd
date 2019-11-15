import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {User} from '../interface/user';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};

@Injectable({
  providedIn: 'root'
})
export class UserService {
  userOnline: User;

  private API_URL = 'http://localhost:8080/api/auth';

  constructor(private http: HttpClient) {
  }

  createUser(user: User): Observable<User> {
    return this.http.post<User>(`${this.API_URL}/signup`, user, httpOptions);
  }

}
