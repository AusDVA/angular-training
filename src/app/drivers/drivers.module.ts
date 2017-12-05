import { StoreModule } from '@ngrx/store';
import { driversReducer } from './+state/drivers.reducers';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { DriversRoutingModule } from './drivers-routing.module';
import { DriversProfileComponent } from './drivers-profile/drivers-profile.component';
import { DriversService } from './drivers.service';
import { MaterialModule } from '../lib/material/material.module';
@NgModule({
  imports: [
    CommonModule,
    DriversRoutingModule,
  ReactiveFormsModule,
  MaterialModule,
    StoreModule.forRoot({drivers: driversReducer})

  ],
  declarations: [DriversProfileComponent],
  exports: [DriversProfileComponent],
  providers: [DriversService]})
export class DriversModule { }