import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Store} from '@ngrx/store';
import { State } from '../models/state';
import { Router, ActivatedRoute } from '@angular/router';
import { BoatLicenseApplication } from '../models/boat-license-application.model';
import * as BoatLicenseActions from '../+state/boat-license.actions';
import * as BoatLicenseSelectors from '../+state/boat-license.selectors';
import { Observable } from 'rxjs/Observable';


@Component({
  selector: 'ngat-boat-license-application',
  templateUrl: './boat-license-application.component.html',
  styleUrls: ['./boat-license-application.component.scss']
})
export class BoatLicenseApplicationComponent implements OnInit {
  boatApplicationForm: FormGroup;
  id: number;
  error$: Observable<string>;  

  genders = [
    {value: 'male', viewValue: 'Male'},
    {value: 'female', viewValue: 'Female'},
    {value: 'other', viewValue: 'Other'}
  ];

  licenseTypes = [
    {value: 'small', viewValue: 'Small'},
    {value: 'medium', viewValue: 'Medium'},
    {value: 'large', viewValue: 'Large'}
  ];

  expiryDates = [
    {value: '1', viewValue: '1 Year'},
    {value: '2', viewValue: '2 Years'},
    {value: '3', viewValue: '3 Years'}
  ];
  

  constructor(
    private formBuilder: FormBuilder,
    private store: Store<State>,
    private router: Router,
    private activatedRoute: ActivatedRoute 
    
  ) { }

  ngOnInit() {
    this.createForm();
    // this.store.select(BoatLicenseSelectors.selectBoatLicenseState)
    // .subscribe((boatLicenseApplication: any) => {
    //   if (boatLicenseApplication) {
    //     if (boatLicenseApplication.applicationID && boatLicenseApplication.applicationID !== this.applicationID) {
    //       this.router.navigate(['boatlicense/boatLicenseSubmit', boatLicenseApplication.applicationID]);
    //     }
    //     boatLicenseApplication.createUser = false;
    //     this.boatApplicationForm.patchValue(boatLicenseApplication);
    //     this.applicationID = boatLicenseApplication.applicationID;
    //   }
    // });

  // this.store.select(BoatLicenseSelectors.)
  //  .subscribe(loading => this.loading = loading);

  // this.store.select(UserSelectors.selectSaving)
  //  .subscribe(saving => this.saving = saving);

  // this.error$ = this.store.select(BoatLicenseSelectors.);
}

  createForm() {
    this.boatApplicationForm = this.formBuilder.group({

      firstName: [null, Validators.required],
      lastName: [null, Validators.required],
      dateOfBirth: [null, Validators.required],
      gender: [null, Validators.required],
      address: [null, Validators.required],
      medicalConditions: [null],
      typeOfLicense: [null, Validators.required],
      expiry: [null, Validators.required]
     
    });
  }

  prepareApplication(): BoatLicenseApplication {
    const boatLicenseApplicationModel = this.boatApplicationForm.value;

    const saveBoatLicenseApplication: BoatLicenseApplication = {
      id: boatLicenseApplicationModel.createApplication ? 0 : boatLicenseApplicationModel.id,      
      firstName: boatLicenseApplicationModel.firstname,
      lastName: boatLicenseApplicationModel.lastName,
      dateOfBirth: boatLicenseApplicationModel.ateOfBirth,
      gender: boatLicenseApplicationModel.gender,
      address: boatLicenseApplicationModel.address,
      medicalConditions: boatLicenseApplicationModel.medicalConditions,
      type: boatLicenseApplicationModel.typeOfLicense,
      expiry: boatLicenseApplicationModel.expiry,
      status: 'Submitted'

    };
    return saveBoatLicenseApplication;
  }

  onSubmit() {
    const boatLicenseApplication = this.prepareApplication();
    this.store.dispatch(new BoatLicenseActions.SaveAction(boatLicenseApplication));
    this.router.navigate(['boatlicense/boatLicenseSubmit', boatLicenseApplication.id]);
  }
}