import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AuthLoginComponent} from "src/app/auth/auth-login/auth-login.component";
import {AuthSignupComponent} from "src/app/auth/auth-signup/auth-signup.component";
import {UserListComponent} from "src/app/user/user-list/user-list.component";
import {UserLogoutComponent} from "src/app/user/user-logout/user-logout.component";

const routes: Routes = [
  { path: '', component: AuthLoginComponent},
  { path: 'sign-up', component: AuthSignupComponent},
  { path: 'user', component: UserListComponent},
  { path: 'user/logout', component: UserLogoutComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
