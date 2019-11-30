import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IEvent } from 'src/app/models/volunteer/volunteer-event.model';

@Component({
    selector: 'eventpage-component',
    templateUrl: 'event-page.component.html',
    styleUrls: ['event-page.component.css']
})

export class EventPageComponent implements OnInit {
    
    constructor(private route: ActivatedRoute) { }
    
    event:IEvent

    ngOnInit() {
        this.route.data.forEach((data) =>{
            this.event = data['event'];
        })

     }
}