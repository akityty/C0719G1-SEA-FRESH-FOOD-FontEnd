import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { CreateUserComponent } from './FRESH-FOOD/user/create-user/create-user.component';
import { AppRoutingModule } from './app-routing.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {RouterModule} from '@angular/router';
import { LoginUserComponent } from './FRESH-FOOD/user/login-user/login-user.component';
import {CookieService} from 'ngx-cookie-service';
import { DetailsUserComponent } from './FRESH-FOOD/user/details-user/details-user.component';
import { UpdateUserComponent } from './FRESH-FOOD/user/update-user/update-user.component';
import { UpdatePasswordComponent } from './FRESH-FOOD/user/update-password/update-password.component';


@NgModule({
  declarations: [
    AppComponent,
    CreateUserComponent,
    LoginUserComponent,
    DetailsUserComponent,
    UpdateUserComponent,
    UpdatePasswordComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule,
    FormsModule,
  ],
  providers: [CookieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
