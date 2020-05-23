import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {ReactiveFormsModule} from "@angular/forms";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatCheckboxModule} from "@angular/material/checkbox";
import {MatSelectModule} from "@angular/material/select";
import {MatInputModule} from "@angular/material/input";
import {MatRadioModule} from "@angular/material/radio";
import {MatStepperModule} from "@angular/material/stepper";

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {MetadataComponent} from './metadata/metadata.component';
import {RecordComponent} from './record/record.component';
import {ThankYouComponent} from './thank-you/thank-you.component';
import {SharedModule} from "../../../../src/shared.module";

@NgModule({
  declarations: [
    AppComponent,
    MetadataComponent,
    RecordComponent,
    ThankYouComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatRadioModule,
    MatCheckboxModule,
    MatStepperModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule {
}
