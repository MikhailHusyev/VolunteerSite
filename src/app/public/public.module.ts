import { NgModule } from '@angular/core';
import { HomePageComponent,
         EventsPageComponent,
         EventComponent
        } from './index'
import { RouterModule } from '@angular/router'
import { publicRoutes } from './public.routes'
import { CommonModule } from '@angular/common'
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome'

@NgModule({
    imports: [
        RouterModule.forChild(publicRoutes),
        CommonModule,
        FontAwesomeModule
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
