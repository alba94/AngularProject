import { Injectable } from '@angular/core';
import { IUser } from '../../models/user';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

   users: IUser[];

  constructor() {
    this.users = [
      {
        'id': 1,
        'firstname': 'test',
        'lastname': 'test1'
      },
      {
        'id': 2,
        'firstname': 'test2',
        'lastname': 'test3'
      }
    ];
  }

  getAll(): Observable<any[]> {
    return Observable.of(this.users);
  }

  update(idUser, user) {

  }

  delete() {}

  insert() {
    const newArray = this.users.map(o => {
      return { name: o.firstname};
    });
  }
}
