import { Injectable } from '@angular/core';
import {IUser} from "src/app/models/IUser";
import {HttpClient} from "@angular/common/http";
import {ILoginUser} from "../models/ILoginUser";
import {JwtTokenDto} from "../models/JwtTokenDto";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private users: IUser[];
  private token: JwtTokenDto;

  constructor(private httpService: HttpClient) {
    this.users = [];
    this.token= {
      accessToken:	"",
      refreshToken:	"",
      tokenType:	""
    }
  }


  setToken(newToken:JwtTokenDto){
    this.token = newToken;
    this.storeCurrentUser();
  }

  storeCurrentUser(): void {

    localStorage.setItem('currentUserToken', JSON.stringify(this.token));
  }

  registerUser(user: IUser){
    return this.httpService.post('http://51.38.51.187:5050/api/v1/auth/sign-up', user);
  }

  loginUser(loginUser:ILoginUser) {
    return  this.httpService.post('http://51.38.51.187:5050/api/v1/auth/log-in', loginUser);
  }

  logoutUser(): void {
    localStorage.removeItem('currentUserToken');
  }

  isLoggedIn(): boolean {
    return localStorage.getItem('currentUserToken') !== null;
  }

  getCurrentUser():void {
    const data = localStorage.getItem('currentUserToken');
    if(data){
      this.token= JSON.parse(data);
    }

  }
  obtainUsers(url:string) {
    this.getCurrentUser();
    const headers = {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${this.token.accessToken}`
    }
    return this.httpService.get<{count:number, items:IUser[]}>(url, { headers: headers});
  }

}
