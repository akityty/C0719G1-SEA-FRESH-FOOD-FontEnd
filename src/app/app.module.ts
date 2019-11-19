import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CreateUserComponent } from './create-user/create-user.component';
import { AppRoutingModule } from './app-routing.module';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import {RouterModule} from "@angular/router";
import { LoginUserComponent } from './login-user/login-user.component';
import { AdminComponent } from './admin/admin.component';
import { UserComponent } from './user/user.component';
import { HomeComponent } from './home/home.component';

import { httpInterceptorProviders } from './auth/auth-interceptor';

import {CookieService} from 'ngx-cookie-service';
import { EditprofileComponent } from './user/editprofile/editprofile.component';
import { ChangepasswordComponent } from './user/changepassword/changepassword.component';

@NgModule({
  declarations: [
    AppComponent,
    CreateUserComponent,
    LoginUserComponent,
    AdminComponent,
    UserComponent,
    HomeComponent,
    EditprofileComponent,
    ChangepasswordComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule,
    FormsModule,

  ],
  providers: [httpInterceptorProviders,CookieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
