import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { IEvent } from 'src/app/models/volunteer/volunteer-event.model';
import { catchError, tap } from 'rxjs/operators';


@Injectable({providedIn: 'root'})
export class CreateEventService {
    constructor(private httpClient: HttpClient) { }
    
    createEvent(event: IEvent){
        let options = {headers: new HttpHeaders({'Content-Type':'application/x-www-form-urlencoded'})}
        
        console.log(event)
        return this.httpClient.post<IEvent>('http://localhost/Volunteer/VolunteerSite/src/app/api/event/create_event.php', event, options).subscribe()
    }
}