import {Component, OnDestroy, OnInit} from '@angular/core';
import {IUser} from "src/app/models/IUser";
import {UserService} from "../user.service";
import {Subscription} from "rxjs";
import {Router} from "@angular/router";

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

  constructor(private userService: UserService,private router: Router) {
    this.subscription = new Subscription;
    this.userList = [];
  }

  ngOnInit(): void {
    if(!this.userService.isLoggedIn()){
      this.router.navigate(['/']);
    }else{
      this.subscription = this.userService.obtainUsers('http://51.38.51.187:5050/api/v1/users').subscribe((data) => {
        this.userList = data.items.sort(function( a, b ) {
          if(a.name === "") {
            return 1;
          } else if(b.name === "") {
            return -1;
          } else {
            return a.name < b.name ? -1 : a.name > b.name ? 1 : 0;
          }
        });
        this.totalUsers = data.count;
      })
    }

  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
