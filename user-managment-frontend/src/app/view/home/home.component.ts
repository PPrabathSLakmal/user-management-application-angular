import {Component} from '@angular/core';
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
  public userClicked:any;
  public userList: Array<User> = [];
  private apiUrl: string='https://jsonplaceholder.typicode.com/';
  constructor(private http:HttpClient) {
    this.getUsers().subscribe(userList=>this.userList = userList);
  }
  getUsers(): Observable<User[]>
  {
    return this.http.get<User[]>(`${this.apiUrl}users`);
  }

  onClickUser(id: number) {
    const index: number = this.userList.findIndex(user => user.id === id);
    this.userClicked = this.userList[index];
    // this.sharedUserService.setSelectedUser(this.userClicked);
  }

  deleteUser(user: User) {
    console.log(user);
    this.http.delete<any>(`${this.apiUrl}users`).subscribe(result =>{
      this.userList.splice(this.userList.indexOf(user),1);
    });
  }
  searchUser(q: string) {
    const index: number = this.userList.findIndex(user => user.username === q);
    const searchedUser: User = this.userList[index];
    this.userList=[];
    this.userList.push(searchedUser);
  }
}
