import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {UserService} from "../service/user.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css']
})
export class CreateUserComponent implements OnInit {
  data: FormGroup;
  message: string;

  constructor(private fb: FormBuilder, private userService: UserService, private router: Router) {
  }
  ngOnInit() {
    this.data = this.fb.group({
      email: ['', [Validators.required]],
      password: ['', [Validators.required]],

    })
    ;
  }
  addUser() {
    this.userService.createUser(this.data.value).subscribe(next => {
      this.message = 'Bạn đã đăng ký thành công!';
    });
    console.log(this.data.value);
  }

}
