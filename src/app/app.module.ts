import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { StartComponent } from './components/sections/start/start.component';
import { FooterComponent } from './components/footer/footer.component';
import { ServiceComponent } from './components/sections/service/service.component';
import { TeamComponent } from './components/sections/team/team.component';
import { ContactComponent } from './components/sections/contact/contact.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AgbComponent } from './components/footer/agb/agb.component';
import { JobsComponent } from './components/footer/jobs/jobs.component';
import { MediaComponent } from './components/footer/media/media.component';
import { BewerbungComponent } from './components/footer/bewerbung/bewerbung.component';
import { ImpressumComponent } from './components/footer/impressum/impressum.component';
import { DatenschutzComponent } from './components/footer/datenschutz/datenschutz.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    StartComponent,
    FooterComponent,
    ServiceComponent,
    TeamComponent,
    ContactComponent,
    AgbComponent,
    JobsComponent,
    MediaComponent,
    BewerbungComponent,
    ImpressumComponent,
    DatenschutzComponent
  ],
  imports: [
    BrowserModule,
    FontAwesomeModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
