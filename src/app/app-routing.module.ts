import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {CreateUserComponent} from './create-user/create-user.component';
import {LoginUserComponent} from './login-user/login-user.component';
import {AdminComponent} from "./admin/admin.component";
import {UserComponent} from "./user/user.component";
import {HomeComponent} from "./home/home.component";


const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'user',
    component: UserComponent
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
