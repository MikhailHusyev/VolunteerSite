import { Component, OnInit, Input } from '@angular/core';
import { faMapMarkerAlt, faCalendarAlt } from '@fortawesome/free-solid-svg-icons'
import { IEvent } from '../../models/volunteer/volunteer-event.model'
@Component({
    selector: 'event-component',
    templateUrl: 'event.component.html',
    styleUrls: ['event.component.css']
})

export class EventComponent implements OnInit {
    constructor() { }

    @Input() event:IEvent

    mapIcon = faMapMarkerAlt
    calendarIcon = faCalendarAlt

    ngOnInit() { }
}