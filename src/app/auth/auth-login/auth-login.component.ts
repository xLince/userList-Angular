import {Component, OnDestroy, OnInit} from '@angular/core';
import {UserService} from "../../user/user.service";
import {ILoginUser} from "../../models/ILoginUser";
import {Router} from "@angular/router";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-auth-login',
  templateUrl: './auth-login.component.html',
  styleUrls: ['../../app.component.css', './auth-login.component.css']
})
export class AuthLoginComponent implements OnInit, OnDestroy {

  public user:ILoginUser;
  public loginError = false;
  private subscription: Subscription;

  constructor(private userService: UserService,private router: Router) {
    this.subscription = new Subscription;
    this.user = {
      email: "",
      password:""
    }
  }

  ngOnInit(): void { }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  onSubmit(){
    this.subscription = this.userService.loginUser(this.user).subscribe((data) => {
      this.userService.setToken(data);
      this.router.navigate(['/user']).then();
    },() => {
      this.loginError= true;
    });
  }

}
