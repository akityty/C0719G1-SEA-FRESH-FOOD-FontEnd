import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {CreateUserComponent} from './create-user/create-user.component';
import {LoginUserComponent} from './login-user/login-user.component';
import {AdminComponent} from "./admin/admin.component";
import {UserComponent} from "./user/user.component";
import {HomeComponent} from "./home/home.component";
import {EditprofileComponent} from "./user/editprofile/editprofile.component";
import {ChangepasswordComponent} from "./user/changepassword/changepassword.component";


const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'user',
    component: UserComponent, children :[
      {
        path: 'editprofile',
        component: EditprofileComponent
      },
      {
        path: 'changepassword',
        component: ChangepasswordComponent
      }
    ]
  },
  {
    path: 'admin',
    component: AdminComponent
  },
  {
    path: 'auth/login',
    component: LoginUserComponent
  },
  {
    path: 'signup',
    component: CreateUserComponent
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  }
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
