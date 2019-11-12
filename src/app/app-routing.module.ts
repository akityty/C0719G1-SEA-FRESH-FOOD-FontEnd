import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {CreateUserComponent} from './create-user/create-user.component';
import {LoginUserComponent} from './login-user/login-user.component';
import {LogoutUserComponent} from './logout-user/logout-user.component';

const routes: Routes = [
  {
    path: 'create-user',
    component: CreateUserComponent
  },
  {
    path: 'add',
    component: LoginUserComponent
  },
  {
    path: 'logout',
    component: LogoutUserComponent
  }
];


@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
