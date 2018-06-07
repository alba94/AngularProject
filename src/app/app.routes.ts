import { Routes } from '@angular/router';

import { ClientComponent } from './components/client/client.component';
import { SignInComponent } from './components/sign-in/sign-in.component';


export const appRoute: Routes = [
  {path: 'sign-in', component: SignInComponent},
  {path: 'client', component: ClientComponent},
  {path: '', component: SignInComponent}
];
