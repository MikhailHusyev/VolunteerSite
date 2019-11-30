import { Component, OnInit } from '@angular/core'
import { IEvent} from '../../models/volunteer/volunteer-event.model'
import { faSearch} from '@fortawesome/free-solid-svg-icons'
import { GetEventsService } from '../../services/index'

@Component({
    selector: 'eventspage-component',
    templateUrl: 'events-page.component.html',
    styleUrls: ['events-page.component.css']
})

export class EventsPageComponent implements OnInit {
    constructor(private getEventService: GetEventsService) { }

    events: IEvent[]
    searchIcon = faSearch

    ngOnInit() {
        this.getEventService.getEvents().subscribe(data => this.events = data)
    }
}