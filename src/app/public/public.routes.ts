import { Routes } from '@angular/router'
import { AboutUsComponent } from './about-us/about-us.component'
import { EventsPageComponent, HomePageComponent, EventPageComponent} from './index'
import { EventResolver } from '../services/event-services/event-resolver.service'

export const publicRoutes:Routes = [
    {path:'', component: HomePageComponent},
    {path:'events', component: EventsPageComponent},
    {path:'aboutus', component: AboutUsComponent},
    {path:'event/:id', component: EventPageComponent, resolve: {event: EventResolver}}
]