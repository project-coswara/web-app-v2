import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {MetadataComponent} from './metadata/metadata.component';
import {SharedModule} from "../../../../src/shared.module";

@NgModule({
  declarations: [
    AppComponent,
    MetadataComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule {
}
