import { Component, OnInit, Input } from '@angular/core';
import { UserService } from '../../services/userService/user.service';
import { IUser } from '../../models/user';
import { Router } from '@angular/router';


@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.css']
})

export class ClientComponent implements OnInit {
   clientList: IUser[];

   @Input()
   private userId: number;

  constructor(private userService: UserService, private router: Router) {}

  ngOnInit() {
    this.loadUsers();
  }


    /*delete(user) {
      return this.userService.users.splice(user, 1);
    }*/

    loadUsers() {
      this.userService.getSmth().toPromise().then(response => {
        this.clientList = response;
      },
    err => console.error(err) ); }

    addUser(): void {
      this.router.navigate(['add-user']);
    }

}
