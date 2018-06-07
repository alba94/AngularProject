import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/userService/user.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {
 
  constructor(private userService: UserService) { }

  ngOnInit() {
  }

  login() {
    this.userService.login();
  }
  

}
