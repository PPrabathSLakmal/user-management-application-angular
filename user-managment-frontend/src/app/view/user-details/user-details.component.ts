import { Component } from '@angular/core';
import {User} from "../../dto/user";
import {SharedUserService} from "../service/shared-user.service";

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.scss']
})
export class UserDetailsComponent {
  user:any = null
  constructor(private sharedUserService:SharedUserService) {
    console.log(sharedUserService.getSelectedUser());
    this.user = this.sharedUserService.getSelectedUser()
  }
}
