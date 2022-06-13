import {Component, OnDestroy, OnInit} from '@angular/core';
import {IUser} from "../../models/IUser";
import {UserService} from "../../user/user.service";
import {NgForm} from "@angular/forms";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-auth-signup',
  templateUrl: './auth-signup.component.html',
  styleUrls: ['../../app.component.css', './auth-signup.component.css']
})
export class AuthSignupComponent implements OnInit, OnDestroy {

  public user: IUser;
  public registerError = false;
  public registerSuccessful = false;
  private subscription: Subscription;

  constructor(private userService: UserService) {
    this.subscription = new Subscription;
    this.user = {
      name:"",
      surname:"",
      email: "",
      password:""
    }
  }

  ngOnInit(): void { }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  onSubmit(userForm :NgForm): void{
    this.subscription = this.userService.registerUser(this.user).subscribe(() => {
      this.registerSuccessful= true;
      this.registerError= false;
    },() => {
      this.registerSuccessful= false;
      this.registerError= true;
    });
    userForm.reset()
  }



}
