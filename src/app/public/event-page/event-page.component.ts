import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IEvent } from 'src/app/models/volunteer/volunteer-event.model';
import { CreateEventService } from '../../services/create-service/create-event.service'

@Component({
    selector: 'eventpage-component',
    templateUrl: 'event-page.component.html',
    styleUrls: ['event-page.component.css']
})

export class EventPageComponent implements OnInit {
    
    constructor(private route: ActivatedRoute, private eventService: CreateEventService, private router:Router) { }
    
    event:IEvent

    ngOnInit() {
        this.route.data.forEach((data) =>{
            this.event = data['event'];
        })
     }

     
     delete(){
        this.eventService.deleteEvent(this.event.Eid)
        this.router.navigate(['events'])
    }
}