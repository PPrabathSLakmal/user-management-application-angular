import { Component } from '@angular/core';
import {User} from "../../dto/user";
import {HttpClient} from "@angular/common/http";
import {HomeComponent} from "../home/home.component";

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.scss']
})
export class AddUserComponent {
  constructor(private http:HttpClient, private homeComponent:HomeComponent) {

  }

  addUser(name: HTMLInputElement, username: HTMLInputElement, contact: HTMLInputElement, website: HTMLInputElement) {
    const txtName:string = name.value;
    const txtUsername:string = username.value;
    const txtContact:string = contact.value;
    const txtWebsite:string = website.value;

    if(!txtName.trim()){
      alert("Name can not be empty");
      return;
    }else if(!txtUsername.trim()){
      alert("Username can not be empty");
      return;
    }else if(!txtContact.trim()){
      alert("Contact can not be empty");
      return;
    }else if (!txtWebsite.trim()){
      alert("Website can not be empty");
      return;
    }

    const newUser: User = new User(txtName.trim(), txtUsername.trim(), txtContact.trim(), txtWebsite.trim());

    this.http.post('https://jsonplaceholder.typicode.com/users',newUser)
      .subscribe(result=>{
        newUser.id=this.homeComponent.userList[this.homeComponent.userList.length-1].id+1;
        this.homeComponent.userList.push(newUser);
        name.value = "";
        username.value = "";
        contact.value = "";
        website.value = "";
        name.focus();

      })

  }
}
