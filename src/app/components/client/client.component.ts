import { Component, OnInit } from '@angular/core';
import { UserServiceService } from '../../services/userService/user-service.service';


@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.css']
})
export class ClientComponent implements OnInit {
   clientList: any[];

  constructor(private userService: UserServiceService) { }

  ngOnInit() {
    this.load();
  }


  load() {
    this.userService.getAll().toPromise().then(response => {
      this.clientList = response;
    });
  }

  addNew() {

  }

}
