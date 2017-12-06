import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { State } from '../../state';
import { Router } from '@angular/router';
import { DriversLicenceRegistration } from '../models/driversLicenceRegistration';
import * as DriversSelectors from '../+state/drivers.selectors';
import { LoadDriverViewDataAction } from '../+state/drivers.actions';

@Component({
  selector: 'ngat-submit-success',
  templateUrl: './submit-success.component.html',
  styleUrls: ['./submit-success.component.scss']
})
export class SubmitSuccessComponent implements OnInit {

  dlr: DriversLicenceRegistration;

  constructor(
    private store: Store<State>,
    private router: Router,
  ) { }

  ngOnInit() {
    this.store.select(DriversSelectors.selectDriversLicence).subscribe((driversLicenceRegistration: DriversLicenceRegistration) => {
      this.dlr = driversLicenceRegistration;
    });
  }

  onBackClick() {
    this.router.navigate(['/home']);
  //  const newd: DriversLicenceRegistration = {
  //   FirstName: 'bob',
  //   LastName: 'smith',
  //   Gender: null,
  //   DOB: new Date(),
  //   TypeOfLicence: 'yes',
  //   Address: 'here',
  //   MedicalConditions: false,
  //   LengthOfLicence: '4',
  //   DrivingOffences: true
  // };


  //  this.store.dispatch(new LoadDriverViewDataAction(newd));
  }
}
