import { Routes } from '@angular/router'
import { HomePageComponent } from './public/home-page/home-page.component'

export const appRoutes:Routes = [
    {path: '', loadChildren: './public/public.module#PublicModule'}
]