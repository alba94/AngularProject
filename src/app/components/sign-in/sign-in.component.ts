import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/userService/user.service';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})

export class SignInComponent implements OnInit {
  username: string;
  password: string;

  public loginForm: FormGroup;

 constructor(private userService: UserService, private router: Router, private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.loginForm = this.formBuilder.group ({
      username: new FormControl(),
      password: new FormControl()
    });
  }

  login() {
    if (this.loginForm.value.username === 'test' && this.loginForm.value.username === 'test1') {
      this.router.navigate(['client']);
    } else {
      console.error('bosh');
    }
  }
}
