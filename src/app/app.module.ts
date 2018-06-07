import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './components/index/app.component';
import { ClientComponent } from './components/client/client.component';


import { TableModule } from 'primeng/table';
import { UserServiceService } from './services/userService/user-service.service';
import { ServicesService } from './services/services.service';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { appRoute } from './app.routes';
import { SignInComponent } from './components/sign-in/sign-in.component';
import { UserApi } from './user-api';
import { CommonModule } from '@angular/common';


@NgModule({
  declarations: [
    CommonModule,
    AppComponent,
    ClientComponent,
    SignInComponent


  ],
  imports: [
    BrowserModule,
    TableModule,
    FormsModule,
    ButtonModule,
    InputTextModule,
    RouterModule.forRoot(appRoute)
  ],
  providers: [
    UserServiceService,
    ServicesService,
    { provide: UserApi, useExisting: UserServiceService}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
