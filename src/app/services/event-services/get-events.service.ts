import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { IEvent } from '../../models/volunteer/volunteer-event.model';
import { catchError } from 'rxjs/operators';
import { Subject, Observable, of } from 'rxjs'

@Injectable({providedIn: 'root'})


export class GetEventsService {

    constructor(private httpClient: HttpClient) {
    }

    getEvents(): Observable<IEvent[]>{
        return this.httpClient.get<IEvent[]>('http://localhost/Volunteer/VolunteerSite/src/app/api/event/read.php')
    }

    getEvent(id): Observable<IEvent>{
        let params = new HttpParams().set('id',id)
        return this.httpClient.get<IEvent>('http://localhost/Volunteer/VolunteerSite/src/app/api/event/read_one.php', {params: params})
    }
}