import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {ProfileInfo} from "../interface/profile-info";
import {JwtResponse} from "../interface/jwt-response";
import {PassInfo} from "../interface/pass-info";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private API_URL = 'http://localhost:8080/api/auth';

  constructor(private http: HttpClient) {
  }

  getOneAccToken(): Observable<ProfileInfo> {
    return this.http.get<ProfileInfo>(`${this.API_URL}/update`);
  }
  updateAcc(user: Partial<ProfileInfo>): Observable<JwtResponse> {
    const r = confirm('Ban chac chan muon cap nhat?\n Chon OK hoac Cancel!');
    if (r) {
      return this.http.put<JwtResponse>(`${this.API_URL}/update/user`, user);
    }
  }

  updatePass(user: Partial<PassInfo>): Observable<JwtResponse> {
    const r = confirm('Ban chac chan muon cap nhat?\n Chon OK hoac Cancel!');
    if (r) {
      return this.http.put<JwtResponse>(`${this.API_URL}/update/pass/user`, user);
    }
  }

}
