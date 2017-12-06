import { Store } from '@ngrx/store';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'ngat-drivers-profile',
  templateUrl: './drivers-profile.component.html',
  styleUrls: ['./drivers-profile.component.scss']
})
export class DriversProfileComponent implements OnInit {

  userForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
  ) { }

  ngOnInit() {

    this.createForm();
  }


  createForm() {
    this.userForm = this.formBuilder.group({
      FirstName: [null, Validators.required],
      LastName: [null, Validators.required],
      Gender: [null],
      DOB: [null, Validators.required],
      TypeOfLicence: [null, Validators.required],
      Address: [null, Validators.required],
      MedicalConditions: [null, Validators.required],
      LengthOfLicence: [null, Validators.required],
      DrivingOffences: [null, Validators.required],

    });
  }
}
