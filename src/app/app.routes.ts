import { Routes } from '@angular/router';

import { ClientComponent } from './components/client/client.component';
import { SignInComponent } from './components/sign-in/sign-in.component';
import { AddUserComponent } from './components/add-user/add-user.component';


export const appRoute: Routes = [
  {path: 'sign-in', component: SignInComponent},
  {path: 'client', component: ClientComponent},
  {path: 'add-user', component: AddUserComponent},
  {path: '', component: SignInComponent}
];
