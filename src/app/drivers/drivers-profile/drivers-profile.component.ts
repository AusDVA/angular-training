import { DriversLicenceRegistration } from '../models/drivers';
import { Store } from '@ngrx/store';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import * as DriversActions from '../+state/drivers.actions';

@Component({
  selector: 'ngat-drivers-profile',
  templateUrl: './drivers-profile.component.html',
  styleUrls: ['./drivers-profile.component.scss']
})
export class DriversProfileComponent implements OnInit {
  driverLicenceForm: FormGroup;
  saving = false;


  constructor(
    private formBuilder: FormBuilder,
    private store: Store<State>
  ) { }

  ngOnInit() {
    this.createForm();
  }

  createForm() {
    this.driverLicenceForm = this.formBuilder.group({
      FirstName: [null, Validators.required],
      LastName: [null, Validators.required],
      Gender: [null],
      DOB: [null, Validators.required],
      TypeOfLicence: [null, Validators.required],
      Address: [null, Validators.required],
      MedicalConditions: [null, Validators.required],
      LengthOfLicence: [null, Validators.required],
      DrivingOffences: [null, Validators.required]
    });
  }

  onSubmit() {
    this.saving = true;
    // uncomment once implemeneted/fixed
    // const newDriversLicenceRego = this.prepareDriversLicenceRego();
    // this.store.dispatch(new DriversActions.SubmitAction(newDriversLicenceRego));
  }
}
