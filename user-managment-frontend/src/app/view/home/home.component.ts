import { Component } from '@angular/core';
import {User} from "../../dto/user";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],

})
export class HomeComponent {
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
