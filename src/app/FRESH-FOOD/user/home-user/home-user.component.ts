import { Component, OnInit } from '@angular/core';
import {UserService} from '../../service/user/user.service';

@Component({
  selector: 'app-home-user',
  templateUrl: './home-user.component.html',
  styleUrls: ['./home-user.component.css']
})
export class HomeUserComponent implements OnInit {

  constructor(private userService: UserService) { }

  ngOnInit() {
  }

}
