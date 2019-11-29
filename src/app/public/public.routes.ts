import { Routes } from '@angular/router'
import { EventsPageComponent, HomePageComponent} from './index'

export const publicRoutes:Routes = [
    {path:'', component: HomePageComponent},
    {path:'events', component: EventsPageComponent}
]