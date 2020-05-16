import {Component, Input} from '@angular/core';

import {environment} from "../../environment";

@Component({
  selector: 'pc-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.less']
})

export class NavbarComponent { name = environment.title; @Input('tabs') tabs; }
