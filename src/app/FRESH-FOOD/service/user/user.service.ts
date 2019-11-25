import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {User} from '../../interface/user/user';
import {UserOnline} from '../../interface/user/user-online';
// @ts-ignore
import {UserLogin} from '../interface/userLogin';
import {Login} from '../../interface/user/login';
import {CookieService} from 'ngx-cookie-service';



@Injectable({
  providedIn: 'root'
})
export class UserService {
  userOnline: UserOnline = {userName: '', password: '', role: [''], jwtToken: ''};
  private API_URL = 'http://localhost:8080/api/auth';
check = '';
  constructor(private http: HttpClient, private cookieService: CookieService) {
  }

  createUser(user: User): Observable<User> {
    return this.http.post<User>(`${this.API_URL}/signup`, user);
  }

  userLogin(userLogin: UserLogin): Observable<UserLogin> {
    return this.http.post<UserLogin>(`${this.API_URL}/signin`, userLogin);
  }

  userDetails(): Observable<User> {
    const headers = new HttpHeaders({
      Authorization: 'Bearer ' + this.cookieService.get('jwtToken')
    });
    return this.http.get<User>(`${this.API_URL}/view/user/${this.userOnline.userName}`, {headers});
  }

  updateUser(user: User): Observable<User> {
    const headers = new HttpHeaders({
      Authorization: 'Bearer ' + this.cookieService.get('jwtToken')
    });
    return this.http.put<User>(`${this.API_URL}/update/user`, user, {headers});
  }
  updatePasswordUser(user: User): Observable<User> {
    const headers = new HttpHeaders({
      Authorization: 'Bearer ' + this.cookieService.get('jwtToken')
    });
    return this.http.put<User>(`${this.API_URL}/update/password/user`, user, {headers});
  }

  autoLogin(login: Login) {
    this.userLogin(login).subscribe(next => {
        this.cookieService.set('username', next.username);
        this.cookieService.set('jwtToken', next.accessToken);
        this.check = 'true';
        window.location.reload();
      },
      error => {
        this.cookieService.delete('username');
        this.cookieService.delete('jwtToken');
        this.cookieService.delete('password');
        this.check = 'false';
      });
  }
}
