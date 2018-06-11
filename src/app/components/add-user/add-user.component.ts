import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/userService/user.service';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators, NgForm} from '@angular/forms';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {

  constructor(private formBuilder: FormBuilder, private router: Router, private userService: UserService) { }

  public addForm: FormGroup;

  ngOnInit() {
    this.addForm = this.formBuilder.group({
      name: ['', Validators.required]
    });
  }

  onSubmit() {
    this.userService.add( name )
      .subscribe( data => {
        this.router.navigate(['client']);
      });
      console.log('hello');
  }

}
