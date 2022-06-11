import { Component, OnInit } from '@angular/core';
import {UserService} from "../../user/user.service";
import {ILoginUser} from "../../models/ILoginUser";
import {JwtTokenDto} from "../../models/JwtTokenDto";
import { Router} from "@angular/router";

@Component({
  selector: 'app-auth-login',
  templateUrl: './auth-login.component.html',
  styleUrls: ['../../app.component.css', './auth-login.component.css']
})
export class AuthLoginComponent implements OnInit {

  public user:ILoginUser;
  private token;

  constructor(private userService: UserService,private router: Router) {
    this.user = {
      email: "",
      password:""
    }
    this.token= {
      accessToken:	"",
      refreshToken:	"",
      tokenType:	""
    }
  }

  ngOnInit(): void {
  }

  onSubmit(){
    this.userService.loginUser(this.user).subscribe(data => {
      this.token = (<JwtTokenDto>data);
      this.userService.setToken(this.token);
      this.router.navigate(['/user']);
    });
  }

}
