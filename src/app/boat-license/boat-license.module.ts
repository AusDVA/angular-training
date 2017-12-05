import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BoatLicenseRoutingModule } from './boat-license-routing.module';
import { BoatLicenseApplicationComponent } from './boat-license-application/boat-license-application.component';
import { BoatLicenseSubmitComponent } from './boat-license-submit/boat-license-submit.component';

@NgModule({
  imports: [
    CommonModule,
    BoatLicenseRoutingModule
  ],
  declarations: [BoatLicenseApplicationComponent, BoatLicenseSubmitComponent]
})
export class BoatLicenseModule { }
