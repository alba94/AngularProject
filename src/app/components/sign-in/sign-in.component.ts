import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/userService/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})

export class SignInComponent implements OnInit {
  username: string;
  password: string;
 constructor(private userService: UserService, private router: Router) { }

  ngOnInit() {
  }

  login() {
    if (this.username === 'test' && this.password === 'test1') {
      this.router.navigate(['client']);
    } else {
      console.error('bosh');
    }
  }
}
