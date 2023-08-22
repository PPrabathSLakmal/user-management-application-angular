import { Component } from '@angular/core';
import {SharedUserService} from "../service/shared-user.service";
import {HttpClient} from "@angular/common/http";
import {User} from "../../dto/user";
import {HomeComponent} from "../home/home.component";

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.scss']
})
export class EditUserComponent {
  public user:User;
  txtName: string;
  txtUsername: string;
  txtContact: string;
  txtWebsite: string;
  constructor(private http:HttpClient, private homeComponent:HomeComponent) {
    this.user = homeComponent.userClicked;
    this.txtName = this.user.name;
    this.txtUsername = this.user.username;
    this.txtContact = this.user.contact;
    this.txtWebsite = this.user.website;
  }

  updateUser(txtName: HTMLInputElement, txtUsername: HTMLInputElement, txtContact: HTMLInputElement, txtWebsite: HTMLInputElement) {
    const name:string = txtName.value;
    const username:string = txtUsername.value;
    const contact:string = txtContact.value;
    const website:string = txtWebsite.value;

    if(!name.trim()){
      alert("Name can not be empty");
      return;
    }else if(!username.trim()){
      alert("Username can not be empty");
      return;
    }else if(!contact.trim()){
      alert("Contact can not be empty");
      return;
    }else if (!website.trim()){
      alert("Website can not be empty");
      return;
    }
    const userIndex:number = this.homeComponent.userList.indexOf(this.user)
    this.user.name = name.trim();
    this.user.username = username.trim();
    this.user.contact = contact.trim();
    this.user.website = website.trim();

    this.http.patch('https://jsonplaceholder.typicode.com/users',this.user)
      .subscribe(result=>{
        this.homeComponent.userList.splice(userIndex,1,this.user);
        txtName.value = "";
        txtUsername.value = "";
        txtContact.value = "";
        txtWebsite.value = "";
        txtName.focus();

      });
  }
}
