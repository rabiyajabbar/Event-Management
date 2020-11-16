import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms'
import { UsersService } from 'src/app/services/users/user.service';
import { Users } from '../../models/users';

function passwordMatch(form: FormGroup){
  const password = form.get('password')
  const confirmpassword = form.get('confirmPassword')

  if (password.value !== confirmpassword.value){
    confirmpassword.setErrors({ passwordMatch: true})
  }else {
    confirmpassword.setErrors(null)
  }

  return null
}

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerForm: FormGroup
   users: Users[] = []
  constructor(private builder: FormBuilder,private uService: UsersService, private http: HttpClient) { }

  ngOnInit(): void {
    this.buildForm()
  }

  buildForm(){
    this.registerForm = this.builder.group({
      name:['', Validators.required],
      email:['',[Validators.required, Validators.email]],
      username:['', Validators.required],
      password:['', Validators.required],
      confirmPassword:''
    }, {
      validators: [passwordMatch]
    })
  }

  handleSubmit() {
    console.log(this.registerForm.value)
    this.uService.register(this.registerForm.value)
    .subscribe(data => console.log('success!', data),
      error => console.error('Error!', error))
  }
}
