import { Component } from '@angular/core';
import {MatSidenavModule} from "@angular/material/sidenav";
import {NgForOf, NgIf} from "@angular/common";
import {MatButtonModule} from "@angular/material/button";
import {HttpClient} from "@angular/common/http";
import {User} from "./dto/user";
import {Observable} from "rxjs";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'user-managment-frontend';

}
