import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { StartComponent } from './sections/start/start.component';
import { FooterComponent } from './components/footer/footer.component';
import { ServiceComponent } from './sections/service/service.component';
import { TeamComponent } from './sections/team/team.component';
import { ContactComponent } from './sections/contact/contact.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    StartComponent,
    FooterComponent,
    ServiceComponent,
    TeamComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
