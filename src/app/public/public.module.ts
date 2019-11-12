import { NgModule } from '@angular/core';
import { HomePageComponent } from './home-page/home-page.component'
import { RouterModule } from '@angular/router'
import { publicRoutes } from './public.routes'

@NgModule({
    imports: [
        RouterModule.forChild(publicRoutes)
    ],
    exports: [],
    declarations: [
        HomePageComponent
    ],
    providers: [],
})
export class PublicModule { }
