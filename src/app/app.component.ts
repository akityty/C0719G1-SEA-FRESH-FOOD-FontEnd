import {Component} from '@angular/core';
import {UserService} from './service/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'login-logout';
  message = '';

  constructor(private userService: UserService) {
  }

  admin() {
    this.userService.admin().subscribe(next => {
        this.message = 'thành công!';
      }, error => {
        this.message = 'thất bại';
      }
    );
  }
  users() {
    this.userService.users().subscribe(next => {
        this.message = 'thành công!';
      }, error => {
        this.message = 'thất bại';
      }
    );
  }
}
