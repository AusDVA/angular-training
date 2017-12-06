import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'ngat-boat-license-application',
  templateUrl: './boat-license-application.component.html',
  styleUrls: ['./boat-license-application.component.scss']
})
export class BoatLicenseApplicationComponent implements OnInit {
  boatApplicationForm: FormGroup;
  

  constructor(
    private formBuilder: FormBuilder,
    
  ) { }

  ngOnInit() {
    this.createForm();
  }

  createForm() {
    this.boatApplicationForm = this.formBuilder.group({

      firstName: [null],
      lastName: [null],
      dateOfBirth: [null],
      gender: [null],
      address: [null],
      medicalConditions: [null],
      typeOfLicense: [null],
      expiry: [null]
     
    });
  }

}
