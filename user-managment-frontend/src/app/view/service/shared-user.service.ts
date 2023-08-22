import { Injectable } from '@angular/core';
import {User} from "../../dto/user";

@Injectable({providedIn: 'root'})
export class SharedUserService {
  private selectedUser: any;
  constructor() { }
  setSelectedUser(user: User) {
    this.selectedUser = user;
  }
  getSelectedUser(){
    return this.selectedUser;
  }
}
