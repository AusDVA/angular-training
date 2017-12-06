import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DriversProfileComponent } from './drivers-profile/drivers-profile.component';
import { SubmitSuccessComponent } from './submit-success/submit-success.component';

const routes: Routes = [
  { path: '', redirectTo: 'driversForm', pathMatch: 'full' },
  { path: 'driversForm', component: DriversProfileComponent, pathMatch: 'full' },
  { path: 'driversSuccess', component: SubmitSuccessComponent, pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DriversRoutingModule { }
