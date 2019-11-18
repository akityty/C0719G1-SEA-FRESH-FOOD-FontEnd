import {Component, OnInit} from '@angular/core';
import {UserService} from './FRESH-FOOD/service/user.service';
import {Login} from './FRESH-FOOD/interface/login';
import {CookieService} from 'ngx-cookie-service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {

  constructor(private userService: UserService, private cookieService: CookieService) {
  }

  ngOnInit() {
    this.userService.userOnline.userName = this.cookieService.get('username');
    this.userService.userOnline.jwtToken = this.cookieService.get('jwtToken');
    this.userService.userOnline.password = window.sessionStorage.getItem('password');
  }
  logout() {
    this.cookieService.delete('username');
    this.cookieService.delete('jwtToken');
    window.sessionStorage.removeItem('password');
    this.userService.userOnline.userName = '';
    this.userService.userOnline.jwtToken = '';
    this.userService.userOnline.password = '';
    window.location.reload();
  }
}
