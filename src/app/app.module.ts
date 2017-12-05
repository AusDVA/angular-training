import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { MaterialModule } from './lib/material/material.module';
import { DriverProfileComponent } from './driver/driver-profile/driver-profile.component';


@NgModule({
  declarations: [
    AppComponent,
    DriverProfileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
