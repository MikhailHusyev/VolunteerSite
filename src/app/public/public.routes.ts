import { Routes } from '@angular/router'
import { HomePageComponent } from './home-page/home-page.component'
import { AboutUsComponent } from './about-us/about-us.component'

export const publicRoutes:Routes = [
    {path:'', component: HomePageComponent},
    {path:'aboutus', component: AboutUsComponent}
]