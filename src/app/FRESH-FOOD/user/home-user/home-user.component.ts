import { Component, OnInit } from '@angular/core';
import {UserService} from '../../service/user/user.service';

@Component({
  selector: 'app-home-user',
  templateUrl: './home-user.component.html',
  styleUrls: ['./home-user.component.css']
})
export class HomeUserComponent implements OnInit {
checkRole: string;
  constructor(private userService: UserService) { }

  ngOnInit() {
  this.checkRole = window.sessionStorage.getItem('role');
  }

}
