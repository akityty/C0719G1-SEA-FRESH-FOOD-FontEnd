import { Component, OnInit } from '@angular/core';
import {UserService} from '../service/user.service';

@Component({
  selector: 'app-logout-user',
  templateUrl: './logout-user.component.html',
  styleUrls: ['./logout-user.component.css']
})
export class LogoutUserComponent implements OnInit {

  constructor(private userService: UserService) {
    this.userService.userOnline.email = '';
    this.userService.userOnline.password = '';
  }

  ngOnInit() {
  }

}
