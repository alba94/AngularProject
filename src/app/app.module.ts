import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './components/index/app.component';
import { ClientComponent } from './components/client/client.component';


import { TableModule } from 'primeng/table';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { appRoute } from './app.routes';
import { SignInComponent } from './components/sign-in/sign-in.component';
import { UserApi } from './user-api';
import { UserService } from './services/userService/user.service';


@NgModule({
  declarations: [
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
    UserService,
    { provide: UserApi, useExisting: UserService}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
