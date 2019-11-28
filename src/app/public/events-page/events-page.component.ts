import { Component, OnInit } from '@angular/core'
import { IEvent} from '../../models/volunteer/volunteer-event.model'
import { faSearch} from '@fortawesome/free-solid-svg-icons'

@Component({
    selector: 'eventspage-component',
    templateUrl: 'events-page.component.html',
    styleUrls: ['events-page.component.css']
})

export class EventsPageComponent implements OnInit {
    constructor() { }

    events: IEvent[]
    searchIcon = faSearch

    ngOnInit() {

        let firstEvent:IEvent = {id:1, name:"Blue KC", date: new Date('10/20/2019'), location:"Kansas City", description:"This is a great event to join and have fun in.", capacity:50}
        this.events = [firstEvent]
    }
}