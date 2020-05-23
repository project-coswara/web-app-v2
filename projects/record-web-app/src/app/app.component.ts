import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {TranslateService} from "@ngx-translate/core";

import * as firebase from 'firebase/app';
import 'firebase/auth';

import {AppService} from "../../../../src/app/services/app.service";
import {environment} from "../../../../src/environment";

@Component({
  selector: 'cs-record-root',
  template: `
      <div *ngIf="!appLoader" fxLayout="column" fxFill>
          <pc-navbar></pc-navbar>
          <router-outlet></router-outlet>
          <div fxFlex></div>
          <pc-footer></pc-footer>
      </div>
      <div *ngIf="appLoader" class="content-container" fxLayout="column" fxLayoutAlign="center center" fxFill>
          <mat-progress-spinner [diameter]="80" mode="indeterminate"></mat-progress-spinner>
      </div>
  `
})

export class AppComponent implements OnInit {
  appLoader = true;
  locale = 'en-US'

  constructor(private appService: AppService, activatedRoute: ActivatedRoute, translateService: TranslateService) {
    activatedRoute.queryParams.subscribe((queryParams) => {
      this.appService.addLoadComponent('translate');
      this.locale = queryParams.locale;
      translateService.use(this.locale).subscribe(() => {
        this.appService.removeLoadedComponent('translate');
      });
    })

    appService.getLoader().subscribe((value => {
      this.appLoader = value;
    }))
  }

  ngOnInit(): void {
    this.appService.addLoadComponent('firebase-auth')
    firebase.initializeApp(environment.firebaseConfig);
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.appService.removeLoadedComponent('firebase-auth')
      } else {
        firebase.auth().signInAnonymously().then();
      }
    })
  }
}
