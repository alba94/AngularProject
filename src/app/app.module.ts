import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './components/index/app.component';
import { ClientComponent } from './components/client/client.component';

import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { appRoute } from './app.routes';
import { SignInComponent } from './components/sign-in/sign-in.component';
import { UserApi } from './user-api';
import { UserService } from './services/userService/user.service';
import { HttpClientModule } from '@angular/common/http';
import { AddUserComponent } from './components/add-user/add-user.component';
import { DataListModule, ButtonModule, InputTextModule } from 'primeng/primeng';
import { EditUserComponent } from './components/edit-user/edit-user.component';
import { CommonModule } from '@angular/common';
import { TableModule } from 'primeng/table';
import { AngularFontAwesomeModule } from 'angular-font-awesome';


@NgModule({
  declarations: [
    AppComponent,
    ClientComponent,
    SignInComponent,
    AddUserComponent,
    EditUserComponent,

  ],
  imports: [
    CommonModule,
    BrowserModule,
    FormsModule,
    ButtonModule,
    InputTextModule,
    HttpClientModule,
    DataListModule,
    TableModule,
    AngularFontAwesomeModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoute)
  ],
  providers: [
    UserService,
    { provide: UserApi, useExisting: UserService}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
