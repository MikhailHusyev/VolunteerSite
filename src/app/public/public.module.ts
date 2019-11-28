import { NgModule } from '@angular/core';
import { HomePageComponent,
         EventsPageComponent,
         EventComponent
        } from './index'
import { RouterModule } from '@angular/router'
import { publicRoutes } from './public.routes'

@NgModule({
    imports: [
        RouterModule.forChild(publicRoutes)
    ],
    exports: [],
    declarations: [
        HomePageComponent,
        EventsPageComponent,
        EventComponent
    ],
    providers: [],
})
export class PublicModule { }
