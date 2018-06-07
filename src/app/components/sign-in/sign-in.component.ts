import { Component, OnInit } from '@angular/core';
import { UserApi } from '../../user-api';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {
  submitting = false;

  constructor(private userApi: UserApi) { }

  ngOnInit() {
  }

}
