import { NgModule } from '@angular/core';
import { AboutUsComponent } from './about-us/about-us.component'
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
        AboutUsComponent,
        EventsPageComponent,
        EventComponent
    ],
    providers: [],
})
export class PublicModule { }
