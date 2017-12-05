import { StoreModule } from '@ngrx/store';
import { driversReducer } from './+state/drivers.reducers';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DriversRoutingModule } from './drivers-routing.module';
import { DriversProfileComponent } from './drivers-profile/drivers-profile.component';

@NgModule({
  imports: [
    CommonModule,
    DriversRoutingModule,
    StoreModule.forRoot({drivers: driversReducer})

  ],
  declarations: [DriversProfileComponent]
})
export class DriversModule { }
