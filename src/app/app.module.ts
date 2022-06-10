import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserListComponent } from 'src/app/user/user-list/user-list.component';
import { UserLogoutComponent } from 'src/app/user/user-logout/user-logout.component';
import { AuthLoginComponent } from 'src/app/auth/auth-login/auth-login.component';
import { AuthSignupComponent } from 'src/app/auth/auth-signup/auth-signup.component';

@NgModule({
  declarations: [
    AppComponent,
    UserListComponent,
    UserLogoutComponent,
    AuthLoginComponent,
    AuthSignupComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
