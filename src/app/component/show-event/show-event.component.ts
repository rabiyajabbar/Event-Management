import { Component, OnInit } from '@angular/core';
import { EventsService } from 'src/app/services/events/events.service';

@Component({
  selector: 'app-show-event',
  templateUrl: './show-event.component.html',
  styleUrls: ['./show-event.component.css']
})
export class ShowEventComponent implements OnInit {
event = [];
 EventName: string;
 description: string;
 Location: string;
 date: string;
 time:string;

  constructor(private EtService : EventsService) { }

  ngOnInit(): void {
    this.EtService.getEvents()
    .subscribe(response => this.event = response);
    console.log(this.event)
  }

}
