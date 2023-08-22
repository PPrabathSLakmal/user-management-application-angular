import { Component } from '@angular/core';
import {SharedUserService} from "./view/service/shared-user.service";
import {User} from "./dto/user";
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'user-managment-frontend';
  constructor(private sharedUserService: SharedUserService) {
  }

}
