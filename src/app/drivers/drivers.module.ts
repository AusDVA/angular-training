import { EffectsModule } from '@ngrx/effects';
import { DriversEffects } from './+state/drivers.effects';
import { StoreModule } from '@ngrx/store';
import { driversReducer } from './+state/drivers.reducers';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { DriversRoutingModule } from './drivers-routing.module';
import { DriversProfileComponent } from './drivers-profile/drivers-profile.component';
import { DriversService } from './drivers.service';
import { MaterialModule } from '../lib/material/material.module';
import { SubmitSuccessComponent } from './submit-success/submit-success.component';

@NgModule({
  imports: [
    CommonModule,
    DriversRoutingModule,
    ReactiveFormsModule,
    MaterialModule,
    EffectsModule.forFeature([DriversEffects]),
    StoreModule.forFeature('drivers', {driversLicenceRegistrationState: driversReducer})

  ],
  declarations: [DriversProfileComponent, SubmitSuccessComponent],
  exports: [DriversProfileComponent, SubmitSuccessComponent],
  providers: [DriversService]})
export class DriversModule { }
