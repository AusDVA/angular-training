import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BoatLicenseApplicationComponent } from './boat-license-application/boat-license-application.component';

const routes: Routes = [
  { path: '', redirectTo: 'boatLicenseForm', pathMatch: 'full' },
  { path: 'boatLicenseForm', component: BoatLicenseApplicationComponent, pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BoatLicenseRoutingModule { }
