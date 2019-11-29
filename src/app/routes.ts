import { Routes } from '@angular/router'
import { HomePageComponent } from './public/home-page/home-page.component'
import { AboutUsComponent } from './public/about-us/about-us.component'

export const appRoutes:Routes = [
    {path: '', loadChildren: './public/public.module#PublicModule'}
]