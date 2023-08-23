import {Component} from '@angular/core';
import {User} from "../../dto/user";
import {HttpClient} from "@angular/common/http";
import {Observable, of} from "rxjs";
import {DomSanitizer, SafeHtml} from "@angular/platform-browser";
import {DummyDataService} from "../service/dummy-data.service";
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],

})
export class HomeComponent {
  showFiller = false;
  htmlContent: SafeHtml='';
  public userClicked:any;
  public userList: Array<User> = [];
  private apiUrl: string='https://jsonplaceholder.typicode.com/';
  constructor(private http:HttpClient, private sanitizer:DomSanitizer, private dummyDataService:DummyDataService) {
    // this.getUsers().subscribe(userList=>this.userList = userList);
    if (this.userList.length === 0){
      // this.htmlContent = this.sanitizer.bypassSecurityTrustHtml("<tr class='col'><td class='fs-3 text-center' colspan='4' rowspan='10'>No any user record to display</td></tr>");
      this.getDummyData().subscribe(userList=>this.userList = userList);
      console.log(this.userList.toString());
    }
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

  getDummyData():Observable<User[]>{
    return this.dummyDataService.getDummyData();
}
}
