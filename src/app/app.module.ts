import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from "./app-routing.module";
import {AboutComponent} from "./about/about.component";
import {AppComponent} from './app.component';
import {HomeComponent} from "./home/home.component";
import {TeamComponent} from './team/team.component';
import {SharedModule} from "../shared.module";

@NgModule({
  declarations: [
    AboutComponent,
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
  exports: [],
  bootstrap: [AppComponent]
})

export class AppModule {
}
