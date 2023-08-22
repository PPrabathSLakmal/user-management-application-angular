import { Component } from '@angular/core';
import {MatSidenavModule} from "@angular/material/sidenav";
import {NgIf} from "@angular/common";
import {MatButtonModule} from "@angular/material/button";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  standalone: true,
  imports:[MatSidenavModule, NgIf, MatButtonModule]
})
export class AppComponent {
  title = 'user-managment-frontend';
  showFiller = false;

}
