import { DriversLicenceRegistration } from '../models/driversLicenceRegistration';
import { Store } from '@ngrx/store';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import * as DriversActions from '../+state/drivers.actions';
import * as DriversLicenceRegoSelectors from '../+state/drivers.selectors';
import { State } from '../../state';

@Component({
  selector: 'ngat-drivers-profile',
  templateUrl: './drivers-profile.component.html',
  styleUrls: ['./drivers-profile.component.scss']
})
export class DriversProfileComponent implements OnInit {
  driverLicenceForm: FormGroup;
  error$: Observable<string>;

  constructor(
    private formBuilder: FormBuilder,
    private store: Store<State>
  ) { }

  ngOnInit() {
    this.createForm();
    this.error$ = this.store.select(DriversLicenceRegoSelectors.selectError);
  }

  createForm() {  
    this.driverLicenceForm = this.formBuilder.group({
      firstName: [null, Validators.required],
      lastName: [null, Validators.required],
      gender: [null],
      dateOfBirth: [null, Validators.required],
      type: [null, Validators.required],
      address: [null, Validators.required],
      medicalConditions: false,
      lengthOfLicenceYears: [null, Validators.required],
      drivingOffences: false
    });
  }

  onSubmit() {
    // uncomment once implemeneted/fixed
    console.log("calling submit");

    const newDriversLicenceRego = this.prepareDriversLicenceRego();
    this.store.dispatch(new DriversActions.SubmitAction(newDriversLicenceRego));
  }

  prepareDriversLicenceRego(): DriversLicenceRegistration {
    const driverLicenceModel = this.driverLicenceForm.value;

    const saveDriversLicence: DriversLicenceRegistration = {
      firstName: driverLicenceModel.firstName,
      lastName: driverLicenceModel.lastName,
      gender: driverLicenceModel.gender,
      dateOfBirth: driverLicenceModel.dateOfBirth,
      type: driverLicenceModel.type,
      address: driverLicenceModel.address,
      medicalConditions: driverLicenceModel.medicalConditions,
      lengthOfLicenceYears: driverLicenceModel.lengthOfLicenceYears,
      drivingOffences: driverLicenceModel.drivingOffences
    };
    return saveDriversLicence;
  }

}
