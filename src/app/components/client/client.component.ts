import { Component, OnInit, Input } from '@angular/core';
import { UserService } from '../../services/userService/user.service';


@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.css']
})
export class ClientComponent implements OnInit {
   clientList: any[];

   @Input()
   private userId: number;

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.load();
  }


  load() {
    this.userService.getAll().subscribe(data =>
      this.clientList = data);
    }

}
