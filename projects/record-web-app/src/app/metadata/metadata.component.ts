import {Component, OnInit, ViewChild} from '@angular/core';
import {MatTabGroup} from "@angular/material/tabs";
import {FormControl, FormGroup, Validators} from "@angular/forms";

import {environment} from "../../environment";

@Component({
  selector: 'pc-metadata',
  templateUrl: './metadata.component.html',
  styleUrls: ['./metadata.component.less']
})

export class MetadataComponent implements OnInit {
  enableMetadata: boolean = false;

  formControls = {
    age: new FormControl(null, [Validators.required, Validators.min(0), Validators.max(140)]),
    gender: new FormControl(null, [Validators.required]),
    englishProficient: new FormControl('y', [Validators.required]),
    returningUser: new FormControl('n'),
    country: new FormControl(null, [Validators.required]),
    state: new FormControl(null, [Validators.required]),
    locality: new FormControl(null ),
  }

  formGroups = {
    metadata: new FormGroup({
      age: this.formControls.age,
      gender: this.formControls.gender,
      englishProficient: this.formControls.englishProficient,
      returningUser: this.formControls.returningUser,
      country: this.formControls.country,
      state: this.formControls.country,
      locality: this.formControls.country,
    })
  }

  listItems = environment.listItems
  selectedStateList = []

  @ViewChild('tabGroup', {static: false}) tabs: MatTabGroup;

  constructor() {
  }

  ngOnInit(): void {

  }

  getStates() {
    this.selectedStateList = this.listItems.stateDict[
      this.formControls.country.value
        .toLowerCase()
        .replace(/ /g, '_')
        .replace('(', '')
        .replace(')','')
      ];
  };

  nextTab(selectedIndex: number) {
    this.tabs.selectedIndex = selectedIndex + 1
  }

  previousTab(selectedIndex: number) {
    this.tabs.selectedIndex = selectedIndex - 1
  }
}
