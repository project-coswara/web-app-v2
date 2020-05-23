import {CommonModule} from "@angular/common";
import {HttpClient, HttpClientModule} from "@angular/common/http";
import {NgModule} from "@angular/core";
import {FlexLayoutModule, FlexModule} from "@angular/flex-layout";
import {MatIconModule} from "@angular/material/icon";
import {MatMenuModule} from "@angular/material/menu";
import {MatProgressSpinnerModule} from "@angular/material/progress-spinner";
import {MatTabsModule} from "@angular/material/tabs";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {TranslateLoader, TranslateModule} from "@ngx-translate/core";
import {TranslateHttpLoader} from "@ngx-translate/http-loader";

import {AppService} from "./app/services/app.service";
import {NavbarComponent} from "./app/navbar/navbar.component";
import {FooterComponent} from "./app/footer/footer.component";
import {RouterModule} from "@angular/router";

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}

@NgModule({
  declarations: [
    FooterComponent,
    NavbarComponent
  ],
  imports: [
    RouterModule,
    BrowserAnimationsModule,
    CommonModule,
    FlexLayoutModule,
    FlexModule,
    HttpClientModule,
    MatIconModule,
    MatMenuModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      },
    })
  ],
  providers: [
    AppService
  ],
  exports: [
    FooterComponent,
    NavbarComponent,
    BrowserAnimationsModule,
    CommonModule,
    FlexLayoutModule,
    FlexModule,
    MatIconModule,
    MatMenuModule,
    MatProgressSpinnerModule,
    MatTabsModule,
    TranslateModule
  ],
  bootstrap: []
})

export class SharedModule {
}
