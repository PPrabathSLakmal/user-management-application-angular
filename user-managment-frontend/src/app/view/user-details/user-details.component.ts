import { Component } from '@angular/core';
import {User} from "../../dto/user";
import {HomeComponent} from "../home/home.component";

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.scss']
})
export class UserDetailsComponent {
  public userSelected:User
  public txtName: string ;
  public txtUsername: string ;
  public txtContact: string ;
  public txtWebsite: string ;
  constructor(private homeComponent:HomeComponent) {
    this.userSelected = homeComponent.userClicked;
    this.txtWebsite = this.userSelected.website;
    this.txtName = this.userSelected.name;
    this.txtUsername = this.userSelected.username;
    this.txtContact = this.userSelected.contact;

  }
}
