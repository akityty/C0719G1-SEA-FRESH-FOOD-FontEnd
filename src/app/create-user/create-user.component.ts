import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {UserService} from '../service/user.service';
import {IUser} from '../interface/user.interface';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css']
})
export class CreateUserComponent implements OnInit {
  data: FormGroup;
  message: string;
  user: IUser;

  constructor(private fb: FormBuilder, private userService: UserService) {
  }
  ngOnInit() {
    this.data = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6), Validators.maxLength(16)]],
      confirmPassword: ['', [Validators.required]]

    }, {validator: this.checkPasswords})
    ;
  }

  checkPasswords(group: FormGroup) {
    const pass = group.get('password').value;
    const confirmPass = group.get('confirmPassword').value;
    return pass === confirmPass ? null : {notSame: true};
  }
  addUser() {
    this.user = {email: this.data.get('email').value,
      password: this.data.get('password').value};
    if (this.data.valid) {
      this.userService.createUser(this.user).subscribe(next => {
        this.message = 'Bạn đã đăng ký thành công!';
      }, error => {
          this.message = 'Bạn đã đăng ký thất bại';
      }
        );
    }
  }
}
