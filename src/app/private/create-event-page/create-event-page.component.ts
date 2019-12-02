import { Component, OnInit } from '@angular/core';
import { IEvent } from 'src/app/models/volunteer/volunteer-event.model';
import { print } from 'util';
import { FormGroup, FormControl } from '@angular/forms';
import { CreateEventService} from '../../services/index'
import { Router } from '@angular/router';

@Component({
    selector: 'createevent-component',
    templateUrl: 'create-event-page.component.html'
})

export class CreateEventComponent implements OnInit {
    constructor(private createService: CreateEventService, private router: Router) { 
    }

    createEventForm: FormGroup

    ngOnInit() {
        this.createEventForm = new FormGroup({
            eventName: new FormControl(),
            eventDate: new FormControl(),
            eventAddress: new FormControl(),
            eventDescription: new FormControl(),
            imageUrl: new FormControl()
        })
     }

    createEvent(formValues){

        let event: IEvent = {
            Eid: null,
            charity_name: null,
            event_name : formValues.eventName,
            date: formValues.eventDate,
            event_address: formValues.eventAddress,
            event_description: formValues.eventDescription,
            picture_location: formValues.imageUrl
        }

        this.createService.createEvent(event)
        this.router.navigate(['./events'])
        
    }
}