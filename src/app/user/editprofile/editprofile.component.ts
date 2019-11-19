import { Component, OnInit } from '@angular/core';
import {ProfileInfo} from "../../interface/profile-info";
import {FormBuilder, FormGroup} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";
import {UserService} from "../../service/user.service";
import {TokenStorageService} from "../../auth/token-storage.service";

@Component({
  selector: 'app-editprofile',
  templateUrl: './editprofile.component.html',
  styleUrls: ['./editprofile.component.css']
})
export class EditprofileComponent implements OnInit {
  acc: ProfileInfo;
  data: FormGroup;
  token: string;
  message: string;
  constructor(private route: ActivatedRoute,
              private fb: FormBuilder,
              private router: Router,
              private userService: UserService,
              private tokenStorage: TokenStorageService) { }


  ngOnInit() {
    this.data = this.fb.group({
      token: '',
      name: '',
      username: '',
      email: ''
    })
    ;
    this.token = this.tokenStorage.getToken();
    this.userService.getOneAccToken().subscribe(
      next => {
        this.acc = next;
        this.data.patchValue(this.acc);
      },
      error => {
        this.acc = null;
      }
    );
  }
  editMember() {
    this.userService.updateAcc(this.data.value).subscribe(next => {
      this.message = 'Update success';
    });
  }

}
