import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BoatLicenseRoutingModule } from './boat-license-routing.module';
import { BoatLicenseApplicationComponent } from './boat-license-application/boat-license-application.component';
import { BoatLicenseSubmitComponent } from './boat-license-submit/boat-license-submit.component';
import { BoatLicenseService } from './boat-license.service';

@NgModule({
  imports: [
    CommonModule,
    BoatLicenseRoutingModule
  ],
  declarations: [BoatLicenseApplicationComponent, BoatLicenseSubmitComponent],
  providers: [BoatLicenseService]
})
export class BoatLicenseModule { }
