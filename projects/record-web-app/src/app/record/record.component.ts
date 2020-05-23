import {Component, OnInit} from '@angular/core';
import {environment} from "../../environment";

@Component({
  selector: 'pc-record',
  templateUrl: './record.component.html',
  styleUrls: ['./record.component.less']
})
export class RecordComponent implements OnInit {
  listItems = environment.listItems;

  constructor() {
  }

  ngOnInit(): void {
  }

}
