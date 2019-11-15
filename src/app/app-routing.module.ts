import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {CreateUserComponent} from './FRESH-FOOD/user/create-user/create-user.component';
import {LoginUserComponent} from './FRESH-FOOD/user/login-user/login-user.component';
import {HomeComponent} from './home/home.component';
import {UserComponent} from './user/user.component';
import {AdminComponent} from './admin/admin.component';



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
    path: 'registered',
    component: CreateUserComponent
  },
  {
    path: 'auth/login/registered',
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
