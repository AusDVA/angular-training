import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DriversRoutingModule } from './drivers-routing.module';
import { DriversService } from './drivers.service';

@NgModule({
  imports: [
    CommonModule,
    DriversRoutingModule
  ],
  declarations: [],
  providers: [DriversService]
})
export class DriversModule { }
