import { NgModule } from '@angular/core';
import { AboutUsComponent } from './about-us/about-us.component'
import { HomePageComponent,
         EventsPageComponent,
         EventComponent,
         EventPageComponent,
        } from './index'
import { RouterModule } from '@angular/router'
import { publicRoutes } from './public.routes'
import { CommonModule } from '@angular/common'
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome'
import { HttpClientModule } from '@angular/common/http'

@NgModule({
    imports: [
        RouterModule.forChild(publicRoutes),
        CommonModule,
        FontAwesomeModule,
        HttpClientModule
    ],
    exports: [],
    declarations: [
        HomePageComponent,
        AboutUsComponent,
        EventsPageComponent,
        EventComponent,
        EventPageComponent
    ],
    providers: [],
})
export class PublicModule { }
