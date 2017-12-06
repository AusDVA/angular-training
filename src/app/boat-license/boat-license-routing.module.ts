import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BoatLicenseApplicationComponent } from './boat-license-application/boat-license-application.component';
import { BoatLicenseSubmitComponent } from './boat-license-submit/boat-license-submit.component';


const routes: Routes = [
  { path: '', redirectTo: 'boatLicenseForm', pathMatch: 'full' },
  { path: 'boatLicenseForm', component: BoatLicenseApplicationComponent, pathMatch: 'full' },
  { path: 'boatLicenseSubmit/:id', component: BoatLicenseSubmitComponent, pathMatch: 'full' }
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BoatLicenseRoutingModule { }
