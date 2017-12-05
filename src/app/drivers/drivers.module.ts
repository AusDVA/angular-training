import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DriversRoutingModule } from './drivers-routing.module';
import { DriversProfileComponent } from './drivers-profile/drivers-profile.component';
@NgModule({
  imports: [
    CommonModule,
    DriversRoutingModule
  ],
  declarations: [DriversProfileComponent],
  providers: [DriversService]})
export class DriversModule { }
