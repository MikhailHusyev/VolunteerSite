import { Component, OnInit } from '@angular/core'

@Component({
    selector: 'eventspage-component',
    templateUrl: 'events-page.component.html',
    styleUrls: ['events-page.component.css']
})

export class EventsPageComponent implements OnInit {
    constructor() { }

    values= [1, 2 , 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]

    ngOnInit() {
    }
}