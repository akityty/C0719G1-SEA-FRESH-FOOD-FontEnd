import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {ProfileInfo} from "../interface/profile-info";
import {Observable} from "rxjs";
import {JwtResponse} from "../interface/jwt-response";
import {FormBuilder, FormGroup} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";
import {UserService} from "../service/user.service";
import {TokenStorageService} from "../auth/token-storage.service";


@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  ngOnInit(){
  }


}
