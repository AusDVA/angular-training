import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BoatLicenseRoutingModule } from './boat-license-routing.module';
import { BoatLicenseApplicationComponent } from './boat-license-application/boat-license-application.component';

@NgModule({
  imports: [
    CommonModule,
    BoatLicenseRoutingModule
  ],
  declarations: [BoatLicenseApplicationComponent]
})
export class BoatLicenseModule { }
