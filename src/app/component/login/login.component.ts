import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

import { Validators, FormGroup, FormBuilder } from '@angular/forms';
import { UsersService } from 'src/app/services/users/user.service';
import { Users } from '../../models/users';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  users: Users[] = []
  model: any = {} //all the data of form


  constructor(private builder: FormBuilder, private uService: UsersService, private http: HttpClient,private router : Router) { }

  ngOnInit(): void {
   this.loginForm = this.builder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });

  }

  handleSubmit() {
    

    this.uService.register(this.loginForm.value)
    console.log(this.model)
    this.router.navigate(['/add-event'])
  //   this.uService.register(this.loginForm.value)
  //   .subscribe(data => console.log('success!', data),
  //     error => console.error('Error!', error))
  // }
  
  }
}
