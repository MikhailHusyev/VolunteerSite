import { Routes } from '@angular/router'
import { AboutUsComponent } from './about-us/about-us.component'
import { EventsPageComponent, HomePageComponent} from './index'

export const publicRoutes:Routes = [
    {path:'', component: HomePageComponent},
    {path:'aboutus', component: AboutUsComponent},
    {path:'events', component: EventsPageComponent}
]