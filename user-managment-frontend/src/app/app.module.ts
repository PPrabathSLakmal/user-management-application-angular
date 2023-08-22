import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from "@angular/common/http";
import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {UserDetailsComponent } from './view/user-details/user-details.component';
import {EditUserComponent } from './view/edit-user/edit-user.component';
import {RouterModule, Routes} from "@angular/router";
import {AppComponent} from "./app.component";
import {MatButtonModule} from "@angular/material/button";
import {MatSidenavModule} from "@angular/material/sidenav";
import {HomeComponent} from "./view/home/home.component";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";

export const routs:Routes =[
  {
    path:"user-details",
    component:UserDetailsComponent
  },
  {
    path:"edit-user",
    component:EditUserComponent
  }
];
@NgModule({
  declarations: [
    UserDetailsComponent,
    EditUserComponent,
    AppComponent,
    HomeComponent

  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    CommonModule,
    RouterModule.forRoot(routs),
    MatButtonModule,
    MatSidenavModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]

})
export class AppModule {
  constructor() {
  }
}
