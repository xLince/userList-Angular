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
    this.userService.registerUser(this.user).subscribe(data => console.log(data));
    userForm.reset()
  }

}
