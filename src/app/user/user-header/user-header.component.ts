import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-header',
  templateUrl: './user-header.component.html',
  styleUrls: ['./user-header.component.css']
})
export class UserHeaderComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void { }

  logoutUser(): void {
    this.router.navigate(['user/logout']).then();
  }
}
