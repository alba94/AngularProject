import { Injectable } from '@angular/core';
import { IUser } from '../../models/user';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class UserService {

    users: IUser[];

  constructor(private httpClient: HttpClient) {
    this.users = [
      { id: 1,
        name: 'hello'
      }];
  }

  getAll(): Observable<IUser[]> {

    return Observable.of(this.users);
  }

  /*getSmth(): Observable<IUser[]> {
    return this.httpClient.get<IUser[]>('http://localhost:8080/api/user');
  }*/

  add(user: IUser) {
    this.users.push(user);
  }

  getById(id) {
    return this.httpClient.get('http://localhost:8080/api/user/' + id);

  }

}
