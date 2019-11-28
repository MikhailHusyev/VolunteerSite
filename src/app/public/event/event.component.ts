import { Component, OnInit } from '@angular/core';
import { faMapMarkerAlt, faCalendarAlt } from '@fortawesome/free-solid-svg-icons'
@Component({
    selector: 'event-component',
    templateUrl: 'event.component.html',
    styleUrls: ['event.component.css']
})

export class EventComponent implements OnInit {
    constructor() { }

    mapIcon = faMapMarkerAlt
    calendarIcon = faCalendarAlt

    ngOnInit() { }
}