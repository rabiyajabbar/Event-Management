import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { EventsService } from 'src/app/services/events/events.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
 event = [];
 EventName: string;
 description: string;
 Location: string;
 date: string;
 time:string;

  constructor( private EtService : EventsService, private http: HttpClient) { }

  ngOnInit(): void {
    this.EtService.getEvents()
    .subscribe(response => this.event = response);
    console.log(this.event)
  }
}
