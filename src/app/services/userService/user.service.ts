import { Injectable } from '@angular/core';
import { IUser } from '../../models/user';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UserService {
    username: string;
    password: string;
    users: IUser[];
    

  constructor(private router: Router) {
    this.users = [
      {
'id': 1,
'firstname': 'hello',
'lastname': 'there'
      }
    ]
  }

  getAll(): Observable<any[]> {
    return Observable.of(this.users);
  }

  login() {
    if(this.username == 'test' && this.password == 'test1'){
      this.router.navigate(['client']);
    } else {
    console.error('bosh');
    }
  }
}
