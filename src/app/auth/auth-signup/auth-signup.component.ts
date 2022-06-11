import { Component, OnInit } from '@angular/core';
import {IUser} from "../../models/IUser";
import {UserService} from "../../user/user.service";
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-auth-signup',
  templateUrl: './auth-signup.component.html',
  styleUrls: ['../../app.component.css', './auth-signup.component.css']
})
export class AuthSignupComponent implements OnInit {

  public user: IUser;
  public error = false;
  public successful = false;

  constructor(private userService: UserService) {
    this.user = {
      name:"",
      surname:"",
      email: "",
      password:""
    }
  }

  ngOnInit(): void {

  }

  onSubmit(userForm :NgForm): void{
    this.userService.registerUser(this.user).subscribe(() => {
      this.successful= true;
      this.error= false;
    },() => {
      this.successful= false;
      this.error= true;
    });
    userForm.reset()
  }

}
