import {Component, OnInit, ViewChild} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {MatTabGroup} from "@angular/material/tabs";
import {Router} from "@angular/router";

import * as firebase from 'firebase/app';
import 'firebase/firestore';

import {environment} from "../../environment";

@Component({
  selector: 'pc-metadata',
  templateUrl: './metadata.component.html',
  styleUrls: ['./metadata.component.less']
})

export class MetadataComponent implements OnInit {
  enableMetadata: boolean = false;

  formControls = {
    age: new FormControl(null, [Validators.required, Validators.min(1), Validators.max(140)]),
    gender: new FormControl(null, [Validators.required]),
    englishProficient: new FormControl('y', [Validators.required]),
    returningUser: new FormControl('n'),
    country: new FormControl(null, [Validators.required]),
    state: new FormControl({value: null, disabled: true}, [Validators.required]),
    locality: new FormControl(null),
    currentStatus: new FormControl(null, [Validators.required]),
    conditionStatus: new FormControl(null, [Validators.required]),
    cold: new FormControl(false),
    cough: new FormControl(false),
    fever: new FormControl(false),
    pneumonia: new FormControl(false),
    loss_of_smell: new FormControl(false),
    smoker: new FormControl(false),
    asthma: new FormControl(false),
    cld: new FormControl(false),
    ht: new FormControl(false),
    ihd: new FormControl(false),
    diabetes: new FormControl(false),
    none: new FormControl(false)
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
    }),
    healthData: new FormGroup({
      currentStatus: this.formControls.currentStatus,
      conditionStatus: this.formControls.conditionStatus,
      cold: this.formControls.cold,
      cough: this.formControls.cough,
      fever: this.formControls.fever,
      pneumonia: this.formControls.pneumonia,
      loss_of_smell: this.formControls.loss_of_smell,
      smoker: this.formControls.smoker,
      asthma: this.formControls.asthma,
      cld: this.formControls.cld,
      ht: this.formControls.ht,
      ihd: this.formControls.ihd,
      diabetes: this.formControls.diabetes
    })
  }

  listItems = environment.listItems
  selectedStateList = []

  @ViewChild('tabGroup', {static: false}) tabs: MatTabGroup;

  constructor(private router: Router) {
  }

  ngOnInit(): void {

  }

  getStates() {
    this.selectedStateList = this.listItems.stateDict[
      this.formControls.country.value
        .toLowerCase()
        .replace(/ /g, '_')
        .replace('(', '')
        .replace(')', '')
      ];
    if (this.selectedStateList.length === 0) {
      this.formControls.state.disable();
    } else {
      this.formControls.state.enable();
    }
  };

  nextTab(selectedIndex: number) {
    this.tabs.selectedIndex = selectedIndex + 1
  }

  previousTab(selectedIndex: number) {
    this.tabs.selectedIndex = selectedIndex - 1
  }

  resetStatus() {
    if (this.formControls.none.value) {
      this.listItems.conditionList.forEach((item) => {
        this.formControls[item].disable();
        this.formControls[item].setValue(false);
      })
      this.formControls.conditionStatus.setValue(true)
    } else {
      this.listItems.conditionList.forEach((item) => {
        this.formControls[item].enable();
      })
      this.formControls.conditionStatus.setValue(null)
    }
  }

  setHealthConditionsValidity() {
    let currentConditionStatus = false;
    this.formControls.conditionStatus.setValue(null);
    this.listItems.conditionList.forEach((item) => {
      currentConditionStatus = currentConditionStatus || this.formControls[item].value
    })
    currentConditionStatus = currentConditionStatus || this.formControls.none.value
    if (currentConditionStatus) {
      this.formControls.conditionStatus.setValue(true)
    }
  }

  signOut() {
    firebase.auth().signOut().then();
  }

  submitMetadata() {
    this.router.navigate(['record']).then();
  }
}
