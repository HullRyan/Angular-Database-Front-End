/* eslint-disable @typescript-eslint/naming-convention */
import { Component, OnInit } from '@angular/core';

import { Cares } from '../models/cares';
import { Drug } from '../models/drug';
import { HealthRecord } from '../models/health-record';
import { Instruction } from '../models/instruction';
import { Invoice } from '../models/invoice';
import { Nurse } from '../models/nurse';
import { Patient } from '../models/patient';
import { Payment } from '../models/payment';
import { Physician } from '../models/physician';
import { Room } from '../models/room';
import { Stays } from '../models/stays';

import { DataService } from '../services/data.service';


@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  cares: Cares = {
    patient_id: 0,
    care_desc: '',
  };
  drug: Drug = {

  };
  healthRecord: HealthRecord = {

  };
  instruction: Instruction = {

  };
  invoice: Invoice = {

  };
  nurse: Nurse = {

  };
  patient: Patient = {

  };
  payment: Payment = {

  };
  physician: Physician = {

  };
  room: Room = {

  };
  stays: Stays = {

  };

  constructor(private dataService: DataService) { }

  saveCares(): void {
    const data = {
      patient_id: this.cares.patient_id,
      care_desc: this.cares.care_desc,
      care_date: this.cares.care_date
    };
    this.dataService.createCares(data).subscribe(
      response => {
        console.log(response);
      },
      err => {
        console.log(err);
      }
    );
  }

  newCare(): void {
    this.cares = {
      patient_id: 0,
      care_desc: '',
      care_date: new Date()
    };
  }

}
