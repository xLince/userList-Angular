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

  private subscription: Subscription;
  public userList: IUser[];
  public pageSize = 5;
  public page = 1;
  public totalUsers = 0;

  constructor(private userService: UserService) {
    this.subscription = new Subscription;
    this.userList = [];
  }

  ngOnInit(): void {
    this.subscription = this.userService.obtainUsers('http://51.38.51.187:5050/api/v1/users').subscribe((data) => {
      this.userList = data.items.sort((a, b) => a.name.localeCompare(b.name));
      this.totalUsers = data.count;
    })
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
