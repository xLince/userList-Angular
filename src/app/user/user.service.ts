import { Injectable } from '@angular/core';
import {IUser} from "src/app/models/IUser";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private users: IUser[];

  constructor(/*private httpService: HttpClient*/) {
    this.users = [];
  }

  obtainUsers(url:string) {
    //return this.httpService.get<IUser[]>(url,{withCredentials:true});
  }
}
