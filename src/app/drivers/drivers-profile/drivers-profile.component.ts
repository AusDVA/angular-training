import { DriversLicenceRegistration } from '../models/drivers';
import { Store } from '@ngrx/store';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
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
      FirstName: [null, Validators.required],
      LastName: [null, Validators.required],
      Gender: [null],
      DOB: [null, Validators.required],
      TypeOfLicence: [null, Validators.required],
      Address: [null, Validators.required],
      MedicalConditions: false,
      LengthOfLicence: [null, Validators.required],
      DrivingOffences: false
    });
  }

  onSubmit() {
    // uncomment once implemeneted/fixed
    const newDriversLicenceRego = this.prepareDriversLicenceRego();
    this.store.dispatch(new DriversActions.SubmitAction(newDriversLicenceRego));
  }

  prepareDriversLicenceRego(): DriversLicenceRegistration {
    const driverLicenceModel = this.driverLicenceForm.value;

    const saveDriversLicence: DriversLicenceRegistration = {
      FirstName: driverLicenceModel.FirstName,
      LastName: driverLicenceModel.LastName,
      Gender: driverLicenceModel.Gender,
      DOB: driverLicenceModel.DOB,
      TypeOfLicence: driverLicenceModel.TypeOfLicence,
      Address: driverLicenceModel.Address,
      MedicalConditions: driverLicenceModel.MedicalConditions,
      LengthOfLicence: driverLicenceModel.LengthOfLicence,
      DrivingOffences: driverLicenceModel.DrivingOffences
    };
    return saveDriversLicence;
  }

}
