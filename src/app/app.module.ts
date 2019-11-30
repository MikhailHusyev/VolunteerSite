import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'
import { AppComponent } from './app.component'
import { NavbarComponent } from './common/navbar/navbar.component'
import { RouterModule } from '@angular/router'
import { appRoutes} from './routes'
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome'
import { GetEventsService} from './services/index'
import { EventResolver } from './services/event-services/event-resolver.service'
import { HttpClientModule } from '@angular/common/http'


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    FontAwesomeModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule
  ],
  providers: [
    GetEventsService,
    EventResolver
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
