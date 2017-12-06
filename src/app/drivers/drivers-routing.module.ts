import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DriversProfileComponent } from './drivers-profile/drivers-profile.component';

const routes: Routes = [
  { path: '', redirectTo: 'driversForm', pathMatch: 'full' },
  { path: 'driversForm', component: DriversProfileComponent, pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DriversRoutingModule { }
