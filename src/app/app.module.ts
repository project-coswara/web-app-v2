import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {SharedModule} from "../shared.module";
import {AppRoutingModule} from "./app-routing.module";
import {HomeComponent} from "./home/home.component";
import { TeamComponent } from './team/team.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    TeamComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
  ],
  providers: [],
  exports: [
  ],
  bootstrap: [AppComponent]
})

export class AppModule {
}
