import { Component } from '@angular/core';
import {MatSidenavModule} from "@angular/material/sidenav";
import {NgForOf, NgIf} from "@angular/common";
import {MatButtonModule} from "@angular/material/button";
import {HttpClient} from "@angular/common/http";
import {User} from "./dto/user";
import {Observable} from "rxjs";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  standalone: true,
  imports: [MatSidenavModule, NgIf, MatButtonModule, NgForOf]
})
export class AppComponent {
  title = 'user-managment-frontend';
  showFiller = false;
  userList: Array<User> = [];
  private apiUrl: string='https://jsonplaceholder.typicode.com/';
  constructor(private http:HttpClient) {
    this.getUsers().subscribe(userList=>this.userList = userList);
    console.log(this.userList.toString());
  }
  getUsers(): Observable<User[]>
  {
    return this.http.get<User[]>(`${this.apiUrl}users`);
  }
}
