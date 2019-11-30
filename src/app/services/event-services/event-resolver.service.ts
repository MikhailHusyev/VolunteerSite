import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { GetEventsService } from '../index';

@Injectable()
export class EventResolver implements Resolve<any> {
    constructor(private getEventService: GetEventsService) {

     }

     resolve(route: ActivatedRouteSnapshot){
         return this.getEventService.getEvent(route.params['id'])
     }
    
}