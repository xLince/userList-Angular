import {Component, OnDestroy, OnInit} from '@angular/core';
import {IUser} from "src/app/models/IUser";
import {UserService} from "../user.service";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit, OnDestroy {

  public userList: IUser[];
  private subscription: Subscription;
  public currentEmail:string;

  constructor(private userService: UserService) {
    this.userList = [];
    this.currentEmail = "";
    this.subscription = new Subscription;
  }

  ngOnInit(): void {
    this.subscription = this.userService.obtainUsers('http://51.38.51.187:5050/api/v1/users').subscribe((data) => {
      this.userList = data.items;
      this.currentEmail = this.userService.getEmail();
    })

  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
