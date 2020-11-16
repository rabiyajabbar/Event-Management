import { Component, OnInit } from '@angular/core';
import{FormBuilder,FormGroup, Validators} from '@angular/forms';
import { Router } from '@angular/router'
import {EventsService} from 'src/app/services/events/events.service'

@Component({
  selector: 'app-add-event',
  templateUrl: './add-event.component.html',
  styleUrls: ['./add-event.component.css']
})
export class AddEventComponent implements OnInit {
  loginForm: FormGroup;
  model: any = {}
  constructor(private loginform: FormBuilder,private eventsService:EventsService,private router:Router) { }

  ngOnInit(): void {
  }
  handleSubmit(){
    const data={
      EventName:this.model.EventName,
      description:this.model.description,
      Location:this.model.Location,
      Date:this.model.Date,
      Time:this.model.Time
    }

    this.eventsService.getEvents().subscribe((res)=>{
      console.log(res),
      (err)=>console.log(err)
    })
    this.router.navigate(['/show-event'])
  }
}
