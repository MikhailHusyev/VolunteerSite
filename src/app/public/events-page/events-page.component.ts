import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'eventspage-component',
    templateUrl: 'events-page.component.html',
    styleUrls: ['events-page.component.css']
})

export class EventsPageComponent implements OnInit {
    constructor() { }

    testValues: string[]

    ngOnInit() {
        this.testValues = ["Test", "Test", "Test", "Test","Test", "Test", "Test"]
    }
}