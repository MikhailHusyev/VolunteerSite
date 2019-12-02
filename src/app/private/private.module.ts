import { NgModule } from '@angular/core'
import { CreateEventComponent } from './create-event-page/create-event-page.component'
import { RouterModule } from '@angular/router'
import { CommonModule } from '@angular/common'
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome'
import { HttpClientModule } from '@angular/common/http'
import { privateRoutes } from './private.routes'
import { ReactiveFormsModule } from '@angular/forms'

@NgModule({
    imports: [
        RouterModule.forChild(privateRoutes),
        CommonModule,
        FontAwesomeModule,
        HttpClientModule,
        ReactiveFormsModule
    ],
    exports: [],
    declarations: [CreateEventComponent],
    providers: [],
})
export class PrivateModule { }
