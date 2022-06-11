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
  private your_email:string;

  constructor(private httpService: HttpClient) {
    this.your_email="";
    this.users = [];
    this.token= {
      accessToken:	"",
      refreshToken:	"",
      tokenType:	""
    }
  }

  getEmail(){
    return this.your_email;
  }

  setToken(newToken:JwtTokenDto){
    this.token = newToken;
    this.storeCurrentUser();
  }

  storeCurrentUser(): void {
    localStorage.setItem('currentEmail', JSON.stringify(this.your_email));
    localStorage.setItem('currentUserToken', JSON.stringify(this.token));
  }

  registerUser(user: IUser){
    return this.httpService.post('http://51.38.51.187:5050/api/v1/auth/sign-up', user);
  }

  loginUser(loginUser:ILoginUser):Observable<Object>{
    this.your_email = loginUser.email;
    return this.httpService.post('http://51.38.51.187:5050/api/v1/auth/log-in', loginUser);
  }

  logoutUser(): void {
    localStorage.removeItem('currentEmail');
    localStorage.removeItem('currentUserToken');
  }

  isLoggedIn(): boolean {
    return localStorage.getItem('currentUserToken') !== null;
  }

  getCurrentUser():void{
    const email = localStorage.getItem('currenEmail');
    const data = localStorage.getItem('currentUserToken');
    if(data){
      this.token= JSON.parse(data);
      // @ts-ignore
      this.your_email= JSON.parse(email);
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
