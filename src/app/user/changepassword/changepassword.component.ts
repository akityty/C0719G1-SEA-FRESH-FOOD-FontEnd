import { Component, OnInit } from '@angular/core';
import {ProfileInfo} from "../../interface/profile-info";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";
import {UserService} from "../../service/user.service";
import {TokenStorageService} from "../../auth/token-storage.service";

@Component({
  selector: 'app-changepassword',
  templateUrl: './changepassword.component.html',
  styleUrls: ['./changepassword.component.css']
})
export class ChangepasswordComponent implements OnInit {
  acc: ProfileInfo;
  passForm: FormGroup;
  token: string;
  message: string;
  constructor(private route: ActivatedRoute,
              private fb: FormBuilder,
              private router: Router,
              private userService: UserService,
              private tokenStorage: TokenStorageService) { }
  ngOnInit() {
    this.passForm = this.fb.group({
      password: ['', [Validators.required, Validators.minLength(6)]],
    })
    ;
    this.token = this.tokenStorage.getToken();
  }
  editMember() {
    this.userService.updatePass(this.passForm.value).subscribe(next => {
      this.message = 'Update success';
    });
  }

}
