import {Component} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {TranslateService} from "@ngx-translate/core";

import {AppService} from "./services/app.service";
import {environment} from "../environment";

@Component({
  selector: 'cs-root',
  template: `
      <div *ngIf="!appLoader" fxLayout="column" fxFill>
          <pc-navbar [tabs]="tabsList"></pc-navbar>
          <router-outlet></router-outlet>
          <div fxFlex></div>
          <pc-footer></pc-footer>
      </div>
      <div *ngIf="appLoader" class="content-container" fxLayout="column" fxLayoutAlign="center center" fxFill>
          <mat-progress-spinner [diameter]="80" mode="indeterminate"></mat-progress-spinner>
      </div>
  `
})

export class AppComponent {
  appLoader = true;
  locale = 'en-US'
  tabsList = environment.tabList;

  constructor(private appService: AppService, activatedRoute: ActivatedRoute, translateService: TranslateService) {
    activatedRoute.queryParams.subscribe((queryParams) => {
      this.appService.addLoadComponent('translate');
      this.locale = queryParams.locale || this.locale;
      translateService.use(this.locale).subscribe(() => {
        this.appService.removeLoadedComponent('translate');
      });
    })

    appService.getLoader().subscribe((value => {
      this.appLoader = value;
    }))
  }
}
