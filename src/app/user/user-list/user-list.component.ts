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

  constructor(private userService: UserService) {
    this.userList = [{
      id: "1",
      name: "Roronoa",
      surname: "Zoro",
      email: "example@gmail.com",
      password: "abn43cjt"
    },
    {
      id: "2",
      name: "Vinsmoke",
      surname: "Sanji",
      email: "example@gmail.com",
      password: "abn43cjt"
    }];
    this.subscription = new Subscription;
  }

  ngOnInit(): void {
    /**Cuando sepa conectarme a la API**/
  /*this.subscription = this.userService.obtainUsers('http://51.38.51.187:5050/api/v1/users')
    .subscribe((data: IUser[]) => {
      this.userList = data;
    })*/
  }

  ngOnDestroy() {
    /**Cuando sepa conectarme a la API**/
    // this.subscription.unsubscribe();
  }

}
