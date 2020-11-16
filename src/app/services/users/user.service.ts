import { Injectable } from '@angular/core';
import { Observable } from 'rxjs'
import { HttpClient } from '@angular/common/http'
import {Users} from 'src/app/models/users'
import { Router } from '@angular/router'

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  api = "http://localhost:3000/users"
  constructor(private http: HttpClient, private router : Router) { }

  // getUsers(): Observable<Users[]> {
  //   return this.http.get<Users[]>(apiUrl)
  // }
  loginForm(formValues){
    return this.http
    .get(
      `http://localhost:3000/users?email=${formValues.email}&password=${formValues.password}`
    )
    .subscribe((response: any) => {
      const users = response;
      console.log(users);
      if (users && users.length > 0) {
        if(users[0].auth == "admin"){
          localStorage.setItem('user', JSON.stringify(users[0]));
          this.router.navigate(["/addevent"]);
        }
        else{
          localStorage.setItem('user', JSON.stringify(users[0]));
          this.router.navigate(["/home"]);
        }
      }
    });

  }

     register(data):Observable<Users> {
      return this.http.post<Users>(this.api, data)
    }
  
    // addUsers(data){
    
    //   console.log(data)
    //  return this.http.post('http://localhost:3000/register/',data)
    //   }

    checkUsers(data){
      
      return this.http.post('http://localhost:3000/login/',data)
    }
}
