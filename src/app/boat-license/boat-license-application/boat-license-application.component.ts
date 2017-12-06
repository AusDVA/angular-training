import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'ngat-boat-license-application',
  templateUrl: './boat-license-application.component.html',
  styleUrls: ['./boat-license-application.component.scss']
})
export class BoatLicenseApplicationComponent implements OnInit {
  boatApplicationForm: FormGroup;

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
    
  ) { }

  ngOnInit() {
    this.createForm();
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
}