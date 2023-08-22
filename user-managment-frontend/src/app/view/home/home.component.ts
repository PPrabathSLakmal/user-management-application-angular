import {Component, Injectable} from '@angular/core';
import {User} from "../../dto/user";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {SharedUserService} from "../service/shared-user.service";
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],

})
export class HomeComponent {
  showFiller = false;
  userList: Array<User> = [];
  private apiUrl: string='https://jsonplaceholder.typicode.com/';
  constructor(private http:HttpClient, private sharedUserService:SharedUserService) {
    this.getUsers().subscribe(userList=>this.userList = userList);
  }
  getUsers(): Observable<User[]>
  {
    return this.http.get<User[]>(`${this.apiUrl}users`);
  }
  onClickUser(user: any) {
    this.sharedUserService.setSelectedUser(user);
    user = null;
  }
}
