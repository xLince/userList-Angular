import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import {HttpClientModule} from "@angular/common/http";
import {FormsModule} from "@angular/forms";
import { NgbPaginationModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { AuthLoginComponent } from 'src/app/auth/auth-login/auth-login.component';
import { AuthSignupComponent } from 'src/app/auth/auth-signup/auth-signup.component';
import { UserListComponent } from 'src/app/user/user-list/user-list.component';
import { UserLogoutComponent } from 'src/app/user/user-logout/user-logout.component';
import { UserHeaderComponent } from './user/user-header/user-header.component';

@NgModule({
  declarations: [
    AppComponent,
    AuthLoginComponent,
    AuthSignupComponent,
    UserListComponent,
    UserLogoutComponent,
    UserHeaderComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    NgbPaginationModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
