import { Injectable } from '@angular/core';
import { Observable } from 'rxjs'
import { HttpClient } from '@angular/common/http'
import {Events} from 'src/app/models/events'

@Injectable({
  providedIn: 'root'
})
export class EventsService {

   constructor(private http: HttpClient) { }
   apiUrl: string = 'http://localhost:3000/events'

  getEvents(): Observable<Events[]> {
    return this.http.get<Events[]>(this.apiUrl)
  }
  
  addEvents(data){
    console.log(data)
   return this.http.post(this.apiUrl,data)
    }
    

  

}