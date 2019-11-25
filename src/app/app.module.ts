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
import { HomeUserComponent } from './FRESH-FOOD/user/home-user/home-user.component';
import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule} from '@angular/fire/database';
import { environment } from '../environments/environment';
import { CreateProductComponent } from './FRESH-FOOD/product/create-product/create-product.component';
import { ListProductComponent } from './FRESH-FOOD/product/list-product/list-product.component';
@NgModule({
  declarations: [
    AppComponent,
    CreateUserComponent,
    LoginUserComponent,
    DetailsUserComponent,
    UpdateUserComponent,
    UpdatePasswordComponent,
    HomeUserComponent,
    CreateProductComponent,
    ListProductComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule
  ],
  providers: [CookieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
