import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {UserService} from '../service/user.service';

@Component({
  selector: 'app-login-user',
  templateUrl: './login-user.component.html',
  styleUrls: ['./login-user.component.css']
})
export class LoginUserComponent implements OnInit {
  loginForm: FormGroup;
  message: string;

  constructor(private fb: FormBuilder, private userService: UserService) {
  }

  ngOnInit() {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6), Validators.maxLength(6)]],
    });
  }

  submit() {
    if (this.loginForm.valid) {
      this.userService.login(this.loginForm.get('email').value, this.loginForm.get('password').value).subscribe(next => {
        this.userService.userOnline = {email: this.loginForm.get('email').value, password: this.loginForm.get('password').value};
        this.message = 'Bạn đã đăng nhập thành công!';
      }, error => {
        if (error.valueOf().status === 400) {
          this.message = 'Sai mật khẩu';
        } else {
          this.message = 'Không tìm thây tài khoản';
        }
      });
    }
  }
}
