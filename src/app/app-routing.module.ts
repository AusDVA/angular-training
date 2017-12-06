import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '',  redirectTo:  'home',  pathMatch:  'full' },
  { path: 'home', loadChildren: './home/home.module#HomeModule'},
  { path: 'drivers', loadChildren: './drivers/drivers.module#DriversModule'},
  { path: 'boatlicense', loadChildren: './boat-license/boat-license.module#BoatLicenseModule'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
