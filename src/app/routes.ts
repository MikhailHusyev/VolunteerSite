import { Routes } from '@angular/router'

export const appRoutes:Routes = [
    {path: '', loadChildren: './public/public.module#PublicModule'}
]