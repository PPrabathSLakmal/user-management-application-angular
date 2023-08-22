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
import {SharedUserService} from "./view/service/shared-user.service";
import { AddUserComponent } from './view/add-user/add-user.component';
import {FormsModule} from "@angular/forms";

export const routs:Routes =[
  {
    path:"detail",
    component:UserDetailsComponent
  },
  {
    path:"edit",
    component:EditUserComponent
  },
  {
    path:"add",
    component:AddUserComponent
  }
];
@NgModule({
  declarations: [
    UserDetailsComponent,
    EditUserComponent,
    AppComponent,
    HomeComponent,
    AddUserComponent

  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    CommonModule,
    RouterModule.forRoot(routs),
    MatButtonModule,
    MatSidenavModule,
    BrowserAnimationsModule,
    FormsModule
  ],
  providers: [SharedUserService],
  bootstrap: [AppComponent]

})
export class AppModule {

  constructor() {

  }
}
