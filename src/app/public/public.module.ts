import { NgModule } from '@angular/core';
import { HomePageComponent } from './home-page/home-page.component'
import { AboutUsComponent } from './about-us/about-us.component'
import { RouterModule } from '@angular/router'
import { publicRoutes } from './public.routes'

@NgModule({
    imports: [
        RouterModule.forChild(publicRoutes)
    ],
    exports: [],
    declarations: [
        HomePageComponent,
        AboutUsComponent
    ],
    providers: [],
})
export class PublicModule { }
